/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  progress: number; // 0 to 100
  pinyin: string;
  explanation: string;
}

export interface AchievementBadge {
  id: string;
  character: string; // The single Hanzi like "画", "守"
  name: string; // Full idiom name like "画龙点睛"
  unlocked: boolean;
  unlockedAt?: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  idiomId: string;
  type: 'matching' | 'multiple-choice';
  questionText: string;
  questionPinyin: string;
  image: string;
  options: QuizOption[];
  correctOptionId: string;
  hint: string;
}

export interface QuizOption {
  id: string;
  text: string;
  pinyin?: string;
  isCorrect?: boolean;
}

export interface UserProgressState {
  totalDays: number;
  unlockedIdiomsCount: number;
  streakDays: number;
  completedCourseIds: string[];
  courseProgress: { [courseId: string]: number };
  answersHistory: { [questionId: string]: { answeredOptionId: string; wasCorrect: boolean } };
  badges: AchievementBadge[];
}
