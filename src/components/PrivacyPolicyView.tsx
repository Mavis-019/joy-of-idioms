'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';
const SITE_URL = 'https://joyofidioms.com';

/**
 * PrivacyPolicyView — 隐私政策页面（中英双语・最终定稿版）
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
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        This Privacy Policy explains how{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>{' '}
        collects, uses, and protects your personal information when you visit our
        website and use our services.
      </p>

      <div className="space-y-8">
        {/* Information We Collect */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Information We Collect
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We collect only necessary personal information provided during checkout
            and account registration, including your email address, name, and
            billing details, solely for account creation, course access
            fulfillment, and payment verification. We also use{' '}
            <strong className="text-charcoal">
              essential session cookies only to maintain your login session and
              secure website operations. We do not use cookies for advertising or
              behavioral tracking.
            </strong>
          </p>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            How We Use Your Information
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            Your personal information is used exclusively for the following
            purposes:
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>Granting online access to your purchased digital courses</li>
            <li>Verifying payment transactions and orders via Lemon Squeezy</li>
            <li>
              Sending essential service-related notifications regarding your
              account and purchases
            </li>
            <li>
              Ensuring website security and proper technical functionality
            </li>
          </ul>
        </section>

        {/* Information Sharing & International Data Transfer */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Information Sharing &amp; International Data Transfer
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We never sell your personal information to third parties. We share
            necessary data only with authorized infrastructure service providers
            (including Supabase for database and authentication services, and
            Lemon Squeezy for payment processing) to fulfill our digital services.
            All service providers are bound by data protection agreements.
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            Your information may be transferred to and stored on secure servers
            located outside your country of residence.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Children&rsquo;s Privacy
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Our courses are designed for child learners within overseas
            Chinese-heritage families. We collect information only when a parent
            or guardian completes the purchase and provides an adult email address.
            We do not knowingly collect personal information directly from
            children under 13. If you believe a child has submitted personal data
            without your consent, please contact us and we will promptly delete
            such data.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Data Retention
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We retain your personal data only for as long as necessary to provide
            our services. When you request account deletion or upon expiry of
            legally required retention periods, we will delete or anonymize your
            personal data, except for transaction records we are obligated to keep
            by law.
          </p>
        </section>

        {/* Your Data Rights */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Your Data Rights
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Under applicable data protection laws (including GDPR), you have the
            right to access, correct, export, or request the deletion of your
            personal data at any time by contacting us.
          </p>
        </section>

        {/* Service Scope */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Service Scope
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            <strong className="text-charcoal">Our premium digital courses</strong>{' '}
            are designed for overseas Chinese-heritage families and global
            learners. We do not market or sell this product within Mainland China.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Data Security
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We implement industry-standard technical measures and encryption to
            safeguard your personal information against unauthorized access,
            disclosure, alteration, or destruction.
          </p>
        </section>

        {/* Policy Updates */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Policy Updates
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We may revise this Privacy Policy from time to time. The updated
            version will be posted on this page with a revised Last Updated date.
            We encourage you to review this page periodically.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Contact Us
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            If you have any questions about this Privacy Policy or wish to exercise
            your data rights, please contact us at:{' '}
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
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        本隐私政策说明，当您访问{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>{' '}
        并使用相关服务时，我们如何收集、使用和保护您的个人信息。
      </p>

      <div className="space-y-8">
        {/* 收集的信息 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            收集的信息
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们仅收集必要的个人信息，包括您在结账与注册时提供的电子邮箱、姓名与账单信息，用于账号注册、课程权限开通以及支付核验。此外，
            <strong className="text-charcoal">
              我们仅使用必要的会话 Cookie（Session
              Cookie）维持网站登录与会话安全，不会使用 Cookie
              进行广告投放或用户行为追踪。
            </strong>
          </p>
        </section>

        {/* 信息用途 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            信息用途
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            您的个人信息仅用于以下场景：
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>为您开放已购买数字课程的在线访问权限</li>
            <li>通过 Lemon Squeezy 核验支付订单与处理账单</li>
            <li>发送课程权限、账号状态与服务相关的必要通知</li>
            <li>保障网站安全与正常技术运行</li>
          </ul>
        </section>

        {/* 信息共享与跨境数据传输 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            信息共享与跨境数据传输
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们绝不会向第三方出售您的个人信息。我们仅向授权的基础设施及服务提供商共享必要数据（包括提供数据库与身份验证服务的
            Supabase、提供支付处理的 Lemon
            Squeezy），以完成数字服务的交付。上述服务商均受数据保护协议约束。
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-3">
            您的数据可能会在您所在国家 / 地区之外的安全服务器上进行传输与存储。
          </p>
        </section>

        {/* 儿童隐私 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            儿童隐私
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            本课程面向海外华裔家庭中的儿童学习者。我们仅在家长或监护人完成购买、提供成人邮箱的前提下收集信息，不会在知情情况下直接收集
            13 周岁以下儿童的个人信息。若您发现孩子未经您许可向我们提交个人信息，请联系我们，我们将立即删除相关数据。
          </p>
        </section>

        {/* 数据保留期限 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            数据保留期限
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们仅在提供服务所需的期限内保存您的个人信息。当您申请删除账号，或达到法定保存期限后，我们将删除或匿名化您的个人信息；法律强制要求留存的交易记录除外。
          </p>
        </section>

        {/* 用户权利 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            用户权利
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            根据适用法律（包括 GDPR 等），您随时有权联系我们查看、更正、导出或申请永久删除您的个人信息。
          </p>
        </section>

        {/* 服务范围 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            服务范围
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            本中文成语数字课程面向海外华裔家庭与全球中文学习者设计，我们不在中国大陆境内推广或销售本产品。
          </p>
        </section>

        {/* 数据安全 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            数据安全
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们采用行业标准的加密与技术手段保护您的个人信息，防止未经授权的访问、泄露、篡改或丢失。
          </p>
        </section>

        {/* 政策更新 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            政策更新
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们可能不定期更新本隐私政策。修改后的政策将发布在此页面，页面顶部的最后更新日期为生效时间。建议您定期查阅。
          </p>
        </section>

        {/* 联系我们 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            联系我们
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            如您对本隐私政策有任何疑问或希望行使您的数据权利，请发送邮件至：{' '}
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
