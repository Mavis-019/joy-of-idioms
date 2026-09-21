'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';

/**
 * RefundPolicyView — 退款政策页面（中英双语）
 * 英文为具法律约束力的正式文本；中文仅供阅读参考。
 * 7 天内未观看可全额退款；一旦观看不予退款。
 */
export default function RefundPolicyView() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <LegalLayout
      title={isEn ? 'Refund Policy' : '退款政策'}
      lastUpdated={
        isEn ? 'Last Updated: September 20, 2026' : '最后更新：2026年09月20日'
      }
      badge={isEn ? 'Legal' : '法律条款'}
      backLabel={isEn ? 'Back to Home' : '返回首页'}
    >
      {isEn ? <EnglishContent /> : <ChineseContent />}

      {/* 法律效力声明 */}
      <p className="mt-10 pt-6 border-t border-border-warm font-sans text-xs text-ink-light/70 leading-relaxed">
        {isEn
          ? 'English version is the legally binding document. Chinese translation is provided for reference only.'
          : '英文版本为具备法律约束力的正式文本，中文译文仅供阅读参考。'}
      </p>
    </LegalLayout>
  );
}

/* ============================ English ============================ */

function EnglishContent() {
  return (
    <>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-4">
        This Refund Policy applies to all purchases of digital pre-recorded Chinese
        idiom video courses on joyofidioms.com.
      </p>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        Our products are pre-recorded video courses, not live classes, not
        one-on-one tutoring.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Eligibility for Refund
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            You may request a full refund within{' '}
            <strong className="text-charcoal">7 calendar days after purchase</strong>,
            only if you have{' '}
            <strong className="text-charcoal">NOT watched any part</strong> of the
            video course.
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            Once any lesson video has been accessed or watched, refunds will no
            longer be available.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            How to Request a Refund
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            To submit a refund request, email our support team at{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
            . Please include your order number and registered email address in your
            message. We will review your request within 3 business days.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Non-refundable Situations
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>More than 7 days have passed since your purchase.</li>
            <li>You have watched any portion of the pre-recorded video lessons.</li>
            <li>Partial refunds will not be issued.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Contact
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            If you have questions about this refund policy, contact us at{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}

/* ============================ 中文 ============================ */

function ChineseContent() {
  return (
    <>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-4">
        本退款政策适用于在 joyofidioms.com 购买数字预录中文成语视频课程的所有订单。
      </p>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        我们的产品为预录视频课程，非直播授课，非一对一辅导。
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            退款资格
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            仅在购买后
            <strong className="text-charcoal"> 7 个自然日内</strong>，且您
            <strong className="text-charcoal">尚未观看</strong>
            视频课程的任何部分时，您方可申请全额退款。
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            任何一节课件视频一经访问或观看，即不再支持退款。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            如何申请退款
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            如需提交退款申请，请发送邮件至{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
            ，并在邮件中注明您的订单号与注册邮箱。我们将在 3 个工作日内完成审核。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            不予退款的情形
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>自购买之日起已超过 7 天。</li>
            <li>您已观看预录视频课程的任意部分。</li>
            <li>不支持部分退款。</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            联系我们
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            如对本退款政策有任何疑问，请发送邮件至：{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
            。
          </p>
        </section>
      </div>
    </>
  );
}
