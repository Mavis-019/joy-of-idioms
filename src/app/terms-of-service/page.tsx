import TermsOfServiceView from '@/components/TermsOfServiceView';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Joy of Idioms digital course services. Payment, refund policy, user obligations, and service scope.',
};

/**
 * Terms of Service — 服务条款页面
 * 公开可访问，无需登录。中英双语，跟随全站语言切换。
 */
export default function TermsOfServicePage() {
  return <TermsOfServiceView />;
}
