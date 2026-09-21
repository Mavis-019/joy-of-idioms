'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';

/**
 * PrivacyPolicyView — 隐私政策页面（中英双语）
 * 英文为具法律约束力的正式文本；中文仅供阅读参考。
 */
export default function PrivacyPolicyView() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <LegalLayout
      title={isEn ? 'Privacy Policy' : '隐私政策'}
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
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        This Privacy Policy explains how we collect, use, and protect your personal
        information when you use our digital course website and services.
      </p>

      <div className="space-y-8">
        {/* 1. Information We Collect */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            1. Information We Collect
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We collect necessary personal data including your email address, name
            and billing information provided during checkout for account
            registration, course access, and payment verification. We do not
            collect unnecessary personal information.
          </p>
        </section>

        {/* 2. How We Use Your Data */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            2. How We Use Your Data
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            Your personal data is used solely for:
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>Providing access to purchased digital courses</li>
            <li>Verifying payment orders via Lemon Squeezy</li>
            <li>Sending service-related notifications</li>
            <li>Maintaining website security and normal operation</li>
          </ul>
        </section>

        {/* 3. Data Sharing */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            3. Data Sharing
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We will never sell your personal data to third parties. We only share
            necessary data with our authorized service providers, including Supabase
            for database service and Lemon Squeezy for payment processing, to
            complete service delivery.
          </p>
        </section>

        {/* 4. User Rights */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            4. User Rights
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            You have the right to view, correct, or request deletion of your
            personal data at any time by contacting our support email.
          </p>
        </section>

        {/* 5. Service Scope */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            5. Service Scope
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Our digital pre-recorded video courses are designed for overseas Chinese
            families. We do not market or sell this product to users located in
            mainland China.
          </p>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            6. Data Security
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We adopt standard technical measures to protect your personal data from
            leakage, tampering and loss.
          </p>
        </section>

        {/* 7. Contact */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            7. Contact
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us
            at{' '}
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
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        本隐私政策说明，当您访问我们数字课程网站并使用相关服务时，我们如何收集、使用和保护您的个人信息。
      </p>

      <div className="space-y-8">
        {/* 1. 收集的信息 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            1. 收集的信息
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们仅收集必要个人信息，包括您在结账时提供的电子邮箱、姓名与账单信息，用于账号注册、课程访问以及支付核验。我们不会收集无关的多余个人信息。
          </p>
        </section>

        {/* 2. 信息用途 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            2. 信息用途
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            您的个人信息仅用于以下场景：
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>为您开放已购买数字课程的访问权限</li>
            <li>通过 Lemon Squeezy 核验支付订单</li>
            <li>发送与服务相关通知</li>
            <li>保障网站安全与正常运行</li>
          </ul>
        </section>

        {/* 3. 信息共享 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            3. 信息共享
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们绝不会向第三方出售您的个人信息。我们仅向授权服务商共享必要数据，包括提供数据库服务的
            Supabase、处理支付的 Lemon Squeezy，用于完成服务交付。
          </p>
        </section>

        {/* 4. 用户权利 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            4. 用户权利
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            您可随时通过支持邮箱联系我们，查看、更正或申请删除您的个人信息。
          </p>
        </section>

        {/* 5. 服务范围 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            5. 服务范围
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            本数字录播视频课程面向海外华裔家庭设计，我们不在中国大陆境内推广、销售本产品。
          </p>
        </section>

        {/* 6. 数据安全 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            6. 数据安全
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们采用行业标准技术手段，保护您的个人信息，防止信息泄露、篡改与丢失。
          </p>
        </section>

        {/* 7. 联系我们 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            7. 联系我们
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            如您对这份隐私政策有任何疑问，请发送邮件至：{' '}
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
