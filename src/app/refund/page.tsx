import RefundPolicyView from '@/components/RefundPolicyView';

export const metadata = {
  title: 'Refund Policy',
  description:
    'Refund Policy for Joy of Idioms pre-recorded digital video courses. Full refund within 7 days if no content has been watched; no refund once viewed.',
};

/**
 * Refund Policy — 退款政策页面
 * 公开可访问，无需登录。独立 URL，页脚全局链接。
 */
export default function RefundPolicyPage() {
  return <RefundPolicyView />;
}
