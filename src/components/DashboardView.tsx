/**
 * DashboardView 组件 — 付费用户个人中心
 * 包含：顶部解锁横幅、欢迎卡片、2 Tab 导航（课程/设置）
 * 课程 Tab：学习导航、成语卡片网格、成语故事弹窗、语音朗读
 * 设置 Tab：孩子档案、语音语速、拼音开关
 * 结账弹窗：统一跳转 Lemon Squeezy 托管结算
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  X,
  Check,
  Settings,
  BookOpen,
  RotateCcw,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { IDIOMS_LIST, THEME_NAMES, type IdiomItem } from '@/data/idiomsData';
import CheckoutModal from '@/components/CheckoutModal';

type TabKey = 'courses' | 'settings';
type IdiomStatus = 'ready' | 'completed';

interface ChildProfile {
  name: string;
  age: string;
  weeklyGoal: string;
}

const AVATAR_SRC = '/images/xiaomo_avatar_1781277430049.jpg';

const STORAGE_KEYS = {
  idiomStatus: 'moyu-idiom-status',
  childProfile: 'moyu-child-profile',
  speechRate: 'moyu-speech-rate',
  pinyinToggle: 'moyu-pinyin-toggle',
  premium: 'moyu-premium',
};

/** 前两课免费试看的成语 ID */
const FREE_PREVIEW_IDS = new Set(['mangrenmoxiang_item', 'shouzhudaitu_item']);

