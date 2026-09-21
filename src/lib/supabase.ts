import {
  createBrowserClient as supabaseBrowserClient,
  createServerClient as supabaseServerClient,
} from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * ========================
 * 悦读成语 — Supabase 客户端工具
 * 区分客户端组件 / 服务端组件 / middleware 三套实例，适配 SSR
 * ========================
 */

// ---- 1. 客户端组件用：Browser Client ----
// 使用方法：在 "use client" 组件中调用 createBrowserClient()
export function createBrowserClient() {
  return supabaseBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// ---- 2. 服务端组件 / Route Handler 用：Server Client ----
// 使用方法：在 RSC 或 Route Handler 中调用 await createServerClient()
export async function createServerClient() {
  const cookieStore = await cookies();
  return supabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options as never),
            );
          } catch {
            // 在 RSC 只读上下文中 set 可能失败，忽略即可
          }
        },
      },
    },
  );
}

// ---- 3. middleware 用：Middleware Client ----
// 使用方法：在 middleware.ts 中调用 createMiddlewareClient(request)
export function createMiddlewareClient(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const client = supabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options as never),
          );
        },
      },
    },
  );

  return { client, supabaseResponse };
}
