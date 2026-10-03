/**
 * DashboardView 组件 — 付费用户个人中心
 * 包含：顶部解锁横幅、欢迎卡片、学习导航、成语卡片网格
 * 免费试看视频弹窗（与首页试看专区完全一致）
 * 结账弹窗：统一唤起 Paddle 托管 overlay 结算
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  X,
  Check,
  Lock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { IDIOMS_LIST, THEME_NAMES, type IdiomItem } from '@/data/idiomsData';
import CheckoutModal from '@/components/CheckoutModal';

type IdiomStatus = 'ready' | 'completed';

const AVATAR_SRC = '/images/xiaomo_avatar_1781277430049.jpg';

const STORAGE_KEYS = {
  idiomStatus: 'moyu-idiom-status',
  premium: 'moyu-premium',
};

/** 前两课免费试看的成语 ID */
const FREE_PREVIEW_IDS = new Set(['mangrenmoxiang_item', 'shouzhudaitu_item']);

export default function DashboardView() {
  const { t, language } = useLanguage();
  const d = t.dashboard as Record<string, string>;
  const home = t.home;

  /* ---------------- State ---------------- */
  const [idiomStatus, setIdiomStatus] = useState<Record<string, IdiomStatus>>({});
  const [highlightedIdiomId, setHighlightedIdiomId] = useState<string | null>(null);
  /* 免费试看视频弹窗：v1=盲人摸象 v2=守株待兔（与首页试看专区完全一致） */
  const [showPreviewVideo, setShowPreviewVideo] = useState<'v1' | 'v2' | null>(null);
  const [showUnlockNotice, setShowUnlockNotice] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  /* ---------------- Hydrate from localStorage ---------------- */
  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem(STORAGE_KEYS.idiomStatus);
      if (savedStatus) setIdiomStatus(JSON.parse(savedStatus));

      const savedPremium = localStorage.getItem(STORAGE_KEYS.premium);
      if (savedPremium === 'true') setIsPremium(true);
    } catch {
      /* ignore storage parse errors */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  /* ---------------- Persist effects ---------------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.idiomStatus, JSON.stringify(idiomStatus));
  }, [idiomStatus]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.premium, String(isPremium));
  }, [isPremium]);

  /* ---------------- Computed: effective idiom status ---------------- */
  const effectiveStatus = useMemo<Record<string, IdiomStatus>>(() => {
    const result: Record<string, IdiomStatus> = {};
    for (const idiom of IDIOMS_LIST) {
      result[idiom.id] = idiomStatus[idiom.id] === 'completed' ? 'completed' : 'ready';
    }
    return result;
  }, [idiomStatus]);

  /* ---------------- Idiom card click ----------------
     免费试看集（盲人摸象、守株待兔）：打开与首页试看专区完全一致的视频弹窗
     其余付费集：不加载故事内容，直接弹出购买解锁提示 */
  const handleIdiomClick = (idiom: IdiomItem) => {
    setHighlightedIdiomId(null);
    if (idiom.id === 'mangrenmoxiang_item') {
      setShowPreviewVideo('v1');
    } else if (idiom.id === 'shouzhudaitu_item') {
      setShowPreviewVideo('v2');
    } else {
      setShowUnlockNotice(true);
    }
  };

  /* ---------------- Resume learning — 定位并高亮下一个未学成语 ---------------- */
  const resumeLearning = () => {
    const next = IDIOMS_LIST.find((i) => effectiveStatus[i.id] !== 'completed');
    if (!next) return;
    setHighlightedIdiomId(next.id);
    window.setTimeout(() => {
      document
        .getElementById(`idiom-card-${next.id}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  };

  /* ================================================================
     RENDER
  ================================================================ */
  return (
    <div className="min-h-screen bg-rice">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-8">
        {/* ============ 1. Top Billing Banner (non-premium only) ============ */}
        {!isPremium && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden premium-shadow bg-gradient-to-r from-primary to-tertiary text-rice px-6 md:px-8 py-5 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-1.5">
              <h2 className="font-serif text-lg md:text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {d.bannerUnlockTitle}
              </h2>
              <p className="font-sans text-xs md:text-sm text-rice/85 max-w-2xl">
                {d.bannerUnlockDesc}
              </p>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="shrink-0 bg-rice text-primary font-sans font-bold text-sm md:text-base px-6 py-3 rounded-full hover:bg-white transition-colors shadow-md"
            >
              {d.bannerUnlockBtn}
            </button>
          </motion.div>
        )}

        {/* ============ 2. Profile Welcome Card ============ */}
        <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
          <div className="flex items-center gap-4 md:gap-5 flex-1">
            <img
              src={AVATAR_SRC}
              alt={d.welcomeBack}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/30 shadow-sm"
            />
            <h1 className="font-serif text-xl md:text-2xl font-bold text-charcoal min-w-0">
              {d.welcomeBack}
            </h1>
          </div>

          <button
            onClick={resumeLearning}
            className="shrink-0 bg-primary text-rice font-sans font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors flex items-center gap-2 self-start md:self-center"
          >
            <Play className="w-4 h-4" />
            {d.btnResumeLearning}
          </button>
        </section>

        {/* ============ 3. 课程内容（学习导航 + 100 节课卡片网格） ============ */}
        <div className="animate-fade-in">
          <div className="space-y-6">
              {/* 学习导航（醒目标题 + 全局说明） */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-7 md:h-8 rounded-full bg-gradient-to-b from-primary to-tertiary" />
                  <h2 className="font-serif text-xl md:text-2xl font-black text-charcoal tracking-wide">
                    {d.studyNavTitle}
                  </h2>
                </div>
                <p className="font-sans text-xs md:text-sm text-ink-light leading-relaxed pl-[1.125rem]">
                  {d.studyNavDesc}
                </p>
              </div>

              {/* Theme sections */}
              {([1, 2, 3, 4] as const).map((themeId) => {
                const themeIdioms = IDIOMS_LIST.filter((i) => i.themeId === themeId);
                if (themeIdioms.length === 0) return null;
                const themeName = THEME_NAMES[themeId][language];
                const themeCompleted = themeIdioms.filter(
                  (i) => effectiveStatus[i.id] === 'completed'
                ).length;
                const themeUnlocked = themeCompleted > 0;
                return (
                  <div key={themeId} className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs font-bold text-rice bg-tertiary px-2.5 py-1 rounded-full">
                          {d.themeLabel.replace('{id}', String(themeId))}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-charcoal">{themeName}</h3>
                      </div>
                      {themeUnlocked && (
                        <span className="font-sans text-xs text-secondary flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          {d.themeUnlocked} · {themeCompleted}/{themeIdioms.length}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                      {themeIdioms.map((idiom) => {
                        const status = effectiveStatus[idiom.id];
                        const isCompleted = status === 'completed';
                        const isHighlighted = highlightedIdiomId === idiom.id;
                        const isFreePreview = FREE_PREVIEW_IDS.has(idiom.id);
                        return (
                          <button
                            key={idiom.id}
                            id={`idiom-card-${idiom.id}`}
                            onClick={() => handleIdiomClick(idiom)}
                            className={`relative text-left rounded-xl p-4 transition-all border ${
                              isHighlighted
                                ? 'bg-rice-darker border-primary ring-2 ring-primary ring-offset-2 ring-offset-rice premium-shadow animate-pulse'
                                : 'bg-rice-darker border-border-warm hover:border-primary hover:-translate-y-0.5 premium-shadow'
                            }`}
                          >
                            {/* 前两课免费试看标签 */}
                            {isFreePreview && (
                              <span className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-tertiary to-primary text-rice text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                                {d.freePreviewBadge}
                              </span>
                            )}
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="font-serif text-lg md:text-xl font-bold text-charcoal leading-tight">
                                {idiom.name}
                              </h4>
                            </div>
                            <p className="font-sans text-[10px] md:text-xs text-ink-light/70 mb-2">
                              {idiom.pinyin}
                            </p>
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`font-sans text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  isCompleted ? 'bg-secondary text-rice' : 'bg-primary text-rice'
                                }`}
                              >
                                {isCompleted ? d.statusCompleted : d.statusReady}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-ink-light/50" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* ============ 5. 免费试看视频弹窗（与首页试看专区完全一致） ============ */}
      {/* 弹窗 1：盲人摸象 */}
      <AnimatePresence>
        {showPreviewVideo === 'v1' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setShowPreviewVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-rice rounded-3xl max-w-3xl w-full overflow-hidden premium-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 顶栏 */}
              <div className="flex items-center justify-between px-6 py-4 bg-primary text-rice">
                <span className="font-serif font-bold text-sm">{home.m1Topbar}</span>
                <button onClick={() => setShowPreviewVideo(null)} className="p-1 hover:bg-rice/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 视频区 — Bunny Stream 真实视频嵌入 */}
              <div className="relative aspect-video bg-rice-darker">
                <iframe
                  src="https://player.mediadelivery.net/embed/753687/5d814539-1939-4308-b65e-1777370bf4ca?autoplay=true&loop=false&muted=false&preload=true&responsive=true&quality=1080p"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                  allowFullScreen
                  title={home.v1Title}
                />
              </div>

              {/* 内容区 */}
              <div className="p-6">
                <p className="font-serif text-secondary text-sm mb-2 tracking-wide">{home.m1Pinyin}</p>
                <h3 className="font-serif font-black text-charcoal text-2xl md:text-3xl mb-6 leading-tight">
                  {home.v1Title}
                </h3>
                <button
                  onClick={() => { setShowPreviewVideo(null); setShowCheckout(true); }}
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm transition-colors"
                >
                  {home.videoUnlockCta}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 弹窗 2：守株待兔 */}
      <AnimatePresence>
        {showPreviewVideo === 'v2' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setShowPreviewVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-rice rounded-3xl max-w-3xl w-full overflow-hidden green-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 顶栏 */}
              <div className="flex items-center justify-between px-6 py-4 bg-secondary text-rice">
                <span className="font-serif font-bold text-sm">{home.m2Topbar}</span>
                <button onClick={() => setShowPreviewVideo(null)} className="p-1 hover:bg-rice/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 视频区 — Bunny Stream 真实视频嵌入 */}
              <div className="relative aspect-video bg-rice-darker">
                <iframe
                  src="https://player.mediadelivery.net/embed/753687/51f24434-97b3-4541-b4c9-6a392bd3bdef?autoplay=true&loop=false&muted=false&preload=true&responsive=true&quality=1080p"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                  allowFullScreen
                  title={home.v2Title}
                />
              </div>

              {/* 内容区 */}
              <div className="p-6">
                <p className="font-serif text-secondary text-sm mb-2 tracking-wide">{home.m2Pinyin}</p>
                <h3 className="font-serif font-black text-charcoal text-2xl md:text-3xl mb-6 leading-tight">
                  {home.v2Title}
                </h3>
                <button
                  onClick={() => { setShowPreviewVideo(null); setShowCheckout(true); }}
                  className="w-full py-3 rounded-full bg-secondary hover:bg-secondary-hover text-rice font-sans font-bold text-sm transition-colors"
                >
                  {home.videoUnlockCta}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ 9. 付费内容解锁提示弹窗（点击非试看课程卡片时弹出） ============ */}
      <AnimatePresence>
        {showUnlockNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowUnlockNotice(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-rice rounded-2xl premium-shadow max-w-sm w-full p-6 md:p-8 text-center space-y-5"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <p className="font-serif text-base md:text-lg font-bold text-charcoal leading-relaxed">
                {d.lockedNoticeText}
              </p>
              <button
                onClick={() => {
                  setShowUnlockNotice(false);
                  setShowCheckout(true);
                }}
                className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm shadow-lg transition-colors"
              >
                {d.lockedNoticeBtn}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ 10. 统一结账弹窗（唤起 Paddle overlay 结算） ============ */}
      <CheckoutModal open={showCheckout} onClose={() => setShowCheckout(false)} />
    </div>
  );
}
