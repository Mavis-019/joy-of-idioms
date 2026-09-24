import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import MockDataPanel from '@/components/MockDataPanel';
import SiteFooter from '@/components/SiteFooter';

// ======================== 全局 Metadata ========================
export const metadata: Metadata = {
  title: {
    default: '悦读成语 | JOY OF IDIOMS — 海外华裔儿童成语美育启蒙',
    template: '%s | 悦读成语',
  },
  description:
    '专为海外 3-10 岁华裔儿童打造的系统化成语启蒙课。央视配音名师主讲，国风雅致原创艺术画面，100 节精品课，让东方智慧与高阶审美伴孩子成长。',
  keywords: [
    '成语', '中文启蒙', '海外华裔', '儿童中文', '国学', '美育',
    'Chinese idioms', 'overseas Chinese kids',
  ],
  authors: [{ name: 'Moyu Chengyu' }],
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: '悦读成语 | 专为海外华裔儿童打造的系统化成语启蒙课',
    description: '央视配音名师主讲 · 国风雅致原创艺术画面 · 100 节精品课。',
    images: [{ url: '/og-image.jpg', alt: '悦读成语' }],
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    siteName: '悦读成语 Moyu Chengyu',
  },
  twitter: {
    card: 'summary_large_image',
    title: '悦读成语 | 海外华裔儿童成语美育启蒙',
    description: '央视配音名师主讲 · 国风雅致原创艺术画面 · 100 节精品课。',
    images: ['/og-image.jpg'],
  },
};

// ======================== Viewport 主题色 ========================
export const viewport: Viewport = {
  themeColor: '#a93027',
};

// ======================== 根布局 ========================
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          {children}
          <MockDataPanel />
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
