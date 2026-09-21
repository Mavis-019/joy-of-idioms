import { type NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@/lib/supabase';

/**
 * 全局中间件 — Supabase 登录会话刷新 + 路由权限拦截
 *
 * 权限规则：
 *   游客：仅开放指定免费试听课程，无法访问 /dashboard
 *   付费会员：解锁全部课程、课后习题、绘本素材、字帖下载权限
 */
export async function middleware(request: NextRequest) {
  // 开发初始阶段：占位凭据时跳过 Supabase 调用
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (
    !supabaseUrl ||
    supabaseUrl.includes('placeholder') ||
    supabaseUrl.includes('your-project-ref')
  ) {
    return NextResponse.next({ request });
  }

  const { client: supabase, supabaseResponse } = createMiddlewareClient(request);

  // 刷新 Supabase 会话
  let user = null;
  try {
    const result = await supabase.auth.getUser();
    user = result.data.user;
  } catch {
    // 会话过期或无效，继续放行（游客模式）
  }

  // 受保护路由：未登录用户重定向至首页
  const protectedPaths = ['/dashboard'];
  const isProtected = protectedPaths.some((p) =>
    request.nextUrl.pathname.startsWith(p),
  );

  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

/**
 * matcher：排除静态资源、图片、OAuth 回调
 */
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.svg|og-image.jpg|images|api/auth/callback).*)',
  ],
};
