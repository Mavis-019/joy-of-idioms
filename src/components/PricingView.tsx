'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Lock } from 'lucide-react';
import LegalLayout from '@/components/LegalLayout';
import CheckoutModal from '@/components/CheckoutModal';
import { useLanguage } from '@/lib/language-context';

/**
 * PricingView — 课程定价页（/pricing）
 * 公开可访问。展示课程商品、价格与「Paddle 支付服务商验证期」合规提示，
 * 解锁按钮唤起全站统一 CheckoutModal（Paddle overlay 结账）。
 *
 * 视觉规范：
 * - 价格/文案中的数字统一用 Inter 字体（半角比例数字）
 * - 合规提示用琥珀色信息横幅，位于支付按钮上方（中英文页面均显示英文原文，
 *   为 Paddle 支付服务商验证期的审核要求文案）
 */
export default function PricingView() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [showCheckout, setShowCheckout] = useState(false);

  /** 将文本中的数字片段用 Inter 字体渲染，保证半角数字排版紧凑 */
  function wrapNumbers(text: string): React.ReactNode[] {
    return text.split(/(\d+)/).map((part, i) =>
      /^\d+$/.test(part) ? (
        <span key={i} className="font-inter">
          {part}
        </span>
      ) : (
        part
      ),
    );
  }

  const features = [p.feature1, p.feature2, p.feature3, p.feature4];

  return (
    <LegalLayout title={p.title} badge={p.badge} backLabel={p.backLabel}>
      <div className="text-center">
        {/* 1. 商品标题与描述 */}
        <h2 className="font-serif font-black text-charcoal text-2xl md:text-3xl mb-4 leading-snug">
          {wrapNumbers(p.productTitle)}
        </h2>
        <p className="font-sans text-ink-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          {wrapNumbers(p.productDesc)}
        </p>

        {/* 2. 课程权益 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
          {features.map((f) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 rounded-2xl border border-border-warm bg-rice-darker px-5 py-4 text-left"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="font-sans text-charcoal text-sm font-semibold">
                {wrapNumbers(f)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 3. 价格 */}
        <p className="font-sans text-xs font-semibold text-ink-light/80 tracking-widest uppercase mb-3">
          {p.priceLabel}
        </p>
        <div className="flex items-baseline justify-center gap-3 mb-2">
          <span className="font-serif font-black text-primary text-5xl md:text-6xl">
            <span className="font-inter">{p.price}</span>
          </span>
          <span className="font-sans text-ink-light/60 text-xl line-through">
            <span className="font-inter">{p.originalPrice}</span>
          </span>
        </div>
        <p className="font-sans text-xs text-ink-light/80 mb-10">{p.priceNote}</p>

        {/* 4. 合规提示（Paddle 支付服务商验证期・位于支付按钮上方） */}
        <div className="flex items-start gap-3 max-w-xl mx-auto mb-6 rounded-2xl border border-amber-400/50 bg-amber-50 px-5 py-4 text-left">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="font-sans text-amber-900 text-xs md:text-sm leading-relaxed">
            {p.notice}
          </p>
        </div>

        {/* 5. 解锁按钮：唤起 Paddle overlay 结账弹窗 */}
        <button
          onClick={() => setShowCheckout(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-rice font-sans font-black text-sm shadow-lg transition-colors"
        >
          <Lock className="w-4 h-4 shrink-0" />
          {p.unlockBtn}
        </button>
      </div>

      {/* 全站统一结账弹窗（Paddle 托管 overlay 结算） */}
      <CheckoutModal open={showCheckout} onClose={() => setShowCheckout(false)} />
    </LegalLayout>
  );
}
