/**
 * Mock 数据种子工具 — 用于本地测试付费会员解锁和进度同步逻辑
 *
 * 使用方式：
 *   1. 在浏览器控制台执行: window.__seedMock('premium')
 *   2. 或在开发面板中点击对应按钮
 *   3. 页面刷新后 mock 数据生效
 */

import { IDIOMS_LIST } from '@/data/idiomsData';
import { INITIAL_BADGES } from '@/data/data';
import type { AchievementBadge } from '@/types';

// ======================== Storage Keys（与 DashboardView 完全一致）========================
export const STORAGE_KEYS = {
  idiomStatus: 'moyu-idiom-status',
  favorites: 'moyu-favorites',
  streak: 'moyu-checkin-streak',
  childProfile: 'moyu-child-profile',
  speechRate: 'moyu-speech-rate',
  pinyinToggle: 'moyu-pinyin-toggle',
  premium: 'moyu-premium',
  badges: 'moyu-badges',
  lastCheckIn: 'moyu-last-checkin',
} as const;

// ======================== Mock 场景类型 ========================
export type MockScenario =
  | 'empty'          // 全新用户，无任何数据
  | 'trial'          // 游客试听用户，非会员，2条已完成
  | 'premium-new'    // 新付费会员，已解锁但无学习进度
  | 'premium-half'   // 付费会员，已完成约一半课程
  | 'premium-almost' // 付费会员，已完成大部分课程，接近毕业
  | 'clear';         // 清除所有数据

// ======================== 生成函数 ========================

function buildIdiomStatus(
  completedCount: number,
  studyMode: 'sequential' | 'free' = 'sequential'
): Record<string, 'ready' | 'completed' | 'locked'> {
  const result: Record<string, 'ready' | 'completed' | 'locked'> = {};
  IDIOMS_LIST.forEach((idiom, index) => {
    if (index < completedCount) {
      result[idiom.id] = 'completed';
    } else if (studyMode === 'sequential' && index === completedCount) {
      result[idiom.id] = 'ready';
    } else if (studyMode === 'sequential') {
      result[idiom.id] = 'locked';
    } else {
      result[idiom.id] = 'ready';
    }
  });
  return result;
}

function buildBadges(completedCount: number): AchievementBadge[] {
  return INITIAL_BADGES.map((badge, index) => {
    // 前 completedCount 个 badge 解锁
    const shouldUnlock = index < completedCount;
    if (shouldUnlock && !badge.unlocked) {
      const daysAgo = Math.floor(Math.random() * 20) + 1;
      const date = new Date(Date.now() - daysAgo * 86400000);
      return { ...badge, unlocked: true, unlockedAt: date.toISOString().slice(0, 10) };
    }
    if (!shouldUnlock && badge.unlocked) {
      return { ...badge, unlocked: false, unlockedAt: undefined };
    }
    return badge;
  });
}

function buildFavorites(completedCount: number): string[] {
  // 从已完成的中随机挑选 3-5 个作为收藏
  const pool = IDIOMS_LIST.slice(0, Math.max(completedCount, 5));
  const count = Math.min(Math.max(3, Math.floor(completedCount / 5)), 5);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((i) => i.id);
}

// ======================== 场景定义 ========================

interface ScenarioConfig {
  isPremium: boolean;
  completedCount: number;
  streakDays: number;
  studyMode: 'sequential' | 'free';
  childProfile: { name: string; age: string; weeklyGoal: string };
  speechRate: number;
  pinyinToggle: boolean;
  hasCheckedInToday: boolean;
}

