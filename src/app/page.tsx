import Header from '@/components/Header';
import HomeView from '@/components/HomeView';

/**
 * 首页营销落地页
 * 渲染 Header 导航栏 + HomeView 完整首页组件
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <HomeView />
    </>
  );
}
