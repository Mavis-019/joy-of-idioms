import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

/**
 * Supabase OAuth 登录回调路由
 * Google / 邮箱登录后，Supabase 重定向至此 URL 并携带 code 参数
 * 此处交换 code 获取 session，然后重定向至目标页面
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirect = requestUrl.searchParams.get('redirect') ?? '/dashboard';

  if (code) {
    const supabase = await createServerClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin + redirect);
}
