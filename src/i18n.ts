/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * 集中式简易国际化配置。
 * 所有组件的中英文文案统一在此维护，组件通过 getT(language) 获取对应语言对象。
 */

export type Language = 'zh' | 'en';

export const translations = {
  /* ============================ Header ============================ */
  header: {
    zh: {
      homeTab: '首页',
      profileTab: '个人中心',
      langSwitch: 'ENG',
    },
    en: {
      homeTab: 'Home',
      profileTab: 'Dashboard',
      langSwitch: '中文',
    },
  },

  /* ============================ App.tsx Footer & Modals ============================ */
  footer: {
    zh: {
      brandName: '悦读成语 JOY OF IDIOMS',
      tagline: '悦读成语，专为海外家庭打造中文成语视频课程，帮助孩子轻松学习中文、读懂传统成语文化。',
      langBtn: '🌐 English (英文)',
      privacy: '隐私政策',
      copyright: '海外版权说明',
      contact: '联系我们',
      feedback: '意见反馈',
      org: '华夏童蒙美育版权所有',
    },
    en: {
      brandName: 'JOY OF IDIOMS (悦读成语)',
      tagline: 'Joy of Idioms creates Chinese idiom video courses for overseas families, helping children learn Chinese and understand traditional idiom culture with ease.',
      langBtn: '🌐 中文 (Chinese)',
      privacy: 'Privacy Policy',
      copyright: 'Overseas Copyright',
      contact: 'Contact Us',
      feedback: 'Opinion Feedback',
      org: 'Diaspora Chinese Kids Aesthetic Inc.',
    },
  },

  /* ============================ HomeView ============================ */
  home: {
    zh: {
      heroTitle: '全球华裔儿童・成语国学启蒙',
      heroFeatureSubtitle: '专为海外孩子定制的系统化中文成语课',
      heroSlogan: '告别零散中文素材，让中文自然生长',
      btnTrial: '立即试看',
      btnUnlock: '解锁完整体系',
      pinyinToggle: '开启随文拼音',
      childStamp: '童蒙\n美育',

      teacherTitle: '讲师简介',
      teacherSubtitle: '前央视配音导演｜中国传媒大学硕士｜普通话一级甲等正统专业师资',
      teacherName: 'Mavis 老师',
      teacherBadge: '主讲',
      teacherIntro: '',
      teacherFeature1: '前中央电视台导演、资深配音、主持人',
      teacherFeature2: '毕业于中国传媒大学，广播电视硕士',
      teacherFeature3: '曾为《欧洲歌唱大赛》、《英国皇家音乐盛典》、《意大利儿童好声音》等多档央视节目配音',
      teacherFeature4: '国内头部母婴内容平台《奥尔夫音乐启蒙》主讲老师',
      teacherFeature5: '2010年起赴欧洲留学深造，精通声乐、钢琴、奥尔夫艺术启蒙教学',
      teacherFeature6: '纽交所上市教育集团多年资深编导履历，深耕少儿内容策划、国学课程体系研发',
      teacherFeature7: '普通话一级甲等',

      advantagesTitle: '为什么海外家长都选择我们？',
      advantagesDesc: '',
      adv1Title: '顶配主讲背书｜专业启蒙，起点即卓越',
      adv1Desc: '由中国传媒大学硕士、前央视导演、资深配音主讲。标准纯正语感，国际化视野，让海外中文启蒙拥有行业顶配水准，发音正统、表达地道。',
      adv2Title: '海外专属分级｜适配华裔学情，无痛进阶',
      adv2Desc: '摒弃脱离海外生活的传统教材，整套课程难度螺旋递进。词汇、场景与句式均贴合海外日常环境，让海外孩子轻松入门、稳步筑牢中文根基，学得懂、用得上、记得牢。',
      adv3Title: '顶级东方美育｜学成语，更养高阶国风审美',
      adv3Desc: '拒绝廉价饱和卡通画风，采用极简高级的正统国风基调。百套原创雅致国风艺术画面，沉浸式还原东方美学意境。让孩子日积月累塑造高级审美，涵养东方文化审美底蕴。',
      adv4Title: '全球东方智慧｜赋予孩子一生受用的底蕴与格局',
      adv4Desc: '不止于字词背诵，融合传统国学智慧与全球普世价值观。以双语情景解析融合东方思维的处世哲学、情商格局。培养扎根中华文脉、高情商和适配全球竞争的华裔少年',

      themesTitle: '四大核心主题成语体系（共100节精品课）',
      themesSubtitle: '层层递进的东方智慧，给孩子受益一生的全局视野。',
      theme1: '自然与奇幻寓言',
      theme1Desc: '以奇妙故事与万物生灵为载体，唤醒孩子对世界的求知欲。领悟大自然朴素的辩证法则与中国古典哲学。',
      theme2: '自我成长与探究',
      theme2Desc: '塑造面对挫折的坚毅品质与自我管理能力。在名师舒缓表达中培养百折不挠的阳光心态与自驱力。',
      theme3: '社交与人际智慧',
      theme3Desc: '学会理解同理心、人际边界与沟通合作。在温润厚道的成语熏陶下，培养高情商的全球社交素养。',
      theme4: '高阶思维与格局',
      theme4Desc: '突破单一视角藩篱，培养全局、多角度思辨能力。让海外孩子兼具国际视野与深厚的东方智慧底蕴。',

      reviewTitle: '海外华裔家长真实赞誉',
      reviewSubtitle: '',
      review1Text: '「之前给她们找过YouTube成语视频，语速太快词汇太本土，画面也很机械，孩子根本听不懂。这套成语为海外孩子打造，场景贴合我们的情境，老师讲得语速舒缓、声情并茂，孩子现在不仅能听懂成语，自己还会用。」',
      review1Parent: '苏妈妈 ｜ 7 岁龙凤胎母亲 · 多伦多',
      review2Text: '「对比过十几种中文启蒙资源，这套国风画面质感非常好。主讲老师曾为央视节目配音，经验丰富，不用担心孩子没跟对好老师、学到不标准的口音。是一套提升文化底蕴兼顾审美的好课。」',
      review2Parent: 'Kevin Li ｜ 9 岁男孩父亲 · 洛杉矶',
      review3Text: '「之前网上找的成语画风低幼廉价，我和先生都没办法接受。这套很不错，老师的声音有种神奇的治愈力，孩子对中华文化智慧的理解度、表达能力提升非常明显。」',
      review3Parent: '六岁孩子妈妈 · 法兰克福',
      review4Text: '「尝试过自学成语，内容杂乱无章，语言有门槛，孩子很抗拒。这套内容孩子能轻松跟上，最重要的是他能被吸引住，看得很专注。每天两集解放家长，大幅节省了我的时间。」',
      review4Parent: '吴爸爸 ｜ 4岁 & 8 岁双娃家长 · 奥克兰',

      unlockPromoTitle: '限时特惠，一套体系完成海外孩童成语美育启蒙！',
      btnPromoUnlock: '立即解锁完整内容',
      price: '$59.00 USD',
      originalPrice: '$99.00 USD',

      // 视听体验区
      avBadge: '',
      avTitle: '成语试看专区',
      avDesc: '原创国风艺术画面，品读中华成语智慧',

      // 视频卡片 1
      v1Badge: '点击试看',
      v1Title: '盲人摸象',
      v1Desc: '',
      v1Voice: '如鱼得水。好比鱼儿得到了水。用来比喻得到了最适合自己的环境。',
      vSuccess: '试看成功！加赠学分 +10',

      // 视频弹窗下方支付按钮
      videoUnlockCta: '解锁完整100集成语故事',

      // 视频卡片 2
      v2Badge: '点击试看',
      v2Title: '守株待兔',
      v2Desc: '',
      v2Voice: '狐假虎威。狐狸借用老虎的威风。启迪孩子的思维智慧，学会保护自己。',

      // 教学法卡片副标题
      pedagogySub1: '权威名师 · 01',
      pedagogySub2: '专属学情 · 02',
      pedagogySub3: '东方美育 · 03',
      pedagogySub4: '全球思辨 · 04',
      pedagogyAction1: '点击原声收听中传语音...',
      pedagogyAction2: '试看分级场景配音...',
      pedagogyAction3: '开启宣纸风漫游艺术配乐...',
      pedagogyAction4: '收听情商实战造句...',

      // 主题卡片
      themeCard1: '自然与奇幻寓言',
      themeCard2: '自我成长与探究',
      themeCard3: '社交与人际智慧',
      themeCard4: '高阶思维与格局',

      // 视频弹窗 1
      m1Topbar: '悦读成语 · 第一课 · 试看',
      m1Pinyin: 'máng rén mō xiàng',
      m1Subtitle: '',
      mTip: '提示：再次点击下方暂停键或右上角返回按钮即可退回。',

      // 视频弹窗 2
      m2Topbar: '悦读成语 · 第二课 · 试看',
      m2Pinyin: 'shǒu zhū dài tù',
      m2Subtitle: '',
    },
    en: {
      heroTitle: 'Idiom Wisdom for Global Chinese Children',
      heroFeatureSubtitle: 'A systematic Chinese idiom curriculum custom-built for kids overseas',
      heroSlogan: 'Ditch fragmented Chinese materials — let Chinese grow naturally',
      btnTrial: 'Watch Free Demo',
      btnUnlock: 'Unlock Full Access',
      pinyinToggle: 'Pinyin Helper',
      childStamp: 'Pure\nRoots',

      teacherTitle: 'Instructor Profile',
      teacherSubtitle: 'Former CCTV Voice Director | CUC Master\'s | National Class 1-A Mandarin Certified',
      teacherName: 'Teacher Mavis',
      teacherBadge: 'Lead Instructor',
      teacherIntro: '',
      teacherFeature1: 'Former CCTV director, veteran voiceover artist, and TV host',
      teacherFeature2: 'Graduated from Communication University of China with a Master\'s in Broadcasting',
      teacherFeature3: 'Voice work for CCTV programs including Eurovision, Royal Music Festival, and Italian Kids Voice',
      teacherFeature4: 'Lead instructor for Orff Music Enlightenment on a top domestic parenting platform',
      teacherFeature5: 'Studied in Europe since 2010, proficient in vocal music, piano, and Orff art pedagogy',
      teacherFeature6: 'Senior producer at a NYSE-listed education group, specializing in children\'s content and sinology curriculum',
      teacherFeature7: 'National Mandarin Level 1-A Certification',

      advantagesTitle: 'Why Do Diaspora Parents Choose Us?',
      advantagesDesc: '',
      adv1Title: 'Elite Lead Teacher Backing | Professional Initiation, Excellence from the Start',
      adv1Desc: 'Taught by a CUC Master of Speech, former CCTV director, and veteran voiceover artist. Bringing standard native pronunciation and an international perspective to ensure top-tier Chinese initiation with orthodox accent and authentic expression.',
      adv2Title: 'Exclusive Overseas Grading | Tailored to Diaspora Learning, Seamless Progression',
      adv2Desc: 'Abandoning traditional textbooks detached from lives abroad, the curriculum scales up dynamically. Vocab, scenarios, and sentence structures align with overseas daily environments, allowing kids to learn easily, practice effectively, and remember permanently.',
      adv3Title: 'Elite Eastern Aesthetics | Master Idioms while Nurturing High-Class Art Taste',
      adv3Desc: 'Rejecting cheap, high-saturation cartoon style in favor of minimalist, elegant, and orthodox national art. Hundreds of original elegant Chinese-style art illustrations restore the poetic Eastern aesthetic world, nurturing deep cultural and artistic appreciation.',
      adv4Title: 'Global Eastern Wisdom | Empowering Children with Lasting Depth & Vision',
      adv4Desc: 'Beyond simple rote-memorization, we integrate traditional Chinese wisdom with global universal values. Through bilingual situational analysis, kids grasp Eastern philosophies of life and high-EQ mindsets, raising children rooted in heritage and ready for global competition.',

      themesTitle: 'Four Core Thematic Idiom Systems (100 Lessons)',
      themesSubtitle: 'Step-by-step Chinese philosophy, giving children a lasting broad mindset.',
      theme1: 'Nature & Fantasy Fables',
      theme1Desc: 'Using nature and animal stories to ignite curiosity, helping children grasp simple dialectical logic and natural philosophy.',
      theme2: 'Grit & Growth Mindset',
      theme2Desc: 'Building resilience to handle setbacks. Under Teacher Mavis\'s healing voice, children cultivate unyielding optimism and self-drive.',
      theme3: 'Social-Emotional Wisdom',
      theme3Desc: 'Understanding empathy, boundaries, and healthy communication. Cultivating high-EQ interpersonal skills.',
      theme4: 'High-Order Strategic Thinking',
      theme4Desc: 'Breaking narrow angles to build multi-dimensional problem-solving skills. Fusing global vision with profound cultural legacy.',

      reviewTitle: 'Highly Recommended by Overseas Parents',
      reviewSubtitle: '',
      review1Text: 'I had tried YouTube idiom videos for my daughters before, but the pacing was too fast, the vocabulary too local, and the visuals felt mechanical — they simply couldn\'t follow. This set is made for overseas kids: the scenes match our daily life, and the teacher narrates slowly and expressively. Now they not only understand idioms, they even use them on their own.',
      review1Parent: 'Mother Su | Mother of 7-yo Twins, Toronto',
      review2Text: 'I compared over a dozen Chinese learning resources — the visual quality of this set is truly premium. The lead teacher once voiced programs for CCTV, so she is highly experienced; no worry about kids picking up a non-standard accent. A wonderful course that builds cultural depth with real aesthetic value.',
      review2Parent: 'Kevin Li | Father of 9-yo Boy, Los Angeles',
      review3Text: 'Most idiom resources we found online looked cheap and childish — my husband and I couldn\'t accept them. This one is excellent: the teacher\'s voice has an almost healing quality, and our child\'s comprehension of Chinese cultural wisdom and his ability to express himself have improved remarkably.',
      review3Parent: 'Mother of 6-yo child | Frankfurt',
      review4Text: 'We tried self-study before, but the content was scattered and the language too difficult — my son resisted it. With this set he follows along easily and, most importantly, stays absorbed and focused. Two episodes a day frees up parents and saves me so much time.',
      review4Parent: 'Father Wu | Parent of 4 & 8-yo children, Auckland',

      unlockPromoTitle: 'Limited-Time Offer: The Ultimate Idiom & Aesthetic Curriculum for Children Overseas.',
      btnPromoUnlock: 'Unlock Complete Access Now',
      price: '$59.00 USD',
      originalPrice: '$99.00 USD',

      avBadge: '',
      avTitle: 'Idiom Free Demo',
      avDesc: 'Original elegant Chinese-style visuals, savoring Chinese idiom wisdom',

      v1Badge: 'Click to Watch',
      v1Title: 'Blind Men and the Elephant',
      v1Desc: '',
      v1Voice: 'As Happy as Fish in Water. Having a perfect environment to flourish.',
      vSuccess: 'Audition Complete! +10 Points',

      // 视频弹窗下方支付按钮
      videoUnlockCta: 'Unlock All 100 Idiom Lessons',

      v2Badge: 'Click to Watch',
      v2Title: 'Waiting for Hares by the Stump',
      v2Desc: '',
      v2Voice: 'The Fox borrowing Tiger\'s prestige. To inspire kids\' quick-witted thinking.',

      pedagogySub1: 'Expert Master · 01',
      pedagogySub2: 'Graded Course · 02',
      pedagogySub3: 'Fine Arts · 03',
      pedagogySub4: 'Global Thinking · 04',
      pedagogyAction1: 'Listen to CUC speech sample...',
      pedagogyAction2: 'Listen to scenario grading...',
      pedagogyAction3: 'Play watercolor background...',
      pedagogyAction4: 'Play High-EQ dialog...',

      themeCard1: 'Nature & Animals',
      themeCard2: 'Grit & Growth Mindset',
      themeCard3: 'Social-Emotional Learning',
      themeCard4: 'Critical Thinking & Perspective',

      m1Topbar: 'Joy of Idioms · Chapter 1 · Free Preview',
      m1Pinyin: 'máng rén mō xiàng',
      m1Subtitle: '',
      mTip: 'Tip: Click below to stop or top-right to claim trial score.',

      m2Topbar: 'Joy of Idioms · Chapter 2 · Free Preview',
      m2Pinyin: 'shǒu zhū dài tù',
      m2Subtitle: '',
    },
  },

  /* ============================ 统一结账弹窗（全站共用，跳转 Lemon Squeezy 托管结算） ============================ */
  checkout: {
    zh: {
      topBadge: 'SSL 加密安全支付',
      productTitle: '「Joy of Idioms（悦读成语）」100课精品成语视频课全套',
      productDesc: '包含：100集精美国风成语视频课，标准普通话原声讲述。一次性购买，获得课程访问权限，随时回看学习。',
      price: '$59.00 USD',
      emailLabel: '接收课程账号邮箱',
      emailPlaceholder: 'parent@example.com',
      emailHint: '购买后课程权益将自动绑定至此邮箱，并发送收据确认单。',
      payBtn: '前往安全结算 $59.00 USD',
      bottomNote: '支持 PayPal、Visa、Mastercard 安全支付。可查阅我们的{refundLink}了解退款申请条件。',
      refundLink: '退款政策',
    },
    en: {
      topBadge: 'SSL Encrypted Secure Payment',
      productTitle: 'Joy of Idioms — 100-Lesson Premium Chinese Idiom Video Course',
      productDesc: 'Features 100 Chinese idiom video lessons with elegant Chinese-style visuals, narrated in standard Mandarin. One-time purchase for ongoing course access, review lessons anytime.',
      price: '$59.00 USD',
      emailLabel: 'Email for course access',
      emailPlaceholder: 'parent@example.com',
      emailHint: 'Your course access will be linked to this email, and your receipt will be sent here.',
      payBtn: 'Proceed to secure checkout $59.00',
      bottomNote: 'Secure payment via PayPal, Visa, Mastercard. Please view our {refundLink} for eligibility requirements.',
      refundLink: 'Refund Policy',
    },
  },

  /* ============================ DashboardView ============================ */
  dashboard: {
    zh: {
      // --- Defaults ---
      defaultUserName: '小墨同学',
      defaultStudyGoal: '每天完成 2 课',

      // --- Toasts ---
      toastSpeechUnsupported: '当前浏览器不支持语音播报',
      toastProgressReset: '成语状态已重置为未学',
      toastIdiomCompleted: '恭喜孩子完成本节成语！勋章印章已点亮。',
      toastAllCompleted: '太棒了！100个成语已全部掌握！',
      toastCacheReset: '系统缓存已完全重置！',

      // --- Confirm dialogs ---
      confirmReset: '确定要复位您的个人资料与全部学习进度吗？',

      // --- Top billing banner ---
      bannerUnlockTitle: '解锁完整 100 个成语故事｜尊享课程权益，随时回看学习。',
      bannerUnlockDesc: '支持 PayPal、Visa、Mastercard 国际信用卡安全支付。内容专为海外华裔儿童打造，带领孩子感受中华语言与文化之美。',
      bannerUnlockBtn: '立即特惠解锁 $59.00',

      // --- Header user info ---
      userAgeLabel: '{userAge} 岁 · 少儿国学',

      // --- Profile welcome card ---
      welcomeBack: '欢迎回来！开启今日的成语美育之旅',
      btnResumeLearning: '继续上次学习',

      // --- Courses tab ---
      freePreviewBadge: '免费试看',
      studyNavTitle: '学习导航',
      themeLabel: '主题 0{id}',
      themeUnlocked: '已点亮',

      // --- Idiom card status ---
      statusReady: '待学',
      statusCompleted: '已点亮印章',
      statusReadNow: '点击开始研读',

      // --- Settings tab: kids profile ---
      profileTitle: '华裔学者专属档案',
      labelChildName: '孩子姓名',
      labelChildAge: '孩子年龄 (推荐：3-10 岁)',
      ageUnit: '岁',
      labelWeeklyGoal: '每周学习目标',

      // --- Settings tab: console ---
      consoleTitle: '教学控制台设置',
      speechRateLabel: '个性化语速调节',
      rateSlow: '舒缓启蒙 (0.6x)',
      rateStandard: '流利标准 (1.0x)',
      rateFast: '思维敏捷 (1.4x)',
      pinyinToggleLabel: '开启随文拼音辅助',
      pinyinToggleDesc: '在卡片和内容上方显示拼音标记',

      // --- Settings tab: reset zone ---
      resetZoneTitle: '教研清空与复位区',
      resetZoneDesc: '这会完全重置所有100首成语的学习打卡历史。',
      btnClearCache: '完全清除学习缓存',

      // --- Idiom story modal ---
      modalVoiceTitle: 'CCTV 播音名师原声播放器',
      modalVoiceDesc: '使用一级甲等普通话发音舒缓慢读，专为磨耳朵定制。',
      moralLabel: '💡 东方智慧启迪与格局：',
      btnMarkUnlearned: '重新标记为未学',
      btnMarkMastered: '标记为已掌握 🎓',
    },
    en: {
      // --- Defaults ---
      defaultUserName: 'Moyu Learner',
      defaultStudyGoal: '2 lessons a day',

      // --- Toasts ---
      toastSpeechUnsupported: 'Browser Speech Synthesis not supported',
      toastProgressReset: 'Course progress reset',
      toastIdiomCompleted: 'Excellent! Medal unlocked.',
      toastAllCompleted: 'Excellent! All 100 idioms completed.',
      toastCacheReset: 'Cache reset completed successfully.',

      // --- Confirm dialogs ---
      confirmReset: 'Are you sure you want to reset all profiles and learning history?',

      // --- Top billing banner ---
      bannerUnlockTitle: 'Unlock all 100 idiom stories | Enjoy premium course benefits and revisit anytime.',
      bannerUnlockDesc: 'Secure payment with PayPal, Visa and Mastercard. Content crafted for overseas Chinese-heritage children to experience the beauty of Chinese language and culture.',
      bannerUnlockBtn: 'Unlock All for $59.00',

      // --- Header user info ---
      userAgeLabel: '{userAge} yrs · Diaspora',

      // --- Profile welcome card ---
      welcomeBack: 'Welcome back! Enjoy today\'s journey into Chinese wisdom.',
      btnResumeLearning: 'Resume Learning',

      // --- Courses tab ---
      freePreviewBadge: 'Free Demo',
      studyNavTitle: 'Learning Navigation',
      themeLabel: 'Theme 0{id}',
      themeUnlocked: 'Unlocked',

      // --- Idiom card status ---
      statusReady: 'Ready',
      statusCompleted: 'Completed',
      statusReadNow: 'Read Now',

      // --- Settings tab: kids profile ---
      profileTitle: 'Kids Personal Profile',
      labelChildName: 'Child Nickname',
      labelChildAge: 'Child Age (Recommend: 3-10 yrs)',
      ageUnit: 'yrs',
      labelWeeklyGoal: 'Weekly Goal',

      // --- Settings tab: console ---
      consoleTitle: 'Pedagogy & Playback Console',
      speechRateLabel: 'Personalized Speech Rate',
      rateSlow: 'Slow (0.6x)',
      rateStandard: 'Standard (1.0x)',
      rateFast: 'Fast (1.4x)',
      pinyinToggleLabel: 'Display Pinyin Aux',
      pinyinToggleDesc: 'Display standard Pinyin guides',

      // --- Settings tab: reset zone ---
      resetZoneTitle: 'Curriculum Progress Reset Zone',
      resetZoneDesc: 'This will reset all complete bookmarks and timelines.',
      btnClearCache: 'Clear All Study History',

      // --- Idiom story modal ---
      modalVoiceTitle: 'Standard CCTV Broadcast Voice Player',
      modalVoiceDesc: 'Slow Mandarin speech specifically designed for listening.',
      moralLabel: '💡 Eastern Wisdom & Global View:',
      btnMarkUnlearned: 'Mark as Unlearned',
      btnMarkMastered: 'Mark as Mastered 🎓',
    },
  },
};

/**
 * 根据 language 获取各模块对应语言的文案对象。
 * 用法：const t = getT(language);  t.header.homeTab / t.footer.privacy / t.home.heroTitle
 */
export function getT(lang: Language) {
  return {
    header: translations.header[lang],
    footer: translations.footer[lang],
    home: translations.home[lang],
    checkout: translations.checkout[lang],
    dashboard: translations.dashboard[lang] as Record<string, string>,
  };
}

export type T = ReturnType<typeof getT>;
