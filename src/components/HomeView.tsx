/**
 * HomeView 组件 — 首页营销落地页
 * 包含：Hero、讲师背书、四大核心优势、四大主题、家长评价、限时特惠、视听试听、
 * 视频弹窗、结账弹窗。全站统一页脚 SiteFooter 由 layout.tsx 全局挂载。
 */

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  X,
  Check,
  Lock,
  CreditCard,
  Shield,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Palette,
  Brain,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { THEME_NAMES } from '@/data/idiomsData';

export default function HomeView() {
  const { t, language } = useLanguage();
  const home = t.home;
  const footer = t.footer;

  // --- 弹窗与状态管理 ---
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [toast, setToast] = useState<string | null>(null);

  const avRef = useRef<HTMLDivElement>(null);

  // --- 语音合成 ---
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'zh' ? 'zh-CN' : 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeak = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };

  // --- 滚动到视听试听区 ---
  const scrollToAV = () => {
    avRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    speak(home.voiceTrial);
  };

  // --- 解锁按钮 ---
  const handleUnlock = () => {
    setShowCheckout(true);
    setCheckoutSuccess(false);
    speak(home.voiceUnlock);
  };

  // --- 试听视频 1 ---
  const handlePlayVideo1 = () => {
    setShowVideo1(true);
    showToast(home.vSuccess);
  };

  // --- 试听视频 2 ---
  const handlePlayVideo2 = () => {
    setShowVideo2(true);
    showToast(home.vSuccess);
  };

  // --- 关闭视频弹窗 ---
  const closeVideo1 = () => {
    stopSpeak();
    setShowVideo1(false);
  };
  const closeVideo2 = () => {
    stopSpeak();
    setShowVideo2(false);
  };

  // --- 支付提交 ---
  const handlePay = () => {
    setCheckoutSuccess(true);
    speak(home.voiceCheckoutSuccess);
  };

  // --- 数据准备 ---
  const teacherFeatures = [
    home.teacherFeature1,
    home.teacherFeature2,
    home.teacherFeature3,
    home.teacherFeature4,
    home.teacherFeature5,
    home.teacherFeature6,
    home.teacherFeature7,
  ];

  const advantages = [
    { num: '01', title: home.adv1Title, desc: home.adv1Desc, icon: Award, tint: 'bg-[#e8ddd0]' },
    { num: '02', title: home.adv2Title, desc: home.adv2Desc, icon: Users, tint: 'bg-[#dde5dc]' },
    { num: '03', title: home.adv3Title, desc: home.adv3Desc, icon: Palette, tint: 'bg-[#e5d9d9]' },
    { num: '04', title: home.adv4Title, desc: home.adv4Desc, icon: Brain, tint: 'bg-[#d9dde5]' },
  ];

  const themes = [
    { id: 1, label: THEME_NAMES[1][language], desc: home.theme1Desc, accent: 'bg-gradient-to-br from-primary to-primary-hover', text: 'text-primary', border: 'border-primary/40', gradient: 'from-primary/10 to-primary/5' },
    { id: 2, label: THEME_NAMES[2][language], desc: home.theme2Desc, accent: 'bg-gradient-to-br from-secondary to-secondary-hover', text: 'text-secondary', border: 'border-secondary/40', gradient: 'from-secondary/10 to-secondary/5' },
    { id: 3, label: THEME_NAMES[3][language], desc: home.theme3Desc, accent: 'bg-gradient-to-br from-tertiary to-tertiary/80', text: 'text-tertiary', border: 'border-tertiary/40', gradient: 'from-tertiary/10 to-tertiary/5' },
    { id: 4, label: THEME_NAMES[4][language], desc: home.theme4Desc, accent: 'bg-gradient-to-br from-charcoal to-ink-light', text: 'text-charcoal', border: 'border-charcoal/40', gradient: 'from-charcoal/10 to-charcoal/5' },
  ];

  const reviews = [
    { text: home.review1Text, parent: home.review1Parent, tint: 'bg-[#ede4d3]' },
    { text: home.review2Text, parent: home.review2Parent, tint: 'bg-[#e0e6d8]' },
    { text: home.review3Text, parent: home.review3Parent, tint: 'bg-[#e8dcdc]' },
    { text: home.review4Text, parent: home.review4Parent, tint: 'bg-[#dce2e8]' },
  ];

  const securePayLabel = home.securePayBtn.replace('{price}', home.price);

  return (
    <main className="bg-rice">
      {/* ============================ 1. Hero Section ============================ */}
      <section className="relative overflow-hidden rice-paper-pattern">
        {/* 水墨装饰：右上角墨晕 */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-charcoal/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        {/* 水墨装饰：左下角朱砂晕 */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        {/* 水墨装饰：中部淡金晕 */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-tertiary/[0.08] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        {/* 大型水墨字水印「墨」*/}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none hidden md:block">
          <span className="font-serif text-[320px] lg:text-[420px] font-black text-charcoal/[0.035] leading-none">墨</span>
        </div>
        {/* 底部水墨笔触 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-rice-darker/30 to-rice-darker/50 pointer-events-none" />
        {/* 水墨剪影装饰：左下角牧童与兔 */}
        <svg className="absolute bottom-0 left-0 w-64 md:w-80 h-48 md:h-64 pointer-events-none opacity-[0.04] hidden lg:block" viewBox="0 0 320 240" fill="none">
          {/* 远山轮廓 */}
          <path d="M0 220 Q60 180, 120 210 Q180 190, 240 215 Q280 200, 320 220 L320 240 L0 240 Z" fill="#1c1c17"/>
          {/* 地面草丛笔触 */}
          <path d="M20 225 Q22 215, 25 225 Q28 218, 30 225" stroke="#1c1c17" strokeWidth="2" fill="none"/>
          <path d="M60 228 Q63 220, 66 228 Q69 222, 72 228" stroke="#1c1c17" strokeWidth="2" fill="none"/>
          <path d="M180 226 Q183 218, 186 226 Q189 220, 192 226" stroke="#1c1c17" strokeWidth="2" fill="none"/>
          {/* 兔子剪影 */}
          <path d="M230 218 Q238 210, 248 214 Q256 208, 258 200 Q260 196, 264 198 Q266 200, 264 206 Q268 202, 272 208 Q274 214, 270 218 Q274 220, 274 224 Q270 226, 264 224 Q258 226, 250 224 Q240 226, 232 222 Z" fill="#1c1c17"/>
          <circle cx="266" cy="208" r="1" fill="#fdf9f0"/>
          {/* 牧童剪影：牛背上的孩童 */}
          <path d="M120 195 Q124 188, 130 186 Q138 184, 144 188 Q150 192, 150 200 Q150 206, 146 210 L150 214 Q146 216, 142 214 L138 218 Q134 216, 132 212 Q128 210, 126 206 Q122 202, 120 195 Z" fill="#1c1c17"/>
          {/* 牧童头部 */}
          <circle cx="138" cy="184" r="6" fill="#1c1c17"/>
          {/* 斗笠 */}
          <path d="M128 180 Q138 172, 148 180 L146 182 L130 182 Z" fill="#1c1c17"/>
          {/* 牛身剪影 */}
          <path d="M90 215 Q95 200, 115 198 Q140 196, 160 202 Q175 204, 180 214 Q178 220, 170 222 L165 220 Q160 224, 150 222 Q140 224, 130 222 Q115 224, 100 222 Q92 220, 90 215 Z" fill="#1c1c17"/>
          {/* 牛腿 */}
          <path d="M100 222 L98 235 L104 235 L106 222" fill="#1c1c17"/>
          <path d="M125 222 L123 235 L129 235 L131 222" fill="#1c1c17"/>
          <path d="M155 222 L153 235 L159 235 L161 222" fill="#1c1c17"/>
          <path d="M170 222 L168 235 L174 235 L176 222" fill="#1c1c17"/>
          {/* 牛角 */}
          <path d="M180 205 Q186 200, 190 202 Q188 206, 184 208" fill="#1c1c17"/>
          {/* 飞鸟剪影 */}
          <path d="M200 80 Q206 76, 212 80 Q206 78, 200 80" stroke="#1c1c17" strokeWidth="1.5" fill="none"/>
          <path d="M240 60 Q246 56, 252 60 Q246 58, 240 60" stroke="#1c1c17" strokeWidth="1.5" fill="none"/>
          <path d="M180 100 Q186 96, 192 100 Q186 98, 180 100" stroke="#1c1c17" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {home.heroBadge}
              </div>

              {/* 标题 + 水墨笔触装饰 */}
              <div className="relative mb-4">
                <h1 className="font-serif font-black text-3xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-charcoal via-primary to-tertiary bg-clip-text text-transparent">
                  {home.heroTitle}
                </h1>
                {/* 水墨笔触 SVG 线条 */}
                <svg className="w-56 md:w-72 h-4 mt-3" viewBox="0 0 288 16" fill="none" preserveAspectRatio="none">
                  <path
                    d="M4 8 C 24 3, 48 3, 72 7 C 100 11, 130 11, 160 7 C 190 3, 220 3, 248 7 C 268 10, 280 9, 284 7"
                    stroke="url(#heroInkGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* 小墨点装饰 */}
                  <circle cx="146" cy="8" r="2.5" fill="#a93027" opacity="0.5" />
                  <circle cx="156" cy="6" r="1.5" fill="#7b5500" opacity="0.4" />
                  <defs>
                    <linearGradient id="heroInkGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1c1c17" stopOpacity="0" />
                      <stop offset="15%" stopColor="#1c1c17" stopOpacity="0.3" />
                      <stop offset="40%" stopColor="#a93027" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#7b5500" stopOpacity="0.7" />
                      <stop offset="85%" stopColor="#1c1c17" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1c1c17" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* 副标题 */}
              <p className="font-serif text-base md:text-lg font-medium mb-6 text-charcoal/80">
                {home.heroFeatureSubtitle}
              </p>

              {/* Slogan — 朱砂红高亮 */}
              <p className="font-sans text-primary font-semibold text-base md:text-lg mb-8 max-w-2xl">
                {home.heroSlogan}
              </p>

              {/* CTA 按钮 — 双语双行 */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToAV}
                  className="inline-flex flex-col items-center justify-center gap-0.5 px-7 py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] min-w-[180px]"
                >
                  <span className="text-sm leading-tight">Watch Free Demo</span>
                  <span className="text-xs font-medium opacity-80 leading-tight">{home.btnTrial}</span>
                </button>
                <button
                  onClick={handleUnlock}
                  className="inline-flex flex-col items-center justify-center gap-0.5 px-7 py-3 rounded-full bg-charcoal hover:bg-ink-light text-rice font-sans font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] min-w-[180px]"
                >
                  <span className="text-sm leading-tight">Unlock Full Access</span>
                  <span className="text-xs font-medium opacity-80 leading-tight">{home.btnUnlock}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ 2. Teacher Credentials ============================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-black text-charcoal text-3xl md:text-4xl mb-3">
              {home.teacherTitle}
            </h2>
            <p className="font-sans text-ink-light text-base md:text-lg max-w-3xl mx-auto">
              {home.teacherSubtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-rice-darker to-rice rounded-3xl border border-border-warm premium-shadow overflow-hidden"
          >
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
              {/* 头像 */}
              <div className="md:col-span-2 flex flex-col items-center text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg bg-rice mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/teacher_mavis_avatar_new.jpg"
                    alt={home.teacherName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-black text-charcoal text-2xl mb-2">
                  {home.teacherName}
                </h3>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary-hover text-rice text-sm font-bold shadow-md">
                  {home.teacherBadge}
                </span>
              </div>

              {/* 简介 + 7 项背书 */}
              <div className="md:col-span-3">
                <div className="grid sm:grid-cols-1 gap-3">
                  {teacherFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-rice border border-border-warm hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-rice" />
                      </div>
                      <span className="font-sans text-charcoal text-sm md:text-base leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ 3. AV Trial Section ============================ */}
      <section ref={avRef} className="py-16 md:py-20 bg-rice-darker/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-black text-charcoal text-3xl md:text-4xl mb-3">
              {home.avTitle}
            </h2>
            <p className="font-sans text-ink-light text-base md:text-lg max-w-3xl mx-auto">
              {home.avDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 视频卡片 1：如鱼得水 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-rice border border-border-warm premium-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-rice-darker cursor-pointer" onClick={handlePlayVideo1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/card_blindmen_elephant.jpg"
                  alt={home.v1Title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rice/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all">
                    <Play className="w-7 h-7 text-primary group-hover:text-rice fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rice/90 text-primary text-xs font-bold">
                  {home.v1Badge}
                </span>
                <h3 className="absolute bottom-5 left-6 right-6 font-serif font-black text-rice text-2xl md:text-3xl drop-shadow-lg">
                  {home.v1Title}
                </h3>
              </div>
            </motion.div>

            {/* 视频卡片 2：狐假虎威 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-3xl overflow-hidden bg-rice border border-border-warm premium-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-rice-darker cursor-pointer" onClick={handlePlayVideo2}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/card_waiting_hare.jpg"
                  alt={home.v2Title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rice/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all">
                    <Play className="w-7 h-7 text-primary group-hover:text-rice fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rice/90 text-primary text-xs font-bold">
                  {home.v2Badge}
                </span>
                <h3 className="absolute bottom-5 left-6 right-6 font-serif font-black text-rice text-2xl md:text-3xl drop-shadow-lg">
                  {home.v2Title}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ 4. Four Core Advantages ============================ */}
      <section className="py-16 md:py-20 bg-rice-darker/40 relative overflow-hidden">
        {/* 朱砂淡晕装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.05] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/[0.05] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        {/* 大型水墨字水印「品」*/}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-serif text-[280px] md:text-[360px] font-black text-charcoal/[0.03] leading-none">品</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'zh' ? '核心优势' : 'Core Advantages'}
            </div>
            <h2 className="font-serif font-black text-charcoal text-3xl md:text-4xl">
              {home.advantagesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-[24px] p-8 bg-rice border-2 border-primary/60 hover:border-primary transition-all overflow-hidden"
                >
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
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <Icon className="w-6 h-6 text-rice" />
                      </div>
                      <span className="font-serif font-black text-primary/25 text-3xl leading-none">
                        {adv.num}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-charcoal text-lg md:text-xl mb-3 leading-snug">
                      {adv.title}
                    </h3>
                    <p className="font-sans text-ink-light text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ 5. Four Themes ============================ */}
      <section className="py-16 md:py-20 bg-rice relative overflow-hidden">
        {/* 朱砂淡晕装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/[0.05] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.05] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        {/* 大型水墨字水印「典」*/}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-serif text-[280px] md:text-[360px] font-black text-charcoal/[0.03] leading-none">典</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-black text-charcoal text-3xl md:text-4xl mb-3">
              {home.themesTitle}
            </h2>
            <p className="font-sans text-ink-light text-base md:text-lg max-w-3xl mx-auto">
              {home.themesSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-[24px] bg-rice border-2 border-primary/60 hover:border-primary p-6 flex flex-col hover:scale-[1.03] transition-all overflow-hidden"
              >
                {/* 中式角花装饰：左上 */}
                <svg className="absolute top-0 left-0 w-8 h-8 text-primary/30" viewBox="0 0 40 40" fill="none">
                  <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="2.5" />
                </svg>
                {/* 中式角花装饰：右下 */}
                <svg className="absolute bottom-0 right-0 w-8 h-8 text-primary/30 rotate-180" viewBox="0 0 40 40" fill="none">
                  <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="2.5" />
                </svg>
                <div className="relative">
                  <div className={`w-12 h-12 rounded-2xl ${theme.accent} flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="font-serif font-black text-rice text-lg">{theme.id}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-charcoal">{theme.label}</h3>
                  <p className="font-sans text-ink-light text-sm leading-relaxed flex-grow">
                    {theme.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 5. Parent Reviews ============================ */}
      <section className="py-16 md:py-20 bg-rice-darker/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-black text-charcoal text-3xl md:text-4xl mb-3">
              {home.reviewTitle}
            </h2>
            {home.reviewSubtitle && (
              <p className="font-sans text-ink-light text-base md:text-lg max-w-3xl mx-auto">
                {home.reviewSubtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-3xl p-7 ${review.tint} border border-border-warm`}
              >
                <Quote className="w-8 h-8 text-primary/40 mb-3" />
                <p className="font-sans text-charcoal text-sm md:text-base leading-relaxed mb-5">
                  {review.text}
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-border-warm">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-sans font-semibold text-charcoal text-xs ml-1">
                    {review.parent}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 6. Unlock Promo Section ============================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-hover p-10 md:p-14 text-center premium-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rice/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rice/5 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative">
              <h2 className="font-serif font-black text-rice text-2xl md:text-4xl mb-3 leading-tight">
                {home.unlockPromoTitle}
              </h2>
              <p className="font-sans text-rice/80 text-sm md:text-base max-w-3xl mx-auto mb-6">
                {home.unlockPromoSubtitle}
              </p>

              {/* 价格 */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="font-serif font-black text-rice text-4xl md:text-5xl">
                  {home.price}
                </span>
                <span className="font-sans text-rice/50 text-xl line-through">
                  {home.originalPrice}
                </span>
              </div>

              <button
                onClick={handleUnlock}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rice text-primary font-sans font-black text-sm md:text-base shadow-xl hover:scale-[1.03] transition-all"
              >
                <Lock className="w-4 h-4" />
                {home.btnPromoUnlock}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ 8. Video Modal 1 ============================ */}
      <AnimatePresence>
        {showVideo1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={closeVideo1}
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
                <button onClick={closeVideo1} className="p-1 hover:bg-rice/20 rounded-full transition-colors">
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
                  onClick={() => { setShowVideo1(false); handleUnlock(); }}
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold transition-colors"
                >
                  <span className="block text-sm">Unlock All 100 Idiom Stories & Lifetime Access</span>
                  <span className="block text-xs opacity-80 mt-1">解锁全部 100 集成语故事，享受终身无限制观看</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================ 8. Video Modal 2 ============================ */}
      <AnimatePresence>
        {showVideo2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={closeVideo2}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-rice rounded-3xl max-w-3xl w-full overflow-hidden green-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-secondary text-rice">
                <span className="font-serif font-bold text-sm">{home.m2Topbar}</span>
                <button onClick={closeVideo2} className="p-1 hover:bg-rice/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-rice-darker">
                {/* Bunny Stream 真实视频嵌入 */}
                <iframe
                  src="https://player.mediadelivery.net/embed/753687/51f24434-97b3-4541-b4c9-6a392bd3bdef?autoplay=true&loop=false&muted=false&preload=true&responsive=true&quality=1080p"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                  allowFullScreen
                  title={home.v2Title}
                />
              </div>

              <div className="p-6">
                <p className="font-serif text-secondary text-sm mb-2 tracking-wide">{home.m2Pinyin}</p>
                <h3 className="font-serif font-black text-charcoal text-2xl md:text-3xl mb-6 leading-tight">
                  {home.v2Title}
                </h3>
                <button
                  onClick={() => { setShowVideo2(false); handleUnlock(); }}
                  className="w-full py-3 rounded-full bg-secondary hover:bg-secondary-hover text-rice font-sans font-bold transition-colors"
                >
                  <span className="block text-sm">Unlock All 100 Idiom Stories & Lifetime Access</span>
                  <span className="block text-xs opacity-80 mt-1">解锁全部 100 集成语故事，享受终身无限制观看</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================ 9. Checkout Modal ============================ */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => { setShowCheckout(false); setCheckoutSuccess(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-rice rounded-3xl max-w-lg w-full overflow-hidden premium-shadow max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!checkoutSuccess ? (
                <>
                  {/* SSL 安全支付顶栏 */}
                  <div className="flex items-center justify-between px-6 py-4 bg-charcoal text-rice">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-secondary" />
                      <span className="font-sans font-bold text-xs tracking-widest">{home.sslPay}</span>
                    </div>
                    <span className="font-sans text-xs text-secondary">{home.sslOnline}</span>
                    <button
                      onClick={() => { setShowCheckout(false); setCheckoutSuccess(false); }}
                      className="p-1 hover:bg-rice/20 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    {/* 产品信息 */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-rice-darker border border-border-warm mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-rice" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-serif font-bold text-charcoal text-sm mb-1">{home.productTitle}</h3>
                        <p className="font-sans text-ink-light text-xs mb-2">{home.productDesc}</p>
                        <span className="font-serif font-black text-primary text-lg">{home.price}</span>
                      </div>
                    </div>

                    {/* 支付方式切换 */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-sans font-bold text-xs transition-all ${
                          paymentMethod === 'card'
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border-warm text-ink-light hover:border-primary/50'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        {home.cardBtn}
                      </button>
                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-sans font-bold text-xs transition-all ${
                          paymentMethod === 'paypal'
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border-warm text-ink-light hover:border-primary/50'
                        }`}
                      >
                        <Shield className="w-4 h-4" />
                        {home.paypalBtn}
                      </button>
                    </div>

                    {/* 信用卡表单 */}
                    {paymentMethod === 'card' ? (
                      <form onSubmit={(e) => { e.preventDefault(); handlePay(); }} className="space-y-4">
                        <div>
                          <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                            {home.cardholderLabel}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={footer.contactNamePlaceholder}
                            className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                            {home.cardNumberLabel}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="4242 4242 4242 4242"
                            className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                              {home.cvvLabel}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="123"
                              className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                              {home.checkoutEmailLabel}
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="parent@example.com"
                              className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-black text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          {securePayLabel}
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-rice-darker border border-border-warm">
                          <p className="font-sans text-ink-light text-xs leading-relaxed mb-3">
                            {home.paypalDesc}
                          </p>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                            <Shield className="w-3.5 h-3.5" />
                            {home.paypalBadge}
                          </span>
                        </div>
                        <button
                          onClick={handlePay}
                          className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-black text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          {securePayLabel}
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* 支付成功页 */
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5"
                  >
                    <Check className="w-8 h-8 text-rice" />
                  </motion.div>
                  <h3 className="font-serif font-black text-charcoal text-xl mb-3">
                    {home.checkoutSuccessTitle}
                  </h3>
                  <p className="font-sans text-ink-light text-sm leading-relaxed mb-5">
                    {home.checkoutSuccessDesc}
                  </p>
                  <div className="space-y-2 mb-6 text-left bg-rice-darker rounded-2xl p-4 border border-border-warm">
                    <div className="flex justify-between font-sans text-xs">
                      <span className="text-ink-light">{home.checkoutAccount}</span>
                      <span className="text-charcoal font-semibold">{footer.contactEmail}</span>
                    </div>
                    <div className="flex justify-between font-sans text-xs">
                      <span className="text-ink-light">{home.checkoutScope}</span>
                      <span className="text-primary font-semibold">{home.checkoutScopeValue}</span>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => { setShowCheckout(false); setCheckoutSuccess(false); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm transition-colors"
                  >
                    {home.checkoutStart}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================ Toast 提示 ============================ */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-full bg-charcoal text-rice font-sans text-sm font-semibold shadow-2xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-tertiary" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

