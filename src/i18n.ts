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
      tagline: '让每一个成语都散发艺术光芒。通过动画与交互启发童年全局观，传承千年华夏智慧与高雅审美追求。',
      langBtn: '🌐 English (英文)',
      privacy: '隐私政策',
      copyright: '海外版权说明',
      contact: '联系我们',
      feedback: '意见反馈',
      org: '华夏童蒙美育版权所有',

      // 语言切换语音提示（切换到英文时说英文，切换到中文时说中文）
      voiceSwitchToEn: 'Language switched to English.',
      voiceSwitchToZh: '全站语言已一键切换为中文。',

      // 隐私政策弹窗
      privacyTitle: '🔒 隐私政策保护说明',
      privacyLead: '我们高度重视您和您孩子的隐私安全。',
      privacyPoints: [
        { label: '数据收集：', body: '本系统作为一个儿童启蒙学习应用，所有学分、登录天数和徽章记录均保存在本地浏览器缓存中。我们不会主动收集、存储或传输您孩子的任何个人行为轨迹。' },
        { label: '语音接口：', body: '我们的拼音发音导读调用了浏览器原生 SpeechSynthesis 接口，不经过任何第三方云端。您的语音数据是在本地机器中处理的。' },
        { label: '海外未成年人保护：', body: '我们严格遵守 COPPA（儿童在线隐私保护法）和 GDPR 关于儿童隐私的数据规范。不设任何跟踪性第三方广告，拒绝一切垃圾算法推送，给孩子创造一方无广告污染的国风净土。' },
      ],
      privacyClose: '我知道了',

      // 海外版权弹窗
      copyrightTitle: '📜 海外版权与法律保护说明',
      copyrightLead: '「悦读成语」全线课程、美术绘本、音画资产均已注册全球知识产权保护。',
      copyrightPoints: [
        { label: '独家宣纸风手工美术资产：', body: '本站所有展出的国风绘本与故事设计（如《如鱼得水》、《狐假虎威》场景）均由专业团队精心绘制。未经书面授权，禁止进行任何形式的翻录、下载或商业教学使用。' },
        { label: '专业配音资产：', body: '中传配音名师标准的普通话录音、主题曲朗读均受跨国著作权版权保护。本站提供免费试听和完整授权购买服务。' },
        { label: '盗版追究：', body: '我们在北美、欧洲、澳洲等国家均设有知识产权法务顾问。任何剽窃、倒卖本课程或在YouTube等平台盗版分发的主体将受到严厉的法律追究。' },
      ],
      copyrightClose: '接受并返回',

      // 联系我们弹窗
      contactTitle: '📬 联系我们',
      contactDesc: '如果您是海外家长、华文学校负责人，欢迎随时联系我们洽谈教材采购、专属课程开通。',
      contactNameLabel: '您的尊称',
      contactNamePlaceholder: '例如：苏妈妈',
      contactEmailLabel: '联系邮箱',
      contactMsgLabel: '合作诉求 / 留言内容',
      contactMsgPlaceholder: '请输入合作细节或咨询问题...',
      contactSubmit: '投递信息',
      contactSuccessTitle: '✨ 发送成功！',
      contactSuccessDesc: '我们的华裔美育顾问会在 24 小时内回复您的邮箱。',
      contactClose: '关闭',
      contactEmail: 'support@joyofidioms.com',

      // 意见反馈弹窗
      feedbackTitle: '💡 意见与教学反馈',
      feedbackDesc: '我们重视每一位海外家庭的交互与体验反馈。如您对绘本画风、字帖练习或拼音朗读速度有建议，请随时留言。',
      feedbackEmailLabel: '您的邮箱',
      feedbackContentLabel: '意见详情',
      feedbackContentPlaceholder: '写下您的建议或系统优化期望...',
      feedbackSubmit: '提交意见',
      feedbackSuccessTitle: '✨ 感谢您的贡献！',
      feedbackSuccessDesc: '我们已经收录了您的建议，系统优化中将予以考量！',
      feedbackClose: '返回首页',
    },
    en: {
      brandName: 'JOY OF IDIOMS (悦读成语)',
      tagline: 'Let every idiom radiate artistic brilliance. Re-igniting children’s global vision and aesthetic refinement through beautiful watercolor illustrations.',
      langBtn: '🌐 中文 (Chinese)',
      privacy: 'Privacy Policy',
      copyright: 'Overseas Copyright',
      contact: 'Contact Us',
      feedback: 'Opinion Feedback',
      org: 'Diaspora Chinese Kids Aesthetic Inc.',

      voiceSwitchToEn: 'Language switched to English.',
      voiceSwitchToZh: '全站语言已一键切换为中文。',

      privacyTitle: '🔒 Privacy Policy',
      privacyLead: 'We hold child privacy with the utmost importance.',
      privacyPoints: [
        { label: 'Data Collection: ', body: 'As an educational app for child development, all records, study streaks, and badges are securely stored inside your local browser storage. We do not track, collect, or share children’s behavior logs on remote servers.' },
        { label: 'Speech Generation: ', body: 'Our text-to-speech engine calls native browser APIs (SpeechSynthesis) locally, meaning no speech data is sent to outer networks.' },
        { label: 'Underage Safety: ', body: 'We strictly adhere to Children’s Online Privacy Protection Act (COPPA) and GDPR rules. We show zero advertisements, ensuring a clean, focused, and secure environment.' },
      ],
      privacyClose: 'Close',

      copyrightTitle: '📜 Overseas Copyright & IP Statement',
      copyrightLead: 'All visual picture-books, audios, and curriculum assets are protected under global IP laws.',
      copyrightPoints: [
        { label: 'Artistic Hand-Drawn Paintings: ', body: 'The rice-paper textured illustrations exhibited inside the trial videos (e.g. “As Happy as Fish”, “Fox and Tiger”) are original properties. Unlicensed reproduction or commercial distribution is strictly prohibited.' },
        { label: 'Voice Assets: ', body: 'Audio records by Communication University of China speech masters are protected under international copyright treaties.' },
        { label: 'Infringement Enforcement: ', body: 'Legal counselors in North America, Europe, and Oceania are retained to monitor IP theft. Violations on video sharing platforms will lead to standard DMCAs and damages.' },
      ],
      copyrightClose: 'Accept & Close',

      contactTitle: '📬 Contact Us',
      contactDesc: 'Welcome overseas parents and school principals to get in touch for custom curricula & bulk purchases.',
      contactNameLabel: 'Your Name',
      contactNamePlaceholder: 'e.g. Mother Su',
      contactEmailLabel: 'Contact Email',
      contactMsgLabel: 'Your Message',
      contactMsgPlaceholder: 'Please describe your request...',
      contactSubmit: 'Submit message',
      contactSuccessTitle: '✨ Message Sent Successfully!',
      contactSuccessDesc: 'Our family consultant will reply to your inbox within 24 hours.',
      contactClose: 'Close',
      contactEmail: 'support@joyofidioms.com',

      feedbackTitle: '💡 Course & Product Feedback',
      feedbackDesc: 'We treasure every family’s suggestions on brush illustration style, flashcards, or Pinyin speeds.',
      feedbackEmailLabel: 'Your Email',
      feedbackContentLabel: 'Detailed Suggestions',
      feedbackContentPlaceholder: 'Write down your product suggestions...',
      feedbackSubmit: 'Submit Feedback',
      feedbackSuccessTitle: '✨ Thank You for Your Feedback!',
      feedbackSuccessDesc: 'We have securely logged your suggestion to improve the aesthetic hall.',
      feedbackClose: 'Close',
    },
  },

  /* ============================ HomeView ============================ */
  home: {
    zh: {
      heroBadge: '前国家级媒体资深导演 ｜ 广播级视听品质',
      heroTitle: '全球华裔儿童・成语国学启蒙',
      heroFeatureSubtitle: '专为海外孩子定制的系统化中文成语课',
      heroSlogan: '告别零散中文素材，让中文自然生长',
      btnTrial: '立即试听体验',
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
      adv3Desc: '拒绝廉价饱和卡通画风，采用极简高级的正统国风基调。百套原创宣纸质感艺术绘本，沉浸式还原东方美学意境。让孩子日积月累塑造高级审美，涵养东方文化审美底蕴。',
      adv4Title: '全球东方智慧｜赋予孩子终身受用的底蕴与格局',
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
      review1Text: '“之前给她们找过YouTube成语动画，语速太快词汇太本土，画面也机械，孩子根本听不懂。这套成语为海外孩子打造的，场景比较贴合我们的情境，老师讲得太好，语速舒缓、声情并茂，孩子现在成语不仅能听懂，自己还会用。”',
      review1Parent: '苏妈妈 ｜ 7 岁龙凤胎母亲 · 多伦多',
      review2Text: '“对比过十几种中文启蒙资源，唯独这套国风绘本质感惊艳。主讲老师是央视配音师资，普通话一级甲等，经验丰富，不用担心孩子没跟对好老师、学到不标准的口音。比较推荐，是文化底蕴和审美同步提升的好课。”',
      review2Parent: 'Kevin Li ｜ 9 岁男孩父亲 · 洛杉矶',
      review3Text: '“我从没见过这么漂亮的成语内容，之前网上找的内容画风低幼廉价，我和先生都没办法接受，这套很用心。老师的声音有种神奇的治愈力，孩子对中华文化智慧的理解度、表达能力提升非常明显。”',
      review3Parent: '六岁孩子妈妈 · 法兰克福',
      review4Text: '“尝试过自学成语，内容杂乱无章，语言有门槛，让孩子很抗拒。孩子能轻松跟上而且很有趣，他竟然能被吸引住。每天两集解放家长，大幅节省了我的时间。”',
      review4Parent: '吴爸爸 ｜ 4岁 & 8 岁双娃家长 · 奥克兰',

      unlockPromoTitle: '限时特惠・终身权限，一套体系完成海外孩童成语美育启蒙！',
      unlockPromoSubtitle: 'Limited-Time Offer | Lifetime Access: The Ultimate Idiom & Aesthetic Curriculum for Children Overseas.',
      btnPromoUnlock: '立即解锁完整内容',
      price: '$59.00 USD',
      originalPrice: '$99.00 USD',

      // 视听体验区
      avBadge: '',
      avTitle: '成语试听专区',
      avDesc: '原创国风绘本，品读中华成语智慧',

      // 视频卡片 1
      v1Badge: '点击试看',
      v1Title: '盲人摸象',
      v1Desc: '',
      v1Voice: '如鱼得水。好比鱼儿得到了水。用来比喻得到了最适合自己的环境。',
      vSuccess: '试听成功！加赠学分 +10',

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
      pedagogyAction2: '试听分级场景配音...',
      pedagogyAction3: '开启宣纸风漫游艺术配乐...',
      pedagogyAction4: '收听情商实战造句...',

      // 主题卡片
      themeCard1: '自然与奇幻寓言',
      themeCard2: '自我成长与探究',
      themeCard3: '社交与人际智慧',
      themeCard4: '高阶思维与格局',

      // Hero CTA 语音
      voiceTrial: '已为您定位至故事试听区。',
      voiceUnlock: '正在开通尊享版全套课程，永久有效。',
      voiceUnlockPromo: '正在开通尊享版全套课程，包含100课时。',

      // 视频弹窗 1
      m1Topbar: '悦读成语 · 第一课 · 试看',
      m1Pinyin: 'máng rén mō xiàng',
      m1Subtitle: '',
      mCloseBtn: '解锁全部 100 集成语故事，享受终身无限制观看',
      mTip: '提示：再次点击下方暂停键或右上角返回按钮即可退回。',

      // 视频弹窗 2
      m2Topbar: '悦读成语 · 第二课 · 试看',
      m2Pinyin: 'shǒu zhū dài tù',
      m2Subtitle: '',

      // 结账弹窗
      sslPay: 'SSL SECURE PAY',
      sslOnline: '● ONLINE',
      checkoutSuccessTitle: '🎉 支付开通成功！',
      checkoutSuccessDesc: '恭喜您！系统已成功解锁了全部 100 个精选成语，及四大核心主题的完整知识体系。快去个人中心查看点亮的国风徽章吧！',
      checkoutAccount: '授权账户：',
      checkoutScope: '解锁额度：',
      checkoutScopeValue: '100 课时终身授权',
      checkoutStart: '进入系统开始探索',
      securePayBtn: '安全支付 {price}',
      productTitle: '「悦读成语」100课尊享版终身全套',
      productDesc: '包含：绘本动画、字帖、情景互动、名师朗读',
      cardBtn: 'Credit Card (信用卡)',
      paypalBtn: 'PayPal',
      checkoutEmailLabel: '家长授权邮箱',
      cardholderLabel: '持卡人姓名',
      cardNumberLabel: '卡号',
      cvvLabel: 'CVV',
      paypalDesc: '您已选择使用 PayPal 进行海外安全快捷支付。点击下方支付按钮将通过 PayPal 安全托管通道自动完成订单。',
      paypalBadge: '🛡️ PayPal Buyer Protection',
      voiceCheckoutSuccess: '开通成功，欢迎开始成语探索！',

      // 促销区英文副标题（zh 模式下显示的英文行）
      promoLine1: '限时特惠・终身权限',
      promoLine2: '一套体系完成海外孩童成语美育启蒙！',
      promoEnSubtitle: 'Limited-Time Offer | Lifetime Access:',
      promoEnSubtitle2: 'The Ultimate Idiom & Aesthetic Curriculum for Children Overseas.',
    },
    en: {
      heroBadge: 'Former National Media Senior Director | Broadcast-Grade Audio-Visual Quality',
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
      adv3Desc: 'Rejecting cheap, high-saturation cartoon style in favor of minimalist, elegant, and orthodox national art. Hundreds of hand-painted watercolor drawings on rice-paper textures restore the poetic Eastern aesthetic world, nurturing deep cultural and artistic appreciation.',
      adv4Title: 'Global Eastern Wisdom | Empowering Children with Lifelong Depth & Vision',
      adv4Desc: 'Beyond simple rote-memorization, we integrate traditional Chinese wisdom with global universal values. Through bilingual situational analysis, kids grasp Eastern philosophies of life and high-EQ mindsets, raising children rooted in heritage and ready for global competition.',

      themesTitle: 'Four Core Thematic Idiom Systems (100 Lessons)',
      themesSubtitle: 'Step-by-step Chinese philosophy, giving children a lifelong broad mindset.',
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
      review1Text: '"We tried YouTube idiom videos before, but the speed was too fast, vocabulary too local, and drawings looked mechanical. Diaspora kids couldn\'t understand. This course is customized for overseas kids; the contexts match our lives perfectly. The teacher reads beautifully, slowly, and expressively. Now my twins use idioms daily!"',
      review1Parent: 'Mother Su | Mother of 7-yo Twins, Toronto',
      review2Text: '"Compared to dozens of Chinese resources, this national-art watercolor course is breathtaking. The educator is a CCTV-level professional with Class A Mandarin certification. Zero worries about accents. Highly recommended for syncing roots and fine art taste."',
      review2Parent: 'Kevin Li | Father of 9-yo Boy, Los Angeles',
      review3Text: '"I have never seen such beautiful idiom visuals! Standard online videos look extremely cheap, which my husband and I couldn\'t accept. This course is extremely dedicated. The teacher’s voice has a healing magic, boosting my child\'s fluency significantly!"',
      review3Parent: 'Mother of 6-yo child | Frankfurt',
      review4Text: '"Self-teaching was unstructured and hit a language barrier, making my kid hate idioms. But with this, he stays fully engaged and loves it. Running 2 lessons a day liberates parents and saves massive personal hours!"',
      review4Parent: 'Father Wu | Parent of 4 & 8-yo children, Auckland',

      unlockPromoTitle: 'Limited-Time Offer | Lifetime Access: The Ultimate Idiom & Aesthetic Curriculum for Children Overseas.',
      unlockPromoSubtitle: 'A structured, high-quality bilingual curriculum tailored for young learners overseas.',
      btnPromoUnlock: 'Unlock Complete Access Now',
      price: '$59.00 USD',
      originalPrice: '$99.00 USD',

      avBadge: '',
      avTitle: 'Idiom Trial Listening',
      avDesc: 'Original national-style picture books, savoring Chinese idiom wisdom',

      v1Badge: 'Click to Watch',
      v1Title: 'Blind Men and the Elephant',
      v1Desc: '',
      v1Voice: 'As Happy as Fish in Water. Having a perfect environment to flourish.',
      vSuccess: 'Audition Complete! +10 Points',

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

      voiceTrial: 'Let’s enjoy the stories.',
      voiceUnlock: 'Unlocking lifetime full access.',
      voiceUnlockPromo: 'Launching payment portal.',

      m1Topbar: 'Joy of Idioms · Chapter 1 · Free Preview',
      m1Pinyin: 'máng rén mō xiàng',
      m1Subtitle: '',
      mCloseBtn: 'Unlock All 100 Idiom Stories & Lifetime Access',
      mTip: 'Tip: Click below to stop or top-right to claim trial score.',

      m2Topbar: 'Joy of Idioms · Chapter 2 · Free Preview',
      m2Pinyin: 'shǒu zhū dài tù',
      m2Subtitle: '',

      sslPay: 'SSL SECURE PAY',
      sslOnline: '● ONLINE',
      checkoutSuccessTitle: '🎉 Payment Successful!',
      checkoutSuccessDesc: 'Congratulations! You have unlocked the full library of 100 lessons. Head to your Dashboard to check your master badges!',
      checkoutAccount: 'Account:',
      checkoutScope: 'Scope:',
      checkoutScopeValue: '100 Lessons Lifetime',
      checkoutStart: 'Start Exploring Now',
      securePayBtn: 'Securely Pay {price}',
      productTitle: 'Joy of Idioms (100 lessons) Lifetime Full',
      productDesc: 'Includes: visual animations, worksheets, standard audios',
      cardBtn: 'Credit Card (信用卡)',
      paypalBtn: 'PayPal',
      checkoutEmailLabel: 'Parent\'s Email',
      cardholderLabel: 'Cardholder Name',
      cardNumberLabel: 'Card Number',
      cvvLabel: 'CVV',
      paypalDesc: 'You have chosen PayPal. Click below to proceed securely via PayPal gateway.',
      paypalBadge: '🛡️ PayPal Buyer Protection',
      voiceCheckoutSuccess: 'Success! Unlock granted.',

      promoLine1: '限时特惠・终身权限',
      promoLine2: '一套体系完成海外孩童成语美育启蒙！',
      promoEnSubtitle: 'Limited-Time Offer | Lifetime Access:',
      promoEnSubtitle2: 'The Ultimate Idiom & Aesthetic Curriculum for Children Overseas.',
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
      toastFavRemoved: '已取消收藏成语故事',
      toastFavAdded: '成功加入收藏，随时温习！',
      toastProgressReset: '成语状态已重置为未学',
      toastIdiomCompleted: '恭喜孩子完成本节成语！勋章印章已点亮。',
      toastAllCompleted: '太棒了！100个成语已全部掌握！',
      toastNeedSequential: '⚠️ 请先完成前面的成语故事学习，循序渐进哦！',
      toastCheckInSuccess: '签到成功！孩子连续天数加一',
      toastCacheReset: '系统缓存已完全重置！',

      // --- Speech synthesis text ---
      speechIdiomCompleted: '恭喜孩子！学会了成语 {name}',
      speechCheckInSuccess: '签到成功！连续学习天数加一！',
      speechUnlockSuccess: '已成功解锁全套一百个成语故事，祝孩子学习愉快！',

      // --- Payment / checkout ---
      paymentSuccessMsg: '支付成功！100个东方成语故事已为您完整开启。',
      checkoutLoadingMsg: '正在为您完整重构个人中心体验，请稍候...',

      // --- Download alert ---
      alertDownloadSuccess: '✨ 【{fileName}】已成功打包！双语超清高清美学画册及原声包已安全保存至您的下载文件夹。',

      // --- Confirm dialogs ---
      confirmReset: '确定要复位您的个人资料与全部学习进度吗？',

      // --- Top billing banner ---
      bannerUnlockTitle: '解锁完整 100 个成语故事 ｜ 尊享终身无限学权益',
      bannerUnlockDesc: '支持 PayPal / Visa / Mastercard 国际信用卡安全支付。专为海外华裔儿童定制的标准美育音频。',
      bannerUnlockBtn: '立即特惠解锁 $59.00',

      // --- Header user info ---
      userAgeLabel: '{userAge} 岁 · 少儿国学',

      // --- Profile welcome card ---
      welcomeBack: '欢迎回到成语大本营，{userName}',
      currentStage: '当前学习阶段：{theme} ｜ 今日推荐掌握：2个成语（打牢高级表达功底）',
      statTotalProgress: '总进度',
      statStreakDays: '连续学习',
      btnResumeLearning: '继续上次学习',

      // --- Courses tab ---
      coursesSubtitle: '',
      searchPlaceholder: '搜索成语、拼音、英文释义...',
      themeLabel: '主题 0{id}',
      themeUnlocked: '已点亮',

      // --- Study mode ---
      studyModeTitle: '学习导航逻辑 ｜ 双轨学情定制',
      studyModeDesc: '根据孩子中文基础一键切换，循序渐进或全景自由翻阅。',
      btnSequential: '顺序学习 (推荐 3-6 岁)',
      btnFreeBrowsing: '自由选读 (推荐 7-10 岁)',

      // --- Idiom card status ---
      statusReady: '待学',
      statusCompleted: '已点亮印章',
      statusReadNow: '点击开始研读',
      statusNeedUnlock: '需订阅解锁',
      statusLocked: '前置锁定',
      btnUnlockTheme: '解锁本主题其余 22 个高级成语故事',

      // --- Progress tab ---
      dailyPlanTitle: '今日两集解放家长计划',
      taskLabel: '任务 0{index}',
      btnReview: '复习',
      btnLearn: '研学',
      medalTrackTitle: '国风传统美育大勋章',
      medalTrackDesc: '孩子每完成一类，就会点亮对应传统印章。',
      checkInTitle: '每日签到打卡',
      checkInDesc: '培养孩子每日学习好习惯，今日学习完别忘打卡。',
      btnCheckIn: '立即今日打卡',

      // --- Favorites ---
      favoritesTitle: '我的收藏夹',
      favoritesEmpty: '尚未收藏成语，在成语卡片详情页点击心形可收藏。',
      btnListen: '复听',

      // --- Timeline ---
      timelineTitle: '学习时光轴',
      timelineEmpty: '还没有学习记录，赶紧点击成语卡片开始研读吧！',

      // --- Billing tab ---
      billingTitle: '尊贵会员服务与权益中心',
      billingDesc: '订阅畅享100节视频课+配套音频无限回放，全套原创绘本 PDF 可离线下载打印。',
      orderStatusLabel: '当前订单状态',
      statusLifetimeMember: '终身全解锁尊享会员',
      statusTrialUser: '游客试听用户',
      btnSubscribe: '立即订阅 $59',
      orderIdLabel: '订单编号: ORDER_ID_862901',
      expiryLabel: '效期: 终身无限次更新访问',

      // --- Download assets: ebook ---
      ebookTitle: '100个成语双语艺术电子绘本',
      ebookDesc: '超清无水印。特邀专业画师耗时半年精心手绘宣纸质感水墨，并包含完备中英对照、大字注音。支持iPad及高清打印。',
      ebookFileName: '100成语双语艺术电子画卷.pdf',
      packingFile: '打包下载中...',
      btnDownloadEbook: '下载双语超清电子画册 PDF',

      // --- Download assets: audio ---
      audioTitle: 'Mavis央视标准无损MP3原声朗读包',
      audioDesc: '包含全部100首由中传配音名师在专业录音棚灌制的国风音频。语速舒缓、口音纯正。最适合睡前、长途驾车背景播放磨耳朵。',
      audioFileName: 'Mavis成语无损音频包.zip',
      packingFolder: '打包下载中...',
      btnDownloadAudio: '下载无损 MP3 朗读音频包 ZIP',

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
      btnBookmarked: '已加入收藏',
      btnAddBookmark: '加入收藏夹',
      btnMarkUnlearned: '重新标记为未学',
      btnMarkMastered: '标记为已掌握 🎓',

      // --- Checkout modal ---
      checkoutTitle: '👑 升级解锁完整成语美育体系',
      checkoutDesc: '解锁全部 100 首中华大格局成语故事、中传标准播音原声朗读包，以及全套高清宣纸风双语电子画册及工作纸。一次订阅，终身无限次更新访问。',
      checkoutOfferLabel: '限时特惠终身卡',
      labelParentName: '家长姓名',
      placeholderParentName: '例如：苏妈妈',
      labelReceiptEmail: '接收邮箱',
      checkoutSecureNote: '支持万事达、Visa 及 PayPal 安全结算。我们将发送确认账单到您的邮箱。',
      btnCancelUpgrade: '暂不升级',
      btnProcessing: '正在安全结算...',
      btnPayNow: '安全结算 $59.00',
    },
    en: {
      // --- Defaults ---
      defaultUserName: 'Moyu Learner',
      defaultStudyGoal: '2 lessons a day',

      // --- Toasts ---
      toastSpeechUnsupported: 'Browser Speech Synthesis not supported',
      toastFavRemoved: 'Removed from favorites',
      toastFavAdded: 'Added to favorites',
      toastProgressReset: 'Course progress reset',
      toastIdiomCompleted: 'Excellent! Medal unlocked.',
      toastAllCompleted: 'Excellent! All 100 idioms completed.',
      toastNeedSequential: 'Please complete previous idioms first.',
      toastCheckInSuccess: 'Daily check-in completed!',
      toastCacheReset: 'Cache reset completed successfully.',

      // --- Speech synthesis text ---
      speechIdiomCompleted: 'Congratulations! Completed idiom, {name}',
      speechCheckInSuccess: 'Checked in successfully! Streak updated.',
      speechUnlockSuccess: 'Successfully unlocked 100 Chinese idiom stories. Enjoy learning!',

      // --- Payment / checkout ---
      paymentSuccessMsg: 'Payment successful! 100 oriental fables unlocked.',
      checkoutLoadingMsg: 'Loading complete premium dashboard...',

      // --- Download alert ---
      alertDownloadSuccess: '✨ 【{fileName}】packed successfully! High-definition art e-books and native standard recordings have been downloaded.',

      // --- Confirm dialogs ---
      confirmReset: 'Are you sure you want to reset all profiles and learning history?',

      // --- Top billing banner ---
      bannerUnlockTitle: 'Unlock All 100 Chinese Idioms | Lifetime Unlimited Access',
      bannerUnlockDesc: 'Secure checkout with PayPal / Visa / Mastercard. Curated premium aesthetic voice fables.',
      bannerUnlockBtn: 'Unlock All for $59.00',

      // --- Header user info ---
      userAgeLabel: '{userAge} yrs · Diaspora',

      // --- Profile welcome card ---
      welcomeBack: 'Welcome back, {userName}',
      currentStage: 'Current Category: {theme} | Today\'s Goal: 2 Chinese Idioms',
      statTotalProgress: 'Total Progress',
      statStreakDays: 'Streak Days',
      btnResumeLearning: 'Resume Learning',

      // --- Courses tab ---
      coursesSubtitle: '',
      searchPlaceholder: 'Search idioms, Pinyin, English...',
      themeLabel: 'Theme 0{id}',
      themeUnlocked: 'Unlocked',

      // --- Study mode ---
      studyModeTitle: 'Learning Path Control | Adaptive Study Mode',
      studyModeDesc: 'Switch paths according to children\'s foundational levels.',
      btnSequential: 'Sequential (Ages 3-6)',
      btnFreeBrowsing: 'Free Browsing (Ages 7-10)',

      // --- Idiom card status ---
      statusReady: 'Ready',
      statusCompleted: 'Completed',
      statusReadNow: 'Read Now',
      statusNeedUnlock: 'Need Unlock',
      statusLocked: 'Locked',
      btnUnlockTheme: 'Unlock Remaining 22 Stories in This Theme',

      // --- Progress tab ---
      dailyPlanTitle: 'Today\'s 2-Lesson Plan',
      taskLabel: 'Task 0{index}',
      btnReview: 'Review',
      btnLearn: 'Learn',
      medalTrackTitle: 'Aesthetic Medal Track',
      medalTrackDesc: 'Unlock seals for each theme.',
      checkInTitle: 'Daily Study Check-in',
      checkInDesc: 'Cultivate a continuous learning habit.',
      btnCheckIn: 'Check In Today',

      // --- Favorites ---
      favoritesTitle: 'My Bookmarked Stories',
      favoritesEmpty: 'No bookmarked idiom stories yet.',
      btnListen: 'Listen',

      // --- Timeline ---
      timelineTitle: 'Learning Timeline',
      timelineEmpty: 'No learning logs yet.',

      // --- Billing tab ---
      billingTitle: 'Premium Privileges Center',
      billingDesc: 'Subscribe to enjoy 100 video lessons + unlimited audio replay. Full original picture book PDFs available for offline download and printing.',
      orderStatusLabel: 'ORDER STATUS',
      statusLifetimeMember: 'Lifetime Premium Access',
      statusTrialUser: 'Free Trial Access',
      btnSubscribe: 'Subscribe Now $59',
      orderIdLabel: 'Order ID: ORDER_ID_862901',
      expiryLabel: 'Expiry: Lifetime unlimited access',

      // --- Download assets: ebook ---
      ebookTitle: '100 Chengyu Bilingual Art E-Books',
      ebookDesc: 'Watermark-free, high-definition watercolor e-books optimized for prints and tablets.',
      ebookFileName: '100_Chengyu_Bilingual_Aesthetic_Ebook.pdf',
      packingFile: 'Packing file...',
      btnDownloadEbook: 'Download HD Art PDF',

      // --- Download assets: audio ---
      audioTitle: 'Mavis Teacher Standard Audio MP3 Packet',
      audioDesc: 'Lossless audio resources recorded by CUC Speech Master Mavis in standard studio environments.',
      audioFileName: 'Mavis_Chengyu_Master_Speech_Lossless.zip',
      packingFolder: 'Packing folder...',
      btnDownloadAudio: 'Download Lossless Audio Pack',

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
      btnBookmarked: 'Bookmarked',
      btnAddBookmark: 'Bookmark Story',
      btnMarkUnlearned: 'Mark as Unlearned',
      btnMarkMastered: 'Mark as Mastered 🎓',

      // --- Checkout modal ---
      checkoutTitle: '👑 Upgrade to Premium Access',
      checkoutDesc: 'Unlock all 100 Chinese idioms, professional voice recordings, and high-definition watercolor books. Lifetime access with a single payment.',
      checkoutOfferLabel: 'Lifetime Access Offer',
      labelParentName: 'Parent Name',
      placeholderParentName: 'e.g. Mother Su',
      labelReceiptEmail: 'Receipt Email',
      checkoutSecureNote: 'Encrypted secure transactions via Visa, MasterCard and PayPal.',
      btnCancelUpgrade: 'Cancel',
      btnProcessing: 'Processing...',
      btnPayNow: 'Pay $59.00 USD',
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
    dashboard: translations.dashboard[lang] as Record<string, string>,
  };
}

export type T = ReturnType<typeof getT>;
