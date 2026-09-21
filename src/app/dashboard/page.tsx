import Header from '@/components/Header';
import DashboardView from '@/components/DashboardView';

/**
 * 付费用户个人中心
 * 渲染 Header 导航栏 + DashboardView 完整仪表盘组件
 * 权限：middleware 会拦截未登录用户重定向至首页
 */
export default function DashboardPage() {
  return (
    <>
      <Header />
      <DashboardView />
    </>
  );
}
