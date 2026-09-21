'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, X, RotateCcw, Check, Crown, User, Sparkles } from 'lucide-react';
import { seedMockData, getDataSummary, type MockScenario } from '@/lib/mock-data';

/**
 * Mock 数据测试面板（仅开发环境显示）
 * 一键切换用户场景，测试付费解锁和进度同步逻辑
 */

interface ScenarioButton {
  scenario: MockScenario;
  label: string;
  desc: string;
  icon: typeof Crown;
  color: string;
}

const SCENARIOS: ScenarioButton[] = [
  {
    scenario: 'empty',
    label: '全新用户',
    desc: '无任何数据，首次访问',
    icon: User,
    color: 'border-gray-300 text-gray-600 hover:bg-gray-100',
  },
  {
    scenario: 'trial',
    label: '游客试听',
    desc: '非会员，2条已完成，主题1部分解锁',
    icon: User,
    color: 'border-blue-300 text-blue-600 hover:bg-blue-50',
  },
  {
    scenario: 'premium-new',
    label: '新付费会员',
    desc: '已付费，2条已完成，全部解锁可学',
    icon: Crown,
    color: 'border-primary text-primary hover:bg-primary/5',
  },
  {
    scenario: 'premium-half',
    label: '半程进度',
    desc: '付费会员，50/100已完成，28天连续',
    icon: Sparkles,
    color: 'border-secondary text-secondary hover:bg-secondary/5',
  },
  {
    scenario: 'premium-almost',
    label: '即将毕业',
    desc: '付费会员，92/100已完成，65天连续',
    icon: Crown,
    color: 'border-tertiary text-tertiary hover:bg-tertiary/5',
  },
];

export default function MockDataPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState<ReturnType<typeof getDataSummary> | null>(null);
  const [lastAction, setLastAction] = useState<{ message: string; details: string[] } | null>(null);

  // 仅开发环境显示
  const [isDev, setIsDev] = useState(false);
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development');
  }, []);

  const refreshSummary = useCallback(() => {
    setSummary(getDataSummary());
  }, []);

  useEffect(() => {
    if (isOpen) refreshSummary();
  }, [isOpen, refreshSummary]);

  const handleSeed = (scenario: MockScenario) => {
    const result = seedMockData(scenario);
    if (result.success) {
      setLastAction({ message: result.message, details: result.details });
      refreshSummary();
      // 延迟后自动刷新页面以让组件重新读取 localStorage
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    }
  };

  if (!isDev) return null;

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary text-rice shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Mock Data Panel"
      >
        <Beaker className="w-6 h-6" />
      </button>

      {/* 面板弹窗 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[9999] w-[420px] max-w-[calc(100vw-3rem)] max-h-[80vh] overflow-y-auto bg-rice border border-border-warm rounded-2xl shadow-2xl"
          >
            {/* 头部 */}
            <div className="sticky top-0 bg-primary text-rice px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-2">
                <Beaker className="w-5 h-5" />
                <h2 className="font-serif font-bold text-base">Mock 数据测试面板</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-rice/20 rounded-full p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {/* 当前数据摘要 */}
              {summary && (
                <div className="bg-rice-darker rounded-xl p-4 space-y-2">
                  <h3 className="font-sans text-xs font-bold text-ink-light uppercase tracking-wide">
                    当前状态
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      {summary.isPremium ? (
                        <Crown className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      <span className="text-charcoal">
                        {summary.isPremium ? '付费会员' : '游客'}
                      </span>
                    </div>
                    <div className="text-charcoal">
                      进度: {summary.completedCount}/{summary.totalCount} ({summary.progressPercent}%)
                    </div>
                    <div className="text-charcoal">
                      连续签到: {summary.streakDays} 天
                    </div>
                    <div className="text-charcoal">
                      收藏: {summary.favoritesCount} 条
                    </div>
                    <div className="text-charcoal">
                      勋章: {summary.badgesUnlocked}/{summary.badgesTotal}
                    </div>
                    <div className="text-charcoal">
                      学习模式: {summary.studyMode}
                    </div>
                    <div className="text-charcoal">
                      今日签到: {summary.hasCheckedInToday ? '✓' : '✗'}
                    </div>
                    <div className="text-charcoal col-span-2">
                      用户名: {summary.childName}
                    </div>
                  </div>
                </div>
              )}

              {/* 场景按钮 */}
              <div className="space-y-2">
                <h3 className="font-sans text-xs font-bold text-ink-light uppercase tracking-wide">
                  切换场景（点击后自动刷新）
                </h3>
                {SCENARIOS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.scenario}
                      onClick={() => handleSeed(s.scenario)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl border-2 ${s.color} transition-all text-left`}
                    >
                      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-sans font-bold text-sm">{s.label}</div>
                        <div className="font-sans text-xs text-ink-light mt-0.5">{s.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 清除数据 */}
              <button
                onClick={() => handleSeed('clear')}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-red-300 text-red-500 hover:bg-red-50 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="font-sans font-bold text-sm">清除所有数据</span>
              </button>

              {/* 操作结果 */}
              {lastAction && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="font-sans font-bold text-sm text-secondary">
                      {lastAction.message}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {lastAction.details.map((d, i) => (
                      <li key={i} className="font-sans text-xs text-ink-light pl-6">
                        • {d}
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans text-xs text-ink-light/60 pt-1">
                    页面将在 1 秒后自动刷新...
                  </p>
                </div>
              )}

              {/* 说明 */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="font-sans text-xs text-amber-700 leading-relaxed">
                  此面板仅在开发环境显示。点击场景按钮后会写入 localStorage 并自动刷新页面，DashboardView 会读取对应数据。
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
