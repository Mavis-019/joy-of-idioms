import PricingView from '@/components/PricingView';

export const metadata = {
  title: 'Pricing',
  description:
    'Pricing for Joy of Idioms — 100-lesson premium Chinese idiom video course. One-time purchase, secure checkout.',
};

/**
 * Pricing — 定价页面
 * 公开可访问，无需登录。独立 URL，页脚全局链接。
 * 支付按钮上方展示支付提供商验证期测试模式提示（Paddle KYC 合规要求）。
 */
export default function PricingPage() {
  return <PricingView />;
}
