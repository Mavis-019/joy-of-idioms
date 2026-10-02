import { NextResponse } from 'next/server';
import { Environment, EventName, Paddle, Webhooks } from '@paddle/paddle-node-sdk';
import { createClient } from '@supabase/supabase-js';

/**
 * Paddle Webhook 接收端点（MoR 商家记录模式）
 *
 * 流程：
 *   1. 读取原始请求体与 Paddle-Signature 签名头
 *   2. 使用 @paddle/paddle-node-sdk 校验签名并解析事件（校验失败返回 401）
 *   3. 监听 transaction.completed 交易成功事件
 *   4. 通过 Paddle API 读取客户邮箱（webhook 载荷仅含 customerId）
 *   5. 写入 Supabase course_access 数据表（邮箱、订单ID、购买时间）
 *   6. 处理成功后返回 200（Paddle 收到 200 才停止重试）
 *
 * 环境变量（⚠️ 仅服务端使用，严禁暴露到前端）：
 *   - PADDLE_API_KEY             Paddle API 密钥（沙盒 pdl_sdbx_ 开头 / 正式 pdl_live_ 开头）
 *   - PADDLE_WEBHOOK_SECRET      Webhook 签名密钥
 *   - SUPABASE_SERVICE_ROLE_KEY  Supabase 服务端密钥（写库用）
 *
 * course_access 表结构参考（如尚未建表，请先在 Supabase SQL Editor 执行）：
 *   create table if not exists course_access (
 *     id           uuid primary key default gen_random_uuid(),
 *     email        text not null,
 *     order_id     text not null unique,
 *     purchased_at timestamptz not null default now(),
 *     created_at   timestamptz not null default now()
 *   );
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** 依据 API key 前缀区分沙盒/正式环境，密钥不混用 */
function getPaddleEnvironment(): Environment {
  return process.env.PADDLE_API_KEY?.startsWith('pdl_sdbx_')
    ? Environment.sandbox
    : Environment.production;
}

export async function POST(request: Request) {
  const apiKey = process.env.PADDLE_API_KEY;
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

  if (!apiKey || !webhookSecret) {
    console.error('[webhook] Missing PADDLE_API_KEY or PADDLE_WEBHOOK_SECRET');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  // 1. 读取原始请求体 + 签名头（必须是原始文本，任何转码都会导致校验失败）
  const rawBody = await request.text();
  const signatureHeader = request.headers.get('paddle-signature') || '';

  // 2. 签名校验 + 事件解析（unmarshal 校验失败会抛错）
  let event;
  try {
    event = await new Webhooks().unmarshal(rawBody, webhookSecret, signatureHeader);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // 3. 只处理交易成功事件，其余直接确认
  if (event.eventType !== EventName.TransactionCompleted) {
    return NextResponse.json({ received: true });
  }

  const transaction = event.data;
  const orderId = transaction.id;

  // 4. 通过 Paddle API 查询客户邮箱
  if (!transaction.customerId) {
    console.error('[webhook] transaction.completed without customerId:', orderId);
    return NextResponse.json({ received: true });
  }

  const paddle = new Paddle(apiKey, { environment: getPaddleEnvironment() });

  let email: string;
  try {
    const customer = await paddle.customers.get(transaction.customerId);
    email = customer.email;
  } catch (err) {
    console.error('[webhook] Failed to fetch customer:', transaction.customerId, err);
    return NextResponse.json({ error: 'Failed to fetch customer' }, { status: 500 });
  }

  // 5. 写入 Supabase course_access（service_role 权限；按 order_id 幂等去重，防重复通知）
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('[webhook] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { data: existing } = await supabase
    .from('course_access')
    .select('id')
    .eq('order_id', orderId)
    .maybeSingle();

  if (!existing) {
    const { error: insertError } = await supabase.from('course_access').insert({
      email,
      order_id: orderId,
      purchased_at: transaction.billedAt ?? transaction.updatedAt,
    });

    if (insertError) {
      console.error('[webhook] Supabase insert failed:', insertError);
      return NextResponse.json({ error: 'DB write failed' }, { status: 500 });
    }

    // TODO: 邮件发送触发点 —— 购买成功写入后，在此调用邮件服务（如 Resend）：
    //   a) 向客户邮箱发送收据确认 / 课程开通通知
    //   b) 向运营邮箱（support@joyofidioms.com）发送新订单通知
  }

  // 6. 处理成功，返回 200 给 Paddle
  return NextResponse.json({ received: true });
}
