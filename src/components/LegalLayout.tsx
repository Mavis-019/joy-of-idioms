import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';

/**
 * LegalLayout — 合规页面共享布局
 * 沿用网站国风样式：宣纸底纹 Hero + 朱砂红边框内容卡 + 中式角花装饰
 * 用于 Privacy Policy / Terms of Service / Refund Policy / About 等公开页面
 */
export default function LegalLayout({
  title,
  lastUpdated,
  badge = 'Legal',
  backLabel = 'Back to Home',
  children,
}: {
  title: string;
  lastUpdated?: string;
  badge?: string;
  backLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-rice min-h-screen">
      <Header />

      {/* ============================ Hero ============================ */}
      <section className="relative overflow-hidden rice-paper-pattern py-16 md:py-20">
        {/* 水墨装饰：右上墨晕 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-charcoal/[0.05] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        {/* 水墨装饰：左下朱砂晕 */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        {/* 底部过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-rice pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-6">
            {badge}
          </div>
          <h1 className="font-serif font-black text-charcoal text-4xl md:text-5xl mb-3 leading-tight">
            {title}
          </h1>
          {lastUpdated && (
            <p className="font-sans text-ink-light text-sm">{lastUpdated}</p>
          )}
        </div>
      </section>

      {/* ============================ Content ============================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-rice border-2 border-primary/60 rounded-[24px] p-8 md:p-12 premium-shadow overflow-hidden">
            {/* 中式角花装饰：左上 */}
            <svg className="absolute top-0 left-0 w-10 h-10 text-primary/30" viewBox="0 0 40 40" fill="none">
              <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="2.5" />
              <path d="M4 8 Q4 4, 8 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            {/* 中式角花装饰：右下 */}
            <svg className="absolute bottom-0 right-0 w-10 h-10 text-primary/30 rotate-180" viewBox="0 0 40 40" fill="none">
              <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="2.5" />
              <path d="M4 8 Q4 4, 8 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="relative">{children}</div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal hover:bg-ink-light text-rice font-sans font-bold text-sm transition-all hover:scale-[1.02]"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
