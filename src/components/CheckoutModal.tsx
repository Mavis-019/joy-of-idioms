/**
 * CheckoutModal — 全站统一结账弹窗
 * 首页所有「解锁」入口与个人中心解锁横幅共用同一弹窗。
 * 用户填写邮箱后唤起 Paddle 官方托管的 overlay 结账弹窗，
 * 信用卡 / PayPal 均在 Paddle 弹窗内完成，本站不承载任何支付表单。
 *
 * 视觉规范：
 * - 商品标题/描述中的数字统一用 Inter 字体（半角比例数字，与汉字排版紧凑）
 * - 锁 / 盾牌图标使用 lucide 单色 SVG 矢量图标，颜色匹配站点主色调
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { initializePaddle, openPaddleCheckout } from '@/lib/checkout';

/** 将文本中的数字片段用 Inter 字体渲染，保证半角数字与汉字排版紧凑 */
function wrapNumbers(text: string): React.ReactNode[] {
  return text.split(/(\d+)/).map((part, i) =>
    /^\d+$/.test(part) ? (
      <span key={i} className="font-inter">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function CheckoutModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const c = t.checkout;
  const [email, setEmail] = useState('');

  const [noteBefore, noteAfter] = c.bottomNote.split('{refundLink}');

  // paddle.js 异步注入 window.Paddle 后尽早完成 Initialize（Paddle.Initialize
  // 内部还需异步加载结账资源，必须留出就绪时间；next/script 的 onLoad 在
  // 生产模式下可能不触发，故用轮询兜底，initializePaddle 自身幂等）
  useEffect(() => {
    const timer = setInterval(() => {
      if (initializePaddle()) clearInterval(timer);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // 唤起 Paddle overlay 结账弹窗（沙盒阶段：test_ 客户端 token + 沙盒 priceId；
    // 内部自动兜底等待 paddle.js 加载并完成初始化）
    await openPaddleCheckout(email);
  };

  return (
    <>
      {/* Paddle v2 结账脚本：购买页面加载，onLoad 后用客户端 token 初始化（沙盒/正式由 token 前缀区分） */}
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={() => initializePaddle()}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-rice rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto premium-shadow"
            >
              {/* 1. 顶部安全标识 */}
              <div className="flex items-center justify-between px-6 py-4 bg-charcoal text-rice">
                <span className="font-sans font-bold text-xs tracking-widest flex items-center gap-2">
                  <Lock className="w-4 h-4 text-secondary shrink-0" />
                  {c.topBadge}
                </span>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-rice/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                {/* 2. 商品标题（数字用 Inter 半角排版） */}
                <h3 className="font-serif font-black text-charcoal text-lg md:text-xl leading-snug">
                  {wrapNumbers(c.productTitle)}
                </h3>

                {/* 3. 产品描述（数字用 Inter 半角排版） */}
                <p className="font-sans text-ink-light text-sm leading-relaxed">
                  {wrapNumbers(c.productDesc)}
                </p>

                {/* 4. 价格 */}
                <div className="font-serif font-black text-primary text-3xl md:text-4xl">
                  {c.price}
                </div>

                {/* 5. 邮箱输入框（仅一个） */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="checkout-email"
                    className="block font-sans text-xs font-semibold text-charcoal"
                  >
                    {c.emailLabel}
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={c.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border-warm bg-rice-darker font-sans text-sm text-charcoal placeholder:text-ink-light/50 focus:outline-none focus:border-primary transition-colors"
                  />
                  {/* 6. 输入框下方提示小字 */}
                  <p className="font-sans text-[11px] text-ink-light/80 leading-relaxed flex items-start gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-primary shrink-0 mt-px" />
                    <span>{c.emailHint}</span>
                  </p>
                </div>

                {/* 7. 主结算按钮：唤起 Paddle overlay 结账弹窗 */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-black text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  {c.payBtn}
                </button>

                {/* 8. 底部保障小字 + 退款政策链接 */}
                <p className="font-sans text-[11px] text-ink-light/80 leading-relaxed flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{noteBefore}</span>
                  <Link href="/refund" className="text-primary font-semibold hover:underline">
                    {c.refundLink}
                  </Link>
                  <span>{noteAfter}</span>
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
