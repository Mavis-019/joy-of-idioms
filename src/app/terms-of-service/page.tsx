import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Joy of Idioms digital course services. Payment, refund policy, user obligations, and service scope.',
};

const EMAIL = 'support@joyofidioms.com';

/**
 * Terms of Service — 服务条款页面
 * 公开可访问，无需登录。英文文案，沿用网站国风样式。
 */
export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="Last Updated: 2026" badge="Legal">
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        These Terms of Service govern your access to and use of our digital course
        services. By accessing and purchasing our courses, you agree to these terms.
      </p>

      <div className="space-y-8">
        {/* 1. Service Description */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            1. Service Description
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We provide online Chinese idiom and traditional culture digital video
            courses for overseas children. All products are digital virtual goods with no
            physical delivery and no logistics required.
          </p>
        </section>

        {/* 2. Payment & Access */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            2. Payment &amp; Access
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            All courses are one-time purchase products. After successful payment, users
            obtain permanent lifetime access to the purchased course content on our
            website. No recurring fees or automatic subscriptions apply.
          </p>
        </section>

        {/* 3. Refund Policy */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            3. Refund Policy (Core Rule)
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed mb-3">
            Since our products are downloadable and viewable digital virtual goods, we
            support refund applications under the following conditions:
          </p>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5 list-disc list-inside">
            <li>
              Users can apply for a full refund within 7 days after purchase if NO course
              content has been watched or accessed.
            </li>
            <li>
              Once any course content is viewed, partially or fully, the product is
              deemed consumed and no refund will be available.
            </li>
            <li>
              No refund will be provided for purchases made outside official website
              channels.
            </li>
          </ul>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-4">
            For the complete refund terms, please see our{' '}
            <Link
              href="/refund-policy"
              className="text-primary font-semibold hover:underline"
            >
              Refund Policy
            </Link>
            .
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-4">
            Payments and refund processing are handled by our Merchant of Record, Lemon
            Squeezy.
          </p>
        </section>

        {/* 4. User Obligations */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            4. User Obligations
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Users shall use the courses only for personal learning. Unauthorized
            redistribution, resale, recording, or commercial dissemination of course
            content is prohibited.
          </p>
          <p className="font-sans text-ink-light text-base leading-relaxed mt-4">
            All course videos, audio, and materials are copyrighted. Personal household
            use only.
          </p>
        </section>

        {/* 5. Service Scope */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            5. Service Scope
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            Our services are exclusively for overseas users. We do not serve users
            located in mainland China.
          </p>
        </section>

        {/* 6. Service Update */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            6. Service Update
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We will gradually update course content according to the project plan.
            Purchased users can enjoy subsequent free updates of the corresponding course
            series.
          </p>
        </section>

        {/* 7. Disclaimer */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            7. Disclaimer
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We reserve the right to adjust content display and function optimization
            without affecting core purchased rights.
          </p>
        </section>

        {/* 8. Contact */}
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            8. Contact
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            For business and support inquiries, please contact us at{' '}
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
    </LegalLayout>
  );
}
