import Link from 'next/link';
import { Mail } from 'lucide-react';

/**
 * SiteFooter — 全站合规页脚
 * 在 layout.tsx 全局挂载，每个页面底部永久显示
 * 链接：Home | About | Privacy Policy | Terms of Service | Refund Policy | Contact (业务邮箱)
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  const email = 'support@joyofidioms.com';
  const linkClass = 'text-rice/70 hover:text-rice transition-colors';
  const divider = <span className="text-rice/20">|</span>;

  return (
    <footer className="bg-charcoal text-rice py-5 border-t border-rice/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-sans text-rice/50 text-xs text-center sm:text-left">
          © {year} Diaspora Chinese Kids Aesthetic Inc. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          {divider}
          <Link href="/about" className={linkClass}>
            About
          </Link>
          {divider}
          <Link href="/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
          {divider}
          <Link href="/terms-of-service" className={linkClass}>
            Terms of Service
          </Link>
          {divider}
          <Link href="/refund-policy" className={linkClass}>
            Refund Policy
          </Link>
          {divider}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-rice/70 hover:text-rice transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact: {email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
