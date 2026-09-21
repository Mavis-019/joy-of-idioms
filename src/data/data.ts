/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, AchievementBadge, QuizQuestion } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'ruyudeshui',
    title: '如鱼得水',
    subtitle: '社交智慧 · 建立亲密人际关系',
    pinyin: 'rú yú dé shuǐ',
    image: '/images/course_ruyudeshui_1781277440392.jpg',
    progress: 100,
    explanation: '好比鱼儿得到了水。比喻得到了跟自己十分投合的人或适合自己发展的环境。'
  },
  {
    id: 'xiongyouchengzhu',
    title: '胸有成竹',
    subtitle: '自信成长 · 谋定而后动的沉稳',
    pinyin: 'xiōng yǒu chéng zhú',
    image: '/images/course_xiongyouchengzhu_1781277455228.jpg',
    progress: 30,
    explanation: '画竹子时，心里已经有了完整的竹子形象。比喻在做事之前已经有了通盘的准备。'
  },
  {
    id: 'wenjiqiwu',
    title: '闻鸡起舞',
    subtitle: '励志典故 · 奋发有为的主动担当',
    pinyin: 'wén jī qǐ wǔ',
    image: '/images/course_wenjiqiwu_1781277470552.jpg',
    progress: 5,
    explanation: '听到鸡叫声就起床舞剑。形容有志气的人及时奋起，认真刻苦锻炼。'
  },
  {
    id: 'wangyangbulao',
    title: '亡羊补牢',
    subtitle: '知错就改 · 及时纠偏的智慧',
    pinyin: 'wáng yáng bǔ láo',
    image: '/images/course_ruyudeshui_1781277440392.jpg', // reusable or general
    progress: 0,
    explanation: '羊逃跑了再去修筑羊圈，还不算迟。比喻受到损失后，及时采取补救措施，免受更大损失。'
  }
];

export const INITIAL_BADGES: AchievementBadge[] = [
  {
    id: 'hualongdianjing',
    character: '画',
    name: '画龙点睛',
    unlocked: true,
    unlockedAt: '2026-06-10',
    description: '在关键地方加入精辟言词，使内容更加生动有力。'
  },
  {
    id: 'shouzhudaitu',
    character: '守',
    name: '守株待兔',
    unlocked: true,
    unlockedAt: '2026-06-11',
    description: '希望通过偶然的巧合并付出努力而获得收获。'
  },
  {
    id: 'jingzhongbaoguo',
    character: '精',
    name: '精忠报国',
    unlocked: true,
    unlockedAt: '2026-06-08',
    description: '竭尽忠诚报效国家。'
  },
  {
    id: 'saiwengshima',
    character: '塞',
    name: '塞翁失马',
    unlocked: true,
    unlockedAt: '2026-06-12',
    description: '祸福相倚，坏事可能变成好事。'
  },
  {
    id: 'yanyudaoling',
    character: '掩',
    name: '掩耳盗铃',
    unlocked: true,
    unlockedAt: '2026-06-05',
    description: '捂住耳朵去偷铃铛，比喻自欺欺人。'
  },
  {
    id: 'mangrenmoxiang',
    character: '摸',
    name: '盲人摸象',
    unlocked: false,
    description: '比喻对事物只凭片面的了解或局部的观察就作结论。'
  },
  {
    id: 'yugongyishan',
    character: '移',
    name: '愚公移山',
    unlocked: false,
    description: '比喻做事有毅力，有恒心，坚持不懈。'
  }
];

export const BLIND_MEN_ELEPHANT_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bmx_q1',
    idiomId: 'mangrenmoxiang',
    type: 'multiple-choice',
    questionText: '观察这位盲人摸到的部位，它对应的是大象的什么呢？',
    questionPinyin: 'guān chá zhè wèi máng rén mō dào de bù wèi, tā duì yìng de shì dà xiàng de shén me ne?',
    image: '/images/idiom_elephant_leg_1781277499179.jpg',
    correctOptionId: 'opt2',
    hint: '这个圆圆胖胖直立在地面上的东西，能撑起来好重的身体哦，像不像大树干呢？',
    options: [
      { id: 'opt1', text: '这像是一把大扇子', pinyin: 'zhè xiàng shì yī bǎ dà shàn zi' },
      { id: 'opt2', text: '这分明是一根大柱子', pinyin: 'zhè fēn míng shì yī gēn dà zhù zi' },
      { id: 'opt3', text: '这是一根粗粗的绳子', pinyin: 'zhè shì yī gēn cū cū de shéng zi' }
    ]
  },
  {
    id: 'bmx_q2',
    idiomId: 'mangrenmoxiang',
    type: 'matching',
    questionText: '连连看：大象可神奇啦！每个盲人摸到一部分，他们觉得大象像什么？',
    questionPinyin: 'lián lián kàn: dà xiàng kě shén qí la! měi gè máng rén mō dào yī bù fen, tā men jué de dà xiàng xiàng shén me?',
    image: '/images/idiom_blind_men_elephant_1781277483826.jpg',
    correctOptionId: 'match_correct',
    hint: '耳朵像扇子，尾巴像绳子，身子像一堵墙！',
    options: [] // Matchings are handled via a custom matching UI
  }
];