const SCENARIOS: Record<Exclude<MockScenario, 'clear' | 'empty'>, ScenarioConfig> = {
  trial: {
    isPremium: false,
    completedCount: 2,
    streakDays: 1,
    studyMode: 'sequential',
    childProfile: { name: '小墨同学', age: '5', weeklyGoal: '5' },
    speechRate: 1.0,
    pinyinToggle: true,
    hasCheckedInToday: true,
  },
  'premium-new': {
    isPremium: true,
    completedCount: 2, // 试听时已完成的 2 条
    streakDays: 3,
    studyMode: 'sequential',
    childProfile: { name: '小墨同学', age: '6', weeklyGoal: '7' },
    speechRate: 1.0,
    pinyinToggle: true,
    hasCheckedInToday: true,
  },
  'premium-half': {
    isPremium: true,
    completedCount: 50,
    streakDays: 28,
    studyMode: 'sequential',
    childProfile: { name: '朵朵', age: '7', weeklyGoal: '7' },
    speechRate: 1.0,
    pinyinToggle: false,
    hasCheckedInToday: true,
  },
  'premium-almost': {
    isPremium: true,
    completedCount: 92,
    streakDays: 65,
    studyMode: 'sequential',
    childProfile: { name: '阿宝', age: '8', weeklyGoal: '10' },
    speechRate: 1.4,
    pinyinToggle: false,
    hasCheckedInToday: true,
  },
};

// ======================== 种子执行函数 ========================

export function seedMockData(scenario: MockScenario): { success: boolean; message: string; details: string[] } {
  if (typeof window === 'undefined') {
    return { success: false, message: '仅在浏览器环境可用', details: [] };
  }

  const details: string[] = [];

  // 清除场景：删除所有数据
  if (scenario === 'clear') {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
    return {
      success: true,
      message: '已清除所有本地数据',
      details: ['清除成语进度', '清除收藏', '清除签到', '清除会员状态', '清除勋章'],
    };
  }

  // 空场景：仅清除数据但不重新填充
  if (scenario === 'empty') {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
    return {
      success: true,
      message: '已重置为全新用户（无任何数据）',
      details: ['所有 localStorage 已清空', '刷新后将是全新用户'],
    };
  }

  const config = SCENARIOS[scenario];
  if (!config) {
    return { success: false, message: `未知场景: ${scenario}`, details: [] };
  }

  // 1. 会员状态
  localStorage.setItem(STORAGE_KEYS.premium, String(config.isPremium));
  details.push(`会员状态: ${config.isPremium ? '付费会员' : '游客试听'}`);

  // 2. 成语进度
  const idiomStatus = buildIdiomStatus(config.completedCount, config.studyMode);
  localStorage.setItem(STORAGE_KEYS.idiomStatus, JSON.stringify(idiomStatus));
  const completedNum = Object.values(idiomStatus).filter((s) => s === 'completed').length;
  const readyNum = Object.values(idiomStatus).filter((s) => s === 'ready').length;
  const lockedNum = Object.values(idiomStatus).filter((s) => s === 'locked').length;
  details.push(`成语进度: ${completedNum} 已完成 / ${readyNum} 可学 / ${lockedNum} 锁定 (共${IDIOMS_LIST.length}条)`);

  // 3. 收藏
  const favorites = buildFavorites(config.completedCount);
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
  details.push(`收藏: ${favorites.length} 条`);

  // 4. 签到连续天数
  localStorage.setItem(STORAGE_KEYS.streak, String(config.streakDays));
  details.push(`连续签到: ${config.streakDays} 天`);

  // 5. 今日签到状态
  if (config.hasCheckedInToday) {
    localStorage.setItem(STORAGE_KEYS.lastCheckIn, new Date().toISOString().slice(0, 10));
    details.push('今日已签到 ✓');
  } else {
    localStorage.removeItem(STORAGE_KEYS.lastCheckIn);
    details.push('今日未签到');
  }

  // 6. 勋章
  const badges = buildBadges(config.completedCount);
  localStorage.setItem(STORAGE_KEYS.badges, JSON.stringify(badges));
  const unlockedBadges = badges.filter((b) => b.unlocked).length;
  details.push(`勋章: ${unlockedBadges}/${badges.length} 已解锁`);

  // 7. 孩子档案
  localStorage.setItem(STORAGE_KEYS.childProfile, JSON.stringify(config.childProfile));
  details.push(`孩子档案: ${config.childProfile.name} / ${config.childProfile.age}岁 / 周目标${config.childProfile.weeklyGoal}课`);

  // 9. 语音语速
  localStorage.setItem(STORAGE_KEYS.speechRate, String(config.speechRate));
  details.push(`语音语速: ${config.speechRate}x`);

  // 10. 拼音开关
  localStorage.setItem(STORAGE_KEYS.pinyinToggle, String(config.pinyinToggle));
  details.push(`拼音显示: ${config.pinyinToggle ? '开启' : '关闭'}`);

  // 11. 学习模式标记（存储在 idiomStatus 的结构中已体现）
  details.push(`学习模式: ${config.studyMode === 'sequential' ? '顺序学习' : '自由浏览'}`);

  const scenarioNames: Record<string, string> = {
    trial: '游客试听用户',
    'premium-new': '新付费会员',
    'premium-half': '付费会员（半程进度）',
    'premium-almost': '付费会员（即将毕业）',
  };

  return {
    success: true,
    message: `已加载场景: ${scenarioNames[scenario] || scenario}`,
    details,
  };
}

