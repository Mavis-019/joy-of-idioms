import AboutView from '@/components/AboutView';

export const metadata = {
  title: 'About Us',
  description:
    'About Joy of Idioms — high-quality pre-recorded Chinese idiom video courses for learners worldwide.',
};

/**
 * About Us — 关于我们页面
 * 公开可访问，无需登录。独立 URL，页脚全局链接。
 */
export default function AboutPage() {
  return <AboutView />;
}
