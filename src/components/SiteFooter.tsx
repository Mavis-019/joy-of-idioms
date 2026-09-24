'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, X, Check, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

/**
 * SiteFooter — 全站唯一统一页脚（中英双语）
 * 在 layout.tsx 全局挂载，每个页面底部只显示这一个页脚。
 * 品牌区（含语言切换）｜快速导航（5 个合规页面 + 版权/联系/反馈弹窗）｜联系方式
 * 三个弹窗文案为最终定稿版（中英对照）。
 */
export default function SiteFooter() {
  const { language, t, toggleLanguage } = useLanguage();
  const footer = t.footer;
  const isZh = language === 'zh';
  const year = new Date().getFullYear();
  const email = 'support@joyofidioms.com';

  // 页脚弹窗状态
  const [showCopyright, setShowCopyright] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  // 法律/导航链接（跟随语言切换）
  const navItems = [
    { href: '/', label: isZh ? '首页' : 'Home' },
    { href: '/about', label: isZh ? '关于我们' : 'About' },
    { href: '/privacy-policy', label: footer.privacy },
    { href: '/terms-of-service', label: isZh ? '服务条款' : 'Terms of Service' },
    { href: '/refund-policy', label: isZh ? '退款政策' : 'Refund Policy' },
  ];

  const linkClass =
    'font-sans text-rice/70 hover:text-rice text-sm transition-colors';

  return (
    <footer className="bg-charcoal text-rice pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* ============ 品牌区 ============ */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-rice font-serif font-black text-lg">悦</span>
              </div>
              <span className="font-serif font-black text-rice text-base">
                {footer.brandName}
              </span>
            </Link>
            <p className="font-sans text-rice/70 text-sm leading-relaxed mb-4">
              {footer.tagline}
            </p>
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rice/30 text-rice hover:bg-rice hover:text-charcoal transition-all font-sans text-xs font-semibold"
            >
              <Globe className="w-3.5 h-3.5" />
              {footer.langBtn}
            </button>
          </div>

          {/* ============ 快速导航 ============ */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-bold text-rice text-sm mb-4 uppercase tracking-wide">
              {isZh ? '快速导航' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowCopyright(true)}
                  className={linkClass}
                >
                  {footer.copyright}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowContact(true);
                    setContactSuccess(false);
                  }}
                  className={linkClass}
                >
                  {footer.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowFeedback(true);
                    setFeedbackSuccess(false);
                  }}
                  className={linkClass}
                >
                  {footer.feedback}
                </button>
              </li>
            </ul>
          </div>

          {/* ============ 联系方式 ============ */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-bold text-rice text-sm mb-4 uppercase tracking-wide">
              {isZh ? '联系方式' : 'Contact'}
            </h4>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-sans text-rice/70 hover:text-rice text-sm transition-colors break-all"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              {email}
            </a>
          </div>
        </div>

        {/* ============ 底部版权条 ============ */}
        <div className="pt-6 border-t border-rice/10 text-center">
          <p className="font-sans text-rice/50 text-xs">
            © {year} {footer.org} All rights reserved.
          </p>
        </div>
      </div>

      {/* ============================ 弹窗 1：海外版权与法律保护说明 ============================ */}
      <AnimatePresence>
        {showCopyright && (
          <FooterModal
            title={isZh ? '海外版权与法律保护说明' : 'Copyright & Legal Protection Notice'}
            onClose={() => setShowCopyright(false)}
          >
            <p className="font-sans text-ink-light text-sm leading-relaxed mb-4">
              {isZh
                ? '「Joy of Idioms（悦读成语）」全线课程，以及课程配套插图画面、出镜人像、音频内容，受多国知识产权法律保护。'
                : 'All Joy of Idioms courses, along with their accompanying illustrative visuals, featured likenesses and audio content, are protected by intellectual property laws across multiple countries.'}
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rice-darker border border-border-warm">
                <p className="font-sans text-charcoal text-sm leading-relaxed">
                  <span className="font-bold text-primary">
                    {isZh ? '独家雅致国风艺术视觉设计' : 'Exclusive Elegant Chinese-Style Visual Design'}
                    ：
                  </span>
                  {isZh
                    ? '本站所有成语故事画面（如《盲人摸象》《守株待兔》场景），创意脚本与视觉设计由我方团队原创完成，为本平台专属数字视觉资产。未经我方书面授权，禁止以任何形式翻录、录屏、提取源文件或用于商业教学用途。'
                    : 'All illustrations and idiom story scenes on this site (including scenes for Blind Men and the Elephant, Waiting for Hares by a Tree Stump) feature original creative scripts and visual designs created by our team as exclusive digital visual assets of this platform. Recording, screen capture, source file extraction and commercial teaching use are prohibited without our written authorization.'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-rice-darker border border-border-warm">
                <p className="font-sans text-charcoal text-sm leading-relaxed">
                  <span className="font-bold text-primary">
                    {isZh ? '专业配音资产' : 'Professional Voiceover Assets'}
                    ：
                  </span>
                  {isZh
                    ? '由中传背景专业配音录制的标准普通话成语故事讲解音频，均受跨国著作权保护。本站提供免费 Demo 试看和完整课程在线授权购买服务。'
                    : 'Standard Mandarin narrations for idiom stories, recorded by a professional voice talent with Communication University of China background, are protected by cross-border copyright law. Free Demo previews and full online course licenses are available for purchase.'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-rice-darker border border-border-warm">
                <p className="font-sans text-charcoal text-sm leading-relaxed">
                  <span className="font-bold text-primary">
                    {isZh ? '盗版维权' : 'Anti-Piracy Enforcement'}
                    ：
                  </span>
                  {isZh
                    ? '我们在北美、欧洲、澳洲等地区均配有知识产权法务顾问。任何剽窃、倒卖课程，或在 YouTube 等平台非法分发盗版内容的主体，我们将依法维权。'
                    : 'We work with IP legal consultants in North America, Europe, Australia and other regions. We will take legal action against any unauthorized copying, resale, or pirated distribution on platforms such as YouTube.'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCopyright(false)}
              className="w-full mt-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm transition-colors"
            >
              {isZh ? '接受并返回' : 'Accept & Return'}
            </button>
          </FooterModal>
        )}
      </AnimatePresence>

      {/* ============================ 弹窗 2：联系我们 ============================ */}
      <AnimatePresence>
        {showContact && (
          <FooterModal
            title={isZh ? '联系我们' : 'Contact Us'}
            onClose={() => {
              setShowContact(false);
              setContactSuccess(false);
            }}
          >
            {!contactSuccess ? (
              <>
                <p className="font-sans text-ink-light text-sm leading-relaxed mb-4">
                  {isZh
                    ? '如果您是海外家长、华文学校负责人，欢迎随时联系我们洽谈机构 / 学校批量采购、课程授权或合作事宜。'
                    : 'If you are an overseas parent or Chinese school administrator, feel free to reach out regarding institutional bulk purchases, course licensing and partnership inquiries.'}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                      {isZh ? '您的尊称' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isZh ? '例如：苏妈妈' : 'e.g. Mom of Sue'}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                      {isZh ? '联系邮箱' : 'Your Email'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                      {isZh ? '合作诉求 / 留言内容' : 'Inquiry / Message'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        isZh
                          ? '请输入合作细节或咨询问题…'
                          : 'Please enter your details or questions...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isZh ? '提交留言' : 'Submit Message'}
                  </button>
                </form>
                <p className="font-sans text-ink-light text-xs leading-relaxed mt-3 text-center">
                  {isZh ? '您提交的信息仅用于回复本次咨询，我们不会未经许可发送营销邮件，详情请查看我们的' : 'Your information will only be used to reply to this inquiry. We will not send unsolicited marketing emails. Please view our '}
                  <Link
                    href="/privacy-policy"
                    className="text-primary font-semibold hover:underline"
                  >
                    {isZh ? '隐私政策' : 'Privacy Policy'}
                  </Link>
                  。
                </p>
                <p className="font-sans text-ink-light text-xs text-center mt-2">
                  <Mail className="w-3.5 h-3.5 inline mr-1" />
                  <a
                    href={`mailto:${email}`}
                    className="text-primary font-semibold hover:underline break-all"
                  >
                    {email}
                  </a>
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-7 h-7 text-rice" />
                </motion.div>
                <h3 className="font-serif font-black text-charcoal text-lg mb-2">
                  {isZh ? '留言已发送' : 'Message Sent'}
                </h3>
                <p className="font-sans text-ink-light text-sm mb-5">
                  {isZh
                    ? '我们已收到您的留言，将尽快回复您的邮箱。'
                    : 'We have received your message and will reply to your email shortly.'}
                </p>
                <button
                  onClick={() => {
                    setShowContact(false);
                    setContactSuccess(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-bold text-sm transition-colors"
                >
                  {isZh ? '好的' : 'OK'}
                </button>
              </div>
            )}
          </FooterModal>
        )}
      </AnimatePresence>

      {/* ============================ 弹窗 3：意见与教学反馈 ============================ */}
      <AnimatePresence>
        {showFeedback && (
          <FooterModal
            title={isZh ? '意见与教学反馈' : 'Feedback & Suggestions'}
            onClose={() => {
              setShowFeedback(false);
              setFeedbackSuccess(false);
            }}
          >
            {!feedbackSuccess ? (
              <>
                <p className="font-sans text-ink-light text-sm leading-relaxed mb-4">
                  {isZh
                    ? '我们重视每一位海外家庭的观看体验反馈。如您对课程画面画风、故事配音讲述节奏等有建议，请随时留言。'
                    : 'We value feedback on viewing experience from every overseas family. If you have suggestions about illustration style, narration pace or other parts of our idiom story courses, please leave your comments.'}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFeedbackSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                      {isZh ? '您的邮箱' : 'Your Email'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-charcoal mb-1.5">
                      {isZh ? '意见详情' : 'Your Feedback'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        isZh
                          ? '写下您的建议或系统优化期望…'
                          : 'Share your suggestions or improvement expectations...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border-warm bg-rice font-sans text-sm text-charcoal focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-secondary hover:bg-secondary-hover text-rice font-sans font-bold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {isZh ? '提交意见' : 'Submit Feedback'}
                  </button>
                </form>
                <p className="font-sans text-ink-light text-xs leading-relaxed mt-3 text-center">
                  {isZh ? '您提交的信息仅用于收集产品反馈，不会未经许可推送营销内容，详情查看' : 'Your submitted information will only be used for product improvement. We will not send unauthorized marketing communications. See our '}
                  <Link
                    href="/privacy-policy"
                    className="text-primary font-semibold hover:underline"
                  >
                    {isZh ? '隐私政策' : 'Privacy Policy'}
                  </Link>
                  。
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-7 h-7 text-rice" />
                </motion.div>
                <h3 className="font-serif font-black text-charcoal text-lg mb-2">
                  {isZh ? '感谢您的反馈' : 'Thank You'}
                </h3>
                <p className="font-sans text-ink-light text-sm mb-5">
                  {isZh
                    ? '感谢您的宝贵意见，我们会认真评估每一条反馈，持续优化课程体验。'
                    : 'Thank you for your valuable feedback. We carefully review every submission to keep improving the course experience.'}
                </p>
                <button
                  onClick={() => {
                    setShowFeedback(false);
                    setFeedbackSuccess(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary-hover text-rice font-sans font-bold text-sm transition-colors"
                >
                  {isZh ? '好的' : 'OK'}
                </button>
              </div>
            )}
          </FooterModal>
        )}
      </AnimatePresence>
    </footer>
  );
}

/* ============================ 子组件：页脚弹窗容器 ============================ */
function FooterModal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-rice rounded-3xl max-w-lg w-full overflow-hidden premium-shadow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-warm sticky top-0 bg-rice z-10">
          <h3 className="font-serif font-bold text-charcoal text-base">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-rice-darker rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-ink-light" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}
