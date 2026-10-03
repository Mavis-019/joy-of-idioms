import PrivacyPolicyView from '@/components/PrivacyPolicyView';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Joy of Idioms digital course website. How we collect, use, and protect your personal information.',
};

/**
 * Privacy Policy — 隐私政策页面
 * 公开可访问，无需登录。中英双语，跟随全站语言切换。
 */
export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
