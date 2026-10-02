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
 * - 沙盒阶段：使用 Paddle 沙盒后台（Sandbox）创建的产品价格 ID（pri_ 开头）
 * - 上线时：替换为 Paddle 正式后台产品的 price ID
 */
export const PADDLE_PRICE_ID = 'pri_sandbox_REPLACE_WITH_SANDBOX_PRICE_ID';

/** Paddle v2 浏览器端全局对象（由 cdn.paddle.com 脚本注入 window.Paddle） */
export interface PaddleGlobal {
  Initialize: (options: {
    token: string;
    environment?: 'sandbox' | 'production';
  }) => void;
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

/** 初始化 Paddle.js（paddle.js 脚本加载完成后调用一次；token 未配置时静默跳过） */
export function initializePaddle(): boolean {
  if (typeof window === 'undefined' || !window.Paddle || !PADDLE_CLIENT_TOKEN) {
    return false;
  }
  window.Paddle.Initialize({
    token: PADDLE_CLIENT_TOKEN,
    environment: getPaddleEnvironment(),
  });
  return true;
}

/** 唤起 Paddle overlay 结账弹窗（自动预填客户邮箱） */
export function openPaddleCheckout(email: string): boolean {
  if (typeof window === 'undefined' || !window.Paddle) {
    return false;
  }
  window.Paddle.Checkout.open({
    items: [{ priceId: PADDLE_PRICE_ID, quantity: 1 }],
    customer: { email: email.trim() },
    settings: { theme: 'light' },
  });
  return true;
}
