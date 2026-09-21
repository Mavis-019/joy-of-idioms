/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IdiomItem {
  id: string;
  name: string;
  pinyin: string;
  enName: string;
  enDefinition: string;
  zhDefinition: string;
  themeId: 1 | 2 | 3 | 4;
  story: string;
  translation: string;
}

export const THEME_NAMES = {
  1: { zh: '自然与奇幻寓言', en: 'Nature & Animals' },
  2: { zh: '自我成长与探究', en: 'Grit & Growth Mindset' },
  3: { zh: '社交与人际智慧', en: 'Social-Emotional Learning' },
  4: { zh: '高阶思维与格局', en: 'Critical Thinking & Perspective' }
};

export const IDIOMS_LIST: IdiomItem[] = [
  // --- THEME 1: 自然与奇幻寓言 (25 items) ---
  {
    id: 'mangrenmoxiang_item',
    name: '盲人摸象',
    pinyin: 'máng rén mō xiàng',
    enName: 'Blind Men Touching an Elephant',
    enDefinition: 'Claiming to know the whole picture from a single piece of evidence.',
    zhDefinition: '盲人们通过摸大象的局部来推断大象的长相。比喻片面地看问题。',
    themeId: 1,
    story: '几个盲人摸一只温顺的大象。摸到象牙的说大象像大萝卜，摸到耳朵的说像大扇子，摸到腿的说像大柱子，摸到尾巴的说像一根绳子。他们争吵不休，谁也不服谁，其实他们都只摸到了局部。',
    translation: 'Several blind men touched different parts of an elephant. One touching the tusk said it was like a turnip; one touching the ear said it was a fan; one touching the leg said it was a pillar. All were partially right, but totally wrong.'
  },
  {
    id: 'shouzhudaitu_item',
    name: '守株待兔',
    pinyin: 'shǒu zhū dài tù',
    enName: 'Waiting by the Stump for Hares',
    enDefinition: 'Hoping for luck without putting in hard work or effort.',
    zhDefinition: '守在树桩旁等待撞死的兔子。比喻死守狭隘经验，妄想不劳而获。',
    themeId: 1,
    story: '春秋时期，一个农夫在田里干活，忽然看见一只野兔奔跑时撞在树桩上死掉了。农夫高兴极了，从此放下农具，天天守在树桩旁，希望再等到撞死的兔子，结果地里长满了野草，他也成了大家的笑柄。',
    translation: 'A farmer saw a rabbit accidentally run into a tree stump and die. Pleased with his luck, he abandoned his farm work to wait by the stump every day, hoping for another rabbit. His fields grew overgrown, and he got nothing.'
  },
  {
    id: 'huxiaohuwe',
    name: '狐假虎威',
    pinyin: 'hú jiǎ hǔ wēi',
    enName: 'The Fox Borrowing the Tiger\'s Might',
    enDefinition: 'Using other people\'s power or position to bully others.',
    zhDefinition: '狐狸假借老虎的威风去吓唬其他野兽。比喻依仗别人的势力欺压人。',
    themeId: 1,
    story: '森林里一只狐狸被老虎抓住了。狐狸灵机一动说：“天帝派我管理百兽，你若吃我就是违抗天命！不信你跟着我走，看大家怕不怕我。”老虎信以为真，跟着它走。野兽们看见老虎来了纷纷逃跑，老虎却以为它们是怕狐狸。',
    translation: 'A fox was caught by a tiger. The fox claimed to be sent by heaven to rule all beasts, and challenged the tiger to walk behind him. Animals fled in panic upon seeing them. The tiger mistook their fear of him for fear of the fox.'
  },
  {
    id: 'wangyangbulao_item',
    name: '亡羊补牢',
    pinyin: 'wáng yáng bǔ láo',
    enName: 'Mending the Fold After Losing Sheep',
    enDefinition: 'It is never too late to correct a mistake after it happens.',
    zhDefinition: '羊丢了以后再去修补羊圈，还不算晚。比喻受到损失后及时设法补救。',
    themeId: 1,
    story: '一位牧羊人丢了羊，邻居劝他修补羊圈上的破洞。牧羊人觉得羊已经丢了，修也没用。第二天他又丢了一只羊。他非常后悔，赶紧把羊圈修好，从此羊就再也没有丢失过。',
    translation: 'A shepherd lost a sheep through a hole in the pen. He ignored advice to mend it, thinking it useless since the sheep was gone. After losing another sheep the next day, he repaired the hole, and lost no more sheep.'
  },
  {
    id: 'huashetianzu',
    name: '画蛇添足',
    pinyin: 'huà shé tiān zú',
    enName: 'Draw a Snake and Add Feet',
    enDefinition: 'To ruin something by adding unnecessary details.',
    zhDefinition: '画好蛇之后再给它添上脚。比喻多此一举，不但没有好处，反而坏了事。',
    themeId: 1,
    story: '几个人比赛画蛇，谁画得最快就能喝到一壶酒。一个人先画好了，他自作聪明地说：“我还能给蛇添上脚呢！”正在他画脚的时候，第二个人画完了，夺过酒壶说：“蛇本来就没有脚，你画的不是蛇！”',
    translation: 'During a snake-drawing contest with wine as the prize, the first finisher proudly added legs to his snake. Before he could finish, the next contestant grabbed the wine, saying snakes have no feet, disqualifying him.'
  },
  {
    id: 'yeghonghaolong',
    name: '叶公好龙',
    pinyin: 'yè gōng hào lóng',
    enName: 'Lord Ye\'s Love of Dragons',
    enDefinition: 'Professing love for something but fearing the real version.',
    zhDefinition: '叶公表面上极喜欢龙，真龙现身时却吓得半死。比喻表里不一。',
    themeId: 1,
    story: '叶公非常喜欢龙，衣服上、梁柱上都雕刻着龙。天上的真龙听说后十分感动，特意飞到他家里拜访。叶公看到真龙后，却吓得魂飞魄散，转身拔腿就跑。原来他喜欢的并不是真龙，而是像龙的假东西。',
    translation: 'Lord Ye loved dragons so much that his house was covered in dragon patterns. Touched, a real dragon flew down to visit him. Upon seeing it, Ye was terrified and ran away, revealing he only loved the concept of dragons.'
  },
  {
    id: 'duiniutanqin',
    name: '对牛弹琴',
    pinyin: 'duì niú tán qín',
    enName: 'Playing the Lute to a Cow',
    enDefinition: 'Wasting wise words on someone who cannot understand them.',
    zhDefinition: '对着牛弹奏高雅的琴曲。比喻对不懂道理的人讲道理，白费口舌。',
    themeId: 1,
    story: '战国时期音乐家公明仪为牛弹奏清雅的琴曲，牛低头吃草毫无反应。他改弹蚊子和小牛的叫声，牛才竖起耳朵听。原来不是牛聋，而是高雅的曲子不合它的耳朵。',
    translation: 'The musician Gongming Yi played elegant zither music for a grazing cow, but it ignored him. When he switched to imitating mosquitoes and calves, the cow listened attentively. The issue was not deafness, but relevance.'
  },
  {
    id: 'beigongsheying',
    name: '杯弓蛇影',
    pinyin: 'bēi gōng shé yǐng',
    enName: 'Mistaking a Reflection of a Bow for a Snake',
    enDefinition: 'Extreme self-induced suspicion or imaginary fears.',
    zhDefinition: '把酒杯中弓的影子看作是小蛇。比喻疑神疑鬼，自己惊吓自己。',
    themeId: 1,
    story: '乐广请朋友吃饭。朋友回家后生了重病。乐广询问原因，朋友说：“那天喝酒，杯子里有一条蛇，喝下去后就生病了。”乐广回到墙边一看，原来是挂在墙上的弓映在杯子里。他告诉朋友，朋友的病立刻就好了。',
    translation: 'A man fell ill after drinking at a friend\'s house, believing he had swallowed a baby snake seen in his cup. The host later found that a decorative bow hung on the wall reflected in the cup, curing the guest\'s imaginary illness.'
  },
  {
    id: 'tanglangbuchan',
    name: '螳螂捕蝉',
    pinyin: 'táng láng bǔ chán',
    enName: 'The Mantis Stalks the Cicada',
    enDefinition: 'Pursuing narrow immediate gains while ignoring underlying risks.',
    zhDefinition: '螳螂想要捕蝉，却不知道后面有黄雀要吃它。比喻只顾眼前利益不顾后患。',
    themeId: 1,
    story: '一只蝉在树上快乐地喝露水，不知道一只螳螂正悄悄爬向它；螳螂弓着身子准备捕蝉，却不知道一只黄雀正在它身后准备啄食它；而树下拿着弹弓的少年，正瞄准黄雀。大家都只顾眼前利益。',
    translation: 'A cicada drank dew, unaware of a mantis sneaking up. The mantis aimed to catch the cicada, oblivious to a golden oriole behind it. Meanwhile, a boy under the tree was aiming his slingshot at the bird.'
  },
  {
    id: 'jingdizhiwa',
    name: '井底之蛙',
    pinyin: 'jǐng dǐ zhī wā',
    enName: 'A Frog in a Well',
    enDefinition: 'A person with narrow vision and limited knowledge.',
    zhDefinition: '生活在井底的青蛙。比喻眼光狭隘、见识短浅、盲目自大的人。',
    themeId: 1,
    story: '井底住着一只青蛙，它觉得自己的井水生活舒适极了，是世界上最快乐的地方。一天，东海的大鳖来到井边，告诉它大海的辽阔和无边无际。青蛙听了目瞪口呆，终于知道自己是多么渺小。',
    translation: 'A frog lived at the bottom of a well, believing its well was the grandest place on earth. When a sea turtle visited and described the infinite ocean, the frog was astonished and realized its own ignorance.'
  },
  {
    id: 'yubangxiangzheng',
    name: '鹬蚌相争',
    pinyin: 'yù bàng xiāng zhēng',
    enName: 'The Snipe and the Clam Grapple',
    enDefinition: 'When two parties fight, a third party reaps the benefits.',
    zhDefinition: '鹬鸟和河蚌互不相让，结果被渔夫一起抓走。比喻内耗让第三方得利。',
    themeId: 1,
    story: '一只河蚌在沙滩上晒太阳，鹬鸟飞过去啄它的肉。蚌立刻合上壳，夹住了鹬的嘴。鹬说：“今天不下雨明天不下雨，你就会死！”蚌说：“今天不放你明天不放你，你就会死！”两个互不相让，渔夫走过来把它们都抓走了。',
    translation: 'A snipe pecked at a clam on the beach. The clam shut its shell, pinning the bird\'s beak. Both refused to let go, arguing about who would die of dehydration first. A passing fisherman easily gathered both.'
  },
  {
    id: 'jinggongzhinao',
    name: '惊弓之鸟',
    pinyin: 'jīng gōng zhī niǎo',
    enName: 'A Bird Startled by the Bow',
    enDefinition: 'Someone who becomes panicky due to past traumas.',
    zhDefinition: '被弓箭吓坏的大雁。比喻受过惊吓的人，遇到一点动静就非常害怕。',
    themeId: 1,
    story: '神射手更赢陪魏王看鸟。一只大雁飞来，更赢拉开弓弦却不放箭，只是发出响声。大雁听见响声后拼命拍打翅膀，然后坠落在地。更赢说：这只雁受过箭伤，伤口还没好，一听到弓响就吓得拼命飞，伤口崩裂掉了下来。',
    translation: 'A famous archer pulled his bowstring without an arrow, making a sharp sound. A passing goose, startled by the noise, flew erratically and collapsed. The archer explained it was an injured bird, terrified of bows.'
  },
  {
    id: 'qianlvjiqiong',
    name: '黔驴技穷',
    pinyin: 'qián lǘ jì qióng',
    enName: 'The Guizhou Donkey Exhausting Its Tricks',
    enDefinition: 'Running out of limited skills or capabilities under pressure.',
    zhDefinition: '贵州的驴子用尽了本领（只会踢腿）。比喻仅有的一点本领也用完了。',
    themeId: 1,
    story: '贵州以前没有驴。有人带去一匹放在山下。一只饥饿的老虎看见这个庞然大物，有些害怕，暗中观察。一次驴子大叫，老虎吓跑了。后来老虎慢慢摸清了驴子的底细，发现它只会踢腿。老虎扑过去吃掉了它。',
    translation: 'A donkey was brought to Guizhou, where tigers had never seen one. A tiger observed it warily. When the donkey brayed, the tiger was startled, but soon realized its only defense was kicking. The tiger attacked and ate it.'
  },
  {
    id: 'wangmeizhike',
    name: '望梅止渴',
    pinyin: 'wàng méi zhǐ kě',
    enName: 'Quenching Thirst by Thinking of Plums',
    enDefinition: 'Finding temporary relief by imagining something desired.',
    zhDefinition: '想到梅子的酸味就能止住口渴。比喻用空想来安慰自己，暂时解决问题。',
    themeId: 1,
    story: '曹操带兵行军，士兵渴得走不动。他灵机一动说：“前方有片大梅林，梅子又酸又甜！”士兵听了口生津液，暂时不渴了，一鼓作气走到了水源。',
    translation: 'Marching troops were exhausted and thirsty. Cao Cao pointed ahead, claiming a plum forest was nearby. The thought of sour plums made the soldiers salivate, giving them strength to reach water.'
  },
  {
    id: 'zhaoshanmusi',
    name: '朝三暮四',
    pinyin: 'zhāo sān mù sì',
    enName: 'Three in the Morning, Four at Night',
    enDefinition: 'Tricking people by changing names or being fickle.',
    zhDefinition: '早上给三个晚上给四个。比喻玩弄手段进行欺骗，或说话做事经常变卦。',
    themeId: 1,
    story: '养猴子的人给猴子喂橡子，对猴子说：“早上给你们三个，晚上四个，好吗？”猴子们听了非常生气。养猴人改口说：“那早上四个，晚上三个，好吗？”猴子们听了非常高兴。猴子不知道总量其实是一样的。',
    translation: 'A monkey trainer offered his monkeys acorns: "Three in the morning, four in the evening." The monkeys were furious. He quickly changed the offer: "Four in the morning, three in the evening." The monkeys rejoiced.'
  },
  {
    id: 'ruyudeshui_item',
    name: '如鱼得水',
    pinyin: 'rú yú dé shuǐ',
    enName: 'Like a Fish in Water',
    enDefinition: 'Being in a highly compatible environment or company.',
    zhDefinition: '好比鱼儿得到了水。比喻得到了十分投合的人或适合发展的环境。',
    themeId: 1,
    story: '刘备三顾茅庐请出诸葛亮，两人天天在一起讨论国家大事。关羽和张飞有些不高兴。刘备解释说：“我有了孔明，就像鱼儿得到了水一样。希望你们不要再说了。”关羽和张飞这才心服口服。',
    translation: 'Liu Bei sought Zhuge Liang\'s counsel three times. When his generals grew jealous, Liu Bei remarked: "Having Kongming is like a fish finding water." The generals understood and cooperated.'
  },
  {
    id: 'laomashitu',
    name: '老马识途',
    pinyin: 'lǎo mǎ shí tú',
    enName: 'An Old Horse Knows the Way',
    enDefinition: 'Experienced people can guide others through difficult situations.',
    zhDefinition: '老马能认识道路。比喻有经验的人熟悉情况，能在工作中起引导作用。',
    themeId: 1,
    story: '管仲随齐桓公出征迷了路。管仲建议：“老马的智慧可用啊。”于是让人牵出几匹老马走在前面，部队跟着老马，果然找到了回程的路。',
    translation: 'Guan Zhong and Duke Huan of Qi lost their way during a campaign. Guan Zhong suggested letting old horses lead the way. The horses guided the army safely home, proving the value of experience.'
  },
  {
    id: 'dacaojingshe',
    name: '打草惊蛇',
    pinyin: 'dǎ cǎo jīng shé',
    enName: 'Beating the Grass and Startling the Snake',
    enDefinition: 'Alerting the opponent by acting recklessly before acting.',
    zhDefinition: '打草惊动了藏在草里的蛇。比喻做事不谨慎，惊动了对方使其有所戒备。',
    themeId: 1,
    story: '南唐县令王鲁贪污受贿，百姓状告他的下属。他看完状纸写下：“汝虽打草，吾已惊蛇。”意思是：你们虽告下属，我这个上司也被惊动了。后用来比喻行动不慎而走漏风声。',
    translation: 'When citizens sued his subordinate, the corrupt magistrate Wang Lu wrote: "You beat the grass, but I, the snake, am startled." The idiom now means alerting an opponent through careless action.'
  },
  {
    id: 'hualongdianjing_item',
    name: '画龙点睛',
    pinyin: 'huà lóng diǎn jīng',
    enName: 'Bringing the Painted Dragon to Life',
    enDefinition: 'Adding the critical touch that completes a work beautifully.',
    zhDefinition: '画龙时点上眼睛，龙就飞走了。比喻在关键部分加入精辟内容使其更加生动。',
    themeId: 1,
    story: '画家张僧繇在寺庙墙壁上画了四条威风的巨龙，但都没有画眼睛。人们觉得奇怪，请求他补上。张僧繇说：“点上眼睛，龙就会飞走的。”大家不信，他只好给两条龙画上眼睛，顿时电闪雷鸣，两条巨龙凌空飞走。',
    translation: 'Artist Zhang painted four lifelike dragons on a temple wall but left out their pupils. Under pressure, he painted eyes on two dragons. Suddenly, thunder crashed, and the two dragons came to life, flying into the heavens.'
  },
  {
    id: 'yijianshuangdiao',
    name: '一箭双雕',
    pinyin: 'yī jiàn shuāng diāo',
    enName: 'Killing Two Eagles with One Arrow',
    enDefinition: 'Achieving two goals with a single action.',
    zhDefinition: '一支箭射中两只大雕。比喻一举两得，做一件事达到两个目的。',
    themeId: 1,
    story: '北朝长孙晟射箭技艺超群。一天他陪国王打猎，看见两只大雕在空中争夺一块肉。他一箭射去，两只雕同时被钉在地上。众人惊叹不已，称他“一箭双雕”。',
    translation: 'The skilled archer Zhangsun Sheng accompanied the king on a hunt. Spotting two eagles fighting over meat, he fired one arrow, pinning both to the ground. The feat became a symbol of double success.'
  },
  {
    id: 'jinchantuoke',
    name: '金蝉脱壳',
    pinyin: 'jīn chán tuō qiào',
    enName: 'The Golden Cicada Sloughing Its Skin',
    enDefinition: 'Escaping danger by leaving a deceptive appearance behind.',
    zhDefinition: '蝉蜕变时留下外壳。比喻用计谋脱身，留下假象迷惑对方。',
    themeId: 1,
    story: '蝉在蜕变时会留下完整的外壳，自己悄然飞走。三十六计中的“金蝉脱壳”借指在险境中保留假象稳住对手，自己悄悄脱身而走，使敌人察觉时已无可奈何。',
    translation: 'A cicada sheds its shell completely and flies away silently. As a military strategy, it means escaping danger by leaving a deceptive facade to confuse the enemy.'
  },
  {
    id: 'baxianguohai',
    name: '八仙过海',
    pinyin: 'bā xiān guò hǎi',
    enName: 'The Eight Immortals Crossing the Sea',
    enDefinition: 'Each person showing their unique abilities in a challenge.',
    zhDefinition: '八位神仙各显神通渡过大海。比喻做事各人有各人的办法，或各展所长。',
    themeId: 1,
    story: '八仙赴王母蟠桃会归来，需要渡过东海。吕洞宾提议各人不能腾云，须凭自法过海。于是铁拐李抛葫芦，汉钟离摇扇，何仙姑掷荷花……八仙各显神通，乘风破浪过了东海。',
    translation: 'Returning from a heavenly banquet, the Eight Immortals had to cross the Eastern Sea without flying. Each used their own magical treasure to ride the waves, demonstrating unique abilities in a shared challenge.'
  },
  {
    id: 'canghaisangtian',
    name: '沧海桑田',
    pinyin: 'cāng hǎi sāng tián',
    enName: 'The Blue Sea Turns to Mulberry Fields',
    enDefinition: 'The world changes dramatically over the passage of time.',
    zhDefinition: '大海变成了种桑树的田地。比喻世事变化极大，时间久远。',
    themeId: 1,
    story: '仙女麻姑对仙人王远说：“自从上次相见，我已经看见东海三次变成桑田了。刚才经过蓬莱，发现海水又浅了一半。”可见世事变化之巨大，连沧海都会变成桑田。',
    translation: 'The fairy Magu told the immortal Wang Yuan: "Since we last met, I have seen the Eastern Sea turn into mulberry fields three times." The idiom describes the dramatic transformations of the world over vast time.'
  },
  {
    id: 'qiluwangyang',
    name: '歧路亡羊',
    pinyin: 'qí lù wáng yáng',
    enName: 'Losing a Sheep on a Forking Path',
    enDefinition: 'Losing direction in complexity due to too many choices.',
    zhDefinition: '在岔路口丢失了羊。比喻事物复杂多变，没有正确方向就会迷失。',
    themeId: 1,
    story: '杨子的邻居丢了一只羊，叫上许多人去找。杨子问：“为何这么多人？”邻居说：“岔路太多了！”杨子奇怪：“这么多人怎么找不回来？”邻居说：“岔路上又有岔路，不知该走哪条，只好放弃。”',
    translation: 'When Yangzi\'s neighbor lost a sheep, he sent many to find it but failed. He explained that each forking path led to more forks, until no one knew which way to search. The idiom warns how complexity can lead us astray.'
  },
  {
    id: 'huluntunzao',
    name: '囫囵吞枣',
    pinyin: 'hú lún tūn zǎo',
    enName: 'Swallowing a Date Whole',
    enDefinition: 'Accepting information uncritically without understanding.',
    zhDefinition: '把枣子整个吞下。比喻学习时不求甚解，笼统接受。',
    themeId: 1,
    story: '一个人说：“梨对牙好但伤脾，枣对脾好但伤牙。”另一人自作聪明地说：“我吃梨只嚼不咽，吃枣整个吞下，不就两全其美了？”众人笑他囫囵吞枣，没领会食物真正的益处。',
    translation: 'A man noted pears help teeth but harm the spleen, while dates do the opposite. A clever listener claimed he would chew pears without swallowing and swallow dates whole, missing the real lesson and giving rise to the idiom.'
  },

  // --- THEME 2: 自我成长与探究 (25 items) ---
  {
    id: 'bamyiazhuzhang',
    name: '拔苗助长',
    pinyin: 'bá miáo zhù zhǎng',
    enName: 'Pulling Seedlings to Help Them Grow',
    enDefinition: 'Spoiling things by eagerness to achieve quick results.',
    zhDefinition: '把秧苗往上拔以帮助其生长，结果秧苗全枯死了。比喻急于求成适得其反。',
    themeId: 2,
    story: '一个农夫嫌地里的庄稼长得太慢，于是辛辛苦苦忙了一整天，把每棵秧苗都往上拔高了一点。回家后他得意地对家人说：“今天我帮庄稼长高了！”第二天，儿子去地里一看，庄稼全都枯死了。',
    translation: 'A farmer, impatient with his growing crops, spent all day pulling every seedling up a bit. He proudly told his family he helped them grow. The next day, his son went to the field and found all the crops dead.'
  },
  {
    id: 'yugongyishan_item',
    name: '愚公移山',
    pinyin: 'yú gōng yí shān',
    enName: 'The Foolish Old Man Moving Mountains',
    enDefinition: 'Overcoming massive challenges through persistent and tireless effort.',
    zhDefinition: '愚公坚持不懈搬走门前的大山。比喻做事有毅力、不怕困难。',
    themeId: 2,
    story: '九十岁的愚公门前有两座大山挡路，他决定率领全家把山挖平。别人嘲笑他太傻，他却说：“我死了有儿子，儿子死了有孙子，子子孙孙无穷无尽，而山不会增高，还怕挖不平吗？”天帝感动，派神仙移走了大山。',
    translation: 'The 90-year-old Yugong decided to dig up two mountains blocking his front door. When mocked, he replied that his family would carry on generation after generation, while mountains would not grow. Heaven was moved and cleared the mountains.'
  },
  {
    id: 'shuidishichuan',
    name: '水滴石穿',
    pinyin: 'shuǐ dī shí chuān',
    enName: 'Dripping Water Wears Away the Stone',
    enDefinition: 'Constant effort over time achieves monumental results.',
    zhDefinition: '水滴不断滴落，能把石头滴穿。比喻只要坚持不懈，微小的力量也能成就奇迹。',
    themeId: 2,
    story: '房檐上的雨水，总是落在下面同一块石头上。水虽然极其温柔，但每天滴落、千百年不曾停息，终于把坚硬无比的磐石穿出了一个圆洞。它告诉我们，持之以恒的毅力能克服世上所有坚强。',
    translation: 'Soft rain dripping from the roof tile lands repeatedly on the same stone. Despite its gentleness, the persistent action of water over centuries eventually bores through the rock, teaching us the power of consistency.'
  },
  {
    id: 'bantuerfei',
    name: '半途而废',
    pinyin: 'bàn tú ér fèi',
    enName: 'Giving Up Halfway',
    enDefinition: 'Failing to complete a task after starting it.',
    zhDefinition: '半路上就停了下来。比喻做事不能坚持到底，中途放弃。',
    themeId: 2,
    story: '乐羊子出门求学，半年后突然回家。妻子拿起剪刀走到织布机前说：“这绢是一根丝一根丝织成的，剪断就前功尽弃。求学也是一样，半途而废怎么能成才？”乐羊子深受触动，回去连读七年，终成大学者。',
    translation: 'Yue Yangzi returned home after only half a year of study. His wife took scissors to her loom, declaring that cutting the silk would waste all her work. Inspired, he returned and studied for seven more years, becoming a great scholar.'
  },
  {
    id: 'shunengshengqiao',
    name: '熟能生巧',
    pinyin: 'shú néng shēng qiǎo',
    enName: 'Practice Makes Perfect',
    enDefinition: 'Through constant repetition, skill becomes natural and perfect.',
    zhDefinition: '熟练了，就能找到窍门，做出精妙的成果。',
    themeId: 2,
    story: '卖油翁倒油时，把一枚铜钱盖在葫芦口上，然后用勺子舀起油从高处倒下。油像一条线一样穿过钱币中间的方孔落入葫芦，而钱币上一点油也没沾上。老翁笑眯眯地说：“这没什么，只是手熟罢了。”',
    translation: 'An old oil seller poured oil from a high pitcher through the tiny hole of a copper coin without wetting the metal. He smiled and said: "Nothing special, just practice."'
  },
  {
    id: 'zhuanxinzhizhi',
    name: '专心致志',
    pinyin: 'zhuān xīn zhì zhì',
    enName: 'Concentrating Wholeheartedly',
    enDefinition: 'Focusing one\'s attention completely on a task.',
    zhDefinition: '把心思全放在一件事上。形容做事专心，毫不分心。',
    themeId: 2,
    story: '弈秋是全国最好的棋手。他同时教两个学生下棋，一个专心致志，只听弈秋讲解；另一个表面在听，心里却想着天上有天鹅飞过，想拿弓箭去射。两人学习效果天差地别。',
    translation: 'Qiu, the best chess master, taught two students. One focused completely on his teaching, while the other secretly imagined shooting flying swans. Despite having the same teacher, their results were vastly different.'
  },
  {
    id: 'zaobitouguang',
    name: '凿壁偷光',
    pinyin: 'záo bì tōu guāng',
    enName: 'Boring a Hole in the Wall to Steal Light',
    enDefinition: 'Studying diligently despite extreme poverty and hardship.',
    zhDefinition: '在墙壁上凿一个洞借邻居家的光读书。形容贫寒中勤学好学。',
    themeId: 2,
    story: '西汉时期的匡衡家里非常穷，买不起蜡烛。他非常喜欢读书，于是悄悄地在和邻居相隔的墙壁上凿了一个小孔，借着隔壁透过来的一丝烛光，在夜里坚持读书，后来成为了杰出的学者。',
    translation: 'Kuang Heng, too poor to afford candles, chiseled a tiny hole in the wall to let a sliver of light from his neighbor\'s house shine on his books. He studied late into the night and grew up to be a prime minister.'
  },
  {
    id: 'xuanliangcigu',
    name: '悬梁刺股',
    pinyin: 'xuán liáng cì gǔ',
    enName: 'Tying Hair to the Beam and Poking the Thigh',
    enDefinition: 'Studying with extreme determination and self-discipline.',
    zhDefinition: '把头发系在梁上，用锥子刺大腿。形容学习极其刻苦刻苦。',
    themeId: 2,
    story: '孙敬读书时，为了防止打瞌睡，把头发系在屋梁上，头一低就会被扯醒；苏秦为了防困，用锥子刺自己的大腿。他们以此来督促自己刻苦夜读，最终都成为了卓越的思想家与政治家。',
    translation: 'Sun Jing tied his hair to a ceiling beam to wake up whenever he nodded off, while Su Qin poked his thigh with an awl to stay awake. Through such fierce determination, they both became prominent scholars.'
  },
  {
    id: 'wenjiqiwu_item1',
    name: '闻鸡起舞',
    pinyin: 'wén jī qǐ wǔ',
    enName: 'Rising with the Rooster to Practice',
    enDefinition: 'A patriotic or passionate person practicing hard from dawn.',
    zhDefinition: '听到鸡叫声就起床舞剑。形容有志气的人刻苦自励，积极向上。',
    themeId: 2,
    story: '晋朝的祖逖和刘琨胸怀大志，每当深夜听到公鸡啼鸣，他们就立刻起床，在院子里借着月光舞剑。经过长年累月的坚持和勤学苦练，他们终于成为文武双全的栋梁之才，报效了国家。',
    translation: 'In the Jin Dynasty, Zu Ti and Liu Kun woke up every night to practice swordplay in the courtyard the moment they heard the first rooster crow. Their persistence led them to become great leaders.'
  },
  {
    id: 'baifabaizhong',
    name: '百发百中',
    pinyin: 'bǎi fā bǎi zhòng',
    enName: 'A Hundred Shots, A Hundred Hits',
    enDefinition: 'Excellent accuracy; achieving every attempted goal.',
    zhDefinition: '一百次射击，一百次命中。形容射术高超，做事有把握。',
    themeId: 2,
    story: '楚国养由基是神箭手。他能在百步之外射中柳叶，百发百中。旁观的人喝彩，唯独一个老者说：“这可以教他射箭了。”养由基不服。老者说：“你不疲倦吗？不能保持时，一箭不中就前功尽弃了。”',
    translation: 'Yang Youji of Chu could shoot willow leaves from a hundred paces with perfect accuracy. While crowds cheered, an old man said he was ready to teach archery—warning that one missed shot would undo all previous hits, teaching humility.'
  },
  {
    id: 'xiongyouchengzhu_item',
    name: '胸有成竹',
    pinyin: 'xiōng yǒu chéng zhù',
    enName: 'Having a Well-Thought-Out Plan in Mind',
    enDefinition: 'To be calm and prepared because one has a clear strategy.',
    zhDefinition: '画竹子前心里已有竹子的形象。比喻做事之前已有成熟的谋划。',
    themeId: 2,
    story: '宋代画家文同特别擅长画竹子。为了画好竹，他在自家房前屋后种了各种竹，春夏秋冬观察竹叶的变化。每次他提起笔，竹子的千姿百态早已呈现在脑海中，落笔神速，气势非凡。',
    translation: 'The painter Wen Tong grew bamboo around his house, observing it in all seasons. Before picking up his brush, a vivid image of bamboo was already clear in his mind.'
  },
  {
    id: 'paodingjieniu',
    name: '庖丁解牛',
    pinyin: 'páo dīng jiě niú',
    enName: 'Cook Ding Cutting Up an Ox',
    enDefinition: 'Achieving mastery through deep understanding of structure.',
    zhDefinition: '厨师丁分解牛体。比喻经过反复实践，掌握事物规律，得心应手。',
    themeId: 2,
    story: '庖丁为文惠君宰牛，动作像舞，声音像乐。文惠君惊叹其技艺。庖丁说：“我用心神而非眼睛去感知牛的结构，顺着骨节间的空隙下刀，从不碰筋骨，所以刀用了十九年还像新的。”',
    translation: 'Cook Ding carved an ox for King Hui with movements like a dance. He explained he guided his knife through natural gaps in the structure, not forcing it against bone. After nineteen years, his blade remained sharp as new.'
  },
  {
    id: 'ziqiangbuxi',
    name: '自强不息',
    pinyin: 'zì qiáng bù xī',
    enName: 'Ceaseless Self-Improvement',
    enDefinition: 'Striving constantly to grow stronger without giving up.',
    zhDefinition: '自己努力向上，永不懈怠。形容一种积极进取的人生态度。',
    themeId: 2,
    story: '《易经》写道：“天行健，君子以自强不息。”天体运行刚健不辍，君子应效法天道，发愤图强，永不停息地修炼自己，才能在变局中立于不败之地。',
    translation: 'The Book of Changes states: "As Heaven maintains vigor, the noble person strives ceaselessly to strengthen themselves." Emulating the relentless motion of the cosmos, one should never stop improving.'
  },
  {
    id: 'baizhebunaio',
    name: '百折不挠',
    pinyin: 'bǎi zhé bù náo',
    enName: 'Undeterred by a Hundred Setbacks',
    enDefinition: 'Tempering oneself to remain undaunted by repeated failures.',
    zhDefinition: '经历无数次挫折和失败，也绝不屈服退缩。比喻意志极坚强。',
    themeId: 2,
    story: '伟大的科学家在发明创造时，往往要经历成百上千次的实验失败。每一次失败都为他们排除了一个错误答案，支持他们微笑着走向最终的真理。',
    translation: 'Facing failures with an unbreakable smile. Each failure is a stepping stone that eliminates an incorrect path, guiding the learner to truth.'
  },
  {
    id: 'zhixingheyi',
    name: '知行合一',
    pinyin: 'zhī xíng hé yī',
    enName: 'Unity of Knowledge and Action',
    enDefinition: 'True knowledge must be put into practice, and action embodies knowledge.',
    zhDefinition: '认识和行动相统一。比喻知识与实践不能分割，真知必能行。',
    themeId: 2,
    story: '明代大哲学家王阳明提出“知行合一”。他认为知是行的主意，行是知的功夫；知是行之始，行是知之成。光说不做不是真知，真正理解了就一定会去做。',
    translation: 'Philosopher Wang Yangming of the Ming Dynasty taught that knowledge and action are inseparable. Knowing is the beginning of action, and action is the completion of knowing. Understanding without practice is not true knowledge.'
  },
  {
    id: 'houjibofang',
    name: '厚积薄发',
    pinyin: 'hòu jī bó fā',
    enName: 'Accumulate Richly and Break Out Slowly',
    enDefinition: 'Preparing thoroughly before unleashing one\'s potential.',
    zhDefinition: '积累深厚而慢慢释放出来。比喻做足充分准备，厚积而薄发。',
    themeId: 2,
    story: '苏轼说：“博观而约取，厚积而薄发。”竹子在泥土下默默长了四年根，一旦破土，就能在短短几周内长到三十米高。平时的默默无闻都是在积蓄惊人的爆发力。',
    translation: 'Su Shi advised to study broadly but apply precisely. Bamboo spends four years growing its roots deep underground before shooting thirty meters up in weeks. True success takes patient groundwork.'
  },
  {
    id: 'honghuzhizi',
    name: '鸿鹄之志',
    pinyin: 'hóng hú zhī zhì',
    enName: 'Aspirations of the Swan',
    enDefinition: 'Harboring grand, far-reaching ambitions.',
    zhDefinition: '像天鹅飞向高空那样的志向。比喻远大的志向和抱负。',
    themeId: 2,
    story: '陈胜年轻时给人当雇农。一次他对同伴说：“将来要是富贵了，彼此别忘。”同伴笑：“穷打工的哪来富贵？”陈胜叹息：“燕雀安知鸿鹄之志哉！”后来他果然领导了大泽乡起义。',
    translation: 'As a young farmhand, Chen Sheng told his companions not to forget each other if any became rich. Mocked for dreaming, he sighed: "How can swallows and sparrows understand the swan\'s ambition?" He later led a great uprising.'
  },
  {
    id: 'jinshiweikai',
    name: '金石为开',
    pinyin: 'jīn shí wèi kāi',
    enName: 'Even Metal and Stone Can Be Cracked',
    enDefinition: 'Utmost sincerity can move seemingly immovable things.',
    zhDefinition: '金子和石头都能被打开。比喻真诚和毅力能克服任何困难。',
    themeId: 2,
    story: '汉代李广夜里把石头误认为虎，一箭射去，箭头深深扎入石中。白天再射，怎么也射不进去了。原来人在惊惧与专注之间，能激发出超凡的力量，连金石都能射开。',
    translation: 'General Li Guang of Han once mistook a stone for a tiger at night and shot an arrow deep into it. By daylight, no arrow could pierce the stone again. Extreme focus and sincerity can achieve the seemingly impossible.'
  },
  {
    id: 'jushachengta',
    name: '聚沙成塔',
    pinyin: 'jù shā chéng tǎ',
    enName: 'A Pagoda Built from Grains of Sand',
    enDefinition: 'Small contributions accumulate into great achievements.',
    zhDefinition: '把一粒粒沙子聚成一座塔。比喻积少成多，长久坚持就能成就大事。',
    themeId: 2,
    story: '佛经中记载，孩子们把沙子一捧捧堆起来，做成的“塔”也能积福。它启迪我们：再小的善举和努力，只要坚持不懈地累积，就能筑成看似不可能的伟大事业。',
    translation: 'A Buddhist tale describes children gathering sand grain by grain into a pagoda, and even this act earns merit. The idiom reminds us that small efforts, accumulated patiently, build monumental achievements.'
  },
  {
    id: 'yiguzuoqi',
    name: '一鼓作气',
    pinyin: 'yī gǔ zuò qì',
    enName: 'Rousing the Spirit with One Drumbeat',
    enDefinition: 'Pressing forward with one burst of energy without stopping.',
    zhDefinition: '第一次击鼓能振作士气。比喻趁劲头大时一气呵成完成事情。',
    themeId: 2,
    story: '齐鲁长勺之战，曹刿陪同鲁庄公迎战。齐军擂鼓三次进攻，鲁军按兵不动。等到齐军第三次鼓响士气低落时，鲁军才第一次擂鼓，士兵一鼓作气冲杀过去，大败齐军。',
    translation: 'At the Battle of Changshao, Qi attacked with three drumbeats while Lu held back. When Qi\'s spirit faded after the third drum, Lu struck its first drumbeat, sending troops forward with full vigor and winning decisively.'
  },
  {
    id: 'pijingzhanji',
    name: '披荆斩棘',
    pinyin: 'pī jīng zhǎn jí',
    enName: 'Cutting Through Thorns and Brambles',
    enDefinition: 'Overcoming difficulties and clearing obstacles bravely.',
    zhDefinition: '劈开丛生的荆棘。比喻在前进道路上扫除障碍，克服重重困难。',
    themeId: 2,
    story: '汉光武帝刘秀评价大将冯异：“他为我披荆斩棘，平定了无数艰难险阻，才有了今天的关中。”冯异在创业之初，亲冒矢石，砍除荆棘开通道路，立下赫赫战功。',
    translation: 'Emperor Liu Guangwu of Han praised General Feng Yi: "He cut through thorns and brambles to conquer the difficult terrain that gave us our Guanzhong today." Feng Yi had braved arrows to clear paths through wilderness, earning great merit.'
  },
  {
    id: 'zhicungaoyuan',
    name: '志存高远',
    pinyin: 'zhì cún gāo yuǎn',
    enName: 'Aiming High and Far',
    enDefinition: 'To have lofty aspirations and high ideals in life.',
    zhDefinition: '立志要高远。启迪年轻人胸怀宽广，确立宏大的人生目标。',
    themeId: 2,
    story: '三国时期的诸葛亮教育后代：“夫志当存高远。”一个人如果有了远大的抱负，平时的小挫折就无法打倒他，他的眼光就会超越同龄人，走得更宽更远。',
    translation: 'Zhuge Liang taught his children to aim high. Having grand goals helps one overlook small setbacks and elevates one\'s perspective to travel much farther.'
  },
  {
    id: 'deguoqieguo',
    name: '得过且过',
    pinyin: 'dé guò qiě guò',
    enName: 'Muddling Along from Day to Day',
    enDefinition: 'Lacking ambition and just getting by without effort.',
    zhDefinition: '只要能勉强过得去，就暂且这样过下去。形容没有长远志向，敷衍度日。',
    themeId: 2,
    story: '寒号鸟夏天长着漂亮羽毛，得意地唱：“凤凰不如我！”冬天毛都掉光，冻得发抖，却说：“得过且过，得过且过。”第二天太阳出来它又忘了寒冷，结果冻死在岩缝里。',
    translation: 'The legendary "cold-cry bird" boasted in summer: "Even the phoenix is no match for me!" In winter, featherless and shivering, it muttered: "Just get by, just get by." It forgot the cold when the sun returned and froze to death.'
  },
  {
    id: 'maosuizijian',
    name: '毛遂自荐',
    pinyin: 'máo suí zì jiàn',
    enName: 'Mao Sui Recommending Himself',
    enDefinition: 'Volunteering one\'s services with confidence in one\'s abilities.',
    zhDefinition: '毛遂自己推荐自己。比喻自告奋勇，主动承担工作。',
    themeId: 2,
    story: '战国时赵国被秦围困，平原君要去楚国求援，想挑20个门客随行，挑了19人后没人可选。门客毛遂站出来自荐。平原君问：“先生在我这里几年了？”答：“三年。”平原君说：“三年了却没名气，不行。”毛遂说：“请把我放进口袋试试！”',
    translation: 'When Lord Pingyuan needed 20 men to seek aid from Chu, only 19 were chosen. Mao Sui, an obscure guest of three years, recommended himself. Dismissed as unknown, he replied: "Put me in your pocket and you\'ll see what I can do!" He later convinced the King of Chu.'
  },
  {
    id: 'yimingjingren',
    name: '一鸣惊人',
    pinyin: 'yī míng jīng rén',
    enName: 'Amazing the World with a Single Song',
    enDefinition: 'Achieving sudden, remarkable success after long obscurity.',
    zhDefinition: '一叫就让人震惊。比喻平时默默无闻，一下子做出惊人成绩。',
    themeId: 2,
    story: '楚庄王三年不理朝政，还下令敢谏者死。大臣伍举说：“有鸟止高阜，三年不飞不鸣，此何鸟也？”楚庄王答：“三年不飞，飞将冲天；三年不鸣，一鸣惊人。”半年后他亲政，整顿朝纲，楚国大治。',
    translation: 'For three years King Zhuang of Chu neglected state affairs and threatened to kill any advisor who spoke up. Minister Wu Ju hinted: "A bird on a hill—three years, no flight, no song. What bird is this?" The king replied: "It will soar to the sky and amaze the world with one song." He soon reformed the government.'
  },

  // --- THEME 3: 社交与人际智慧 (25 items) ---
  {
    id: 'zixiangmaodun',
    name: '自相矛盾',
    pinyin: 'zì xiāng máo dùn',
    enName: 'The Spear and the Shield',
    enDefinition: 'Contradicting oneself in speeches or actions.',
    zhDefinition: '用自己的矛去刺自己的盾。比喻自己的言行前后抵触，无法自圆其说。',
    themeId: 3,
    story: '楚国一个武器商人叫卖盾牌说：“我的盾特别坚固，世界上任何东西都刺不穿它！”接着他又卖矛说：“我的矛最锋利，什么盾牌都能刺穿！”旁人问：“如果用你的矛去刺你的盾会怎么样？”商人哑口无言。',
    translation: 'A merchant bragged that his shields were impenetrable and his spears could pierce anything. A bystander asked, "What if you stab your shield with your spear?" The merchant was left speechless, demonstrating contradiction.'
  },
  {
    id: 'yanyudaoling_item',
    name: '掩耳盗铃',
    pinyin: 'yǎn ěr dào líng',
    enName: 'Deceiving Oneself like Stealing a Bell',
    enDefinition: 'Deceiving oneself; burying one\'s head in the sand.',
    zhDefinition: '捂住自己的耳朵去偷别人的铃铛。比喻自欺欺人，企图隐瞒事实。',
    themeId: 3,
    story: '一个人看到别人门上挂着漂亮的铃铛，很想去偷。他心想：“去偷铃铛它会响，如果我把自己的耳朵捂住，不就听不见铃声了吗？”于是他捂着耳朵去摘铃铛，结果当场被抓住了。',
    translation: 'A thief wanted to steal a bell. Knowing it would ring when touched, he covered his own ears, believing that if he could not hear the ring, nobody else could. He was caught red-handed.'
  },
  {
    id: 'xiangruyimo',
    name: '相濡以沫',
    pinyin: 'xiāng rú yǐ mò',
    enName: 'Moistening Each Other with Saliva',
    enDefinition: 'Supporting each other through difficult times with mutual care.',
    zhDefinition: '鱼在干涸的水洼里用唾沫互相润湿。比喻在困境中互相救助，患难与共。',
    themeId: 3,
    story: '庄子说：泉水干涸后，鱼儿被困在陆地上，互相用气息湿润对方，用唾沫沾湿彼此。但庄子认为，这不如让它们各自游回大江湖海，相忘于广阔的水中。它形容困境中的患难之情。',
    translation: 'Zhuangzi described fish stranded in a dried-up spring, moistening each other with saliva to survive. While this shows loyalty in adversity, Zhuangzi noted it would be better for them to swim freely in vast waters, forgetting each other in freedom.'
  },
  {
    id: 'gaoshanliushui',
    name: '高山流水',
    pinyin: 'gāo shān liú shuǐ',
    enName: 'High Mountains and Flowing Water',
    enDefinition: 'Finding a soulmate who truly understands your inner world.',
    zhDefinition: '形容琴声高妙，也比喻知己难觅，知音难求。',
    themeId: 3,
    story: '伯牙弹琴，心里想着高山，钟子期说：“巍巍乎若太山！”心里想着流水，子期说：“洋洋乎若江河！”子期死后，伯牙摔破琴再也不弹，因为世上再无知音。高山流水成了知音的象征。',
    translation: 'When Boya played his zither, Ziqi identified the high mountains or flowing rivers in his mind. After Ziqi died, Boya smashed his instrument and never played again, for the world had no ear that could truly understand his music.'
  },
  {
    id: 'tuixinzhibu',
    name: '推心置腹',
    pinyin: 'tuī xīn zhì fù',
    enName: 'Showing Absolute Sincerity',
    enDefinition: 'Treating people with honest, open, and transparent sincerity.',
    zhDefinition: '把自己的心推到别人的肚子去。比喻以真诚待人，赢得信任。',
    themeId: 3,
    story: '光武帝刘秀在平定天下时，对投降过来的降将不加任何防备，甚至亲自去降将的军营里慰问，展现了极大的信任。降将感动地说：“刘秀推心置腹，我们怎能不为他誓死效忠呢？”',
    translation: 'Emperor Guangwu treated surrendered generals with absolute trust, visiting them unarmed. Touched by his sincerity, they swore loyalty to him.'
  },
  {
    id: 'kongrongrangli',
    name: '孔融让梨',
    pinyin: 'kǒng róng ràng lí',
    enName: 'Kong Rong Giving Up the Bigger Pear',
    enDefinition: 'Showing courtesy and respect for elders from a young age.',
    zhDefinition: '孔融四岁时把大梨让给哥哥。形容小孩懂得谦让，尊敬兄长。',
    themeId: 3,
    story: '孔融四岁时，家里分梨吃。他挑了一个最小的梨。父亲问为什么，他回答：“我年纪小，应该吃小的；哥哥年纪大，应该吃大的。”全家都为这个懂事的孩子感到惊奇。',
    translation: 'At age four, Kong Rong picked the smallest pear when the family shared the fruit. Asked why, he replied: "I am the youngest, so I should take the small one. My older brothers deserve the bigger ones." His courtesy amazed the whole family.'
  },
  {
    id: 'lishangwanglai',
    name: '礼尚往来',
    pinyin: 'lǐ shàng wǎng lái',
    enName: 'Reciprocity in Courtesy',
    enDefinition: 'Dealing with others in a spirit of mutual respect and exchange.',
    zhDefinition: '礼节重在相互往来。你对我好，我也真诚地对你好，维护和谐交往。',
    themeId: 3,
    story: '《礼记》中记载：“礼尚往来。往而不来，非礼也；来而不往，亦非礼也。”在华夏社会中，礼貌和善意的对等交换是人际交往最重要的粘合剂。',
    translation: 'True friendship is a two-way street. Exchanging courtesy, kindness, and small tokens of appreciation builds lasting bonds of harmony.'
  },
  {
    id: 'quchangbuduan',
    name: '取长补短',
    pinyin: 'qǔ cháng bǔ duǎn',
    enName: 'Learning from Others\' Strengths to Offset Weaknesses',
    enDefinition: 'Using one\'s strengths to make up for one\'s weaknesses.',
    zhDefinition: '吸取别人的长处来弥补自己的短处。比喻互相学习，共同进步。',
    themeId: 3,
    story: '战国时期，滕国弱小。滕文公问孟子如何治国。孟子说：“今滕，绝长补短，将五十里也，犹可以为善国。”意指取长补短，发挥优势弥补不足，小国也能治理得很好。',
    translation: 'When Duke Wen of Teng asked Mencius how to govern a small state, Mencius replied: "Measure Teng\'s lands by combining long and short sides—it\'s about fifty li. Even so, with wise use of strengths to offset weaknesses, it can become a good state."'
  },
  {
    id: 'xuezhongsongtan',
    name: '雪中送炭',
    pinyin: 'xuě zhōng sòng tàn',
    enName: 'Sending Charcoal in Snowy Weather',
    enDefinition: 'Providing timely help to someone in urgent need.',
    zhDefinition: '下雪天给人送炭取暖。比喻在别人急需时给予物质或精神上的帮助。',
    themeId: 3,
    story: '北宋时大雪纷飞，宋太宗想到孤苦老人受冻，派官员带着木炭和粮食送到贫户家中。老人感动流泪，称这是真正的“雪中送炭”。从此这个成语成了济困解急的代名词。',
    translation: 'During a heavy snowfall, Emperor Taizong of Song remembered the poor suffering in the cold. He sent officials to deliver charcoal and grain to destitute households. The elderly wept with gratitude, and "sending charcoal in snow" became the symbol of timely aid.'
  },
  {
    id: 'yinuoqianjin',
    name: '一诺千金',
    pinyin: 'yī nuò qiān jīn',
    enName: 'A Promise Worth a Thousand Gold Pieces',
    enDefinition: 'Keeping one\'s word faithfully, being extremely trustworthy.',
    zhDefinition: '许下一个诺言价值千两黄金。比喻说话极有信用，言出必行。',
    themeId: 3,
    story: '楚国人季布为人极其守信用，只要他答应了的事，不管有多大困难也一定会做到。当时人们流传一句话：“得到季布的一个承诺，比得到一千两黄金还要珍贵。”',
    translation: 'Ji Bu was so trustworthy that people said his single promise was more precious than a thousand gold pieces. He never broke his word.'
  },
  {
    id: 'sansierxing',
    name: '三思而行',
    pinyin: 'sān sī ér xíng',
    enName: 'Thinking Thrice Before Acting',
    enDefinition: 'Acting only after careful deliberation.',
    zhDefinition: '经过反复思考然后再去做。形容做事谨慎，不草率决定。',
    themeId: 3,
    story: '鲁国大夫季文子遇事总是思考多次才行动。孔子听后说：“思考两次也就可以了。”故事告诉我们：做事要慎重思考，但也不能想得太多而错失时机，关键在把握分寸。',
    translation: 'Ji Wenzi of Lu always thought thrice before acting. Confucius, hearing this, said: "Twice is enough." The story teaches us to deliberate carefully but avoid overthinking, which can lead to missed opportunities.'
  },
  {
    id: 'jianxiansiqi',
    name: '见贤思齐',
    pinyin: 'jiàn xián sī qí',
    enName: 'Emulate Those of Outstanding Virtue',
    enDefinition: 'Seeing an excellent person and striving to be like them.',
    zhDefinition: '看见德行高尚或有才能的人，就想着向他看齐，努力赶上。',
    themeId: 3,
    story: '孔子说：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”看到比自己优秀的人，不要嫉妒，而是要虚心观察对方的长处，化为己有。',
    translation: 'Confucius observed that among any three people, there must be a teacher. Emulate the virtues of the excellent and use the flaws of others to self-reflect.'
  },
  {
    id: 'zeshanercong',
    name: '择善而从',
    pinyin: 'zé shàn ér cóng',
    enName: 'Choosing the Good and Following It',
    enDefinition: 'Selecting what is right and acting on it.',
    zhDefinition: '选择好的意见或做法去做。比喻虚心学习别人的长处。',
    themeId: 3,
    story: '《论语》中孔子说：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”意即与众人同行，其中必有可学习之人，选择他们的优点去效仿，看到缺点则自我反省改正。',
    translation: 'Confucius said in the Analerta: "Among any three walking with me, there must be a teacher. I choose their good qualities and follow them, and observe their flaws to correct my own." The idiom encourages selective learning.'
  },
  {
    id: 'zhengrenmailv',
    name: '郑人买履',
    pinyin: 'zhèng rén mǎi lǚ',
    enName: 'The Man of Zheng Buying Shoes',
    enDefinition: 'Being rigidly dogmatic and ignoring real circumstances.',
    zhDefinition: '郑国人买鞋时宁信量好的尺码，不信自己的脚。比喻死守教条，不顾实际。',
    themeId: 3,
    story: '郑国人想买鞋，先量好脚的尺码放在座位上。出门时忘了带，到了集市才想起，又返回去拿。等他再回集市，集已散了。有人问：“为什么不直接用脚试？”他说：“我宁愿相信尺码，也不相信自己的脚。”',
    translation: 'A man of Zheng measured his foot at home but forgot the measurement when going to buy shoes. After retrieving it, he found the market closed. Asked why he didn\'t try the shoes on his foot, he replied: "I trust the measurement, not my own foot."'
  },
  {
    id: 'shishiqueshi',
    name: '实事求是',
    pinyin: 'shí shì qiú shì',
    enName: 'Seeking Truth from Facts',
    enDefinition: 'Being objective, realistic, and factual in everything.',
    zhDefinition: '从实际情况出发，探求事物的正确答案。比喻脚踏实地，不弄虚作假。',
    themeId: 3,
    story: '东汉班固在《汉书》中赞扬河间献王德行高尚，“修学好古，实事求是”。求学和做科学研究，容不得半点虚假，必须以客观事实为根据，脚踏实地得出真理。',
    translation: 'Praising scholars who investigated history strictly based on artifacts rather than guesswork. True understanding relies on objective, realistic evidence.'
  },
  {
    id: 'tuibisanshe',
    name: '退避三舍',
    pinyin: 'tuì bì sān shè',
    enName: 'Retreating Three She (Thirty Li)',
    enDefinition: 'Making concessions to avoid conflict or show gratitude.',
    zhDefinition: '后退九十里。比喻对人让步，不与人争锋。',
    themeId: 3,
    story: '晋文公重耳流亡楚国时，楚王厚待他。重耳承诺：“若日后晋楚交战，我必先退避三舍（九十里）报恩。”后来晋楚开战，重耳果然下令晋军后退九十里，既报了恩，又诱敌深入，大败楚军。',
    translation: 'During his exile, Chong\'er of Jin promised the King of Chu: "If our states ever fight, I will retreat three she (thirty li) to repay your kindness." Years later, he kept his word before counterattacking, fulfilling both honor and strategy.'
  },
  {
    id: 'tongzhougongji',
    name: '同舟共济',
    pinyin: 'tóng zhōu gòng jì',
    enName: 'Crossing the River in the Same Boat',
    enDefinition: 'Pulling together in times of trouble; mutual cooperation.',
    zhDefinition: '坐同一条船渡河，遇到风浪时像左右手一样互相配合。比喻协力同心共渡难关。',
    themeId: 3,
    story: '吴国人和越国人平时是死对头。一天，他们刚好坐上了同一条船渡河，行至江中忽然刮起了狂风巨浪，小船随时有掀翻的危险。在生死关头，他们忘记了仇恨，像左右手一样默契配合，终于安全靠岸。',
    translation: 'Fierce enemies from Wu and Yue found themselves on the same ferry when a storm hit. Forgetting grudges, they worked like left and right hands to save the boat.'
  },
  {
    id: 'bingshiqianxian',
    name: '冰释前嫌',
    pinyin: 'bīng shì qián xián',
    enName: 'Melting Away Past Grudges Like Ice',
    enDefinition: 'Reconciling and letting go of previous enmity.',
    zhDefinition: '像冰一样融化以前的嫌隙。比喻彼此和解，消除过去的隔阂。',
    themeId: 3,
    story: '古时两位好友因误会反目成仇，多年互不理睬。一日大雪封山，两人共困于一间茅屋。围炉长谈后，他们解开误会，多年的怨恨像冰块在炉边悄然融化，从此冰释前嫌，重归于好。',
    translation: 'Two old friends became enemies over a misunderstanding. Years later, they were trapped together in a snowstorm. Sitting by a fire, they talked through their grievances, and years of resentment melted like ice beside the hearth, restoring their friendship.'
  },
  {
    id: 'jisiguangyi',
    name: '集思广益',
    pinyin: 'jí sī guǎng yì',
    enName: 'Benefiting from Mutual Discussion',
    enDefinition: 'Gathering diverse ideas to make the best possible decisions.',
    zhDefinition: '集中群众的智慧，广泛吸收有益的建议。比喻发挥团队力量。',
    themeId: 3,
    story: '诸葛亮在主持蜀国朝政时，特意设立了“参署”制度，鼓励部下畅所欲言，指出他的缺点和决策中的漏洞。他说：“集思广益，才能把国家治理得更好。”',
    translation: 'Zhuge Liang established open-forum meetings, urging sub-officers to criticize and refine his draft policies to achieve optimal governance.'
  },
  {
    id: 'lanyuchongshu',
    name: '滥竽充数',
    pinyin: 'làn yú chōng shù',
    enName: 'Masquerading as a Flute Player',
    enDefinition: 'Placing an unqualified person in a professional group.',
    zhDefinition: '不会吹竽的人混在乐队里充数。比喻没有真才实学的人混在行家里冒充。',
    themeId: 3,
    story: '齐宣王喜欢听三百人合奏吹竽，南郭先生不会吹，却混在里面装模作样，骗取丰厚赏赐。后来齐湣王继位，他喜欢一个一个听独奏。南郭先生听说了这个消息，害怕露馅，连夜收拾行李逃跑了。',
    translation: 'Mr. Nanguo joined a massive 300-man royal flute orchestra despite not knowing how to play. He pretended to play and got rewarded. When the next king requested solo performances, Nanguo fled in the middle of the night.'
  },
  {
    id: 'gandanxiangzhao',
    name: '肝胆相照',
    pinyin: 'gān dǎn xiāng zhào',
    enName: 'Treating Each Other with Utmost Sincerity',
    enDefinition: 'Being open and honest, sharing absolute loyalty with friends.',
    zhDefinition: '肝与胆互相照耀。比喻真心诚意，坦诚相见，共享甘苦。',
    themeId: 3,
    story: '在古代文学中，肝和胆是紧密相连的器官。人们用肝胆相照来形容真正能托付生死、毫无隐私隐瞒的知己之交，是人际智慧中最高贵的情谊。',
    translation: 'Describing a deep, heroic friendship where both partners are transparent and loyal, willing to risk their lives to protect one another.'
  },
  {
    id: 'qingtongshouzu',
    name: '情同手足',
    pinyin: 'qíng tóng shǒu zú',
    enName: 'Close as Brothers',
    enDefinition: 'Having affection as deep as that between siblings.',
    zhDefinition: '感情像亲兄弟一样深厚。形容朋友之间情谊极为亲密。',
    themeId: 3,
    story: '三国时期，刘备、关羽、张飞桃园三结义，虽不同姓，却立誓“不求同年同月生，但求同年同月死”。三人一生同甘共苦，情同手足，他们的情谊成为千古美谈。',
    translation: 'In the Three Kingdoms era, Liu Bei, Guan Yu, and Zhang Fei swore brotherhood in a peach garden. Though unrelated by blood, they pledged to die on the same day. Their lifelong bond, deep as siblings, became legendary.'
  },
  {
    id: 'chunwangchihan',
    name: '唇亡齿寒',
    pinyin: 'chún wáng chǐ hán',
    enName: 'If the Lips Perish, the Teeth Will Be Cold',
    enDefinition: 'Sharing a common fate; mutual dependence.',
    zhDefinition: '嘴唇没了，牙齿就会感到寒冷。比喻双方关系密切，利害相关。',
    themeId: 3,
    story: '晋国向虞国借道去打虢国。虞国大臣宫之奇劝谏国君：“虞和虢互为屏障，虢国一亡，虞国必跟着灭亡。唇亡齿寒啊！”虞君不听。晋灭虢后回师途中顺便灭了虞国。',
    translation: 'Jin asked Yu for passage to attack Guo. Minister Gong Zhiqi warned: "Yu and Guo are mutual shields. If Guo falls, Yu will follow. Without lips, teeth feel cold!" The duke ignored him, and Jin conquered Yu after Guo.'
  },
  {
    id: 'kaichengbugong',
    name: '开诚布公',
    pinyin: 'kāi chéng bù gōng',
    enName: 'Sincere and Open-Minded',
    enDefinition: 'Communicating with honesty and transparency.',
    zhDefinition: '诚意待人，坦白无私。形容发表意见坦率真诚，毫无隐瞒。',
    themeId: 3,
    story: '三国时期，诸葛亮治理蜀国，对部下和百姓开诚布公，坦诚相待。他赏罚分明，从不偏私，因此深受军民爱戴。即使他执法严格，大家也心服口服，国家得以安定繁荣。',
    translation: 'Governing Shu, Zhuge Liang treated officials and people with absolute sincerity and openness. His rewards and punishments were fair and transparent. Even those he punished respected him, and the state flourished under his honest rule.'
  },
  {
    id: 'chengrenzhimei',
    name: '成人之美',
    pinyin: 'chéng rén zhī měi',
    enName: 'Helping Others Achieve Their Good Wishes',
    enDefinition: 'Assisting others in accomplishing virtuous goals.',
    zhDefinition: '帮助别人做成好事或实现美好的愿望。君子成人之美，不成人之恶。',
    themeId: 3,
    story: '《论语》中孔子说：“君子成人之美，不成人之恶。小人反是。”一位真正的君子，看到别人追求善良的目标，会热心相助；看到别人做坏事，则坚决阻止。这才是真正的朋友之道。',
    translation: 'Confucius said: "The noble person helps others accomplish good deeds, not bad ones. The petty person does the opposite." A true friend supports others\' virtuous aspirations while deterring them from wrongdoing.'
  },

  // --- THEME 4: 高阶思维与格局 (25 items) ---
  {
    id: 'kezhouqiujian',
    name: '刻舟求剑',
    pinyin: 'kè zhōu qiú jiàn',
    enName: 'Carving a Mark on the Boat to Find the Sword',
    enDefinition: 'Sticking stubbornly to old ways in a changing situation.',
    zhDefinition: '在移动的船上刻下记号寻找掉落江中的宝剑。比喻死板教条，不懂变通。',
    themeId: 4,
    story: '楚国人坐船过江，不小心把剑掉进了江里。他立刻在船弦上刻了一个记号，并说：“这是我的宝剑掉下去的地方。”等船靠岸后，他从刻记号的地方跳下去找剑，却怎么也找不到了。',
    translation: 'A traveler dropped his sword into a river from a moving boat. He carved a mark on the boat side, saying "Here is where my sword fell." Once the boat reached the shore, he dove under the mark but could find nothing.'
  },
  {
    id: 'caochongchengxiang',
    name: '曹冲称象',
    pinyin: 'cáo chōng chēng xiàng',
    enName: 'Cao Chong Weighing the Elephant',
    enDefinition: 'Solving a difficult problem with creative thinking.',
    zhDefinition: '曹冲用船和石头称出大象的重量。比喻遇事善于动脑，巧妙解决问题。',
    themeId: 4,
    story: '有人送曹操一头大象，众人都没法称重。曹操七岁的儿子曹冲说：“把象牵到船上，刻下船身下沉的水位；再换石头装到同样水位，分别称石头，总重就是象重。”众人无不叹服。',
    translation: 'When no one could weigh a gift elephant, Cao Cao\'s seven-year-old son Cao Chong proposed: "Load the elephant on a boat and mark the waterline. Then load stones to the same mark—weighing the stones gives the elephant\'s weight." All marveled at his ingenuity.'
  },
  {
    id: 'antusuoji',
    name: '按图索骥',
    pinyin: 'àn tú suǒ jì',
    enName: 'Looking for a Fine Horse by a Picture',
    enDefinition: 'Seeking something mechanically without flexible judgment.',
    zhDefinition: '按照画好的图像去找骏马。比喻做事拘泥成法，不知灵活变通。',
    themeId: 4,
    story: '孙阳（伯乐）写了一本《相马经》。他儿子按书中画的图去找千里马，结果找到一只大癞蛤蟆，兴冲冲回报：“找到千里马啦！就是蹄子不太像！”孙阳哭笑不得。后人以此讽喻死守书本不切实际。',
    translation: 'Sun Yang (Bole) wrote a horse-judging manual. His son followed its pictures to find a legendary horse, but returned excitedly with a large toad, claiming only the hooves looked off. The idiom satirizes rigidly following books without practical judgment.'
  },
  {
    id: 'lejishengbei',
    name: '乐极生悲',
    pinyin: 'lè jí shēng bēi',
    enName: 'Extreme Joy Begets Sorrow',
    enDefinition: 'Happiness carried to extremes turns into sadness.',
    zhDefinition: '高兴到极点就会引出悲伤的事。比喻乐极反而生悲，物极必反。',
    themeId: 4,
    story: '战国时齐威王沉迷酒色，淳于髡劝谏说：“酒极则乱，乐极则悲。”齐威王听后醒悟，从此停止通宵饮酒，专心治理国家。这个故事说明欢乐过度反而带来灾祸，凡事要有节制。',
    translation: 'Lord Wei of Qi indulged in wine and feasting. His advisor Chunyu Kun warned: "Wine to excess brings chaos; joy to excess brings sorrow." The lord reformed his ways. The idiom reminds us that extreme happiness can lead to unexpected misfortune.'
  },
  {
    id: 'nanyuanbeizhe',
    name: '南辕北辙',
    pinyin: 'nán yuán běi zhé',
    enName: 'Going South by Driving the Chariot North',
    enDefinition: 'Acting in a way that defeats one\'s own purpose.',
    zhDefinition: '想去南边，车却朝北开。比喻行动和目的相反，方向错误。',
    themeId: 4,
    story: '有人要去南方的楚国，却驾车向北走。朋友问：“楚国在南边，你怎么向北？”他说：“我的马跑得快！”朋友说：“方向错了，马越快越糟！”他说：“我带的钱多！”朋友说：“钱再多也没用！”他还是不听。',
    translation: 'A man heading to Chu in the south drove his chariot north. His friend protested: "You\'re going the wrong way!" He replied: "My horse is fast, my driver skilled, and I have plenty of money." His friend sighed: "The faster you go, the further from Chu."'
  },
  {
    id: 'qirenyoutian',
    name: '杞人忧天',
    pinyin: 'qǐ rén yōu tiān',
    enName: 'The Man of Qi Who Worried About the Sky',
    enDefinition: 'Unnecessary or baseless anxiety about imaginary disasters.',
    zhDefinition: '杞国有一个人担心天会塌下来压到自己。比喻毫无必要的无端担忧。',
    themeId: 4,
    story: '古代杞国有一个人，整天担心天会突然塌下来，地会陷下去，自己将无处藏身。为此他忧心忡忡，饭也吃不下，觉也睡不着。朋友去开导他，告诉他天地都很稳固，他才恍然大悟放宽了心。',
    translation: 'A man in the State of Qi constantly worried that the sky would collapse or the earth would cave in, leaving him with nowhere to go. His friends reassured him of the earth\'s stability, helping him overcome his useless worry.'
  },
  {
    id: 'saiwengshima_item',
    name: '塞翁失马',
    pinyin: 'sài wēng shī mǎ',
    enName: 'The Old Man on the Frontier Losing His Horse',
    enDefinition: 'A setback may turn out to be a blessing in disguise.',
    zhDefinition: '边塞老人丢了马，后来马带回了野马。比喻祸福相依，坏事能变成好事。',
    themeId: 4,
    story: '塞翁的马丢了，邻居安抚他。他说：“这怎么知道不是福气呢？”后来马带回了一匹好野马。儿子骑马摔断了腿，他说：“这怎么知道不是福气呢？”开战时，断腿的儿子不用当兵，保全了性命。',
    translation: 'Saiweng lost his horse, but wasn\'t discouraged. The horse later returned with a wild mare. His son rode the wild mare and broke his leg, but this kept the son from being drafted to war, saving his life.'
  },
  {
    id: 'juyifansan',
    name: '举一反三',
    pinyin: 'jǔ yī fǎn sān',
    enName: 'Drawing Inferences from One Instance',
    enDefinition: 'Understanding a principle and applying it to multiple domains.',
    zhDefinition: '学会一个道理，能类推到其他三个相似的事情中去。比喻触类旁通。',
    themeId: 4,
    story: '孔子夸奖学生颜回能够“闻一知十”，意指颜回悟性极高。对于高效率的学习者，举一反三是最核心的思维能力，它能让我们跳出死记硬背，触类旁通。',
    translation: 'Confucius praised Yan Hui for his ability to hear one thing and understand ten. Learning a core logic and applying it to multiple contexts is the key to mastery.'
  },
  {
    id: 'weiyuchoumou',
    name: '未雨绸缪',
    pinyin: 'wèi yǔ chóu móu',
    enName: 'Providing for a Rainy Day',
    enDefinition: 'Being prepared before a crisis or emergency occurs.',
    zhDefinition: '天还没下雨，就先修补好门窗。比喻事先做好充分的防备工作。',
    themeId: 4,
    story: '小喜鹊在夏日晴天里，辛辛苦苦地衔来树枝和泥土，把自己的小窝筑得结结实实，还用树皮塞住了缝隙。邻居笑它太累，但到了大雨倾盆、狂风怒吼的冬天，喜鹊在温暖的小屋里安全过冬。',
    translation: 'A magpie worked hard on sunny summer days to strengthen its nest and plug drafts. While other birds mocked its labor, the magpie stayed safe and dry in winter storms.'
  },
  {
    id: 'fangweidujian',
    name: '防微杜渐',
    pinyin: 'fáng wēi dù jiàn',
    enName: 'Nipping the Evil in the Bud',
    enDefinition: 'Preventing minor issues from growing into major disasters.',
    zhDefinition: '在坏思想、坏事刚露头时就加以防止，杜绝其发展。',
    themeId: 4,
    story: '扁鹊拜见蔡桓公，发现他皮肤有微小的病，劝他医治，蔡桓公不信。过了十天病到肌肉，桓公仍不治。最后病入骨髓，扁鹊自知无力回天。它告诫我们要防微杜渐，尽早解决隐患。',
    translation: 'The physician Bian Que noticed a tiny skin illness in Duke Cai and urged treatment. The Duke ignored him. The illness spread into his bones, and became fatal.'
  },
  {
    id: 'lianglierxing',
    name: '量力而行',
    pinyin: 'liàng lì ér xíng',
    enName: 'Acting According to One\'s Ability',
    enDefinition: 'Doing only what one is realistically capable of.',
    zhDefinition: '衡量自己的能力去做。比喻做事实事求是，不逞强。',
    themeId: 4,
    story: '春秋时，左师触龙劝说赵太后送长安君到齐国做人质，理由是：“父母之爱子，则为之计深远。”为子女长远考虑，就要让他们量力而行地承担国事，建立功业，将来才能立足。',
    translation: 'Minister Chu Long persuaded Queen Zhao of Chu to send her son to Qi as a hostage, arguing: "True parental love plans for the long term." Children should take on responsibilities within their capability to build their future foundations.'
  },
  {
    id: 'xunxujianjin',
    name: '循序渐进',
    pinyin: 'xún xù jiàn jìn',
    enName: 'Advancing Step by Step',
    enDefinition: 'Making steady, methodical progress in studies.',
    zhDefinition: '按照一定的步骤和顺序慢慢深入提高。比喻踏踏实实。',
    themeId: 4,
    story: '建造高楼大厦，必须从打地基开始，一层一层往上建。求学也是如此，先学会最基础的字词，再学成语、文章，最后才能融会贯通，不可急于求成。',
    translation: 'Building a grand skyscraper starts with laying a solid foundation and going up level by level. True learning proceeds in an orderly, stable progression.'
  },
  {
    id: 'jingyiqiujing',
    name: '精益求精',
    pinyin: 'jīng yì qiú jīng',
    enName: 'Striving for Ever Greater Perfection',
    enDefinition: 'Constantly refining and improving one\'s work.',
    zhDefinition: '已经很完美了，还要追求更加完美。比喻对技术、学问精益求精。',
    themeId: 4,
    story: '古代雕刻玉石，切磋琢磨，做到精致后还要继续细细打磨。孔子的学生子贡用这个成语来形容道德修养应该不断提高，做到好上加好，技术和做人都要追求卓越。',
    translation: 'The ancient art of carving jade required continuous refining, polishing, and smoothing. The idiom encourages us to never settle for "good enough" but constantly strive for ultimate perfection in skill and character.'
  },
  {
    id: 'chengfengpolang',
    name: '乘风破浪',
    pinyin: 'chéng fēng pò làng',
    enName: 'Riding the Wind and Breaking the Waves',
    enDefinition: 'Bravely advancing through difficulties toward ambitious goals.',
    zhDefinition: '顺着风势破浪前进。比喻志向远大，不怕困难，奋勇前进。',
    themeId: 4,
    story: '南朝宗悫少年时，叔父问他志向，他答：“愿乘长风破万里浪！”叔父赞他日后必成大器。后来他果然成为一代名将，征战四方，立下赫赫战功。',
    translation: 'As a youth, Zong Que of the Southern Dynasties told his uncle: "I wish to ride the wind and break ten-thousand-li waves!" His uncle praised his ambition. Zong Que grew up to become a famous general who won great victories on the battlefield.'
  },
  {
    id: 'haikuotiankong',
    name: '海阔天空',
    pinyin: 'hǎi kuò tiān kōng',
    enName: 'As Boundless as the Sea and Sky',
    enDefinition: 'Vast, open-minded, and unrestricted thinking.',
    zhDefinition: '像海一样辽阔，像天一样空旷。形容胸怀宽广，或谈话漫无边际。',
    themeId: 4,
    story: '古代文人漫游名山大川，面对大海和苍穹，感叹天地之辽阔无垠。后来人们用“海阔天空”形容人胸怀博大、思想开放，或形容谈话天南海北、毫无拘束。',
    translation: 'Ancient scholars wandering among mountains and seas marveled at the boundless sky and ocean. The idiom now describes an open, broad mind or a far-ranging, free-flowing conversation without restriction.'
  },
  {
    id: 'dongshanzaiqi',
    name: '东山再起',
    pinyin: 'dōng shān zài qǐ',
    enName: 'Staging a Comeback from the Eastern Mountain',
    enDefinition: 'Returning to power or success after a setback.',
    zhDefinition: '退隐后再次出任要职。比喻失败后重新恢复地位或势力。',
    themeId: 4,
    story: '东晋名士谢安隐居东山多年，朝廷多次征召都不出山。直到前秦大军压境，他才应召出山，指挥淝水之战大败敌军，名震天下。“东山再起”由此而来，成为重新崛起的代名词。',
    translation: 'The Jin scholar Xie An lived in seclusion on Eastern Mountain for years, refusing official posts. Only when enemy forces threatened the state did he return, masterminding the decisive Battle of Feishui. "Rising again from Eastern Mountain" became the symbol of a triumphant return.'
  },
  {
    id: 'zhongliudizhu',
    name: '中流砥柱',
    pinyin: 'zhōng liú dǐ zhù',
    enName: 'A Pillar in Mid-Stream',
    enDefinition: 'A strong, dependable figure holding firm in turbulent times.',
    zhDefinition: '黄河中的砥柱山任凭激流冲击屹立不动。比喻在动荡中起支柱作用的人或力量。',
    themeId: 4,
    story: '黄河三门峡激流中有一座砥柱山，任凭洪流冲击，巍然不动。古人以此比喻在动荡时局中能稳住大局的核心人物。今天它仍代表那些在风浪中坚定立场、起支柱作用的人。',
    translation: 'In the rapids of the Yellow River\'s Sanmen Gorge stood Mount Dizhu, unmoved by the roaring current. Ancient people used it to describe key figures who hold steady in turbulent times—still a symbol of steadfast leadership today.'
  },
  {
    id: 'luoyangzhigui',
    name: '洛阳纸贵',
    pinyin: 'luò yáng zhǐ guì',
    enName: 'Luoyang Paper Becomes Expensive',
    enDefinition: 'A literary work becoming wildly popular upon publication.',
    zhDefinition: '洛阳的纸因为人们争相抄写而涨价。比喻作品广为流传，风行一时。',
    themeId: 4,
    story: '西晋左思写《三都赋》，构思十年方成。作品一出，洛阳豪贵竞相抄写，导致纸价大涨。这个故事说明好作品自有万钧之力，能引发全社会的轰动与共鸣。',
    translation: 'Left Si of the Western Jin spent ten years writing the "Rhapsody on the Three Capitals." Once published, nobles in Luoyang rushed to copy it, driving up paper prices. The idiom describes a work whose popularity sweeps society.'
  },
  {
    id: 'caomujiebing',
    name: '草木皆兵',
    pinyin: 'cǎo mù jiē bīng',
    enName: 'Every Bush and Tree Looks Like an Enemy',
    enDefinition: 'Being paranoid and seeing danger everywhere due to fear.',
    zhDefinition: '把草木都当成敌兵。形容极度惊慌时疑神疑鬼，害怕至极。',
    themeId: 4,
    story: '淝水之战中，前秦苻坚大败，逃到寿阳城。他登城远望晋军阵容严整，又回头看北面八公山，觉得山上的草木晃动都像晋兵。他叹道：“这也是强敌啊！”这就是草木皆兵的由来。',
    translation: 'After his defeat at the Battle of Feishui, Fu Jian of Former Qin fled to Shouyang. From the city wall, the disciplined Jin army looked formidable, and the swaying grass and trees on Bagong Mountain seemed to be enemy soldiers. He sighed: "These too are powerful foes."'
  },
  {
    id: 'pengchengwanli',
    name: '鹏程万里',
    pinyin: 'péng chéng wàn lǐ',
    enName: 'A Roc\'s Journey of Ten Thousand Li',
    enDefinition: 'A bright future with boundless prospects ahead.',
    zhDefinition: '大鹏鸟能飞万里远。比喻前程远大，事业辉煌。',
    themeId: 4,
    story: '《庄子》中描写：北海有大鱼名鲲，化为鸟名鹏，背若泰山，翼若垂天之云。它一飞冲天，飞往南冥，一去就是万里。后人以“鹏程万里”祝福前程远大、前途光明。',
    translation: 'In Zhuangzi\'s tale, a giant fish named Kun in the Northern Sea transformed into a roc named Peng, with wings like clouds covering the sky. It soared skyward and flew ten thousand li to the Southern Sea. The idiom blesses someone with a brilliant future.'
  },
  {
    id: 'jiazhiliancheng',
    name: '价值连城',
    pinyin: 'jià zhí lián chéng',
    enName: 'Worth a String of Cities',
    enDefinition: 'Incredibly precious and valuable beyond measure.',
    zhDefinition: '价值等于多座城池。形容物品极为珍贵，价值无法估量。',
    themeId: 4,
    story: '战国时楚人卞和得一块璞玉，献给楚王，琢成“和氏璧”。赵国得到后，秦王愿以十五座城池换取。蔺相如带璧赴秦，发现秦王无意割城，巧妙“完璧归赵”。“价值连城”由此流传。',
    translation: 'Bian He of Chu found an uncut jade that became the famous Heshi Bi. When Zhao obtained it, the King of Qin offered fifteen cities in exchange. Lin Xiangru discovered the king\'s deception and returned the jade intact, giving rise to the idiom for priceless treasure.'
  },
  {
    id: 'yiyezhiqiu',
    name: '一叶知秋',
    pinyin: 'yī yè zhī qiū',
    enName: 'A Single Leaf Heralds Autumn',
    enDefinition: 'Perceiving large trends from small signs.',
    zhDefinition: '看见一片落叶就知道秋天来了。比喻从微小的迹象推断事物的发展趋势。',
    themeId: 4,
    story: '《淮南子》记载：“见一叶落而知岁之将暮。”看见一片树叶飘落，就知道一年将尽、秋天到来。这种从微小迹象把握大势的智慧，启迪人们要善于观察细节、洞察全局。',
    translation: 'The Book of Huainanzi notes: "Seeing a single leaf fall, one knows the year is ending." From one falling leaf, autumn is foretold. The idiom celebrates the wisdom of grasping large trends from small signs.'
  },
  {
    id: 'mingbianshifei',
    name: '明辨是非',
    pinyin: 'míng biàn shì fēi',
    enName: 'Clearly Distinguishing Right from Wrong',
    enDefinition: 'Having clear judgment about what is true and false.',
    zhDefinition: '清楚地分辨对错。比喻有清醒的头脑，能正确判断是非善恶。',
    themeId: 4,
    story: '孟子说：“是非之心，智之端也。”能够辨别是非是智慧的开端。一位真正的智者，遇事能冷静分析，明辨是非善恶，不被表面现象迷惑，做出正确的判断和选择。',
    translation: 'Mencius said: "The heart that distinguishes right and wrong is the beginning of wisdom." A true sage analyzes calmly, clearly distinguishing truth from falsehood, unmoved by appearances, and makes sound judgments.'
  },
  {
    id: 'shuiluoshichu',
    name: '水落石出',
    pinyin: 'shuǐ luò shí chū',
    enName: 'When Water Recedes, Stones Emerge',
    enDefinition: 'The truth coming to light after investigation.',
    zhDefinition: '水退下去，石头就露出来。比喻事情的真相彻底显露出来。',
    themeId: 4,
    story: '苏轼在《后赤壁赋》中写道：“山高月小，水落石出。”描绘了冬天水位下降后江中石头露出的景象。后人用“水落石出”比喻经过一段时间后，事情的真相终于大白于天下。',
    translation: 'Su Shi wrote in his "Second Ode to the Red Cliff": "The mountain is high, the moon is small, the water recedes and the stones emerge." Later, the phrase came to mean the truth surfacing after investigation or the passage of time.'
  },
  {
    id: 'yuanmuqiuyu',
    name: '缘木求鱼',
    pinyin: 'yuán mù qiú yú',
    enName: 'Climbing a Tree to Catch a Fish',
    enDefinition: 'Pursuing a goal using methods that cannot possibly work.',
    zhDefinition: '爬到树上去找鱼。比喻方向或方法不对，永远达不到目的。',
    themeId: 4,
    story: '孟子对齐宣王说：“大王想用武力征服天下，就像爬上树去找鱼一样。”齐宣王问：“有这么严重吗？”孟子说：“爬树找鱼虽找不到，但没有后灾；用武力求霸，却会招致大祸。”',
    translation: 'Mencius told King Xuan of Qi: "Your Majesty seeking hegemony through war is like climbing a tree to catch a fish." Surprised, the king asked if it was that bad. Mencius replied: "Climbing trees wastes effort but causes no harm; waging war for hegemony invites disaster."'
  }
];
