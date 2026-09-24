'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';
const SITE_URL = 'https://joyofidioms.com';

/**
 * AboutView — 关于我们页面（中英双语・最终定稿版）
 * 说明售卖产品形态：高清数字视频课程，随到随学（On-demand Access），自主学习。
 */
export default function AboutView() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <LegalLayout
      title={isEn ? 'About Us' : '关于我们'}
      badge={isEn ? 'About' : '关于我们'}
      backLabel={isEn ? 'Back to Home' : '返回首页'}
    >
      {isEn ? <EnglishContent /> : <ChineseContent />}
    </LegalLayout>
  );
}

/* ============================ English ============================ */

function EnglishContent() {
  return (
    <>
      <p className="font-sans text-ink-light text-base md:text-lg leading-relaxed mb-8">
        Welcome to{' '}
        <strong className="text-charcoal">Joy of Idioms</strong> ({' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>
        )!
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Our Mission
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            At Joy of Idioms, we are dedicated to making Chinese language learning
            engaging, accessible, and deeply meaningful. Idioms and cultural
            expressions carry the core essence of Chinese heritage. Our mission is
            to help{' '}
            <strong className="text-charcoal">
              overseas Chinese-heritage children
            </strong>{' '}
            unlock the cultural wisdom behind idioms through systematic, immersive
            digital video lessons — empowering them to develop authentic, natural
            Chinese-language expression.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            What We Offer
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We focus on creating premium, self-paced digital video courses for
            Chinese-heritage families around the world. Built for flexible
            on-demand access, our lessons allow children to move past rote
            memorization and explore classic idioms and cultural knowledge
            comfortably at their own pace, anytime and anywhere.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Contact Information
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5">
            <li>
              <span className="font-semibold text-charcoal">Website:</span>{' '}
              <a
                href={SITE_URL}
                className="text-primary font-semibold hover:underline break-all"
              >
                {SITE_URL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-charcoal">Customer Support:</span>{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary font-semibold hover:underline break-all"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
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
        欢迎来到<strong className="text-charcoal">悦读成语</strong>（{' '}
        <a
          href={SITE_URL}
          className="text-primary font-semibold hover:underline break-all"
        >
          {SITE_URL}
        </a>
        ）！
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            我们的使命
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            在悦读成语，我们致力于让中文学习变得生动有趣、触手可及且富有深意。成语与熟语是中华语言与文化传承的精髓。我们的使命是通过系统化、沉浸式的数字视频课程，帮助
            <strong className="text-charcoal">海外华裔孩子</strong>
            领略成语背后的文化智慧，轻松习得地道自然的中文表达。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            我们提供什么
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们专注为全球华裔家庭打造高品质、自主进度的数字视频课程。课程支持随时随地按需探索（On-demand
            Access），让孩子告别机械死记硬背，可以按照自己的节奏轻松掌握经典成语与背后的文化知识。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            联系信息
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5">
            <li>
              <span className="font-semibold text-charcoal">官方网站：</span>
              <a
                href={SITE_URL}
                className="text-primary font-semibold hover:underline break-all"
              >
                {SITE_URL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-charcoal">客户支持：</span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary font-semibold hover:underline break-all"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
