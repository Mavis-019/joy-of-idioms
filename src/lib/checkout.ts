/**
 * Lemon Squeezy 官方托管结账配置。
 * 全站所有支付入口（首页解锁按钮 / 个人中心解锁横幅 / 试看视频下方按钮）
 * 统一跳转 LS 托管结账页，信用卡 / PayPal 均在 LS 官方页面完成，
 * 本站不承载任何支付表单。
 *
 * 上线前请将下方链接替换为商店真实结账地址，
 * 或设置环境变量 NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL 覆盖。
 */
export const LEMON_SQUEEZY_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL ||
  'https://joyofidioms.lemonsqueezy.com/buy';

/** 跳转 Lemon Squeezy 托管结账页（自动预填邮箱） */
export function goToLemonSqueezyCheckout(email: string) {
  const url = `${LEMON_SQUEEZY_CHECKOUT_URL}?checkout[email]=${encodeURIComponent(email.trim())}`;
  window.location.href = url;
}
