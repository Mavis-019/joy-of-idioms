/**
 * Paddle Billing 结账配置（overlay 弹窗模式）。
 * 全站所有支付入口（首页解锁按钮 / 个人中心解锁横幅 / 试看视频下方按钮）
 * 统一唤起 Paddle 托管 overlay 结账弹窗，信用卡 / PayPal 均在 Paddle 弹窗内完成，
 * 本站不承载任何支付表单。
 */

/** Paddle v2 客户端 token：沙盒环境以 test_ 开头，正式环境以 live_ 开头 */
export const PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || '';

/**
 * ⚠️ priceId 预留变量：
 * - 沙盒阶段：NEXT_PUBLIC_PADDLE_PRODUCT_ID 配置为 Paddle 沙盒后台（Sandbox）的产品价格 ID（pri_ 开头）
 * - 上线时：替换为 Paddle 正式后台产品的 price ID
 */
export const PADDLE_PRICE_ID =
  process.env.NEXT_PUBLIC_PADDLE_PRODUCT_ID || 'pri_sandbox_REPLACE_WITH_SANDBOX_PRICE_ID';

/** Paddle v2 浏览器端全局对象（由 cdn.paddle.com 脚本注入 window.Paddle） */
export interface PaddleGlobal {
  Initialize: (options: { token: string }) => void;
  /** 沙盒环境设置（script 标签模式必须在 Initialize 之前调用） */
  Environment: {
    set: (environment: 'sandbox' | 'production') => void;
  };
  Checkout: {
    open: (options: {
      items: { priceId: string; quantity: number }[];
      customer?: { email: string };
      settings?: { theme?: 'light' | 'dark' };
    }) => void;
  };
}

declare global {
  interface Window {
    Paddle?: PaddleGlobal;
  }
}

/**
 * 依据客户端 token 前缀区分环境，沙盒 / 正式密钥不混用：
 * 沙盒 token 以 test_ 开头，正式 token 以 live_ 开头。
 */
export function getPaddleEnvironment(): 'sandbox' | 'production' {
  return PADDLE_CLIENT_TOKEN.startsWith('test_') ? 'sandbox' : 'production';
}

/** Paddle.js 是否已完成初始化（幂等标记） */
let paddleInitialized = false;

/** 初始化 Paddle.js（幂等；脚本加载完成后调用，唤起结账前兜底调用） */
export function initializePaddle(): boolean {
  if (typeof window === 'undefined' || !window.Paddle || !PADDLE_CLIENT_TOKEN) {
    console.warn('[paddle] init skipped:', {
      hasWindowPaddle: typeof window !== 'undefined' && !!window.Paddle,
      hasToken: !!PADDLE_CLIENT_TOKEN,
    });
    return false;
  }
  if (!paddleInitialized) {
    console.info('[paddle] calling Paddle.Initialize:', {
      env: getPaddleEnvironment(),
      tokenPrefix: PADDLE_CLIENT_TOKEN.slice(0, 5),
      priceId: PADDLE_PRICE_ID,
    });
    try {
      // ⚠️ Paddle v2 script 标签模式：沙盒环境必须先调用 Paddle.Environment.set('sandbox')
      // 再 Initialize（environment 参数仅适用于 @paddle/paddle-js npm 包装器，script 版会被忽略，
      // 导致 test_ token 在默认 production 环境下初始化失败、结账弹窗报 Something went wrong）
      if (getPaddleEnvironment() === 'sandbox') {
        window.Paddle.Environment.set('sandbox');
      }
      window.Paddle.Initialize({ token: PADDLE_CLIENT_TOKEN });
      paddleInitialized = true;
    } catch (err) {
      console.warn(
        '[paddle] Initialize 抛出异常:',
        err instanceof Error ? err.message : String(err),
      );
      return false;
    }
  }
  return true;
}

/**
 * 唤起 Paddle overlay 结账弹窗（自动预填客户邮箱）。
 * 不依赖脚本 onLoad 时序：必要时先等待 paddle.js 加载（最多 5 秒），
 * 再兜底执行初始化，最后唤起弹窗。
 */
export async function openPaddleCheckout(email: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  // 最多等待 5s 让 paddle.js 注入 window.Paddle（脚本异步加载兜底）
  for (let i = 0; i < 25 && !window.Paddle; i++) {
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  if (!window.Paddle) {
    console.warn('[paddle] paddle.js 未加载，无法唤起结账弹窗');
    return false;
  }
  if (!initializePaddle()) {
    console.warn('[paddle] 初始化失败（缺少 NEXT_PUBLIC_PADDLE_CLIENT_TOKEN）');
    return false;
  }
  window.Paddle.Checkout.open({
    items: [{ priceId: PADDLE_PRICE_ID, quantity: 1 }],
    customer: { email: email.trim() },
    settings: { theme: 'light' },
  });
  return true;
}