export default function DashboardView() {
  const { t, language } = useLanguage();
  const d = t.dashboard as Record<string, string>;

  /* ---------------- State ---------------- */
  const [activeTab, setActiveTab] = useState<TabKey>('courses');
  const [selectedIdiom, setSelectedIdiom] = useState<IdiomItem | null>(null);
  const [idiomStatus, setIdiomStatus] = useState<Record<string, IdiomStatus>>({});
  const [highlightedIdiomId, setHighlightedIdiomId] = useState<string | null>(null);
  const [showIdiomModal, setShowIdiomModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [childProfile, setChildProfile] = useState<ChildProfile>({
    name: d.defaultUserName,
    age: '6',
    weeklyGoal: '7',
  });
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [pinyinToggle, setPinyinToggle] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  /* ---------------- Hydrate from localStorage ---------------- */
  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem(STORAGE_KEYS.idiomStatus);
      if (savedStatus) setIdiomStatus(JSON.parse(savedStatus));

      const savedProfile = localStorage.getItem(STORAGE_KEYS.childProfile);
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        setChildProfile({ name: parsed.name || d.defaultUserName, age: parsed.age || '6', weeklyGoal: parsed.weeklyGoal || '7' });
      }

      const savedRate = localStorage.getItem(STORAGE_KEYS.speechRate);
      if (savedRate) setSpeechRate(parseFloat(savedRate) || 1.0);

      const savedPinyin = localStorage.getItem(STORAGE_KEYS.pinyinToggle);
      if (savedPinyin !== null) setPinyinToggle(savedPinyin === 'true');

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
    localStorage.setItem(STORAGE_KEYS.childProfile, JSON.stringify(childProfile));
  }, [childProfile]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.speechRate, String(speechRate));
  }, [speechRate]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.pinyinToggle, String(pinyinToggle));
  }, [pinyinToggle]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.premium, String(isPremium));
  }, [isPremium]);

  /* ---------------- Toast helper ---------------- */
  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  };

  /* ---------------- Computed: effective idiom status ---------------- */
  const effectiveStatus = useMemo<Record<string, IdiomStatus>>(() => {
    const result: Record<string, IdiomStatus> = {};
    for (const idiom of IDIOMS_LIST) {
      result[idiom.id] = idiomStatus[idiom.id] === 'completed' ? 'completed' : 'ready';
    }
    return result;
  }, [idiomStatus]);

  const completedCount = useMemo(
    () => Object.values(effectiveStatus).filter((s) => s === 'completed').length,
    [effectiveStatus]
  );

  /* ---------------- Idiom card click ---------------- */
  const handleIdiomClick = (idiom: IdiomItem) => {
    setHighlightedIdiomId(null);
    setSelectedIdiom(idiom);
    setShowIdiomModal(true);
  };

  /* ---------------- Speech synthesis（仅弹窗内播放器手动触发） ---------------- */
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast(d.toastSpeechUnsupported);
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = language === 'zh' ? 'zh-CN' : 'en-US';
    utter.rate = speechRate;
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  /* ---------------- Mark mastered / unlearned ---------------- */
  const markMastered = (idiomId: string) => {
    setIdiomStatus((prev) => ({ ...prev, [idiomId]: 'completed' }));
    showToast(d.toastIdiomCompleted);
    if (completedCount + 1 >= IDIOMS_LIST.length) {
      showToast(d.toastAllCompleted);
    }
    setShowIdiomModal(false);
    stopSpeaking();
  };

  const markUnlearned = (idiomId: string) => {
    setIdiomStatus((prev) => {
      const next = { ...prev };
      delete next[idiomId];
      return next;
    });
    showToast(d.toastProgressReset);
    setShowIdiomModal(false);
    stopSpeaking();
  };

  /* ---------------- Resume learning — 定位并高亮下一个未学成语 ---------------- */
  const resumeLearning = () => {
    setActiveTab('courses');
    const next = IDIOMS_LIST.find((i) => effectiveStatus[i.id] !== 'completed');
    if (!next) return;
    setHighlightedIdiomId(next.id);
    window.setTimeout(() => {
      document
        .getElementById(`idiom-card-${next.id}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  };

  const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
    { key: 'courses', label: language === 'zh' ? '课程' : 'Courses', icon: BookOpen },
    { key: 'settings', label: language === 'zh' ? '设置' : 'Settings', icon: Settings },
  ];

  /* ================================================================
     RENDER
  ================================================================ */
  return (
    <div className="min-h-screen bg-rice">
      {/* ============ Toast ============ */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-charcoal text-rice px-6 py-3 rounded-full font-sans text-sm shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

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
              alt={childProfile.name}
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

        {/* ============ 3. Tab Navigation ============ */}
        <nav className="flex items-center gap-1 md:gap-2 bg-rice-darker rounded-2xl p-1.5 premium-shadow overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 min-w-fit flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-xl font-sans font-semibold text-xs md:text-sm transition-all ${
                  active
                    ? 'bg-primary text-rice shadow-md'
                    : 'text-ink-light hover:text-charcoal'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* ============ 4. Tab Content ============ */}
        <div className="animate-fade-in">
          {/* ---------- Courses Tab ---------- */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              {/* 学习导航（醒目标题） */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-7 md:h-8 rounded-full bg-gradient-to-b from-primary to-tertiary" />
                <h2 className="font-serif text-xl md:text-2xl font-black text-charcoal tracking-wide">
                  {d.studyNavTitle}
                </h2>
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
                            {pinyinToggle && (
                              <p className="font-sans text-[10px] md:text-xs text-ink-light/70 mb-2">
                                {idiom.pinyin}
                              </p>
                            )}
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
          )}

          {/* ---------- Settings Tab ---------- */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Child profile */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-charcoal">{d.profileTitle}</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-ink-light">
                      {d.labelChildName}
                    </label>
                    <input
                      type="text"
                      value={childProfile.name}
                      onChange={(e) =>
                        setChildProfile((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder={d.defaultUserName}
                      className="w-full bg-rice border border-border-warm rounded-lg px-3 py-2 font-sans text-sm text-charcoal focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-ink-light">
                      {d.labelChildAge}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="3"
                        max="10"
                        value={childProfile.age}
                        onChange={(e) =>
                          setChildProfile((prev) => ({ ...prev, age: e.target.value }))
                        }
                        className="w-full bg-rice border border-border-warm rounded-lg px-3 py-2 font-sans text-sm text-charcoal focus:outline-none focus:border-primary"
                      />
                      <span className="font-sans text-xs text-ink-light shrink-0">{d.ageUnit}</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-ink-light">
                      {d.labelWeeklyGoal}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={childProfile.weeklyGoal}
                      onChange={(e) =>
                        setChildProfile((prev) => ({ ...prev, weeklyGoal: e.target.value }))
                      }
                      className="w-full bg-rice border border-border-warm rounded-lg px-3 py-2 font-sans text-sm text-charcoal focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </section>

              {/* Console settings */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 space-y-5">
                <h3 className="font-serif text-lg font-bold text-charcoal">{d.consoleTitle}</h3>

                {/* Speech rate */}
                <div className="space-y-2">
                  <label className="font-sans text-xs font-semibold text-ink-light">
                    {d.speechRateLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 0.6, label: d.rateSlow },
                      { value: 1.0, label: d.rateStandard },
                      { value: 1.4, label: d.rateFast },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setSpeechRate(opt.value)}
                        className={`px-3 py-2.5 rounded-xl font-sans text-[11px] md:text-xs font-semibold transition-all ${
                          speechRate === opt.value
                            ? 'bg-primary text-rice shadow-md'
                            : 'bg-rice border border-border-warm text-ink-light hover:text-charcoal'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pinyin toggle */}
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-border-warm">
                  <div className="space-y-1">
                    <div className="font-sans text-sm font-semibold text-charcoal">
                      {d.pinyinToggleLabel}
                    </div>
                    <p className="font-sans text-xs text-ink-light">{d.pinyinToggleDesc}</p>
                  </div>
                  <button
                    onClick={() => setPinyinToggle((prev) => !prev)}
                    className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
                      pinyinToggle ? 'bg-secondary' : 'bg-gray-300'
                    }`}
                    aria-label={d.pinyinToggleLabel}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-rice shadow-sm transition-transform ${
                        pinyinToggle ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>

      {/* ============ 5. Idiom Story Modal ============ */}
      <AnimatePresence>
        {showIdiomModal && selectedIdiom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              setShowIdiomModal(false);
              stopSpeaking();
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-rice rounded-2xl premium-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-rice border-b border-border-warm px-5 md:px-7 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl font-black text-charcoal truncate">
                    {selectedIdiom.name}
                  </h3>
                  {pinyinToggle && (
                    <p className="font-sans text-xs text-ink-light/70">{selectedIdiom.pinyin}</p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowIdiomModal(false);
                    stopSpeaking();
                  }}
                  className="shrink-0 w-9 h-9 rounded-full bg-rice-darker hover:bg-border-warm flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-5 md:px-7 py-5 space-y-5">
                <p className="font-sans text-xs text-ink-light italic">
                  {language === 'zh' ? selectedIdiom.zhDefinition : selectedIdiom.enDefinition}
                </p>

                {/* Voice player */}
                <div className="bg-rice-darker rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        isSpeaking
                          ? stopSpeaking()
                          : speakText(
                              language === 'zh'
                                ? `${selectedIdiom.name}。${selectedIdiom.story}`
                                : `${selectedIdiom.enName}. ${selectedIdiom.translation}`
                            )
                      }
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                        isSpeaking ? 'bg-secondary text-rice' : 'bg-primary text-rice hover:bg-primary-hover'
                      }`}
                      aria-label="Play voice"
                    >
                      {isSpeaking ? (
                        <span className="flex items-center gap-0.5">
                          <span className="block w-1 h-3 bg-rice" />
                          <span className="block w-1 h-3 bg-rice" />
                        </span>
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                    <div className="min-w-0">
                      <div className="font-sans text-xs font-bold text-charcoal">
                        {d.modalVoiceTitle}
                      </div>
                      <div className="font-sans text-[10px] text-ink-light/70">
                        {d.modalVoiceDesc}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story text */}
                <div className="space-y-2">
                  <h4 className="font-serif text-sm font-bold text-charcoal">
                    {language === 'zh' ? '📖 故事原文' : '📖 Story'}
                  </h4>
                  <p className="font-serif text-sm md:text-base text-charcoal/85 leading-relaxed">
                    {language === 'zh' ? selectedIdiom.story : selectedIdiom.translation}
                  </p>
                </div>

                {/* Moral label */}
                <div className="bg-secondary/5 border-l-4 border-secondary pl-4 py-2">
                  <p className="font-serif text-xs md:text-sm text-charcoal/80">
                    {d.moralLabel}
                  </p>
                  <p className="font-sans text-xs text-ink-light mt-1">
                    {language === 'zh' ? selectedIdiom.zhDefinition : selectedIdiom.enDefinition}
                  </p>
                </div>

                {/* View full episode link */}
                <Link
                  href={`/episodes/${selectedIdiom.id}`}
                  className="block text-center font-sans text-xs text-primary hover:underline pt-1"
                >
                  {language === 'zh' ? '查看完整课程页 →' : 'View full episode →'}
                </Link>
              </div>

              {/* Modal footer actions */}
              <div className="sticky bottom-0 bg-rice border-t border-border-warm px-5 md:px-7 py-4 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => markUnlearned(selectedIdiom.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full font-sans text-xs font-semibold bg-rice-darker text-ink-light hover:text-charcoal border border-border-warm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {d.btnMarkUnlearned}
                </button>
                <button
                  onClick={() => markMastered(selectedIdiom.id)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-bold bg-secondary text-rice hover:bg-secondary-hover ml-auto"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {d.btnMarkMastered}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ 9. 统一结账弹窗（跳转 Lemon Squeezy 托管结算） ============ */}
      <CheckoutModal open={showCheckout} onClose={() => setShowCheckout(false)} />
    </div>
  );
}
