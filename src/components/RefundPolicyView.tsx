'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';
const SITE_URL = 'https://joyofidioms.com';

/**
 * RefundPolicyView — 退款政策页面（中英双语・最终定稿版）
 * 英文为具法律约束力的正式文本；中文仅供阅读参考。
 * 14 天冷静期内可申请退款；课程内容一经完整访问，退款可能被拒绝。
 */
export default function RefundPolicyView() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <LegalLayout
      title={isEn ? 'Refund Policy' : '退款政策'}
      lastUpdated={isEn ? 'Last Updated: 2026-09-20' : '最后更新：2026-09-20'}
      badge={isEn ? 'Legal' : '法律条款'}
      backLabel={isEn ? 'Back to Home' : '返回首页'}
    >
      {isEn ? <EnglishContent /> : <ChineseContent />}

      {/* 法律效力声明 */}
      <p className="mt-10 pt-6 border-t border-border-warm font-sans text-xs text-ink-light/70 leading-relaxed">
        {isEn
          ? 'The English version is the legally binding text. The Chinese translation is provided for reference only.'
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
        This Refund Policy applies to all purchases of digital Chinese idiom courses
        made on{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>
        .
      </p>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        The courses consist of high-definition digital video lessons, providing
        on-demand access for self-paced online learning. The courses do not include
        live real-time classes or one-on-one personalized tutoring services.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Eligibility for Refund
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            This is a one-time digital educational course. Purchasers have a
            14-day cooling-off period after purchase. Refund requests within 14
            days will be reviewed. Once course content is fully accessed,
            refunds may be declined. All payments, refunds and disputes are
            handled by Paddle as Merchant of Record, subject to Paddle&rsquo;s
            buyer terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            How to Request a Refund
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            To submit a refund request, please email{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>{' '}
            and include your order number and registered email address. We will
            review your refund request within 3 business days.
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            Upon approval of your refund request, funds will be processed back to
            your original payment method. Actual arrival time depends on your
            card-issuing bank&rsquo;s processing timeline.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Non-Refundable Scenarios
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>More than 14 calendar days have passed since your purchase.</li>
            <li>The course content has been fully accessed.</li>
            <li>Partial refunds are not offered.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Contact Us
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            If you have any questions regarding this Refund Policy, please contact
            us at:{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {EMAIL}
            </a>
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
        本退款政策适用于在{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>{' '}
        购买中文成语数字课程的所有订单。
      </p>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        本课程为高清数字视频课程，提供随到随学（On-demand
        Access）的在线自主学习体验，不含实时直播授课，亦不提供一对一真人辅导服务。
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            退款资格
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            本产品为一次性购买的数字教育课程。购买后享有 14 天冷静期（cooling-off
            period）。14 天内提交的退款申请将予以审核。课程内容一经完整访问，退款申请可能被拒绝。所有支付、退款与争议均由作为记录商家（Merchant
            of Record）的 Paddle 处理，并受 Paddle 买家条款约束。
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
            ，并在邮件中注明您的订单号与注册邮箱。我们将在 3 个工作日内完成退款申请审核。
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            审核通过后，退款将原路退回至您的原支付账户；实际到账时间取决于发卡银行的处理周期。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            不予退款的情形
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>自购买之日起已超过 14 天。</li>
            <li>您已完整访问课程内容。</li>
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
          </p>
        </section>
      </div>
    </>
  );
}
