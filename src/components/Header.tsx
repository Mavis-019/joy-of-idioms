'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

/**
 * Header 组件 — 顶部 LOGO 导航栏
 * 功能：品牌 LOGO、首页/个人中心导航、中英文语言切换
 */
export default function Header() {
  const { t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-rice/95 backdrop-blur-md border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 品牌 LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-rice font-serif font-black text-lg">悦</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-black text-charcoal text-base">
              悦读成语
            </span>
            <span className="font-sans font-light text-ink-light text-[10px] tracking-widest uppercase">
              JOY OF IDIOMS
            </span>
          </div>
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-sans text-sm font-semibold text-charcoal hover:text-primary transition-colors"
          >
            {t.header.homeTab}
          </Link>
          <Link
            href="/dashboard"
            className="font-sans text-sm font-semibold text-charcoal hover:text-primary transition-colors"
          >
            {t.header.profileTab}
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-rice transition-all font-sans text-xs font-bold tracking-wide"
          >
            {t.header.langSwitch}
          </button>
        </nav>

        {/* 移动端汉堡菜单 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* 移动端展开菜单 */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border-warm bg-rice px-6 py-4 flex flex-col gap-4 animate-fade-in">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-sm font-semibold text-charcoal hover:text-primary"
          >
            {t.header.homeTab}
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-sm font-semibold text-charcoal hover:text-primary"
          >
            {t.header.profileTab}
          </Link>
          <button
            onClick={() => { toggleLanguage(); setMobileOpen(false); }}
            className="px-4 py-2 rounded-full border border-primary text-primary font-sans text-xs font-bold tracking-wide w-fit"
          >
            {t.header.langSwitch}
          </button>
        </nav>
      )}
    </header>
  );
}
