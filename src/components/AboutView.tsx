'use client';

import LegalLayout from '@/components/LegalLayout';
import { useLanguage } from '@/lib/language-context';

const EMAIL = 'support@joyofidioms.com';

/**
 * AboutView — 关于我们页面（中英双语）
 * 说明售卖产品形态：预录在线视频课程，自主学习，随时随地观看。
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
        Welcome to <strong className="text-charcoal">Joy of Idioms</strong>{' '}
        (joyofidioms.com)!
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Our Mission
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            At Joy of Idioms, we are passionate about making language learning
            engaging, accessible, and meaningful. Idioms and expressions carry the
            cultural essence of a language, and our mission is to help learners
            unlock native-level fluency through structured, easy-to-follow video
            lessons.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            What We Offer
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            We specialize in high-quality,{' '}
            <strong className="text-charcoal">pre-recorded online video courses</strong>{' '}
            tailored for Chinese learners worldwide. Our self-paced curriculum
            allows students to learn anytime, anywhere, at their own convenience.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            Contact Information
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5">
            <li>
              <span className="font-semibold text-charcoal">Website:</span>{' '}
              joyofidioms.com
            </li>
            <li>
              <span className="font-semibold text-charcoal">
                Customer Support Email:
              </span>{' '}
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
        欢迎来到<strong className="text-charcoal">悦读成语</strong>
        （joyofidioms.com）！
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            我们的使命
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            在悦读成语，我们致力于让语言学习变得生动有趣、触手可及且富有意义。成语与习语承载着一门语言的文化精髓，我们的使命是通过体系化、易跟学的视频课程，帮助学习者迈向母语水平的流利表达。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            我们提供什么
          </h2>
          <p className="font-sans text-ink-light text-base leading-relaxed">
            我们专注于为全球中文学习者打造高品质的
            <strong className="text-charcoal">预录在线视频课程</strong>
            。自主学习进度的课程设计，让孩子随时随地、按自己的节奏学习。
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-charcoal text-xl md:text-2xl mb-3">
            联系信息
          </h2>
          <ul className="font-sans text-ink-light text-base leading-relaxed space-y-1.5">
            <li>
              <span className="font-semibold text-charcoal">网站：</span>
              joyofidioms.com
            </li>
            <li>
              <span className="font-semibold text-charcoal">客户支持邮箱：</span>
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
