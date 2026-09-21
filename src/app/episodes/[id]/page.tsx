import type { Metadata } from 'next';
import { IDIOMS_LIST, type IdiomItem } from '@/data/idiomsData';

interface EpisodePageProps {
  params: { id: string };
}

/**
 * 根据 slug 查找成语数据（SSR）
 * 后续可替换为 Supabase 查询
 */
async function fetchIdiom(slug: string): Promise<IdiomItem | null> {
  return IDIOMS_LIST.find((item) => item.id === slug) ?? null;
}

/**
 * 动态 generateMetadata — 每条成语独立 title / description / OG 社交预览图
 */
export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const idiom = await fetchIdiom(params.id);

  if (!idiom) {
    return {
      title: '成语故事未找到',
      description: '抱歉，您访问的成语故事不存在。',
    };
  }

  return {
    title: `${idiom.name} ${idiom.pinyin} | ${idiom.enName}`,
    description: `${idiom.name}：${idiom.zhDefinition}`,
    openGraph: {
      title: `${idiom.name} — 悦读成语`,
      description: `${idiom.pinyin} · ${idiom.enName}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${idiom.name} — 悦读成语`,
      description: `${idiom.pinyin} · ${idiom.enName}`,
    },
  };
}

/**
 * 成语详情 SSR 页面
 */
export default async function EpisodeDetailPage({ params }: EpisodePageProps) {
  const idiom = await fetchIdiom(params.id);

  if (!idiom) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6">
          <h1 className="font-serif text-3xl font-black text-charcoal">
            成语未找到
          </h1>
          <a
            href="/episodes"
            className="text-primary hover:underline font-sans text-sm"
          >
            ← 返回列表
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl px-6">
        <a
          href="/episodes"
          className="text-primary hover:underline font-sans text-sm"
        >
          ← 返回列表
        </a>
        <h1 className="font-serif text-5xl font-black text-charcoal">
          {idiom.name}
        </h1>
        <p className="font-serif text-lg text-ink-light">{idiom.pinyin}</p>
        <p className="font-sans text-sm text-ink-light">{idiom.enName}</p>
        <p className="font-serif text-base text-charcoal/80">
          {idiom.zhDefinition}
        </p>
        <p className="font-sans text-sm text-ink-light/70">
          {idiom.enDefinition}
        </p>
        <div className="border-t border-border-warm pt-6 mt-6">
          <p className="font-serif text-base text-charcoal/90 leading-relaxed text-left">
            {idiom.story}
          </p>
        </div>
      </div>
    </main>
  );
}