// ======================== 读取当前数据摘要 ========================
export function getDataSummary(): {
  isPremium: boolean;
  completedCount: number;
  totalCount: number;
  progressPercent: number;
  favoritesCount: number;
  streakDays: number;
  badgesUnlocked: number;
  badgesTotal: number;
  childName: string;
  studyMode: string;
  hasCheckedInToday: boolean;
} {
  if (typeof window === 'undefined') {
    return {
      isPremium: false, completedCount: 0, totalCount: IDIOMS_LIST.length,
      progressPercent: 0, favoritesCount: 0, streakDays: 0,
      badgesUnlocked: 0, badgesTotal: INITIAL_BADGES.length,
      childName: '-', studyMode: '-', hasCheckedInToday: false,
    };
  }

  const isPremium = localStorage.getItem(STORAGE_KEYS.premium) === 'true';
  const statusRaw = localStorage.getItem(STORAGE_KEYS.idiomStatus);
  const status: Record<string, string> = statusRaw ? JSON.parse(statusRaw) : {};
  const completedCount = Object.values(status).filter((s) => s === 'completed').length;
  const favoritesRaw = localStorage.getItem(STORAGE_KEYS.favorites);
  const favorites: string[] = favoritesRaw ? JSON.parse(favoritesRaw) : [];
  const streakDays = parseInt(localStorage.getItem(STORAGE_KEYS.streak) || '0', 10);
  const badgesRaw = localStorage.getItem(STORAGE_KEYS.badges);
  const badges: AchievementBadge[] = badgesRaw ? JSON.parse(badgesRaw) : INITIAL_BADGES;
  const profileRaw = localStorage.getItem(STORAGE_KEYS.childProfile);
  const profile = profileRaw ? JSON.parse(profileRaw) : { name: '-' };
  const lastCheckIn = localStorage.getItem(STORAGE_KEYS.lastCheckIn);
  const today = new Date().toISOString().slice(0, 10);

  // 推断学习模式：如果有 locked 状态则为 sequential
  const hasLocked = Object.values(status).some((s) => s === 'locked');
  const studyMode = hasLocked ? '顺序学习' : Object.keys(status).length > 0 ? '自由浏览' : '-';

  return {
    isPremium,
    completedCount,
    totalCount: IDIOMS_LIST.length,
    progressPercent: Math.round((completedCount / IDIOMS_LIST.length) * 100),
    favoritesCount: favorites.length,
    streakDays,
    badgesUnlocked: badges.filter((b) => b.unlocked).length,
    badgesTotal: badges.length,
    childName: profile.name || '-',
    studyMode,
    hasCheckedInToday: lastCheckIn === today,
  };
}
