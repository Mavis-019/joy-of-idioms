/**
 * DashboardView 组件 — 付费用户个人中心
 * 包含：顶部订阅横幅、欢迎卡片、4 Tab 导航（课程/进度/权益/设置）
 * 课程 Tab：成语卡片网格、成语故事弹窗、语音朗读
 * 进度 Tab：每日计划、勋章轨道、签到、收藏夹
 * 权益 Tab：订单状态、下载资产（电子绘本 + 音频包）
 * 设置 Tab：孩子档案、语音语速、拼音开关、缓存复位
 * 结账弹窗：升级订阅流程
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Play,
  X,
  Check,
  Bookmark,
  Download,
  Settings,
  Award,
  Calendar,
  BookOpen,
  TrendingUp,
  CreditCard,
  Lock,
  Volume2,
  RotateCcw,
  Sparkles,
  Clock,
  ChevronRight,
  Heart,
  CircleCheck,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { IDIOMS_LIST, THEME_NAMES, type IdiomItem } from '@/data/idiomsData';
import { INITIAL_BADGES } from '@/data/data';

type TabKey = 'courses' | 'progress' | 'billing' | 'settings';
type IdiomStatus = 'ready' | 'completed' | 'locked';
type StudyMode = 'sequential' | 'free';

interface ChildProfile {
  name: string;
  age: string;
  weeklyGoal: string;
}

const AVATAR_SRC = '/images/xiaomo_avatar_1781277430049.jpg';

const STORAGE_KEYS = {
  idiomStatus: 'moyu-idiom-status',
  favorites: 'moyu-favorites',
  streak: 'moyu-checkin-streak',
  childProfile: 'moyu-child-profile',
  speechRate: 'moyu-speech-rate',
  pinyinToggle: 'moyu-pinyin-toggle',
  premium: 'moyu-premium',
  badges: 'moyu-badges',
  lastCheckIn: 'moyu-last-checkin',
};

export default function DashboardView() {
  const { t, language } = useLanguage();
  const d = t.dashboard as Record<string, string>;

  /* ---------------- State ---------------- */
  const [activeTab, setActiveTab] = useState<TabKey>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [studyMode, setStudyMode] = useState<StudyMode>('sequential');
  const [selectedIdiom, setSelectedIdiom] = useState<IdiomItem | null>(null);
  const [idiomStatus, setIdiomStatus] = useState<Record<string, IdiomStatus>>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [streakDays, setStreakDays] = useState(0);
  const [badges, setBadges] = useState(INITIAL_BADGES);
  const [showIdiomModal, setShowIdiomModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
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
  const [parentName, setParentName] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [ebookPacking, setEbookPacking] = useState(false);
  const [audioPacking, setAudioPacking] = useState(false);

  /* ---------------- Hydrate from localStorage ---------------- */
  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem(STORAGE_KEYS.idiomStatus);
      if (savedStatus) setIdiomStatus(JSON.parse(savedStatus));

      const savedFavs = localStorage.getItem(STORAGE_KEYS.favorites);
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedStreak = localStorage.getItem(STORAGE_KEYS.streak);
      if (savedStreak) setStreakDays(parseInt(savedStreak, 10) || 0);

      const savedBadges = localStorage.getItem(STORAGE_KEYS.badges);
      if (savedBadges) setBadges(JSON.parse(savedBadges));

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
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.streak, String(streakDays));
  }, [streakDays]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.badges, JSON.stringify(badges));
  }, [badges]);
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
    let firstUncompletedFound = false;
    for (const idiom of IDIOMS_LIST) {
      const stored = idiomStatus[idiom.id];
      if (stored === 'completed') {
        result[idiom.id] = 'completed';
        continue;
      }
      if (studyMode === 'sequential') {
        if (!firstUncompletedFound) {
          result[idiom.id] = 'ready';
          firstUncompletedFound = true;
        } else {
          result[idiom.id] = 'locked';
        }
      } else {
        result[idiom.id] = 'ready';
      }
    }
    return result;
  }, [idiomStatus, studyMode]);

  const completedCount = useMemo(
    () => Object.values(effectiveStatus).filter((s) => s === 'completed').length,
    [effectiveStatus]
  );
  const totalProgress = Math.round((completedCount / IDIOMS_LIST.length) * 100);

  /* ---------------- Filtered idioms by search ---------------- */
  const filteredIdioms = useMemo(() => {
    if (!searchQuery.trim()) return IDIOMS_LIST;
    const q = searchQuery.trim().toLowerCase();
    return IDIOMS_LIST.filter(
      (i) =>
        i.name.includes(searchQuery) ||
        i.pinyin.toLowerCase().includes(q) ||
        i.enName.toLowerCase().includes(q) ||
        i.enDefinition.toLowerCase().includes(q) ||
        i.zhDefinition.includes(searchQuery)
    );
  }, [searchQuery]);

  /* ---------------- Idiom card click ---------------- */
  const handleIdiomClick = (idiom: IdiomItem) => {
    const status = effectiveStatus[idiom.id];
    if (status === 'locked') {
      showToast(d.toastNeedSequential);
      return;
    }
    setSelectedIdiom(idiom);
    setShowIdiomModal(true);
  };

  /* ---------------- Speech synthesis ---------------- */
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
    const idiom = IDIOMS_LIST.find((i) => i.id === idiomId);
    setIdiomStatus((prev) => ({ ...prev, [idiomId]: 'completed' }));
    // Unlock related badge if exists
    setBadges((prev) =>
      prev.map((b) =>
        b.id === idiomId && !b.unlocked
          ? { ...b, unlocked: true, unlockedAt: new Date().toISOString().slice(0, 10) }
          : b
      )
    );
    if (idiom) {
      speakText(d.speechIdiomCompleted.replace('{name}', idiom.name));
    }
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

  /* ---------------- Favorites ---------------- */
  const toggleFavorite = (idiomId: string) => {
    setFavorites((prev) => {
      if (prev.includes(idiomId)) {
        showToast(d.toastFavRemoved);
        return prev.filter((id) => id !== idiomId);
      }
      showToast(d.toastFavAdded);
      return [...prev, idiomId];
    });
  };

  /* ---------------- Check-in ---------------- */
  const handleCheckIn = () => {
    const today = new Date().toISOString().slice(0, 10);
    const lastCheckIn = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.lastCheckIn) : null;
    if (lastCheckIn === today) {
      showToast(d.toastCheckInSuccess);
      return;
    }
    setStreakDays((prev) => prev + 1);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.lastCheckIn, today);
    }
    speakText(d.speechCheckInSuccess);
    showToast(d.toastCheckInSuccess);
  };

  /* ---------------- Downloads ---------------- */
  const handleDownload = (kind: 'ebook' | 'audio') => {
    const fileName = kind === 'ebook' ? d.ebookFileName : d.audioFileName;
    const packingSetter = kind === 'ebook' ? setEbookPacking : setAudioPacking;
    const packingMsg = kind === 'ebook' ? d.packingFile : d.packingFolder;
    packingSetter(true);
    showToast(packingMsg);
    window.setTimeout(() => {
      packingSetter(false);
      window.alert(d.alertDownloadSuccess.replace('{fileName}', fileName));
    }, 1800);
  };

  /* ---------------- Checkout ---------------- */
  const handlePay = () => {
    setPaymentProcessing(true);
    window.setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      setIsPremium(true);
      speakText(d.speechUnlockSuccess);
      showToast(d.paymentSuccessMsg);
      window.setTimeout(() => {
        setPaymentSuccess(false);
        setShowCheckout(false);
      }, 2200);
    }, 2000);
  };

  /* ---------------- Resume learning — jump to first ready idiom ---------------- */
  const resumeLearning = () => {
    const firstReady = IDIOMS_LIST.find((i) => effectiveStatus[i.id] === 'ready');
    if (firstReady) {
      setSelectedIdiom(firstReady);
      setShowIdiomModal(true);
    }
  };

  const currentThemeId: 1 | 2 | 3 | 4 = useMemo(() => {
    const firstReady = IDIOMS_LIST.find((i) => effectiveStatus[i.id] === 'ready');
    return (firstReady?.themeId ?? 1) as 1 | 2 | 3 | 4;
  }, [effectiveStatus]);

  const currentThemeName = THEME_NAMES[currentThemeId][language];
  const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
    { key: 'courses', label: language === 'zh' ? '课程' : 'Courses', icon: BookOpen },
    { key: 'progress', label: language === 'zh' ? '进度' : 'Progress', icon: TrendingUp },
    { key: 'billing', label: language === 'zh' ? '权益' : 'Billing', icon: CreditCard },
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
            <div className="space-y-1.5 min-w-0">
              <h1 className="font-serif text-xl md:text-2xl font-bold text-charcoal truncate">
                {d.welcomeBack.replace('{userName}', childProfile.name || d.defaultUserName)}
              </h1>
              <p className="font-sans text-xs md:text-sm text-ink-light leading-relaxed">
                {d.currentStage.replace('{theme}', currentThemeName)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-8 md:border-l md:border-border-warm md:pl-7">
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-black text-primary">
                {totalProgress}%
              </div>
              <div className="font-sans text-[10px] md:text-xs text-ink-light mt-0.5">
                {d.statTotalProgress}
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-black text-secondary flex items-center gap-1 justify-center">
                {streakDays}
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="font-sans text-[10px] md:text-xs text-ink-light mt-0.5">
                {d.statStreakDays}
              </div>
            </div>
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
              {d.coursesSubtitle && (
                <p className="font-sans text-sm text-ink-light leading-relaxed max-w-3xl">
                  {d.coursesSubtitle}
                </p>
              )}

              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-light/60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={d.searchPlaceholder}
                  className="w-full bg-rice-darker border border-border-warm rounded-full pl-11 pr-4 py-3 font-sans text-sm text-charcoal placeholder:text-ink-light/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Study mode toggle */}
              <div className="bg-rice-darker rounded-2xl premium-shadow p-5 space-y-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-serif text-base font-bold text-charcoal">
                      {d.studyModeTitle}
                    </h3>
                    <p className="font-sans text-xs text-ink-light mt-1">{d.studyModeDesc}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setStudyMode('sequential')}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-sans font-semibold text-xs md:text-sm transition-all ${
                      studyMode === 'sequential'
                        ? 'bg-primary text-rice shadow-md'
                        : 'bg-rice border border-border-warm text-ink-light hover:text-charcoal'
                    }`}
                  >
                    {d.btnSequential}
                  </button>
                  <button
                    onClick={() => setStudyMode('free')}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-sans font-semibold text-xs md:text-sm transition-all ${
                      studyMode === 'free'
                        ? 'bg-primary text-rice shadow-md'
                        : 'bg-rice border border-border-warm text-ink-light hover:text-charcoal'
                    }`}
                  >
                    {d.btnFreeBrowsing}
                  </button>
                </div>
              </div>

              {/* Theme sections */}
              {([1, 2, 3, 4] as const).map((themeId) => {
                const themeIdioms = filteredIdioms.filter((i) => i.themeId === themeId);
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
                        const isLocked = status === 'locked';
                        const isCompleted = status === 'completed';
                        const isFav = favorites.includes(idiom.id);
                        return (
                          <button
                            key={idiom.id}
                            onClick={() => handleIdiomClick(idiom)}
                            className={`relative text-left rounded-xl p-4 transition-all border ${
                              isLocked
                                ? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-70'
                                : 'bg-rice-darker border-border-warm hover:border-primary hover:-translate-y-0.5 premium-shadow'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="font-serif text-lg md:text-xl font-bold text-charcoal leading-tight">
                                {idiom.name}
                              </h4>
                              {isFav && <Heart className="w-3.5 h-3.5 text-primary fill-primary shrink-0 mt-1" />}
                            </div>
                            {pinyinToggle && (
                              <p className="font-sans text-[10px] md:text-xs text-ink-light/70 mb-2">
                                {idiom.pinyin}
                              </p>
                            )}
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`font-sans text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  isCompleted
                                    ? 'bg-secondary text-rice'
                                    : status === 'ready'
                                    ? 'bg-primary text-rice'
                                    : 'bg-gray-300 text-gray-500'
                                }`}
                              >
                                {isCompleted
                                  ? d.statusCompleted
                                  : status === 'ready'
                                  ? d.statusReady
                                  : d.statusLocked}
                              </span>
                              {isLocked ? (
                                <Lock className="w-3.5 h-3.5 text-gray-400" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-ink-light/50" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Unlock theme CTA for non-premium users in locked themes */}
                    {!isPremium && themeId === 1 && (
                      <button
                        onClick={() => setShowCheckout(true)}
                        className="w-full bg-gradient-to-r from-tertiary to-primary text-rice font-sans font-semibold text-sm py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        {d.btnUnlockTheme}
                      </button>
                    )}
                  </div>
                );
              })}

              {filteredIdioms.length === 0 && (
                <p className="text-center font-sans text-sm text-ink-light/60 py-12">
                  {language === 'zh' ? '未找到匹配的成语' : 'No matching idioms found.'}
                </p>
              )}
            </div>
          )}

          {/* ---------- Progress Tab ---------- */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              {/* Daily 2-lesson plan */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-charcoal">{d.dailyPlanTitle}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {IDIOMS_LIST.filter((i) => effectiveStatus[i.id] === 'ready')
                    .slice(0, 2)
                    .map((idiom, idx) => (
                      <div
                        key={idiom.id}
                        className="bg-rice border border-border-warm rounded-xl p-4 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="font-sans text-[10px] text-ink-light/60 mb-1">
                            {d.taskLabel.replace('{index}', String(idx + 1))}
                          </div>
                          <div className="font-serif text-base font-bold text-charcoal truncate">
                            {idiom.name}
                          </div>
                          {pinyinToggle && (
                            <div className="font-sans text-[10px] text-ink-light/70">{idiom.pinyin}</div>
                          )}
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          <button
                            onClick={() => {
                              setSelectedIdiom(idiom);
                              setShowIdiomModal(true);
                            }}
                            className="px-3 py-1.5 rounded-full font-sans text-[11px] font-semibold bg-rice-darker text-ink-light border border-border-warm hover:text-charcoal"
                          >
                            {d.btnReview}
                          </button>
                          <button
                            onClick={() => {
                              setSelectedIdiom(idiom);
                              setShowIdiomModal(true);
                            }}
                            className="px-3 py-1.5 rounded-full font-sans text-[11px] font-semibold bg-primary text-rice"
                          >
                            {d.btnLearn}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </section>

              {/* Medal track */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">{d.medalTrackTitle}</h3>
                  <p className="font-sans text-xs text-ink-light mt-1">{d.medalTrackDesc}</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${
                        badge.unlocked
                          ? 'bg-rice border-secondary/40 green-shadow'
                          : 'bg-gray-100 border-gray-200 opacity-60'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-2xl font-black ${
                          badge.unlocked
                            ? 'bg-secondary text-rice'
                            : 'bg-gray-300 text-gray-500'
                        }`}
                      >
                        {badge.unlocked ? badge.character : <Lock className="w-4 h-4" />}
                      </div>
                      <span className="font-sans text-[10px] text-center text-charcoal/80 leading-tight">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Check-in */}
              <section className="bg-gradient-to-r from-secondary to-secondary-hover text-rice rounded-2xl green-shadow p-5 md:p-6 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-serif text-lg font-bold flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {d.checkInTitle}
                  </h3>
                  <p className="font-sans text-xs text-rice/85 mt-1">{d.checkInDesc}</p>
                </div>
                <button
                  onClick={handleCheckIn}
                  className="bg-rice text-secondary font-sans font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {d.btnCheckIn} ({streakDays})
                </button>
              </section>

              {/* Favorites */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  {d.favoritesTitle}
                </h3>
                {favorites.length === 0 ? (
                  <p className="font-sans text-sm text-ink-light/70 py-4 text-center">
                    {d.favoritesEmpty}
                  </p>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {favorites.map((favId) => {
                      const idiom = IDIOMS_LIST.find((i) => i.id === favId);
                      if (!idiom) return null;
                      return (
                        <div
                          key={favId}
                          className="flex items-center justify-between bg-rice border border-border-warm rounded-xl px-4 py-2.5"
                        >
                          <div className="min-w-0">
                            <div className="font-serif text-sm font-bold text-charcoal truncate">
                              {idiom.name}
                            </div>
                            {pinyinToggle && (
                              <div className="font-sans text-[10px] text-ink-light/70">{idiom.pinyin}</div>
                            )}
                          </div>
                          <button
                            onClick={() => speakText(idiom.story)}
                            className="shrink-0 px-3 py-1.5 rounded-full font-sans text-[11px] font-semibold bg-primary text-rice flex items-center gap-1"
                          >
                            <Volume2 className="w-3 h-3" />
                            {d.btnListen}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </div>
          )}

          {/* ---------- Billing Tab ---------- */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-7 space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">{d.billingTitle}</h3>
                  <p className="font-sans text-xs md:text-sm text-ink-light mt-1.5 max-w-3xl leading-relaxed">
                    {d.billingDesc}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-rice border border-border-warm rounded-xl p-4 space-y-2">
                    <div className="font-sans text-[10px] text-ink-light/60 uppercase tracking-wide">
                      {d.orderStatusLabel}
                    </div>
                    <div className="font-serif text-base font-bold flex items-center gap-2">
                      {isPremium ? (
                        <>
                          <CircleCheck className="w-5 h-5 text-secondary" />
                          <span className="text-secondary">{d.statusLifetimeMember}</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-5 h-5 text-tertiary" />
                          <span className="text-tertiary">{d.statusTrialUser}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="bg-rice border border-border-warm rounded-xl p-4 space-y-1.5">
                    <div className="font-sans text-[10px] text-ink-light/60 uppercase tracking-wide">
                      {d.orderIdLabel.split(':')[0]}
                    </div>
                    <div className="font-sans text-xs text-charcoal/80 break-all">{d.orderIdLabel}</div>
                    <div className="font-sans text-xs text-ink-light mt-1">{d.expiryLabel}</div>
                  </div>
                </div>

                {!isPremium && (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="bg-primary text-rice font-sans font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-hover transition-colors"
                  >
                    {d.btnSubscribe}
                  </button>
                )}
              </section>

              {/* E-book download */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-serif text-base font-bold text-charcoal">{d.ebookTitle}</h4>
                  <p className="font-sans text-xs text-ink-light leading-relaxed">{d.ebookDesc}</p>
                  <p className="font-sans text-[10px] text-ink-light/60 mt-1">{d.ebookFileName}</p>
                </div>
                <button
                  onClick={() => handleDownload('ebook')}
                  disabled={ebookPacking || !isPremium}
                  className="shrink-0 bg-primary text-rice font-sans font-semibold text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {ebookPacking ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      {d.packingFile}
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      {d.btnDownloadEbook}
                    </>
                  )}
                </button>
              </section>

              {/* Audio pack download */}
              <section className="bg-rice-darker rounded-2xl premium-shadow p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Volume2 className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-serif text-base font-bold text-charcoal">{d.audioTitle}</h4>
                  <p className="font-sans text-xs text-ink-light leading-relaxed">{d.audioDesc}</p>
                  <p className="font-sans text-[10px] text-ink-light/60 mt-1">{d.audioFileName}</p>
                </div>
                <button
                  onClick={() => handleDownload('audio')}
                  disabled={audioPacking || !isPremium}
                  className="shrink-0 bg-secondary text-rice font-sans font-semibold text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-secondary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {audioPacking ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      {d.packingFolder}
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      {d.btnDownloadAudio}
                    </>
                  )}
                </button>
              </section>
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
                  onClick={() => toggleFavorite(selectedIdiom.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-sans text-xs font-semibold transition-colors ${
                    favorites.includes(selectedIdiom.id)
                      ? 'bg-primary text-rice'
                      : 'bg-rice-darker text-ink-light hover:text-charcoal border border-border-warm'
                  }`}
                >
                  {favorites.includes(selectedIdiom.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      {d.btnBookmarked}
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      {d.btnAddBookmark}
                    </>
                  )}
                </button>
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

      {/* ============ 9. Checkout Modal ============ */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => !paymentProcessing && !paymentSuccess && setShowCheckout(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-rice rounded-2xl premium-shadow max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-tertiary text-rice px-6 py-5 relative">
                <button
                  onClick={() => !paymentProcessing && !paymentSuccess && setShowCheckout(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rice/20 hover:bg-rice/30 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <span className="inline-block font-sans text-[10px] font-bold bg-rice/20 px-2.5 py-1 rounded-full mb-2">
                  {d.checkoutOfferLabel}
                </span>
                <h3 className="font-serif text-lg font-bold">{d.checkoutTitle}</h3>
                <p className="font-sans text-xs text-rice/85 mt-1.5 leading-relaxed">
                  {d.checkoutDesc}
                </p>
              </div>

              {/* Body */}
              {paymentSuccess ? (
                <div className="px-6 py-10 text-center space-y-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-rice" />
                  </motion.div>
                  <p className="font-serif text-base font-bold text-charcoal">
                    {d.paymentSuccessMsg}
                  </p>
                </div>
              ) : (
                <div className="px-6 py-5 space-y-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-ink-light">
                      {d.labelParentName}
                    </label>
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={d.placeholderParentName}
                      className="w-full bg-rice-darker border border-border-warm rounded-lg px-3 py-2.5 font-sans text-sm text-charcoal placeholder:text-ink-light/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold text-ink-light">
                      {d.labelReceiptEmail}
                    </label>
                    <input
                      type="email"
                      value={receiptEmail}
                      onChange={(e) => setReceiptEmail(e.target.value)}
                      placeholder="parent@example.com"
                      className="w-full bg-rice-darker border border-border-warm rounded-lg px-3 py-2.5 font-sans text-sm text-charcoal placeholder:text-ink-light/50 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <p className="font-sans text-[11px] text-ink-light/80 leading-relaxed bg-rice-darker rounded-lg px-3 py-2.5">
                    🔒 {d.checkoutSecureNote}
                  </p>

                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => setShowCheckout(false)}
                      disabled={paymentProcessing}
                      className="px-4 py-3 rounded-full font-sans text-xs font-semibold bg-rice-darker text-ink-light hover:text-charcoal border border-border-warm disabled:opacity-50"
                    >
                      {d.btnCancelUpgrade}
                    </button>
                    <button
                      onClick={handlePay}
                      disabled={paymentProcessing}
                      className="flex-1 bg-primary text-rice font-sans font-bold text-sm px-5 py-3 rounded-full hover:bg-primary-hover transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {paymentProcessing ? (
                        <>
                          <RotateCcw className="w-4 h-4 animate-spin" />
                          {d.btnProcessing}
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4" />
                          {d.btnPayNow}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
