'use client';

import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';
const SITE_URL = 'https://joyofidioms.com';

/**
 * TermsOfServiceView — 服务条款页面（中英双语・最终定稿版）
 * 英文为具法律约束力的正式文本；中文仅供阅读参考。
 */
export default function TermsOfServiceView() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <LegalLayout
      title={isEn ? 'Terms of Service' : '服务条款'}
      lastUpdated={isEn ? 'Last Updated: September 20, 2026' : '最后更新：2026-09-20'}
      badge={isEn ? 'Legal' : '法律条款'}
      backLabel={isEn ? 'Back to Home' : '返回首页'}
    >
      {isEn ? <EnglishContent /> : <ChineseContent />}

      {/* 法律效力声明 */}
      <p className="mt-10 pt-6 border-t border-border-warm font-sans text-xs text-ink-light/70 leading-relaxed">
        {isEn
          ? 'The English version is the legally binding text. The Chinese translation is provided for reference only.'
          : '注：英文版本为具备法律约束力的正式文本，中文译文仅供阅读参考。'}
      </p>
    </LegalLayout>
  );
}

/* ============================ English ============================ */

function EnglishContent() {
  return (
    <>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        These Terms of Service govern your access to and use of the digital course
        services at{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>
        . By accessing or purchasing our courses, you agree to be bound by these
        Terms.
      </p>

      <div className="space-y-8">
        {/* 1. Service Description */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            1. Service Description
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We provide self-paced, premium digital video courses on Chinese idioms
            and traditional culture for overseas Chinese-heritage families and
            global learners. All courses are delivered via online streaming access
            only; downloadable video files are not provided, and no physical
            shipping or logistics are involved.
          </p>
        </section>

        {/* 2. Payment and Course Access */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            2. Payment and Course Access
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            All courses are offered as a one-time purchase. Upon successful
            payment, you will receive ongoing online streaming access to the
            purchased course content during the operational lifetime of the
            platform. We charge no hidden fees, recurring subscriptions, or
            automatic renewals. Users are responsible for maintaining the security
            of their accounts and credentials. Account sharing, renting, or
            transferring to third parties is strictly prohibited. Purchasers of a
            course series will receive free access to future updates within that
            same series.
          </p>
        </section>

        {/* 3. Refund Policy */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            3. Refund Policy
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            Because our products consist of instantly accessible digital content,
            our refund conditions are strictly defined as follows:
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>
              You may request a full refund within 7 calendar days of purchase,
              provided that you have not accessed or played any video content
              within the paid course library.
            </li>
            <li>
              Publicly accessible free demo samples on our website do not count as
              paid-course content and will not affect your refund eligibility.
            </li>
            <li>
              Once any lesson video in the paid course library has been accessed or
              played, the digital service is deemed delivered, and no refunds will
              be offered.
            </li>
          </ul>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-4">
            Payment processing, invoicing, and refund fulfillment are handled
            exclusively by our authorized Merchant of Record (MoR), Lemon Squeezy.
            For complete details, please review our{' '}
            <Link
              href="/refund-policy"
              className="text-primary font-semibold hover:underline"
            >
              Refund Policy
            </Link>
            .
          </p>
        </section>

        {/* 4. Intellectual Property & User Conduct */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            4. Intellectual Property &amp; User Conduct
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            All course videos, audio, graphics, and online materials are protected
            by international copyright and intellectual property laws. Courses
            are licensed strictly for personal, non-commercial, family use. You
            may not screen-record, rip, extract, redistribute, resell, sublicense,
            or commercially exploit any platform content without prior written
            authorization.
          </p>
        </section>

        {/* 5. Service Continuity */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            5. Service Continuity
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We reserve the right to perform routine maintenance, system
            optimization, and content updates. While we make reasonable efforts to
            ensure stable platform availability, temporary service interruptions
            caused by maintenance, network provider outages, or force majeure
            events do not constitute a breach of service.
          </p>
        </section>

        {/* 6. Disclaimer */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            6. Disclaimer
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Courses are provided on an &ldquo;as-is&rdquo; basis. We make no
            guarantee of individual learning outcomes for users. To the fullest
            extent permitted by applicable law, we shall not be liable for claims
            arising from unsatisfactory learning results.
          </p>
        </section>

        {/* 7. Scope of Service */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            7. Scope of Service
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Our premium digital courses are designed for overseas Chinese-heritage
            families and global learners. We do not market or sell our products
            within Mainland China.
          </p>
        </section>

        {/* 8. Changes to Terms */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            8. Changes to Terms
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We reserve the right to revise these Terms of Service at any time.
            Revised terms will be posted on this page with an updated effective
            date. Your continued access and use of the website and courses
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            9. Contact Us
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            If you have any questions regarding these Terms, please contact us
            at:{' '}
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
        本服务条款规范您对{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>{' '}
        数字课程服务的访问与使用。您访问或购买我们的课程，即表示您同意受本条款约束。
      </p>

      <div className="space-y-8">
        {/* 1. 服务说明 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            1. 服务说明
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们为全球华裔家庭及中文学习者提供自主进度的在线中文成语与传统文化数字精品视频课程。所有课程均通过本平台提供在线流媒体播放（Online
            Streaming
            Access），不提供视频源文件下载，亦不涉及任何实体商品交付与物流配送。
          </p>
        </section>

        {/* 2. 支付与访问权限 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            2. 支付与访问权限
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            所有课程均为一次性买断制数字内容。支付成功后，您将在本平台存续运营期间获得所购付费课程内容的持续在线访问权限。我们不收取任何隐藏费用或周期性订阅费用，亦不存在自动扣款机制。用户须妥善保管个人账号与登录凭证，严禁将账号出租、共享或转让给他人使用。您同时可免费获取该课程系列内后续上线的内容更新。
          </p>
        </section>

        {/* 3. 退款政策 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            3. 退款政策
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            鉴于本产品为即时访问的数字内容，我们的退款规则如下：
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>
              购买后 7 个自然日内，且您尚未播放或访问付费课程库内的任何视频内容时，可申请全额退款。
            </li>
            <li>
              网站公开展示的免费 Demo
              演示视频不属于付费课程库内容，试看 Demo 不影响退款资格。
            </li>
            <li>
              付费课程库内任意一节视频一经播放或访问，即视为数字服务已开始交付，不再支持退款。
            </li>
          </ul>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-4">
            支付处理、订单开具与退款由我们的授权记录商家（Merchant of
            Record）Lemon Squeezy 统一负责完成。完整的退款细则请查阅我们的{' '}
            <Link
              href="/refund-policy"
              className="text-primary font-semibold hover:underline"
            >
              退款政策
            </Link>
            。
          </p>
        </section>

        {/* 4. 知识产权与用户义务 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            4. 知识产权与用户义务
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            所有课程视频、音频、文字图文及配套在线资料的知识产权均归属于本平台所有，受国际版权法保护。课程仅限购买者家庭个人进行非商业化学习使用。未经官方明确书面许可，严禁对本网站的任何内容进行录屏、翻录、提取、转售、分发或任何形式的商业性传播。
          </p>
        </section>

        {/* 5. 服务中断 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            5. 服务中断
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们保留对网站功能优化、页面展示及课程内容进行正常维护与更新的权利。我们将尽合理努力保障网站的稳定运行，但在不可抗力、网络运营商故障或系统例行维护期间，临时性的服务暂停不构成违约。
          </p>
        </section>

        {/* 6. 免责声明 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            6. 免责声明
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            课程内容按现状（&ldquo;as-is&rdquo;）提供，我们不对学习者个人学习成果作出承诺。除适用法律强制规定外，我们不承担因学习效果不达预期带来的相关索赔。
          </p>
        </section>

        {/* 7. 服务范围 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            7. 服务范围
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            本数字课程面向海外华裔家庭与全球中文学习者设计，我们不在中国大陆境内推广或销售本产品。
          </p>
        </section>

        {/* 8. 条款修改 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            8. 条款修改
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们有权随时修订本服务条款。修订后的条款将发布在此页面，页面顶部更新日期视为生效时间。您继续访问、使用本网站及课程，即代表您接受修订后的服务条款。
          </p>
        </section>

        {/* 9. 联系我们 */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            9. 联系我们
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            如有任何服务疑问或支持需求，请发送邮件至：{' '}
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
