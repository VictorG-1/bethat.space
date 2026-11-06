import { Header } from './Header';
import { Footer } from './Footer';
import aboutPageSkyline from '../assets/about/about-page-skyline.jpg';
import { useState, useEffect, useRef } from 'react';
import {
  Target,
  Users,
  Lightbulb,
  Award,
  Handshake,
  TrendingUp,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

function AboutEyebrow({ className = '' }: { className?: string }) {
  return (
    <p className={`about-eyebrow text-xs uppercase tracking-[0.22em] text-white ${className}`.trim()}>
      <span className="text-red-600 mr-1.5">/</span>
      ABOUT US
    </p>
  );
}

function AboutHeadline({
  first,
  second,
  as: Tag = 'h2',
  className = '',
}: {
  first: string;
  second?: string;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <Tag
      className={`bts-title about-headline ${className}`.trim()}
      style={{ textAlign: 'left', textAlignLast: 'left' }}
    >
      <span
        className="relative inline-block"
        style={{ fontWeight: 300, paddingBottom: '0.7rem' }}
      >
        {first}
        <span
          className="absolute left-0 h-1 w-full bg-red-600"
          style={{ bottom: 0 }}
          aria-hidden
        />
      </span>
      {second ? (
        <>
          {' '}
          <span style={{ fontWeight: 300 }}>{second}</span>
        </>
      ) : null}
    </Tag>
  );
}

function ImpactStat({
  end,
  label,
  suffix = '',
  description,
  Icon,
  delay = 0,
  toInfinity = false,
}: {
  end: number;
  label: string;
  suffix?: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
  toInfinity?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showInfinity, setShowInfinity] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.35 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let cancelled = false;
    const timers: number[] = [];
    const duration = 3200;

    const clearTimers = () => {
      while (timers.length) {
        const id = timers.pop();
        if (id !== undefined) window.clearTimeout(id);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const startTick = () => {
      setCount(0);
      const start = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.round(end * eased));
        if (t < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setCount(end);
          if (toInfinity) {
            // hold final number, then soft crossfade to ∞
            timers.push(
              window.setTimeout(() => {
                if (!cancelled) setShowInfinity(true);
              }, 1600)
            );
          }
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const runCount = () => {
      clearTimers();
      if (toInfinity) {
        // fade ∞ out first, then restart count
        setShowInfinity(false);
        timers.push(
          window.setTimeout(() => {
            if (!cancelled) startTick();
          }, 1500)
        );
      } else {
        startTick();
      }
    };

    timers.push(
      window.setTimeout(() => {
        if (toInfinity) {
          // first run: no fade-out wait
          clearTimers();
          startTick();
        } else {
          runCount();
        }
      }, delay)
    );

    const loop = window.setInterval(() => {
      if (!cancelled) runCount();
    }, 9000);

    return () => {
      cancelled = true;
      clearTimers();
      window.clearInterval(loop);
    };
  }, [isVisible, end, delay, toInfinity]);

  const numSlots = String(end).length + (suffix ? suffix.length : 0);

  return (
    <div
      ref={counterRef}
      className={`flex items-start gap-4 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-10 h-10 lg:w-11 lg:h-11 text-white shrink-0 mt-1" strokeWidth={1.25} aria-hidden />
      <div className="min-w-0 text-left">
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="relative inline-block shrink-0 text-3xl lg:text-4xl text-red-600 font-bold leading-none tabular-nums"
            style={{ width: `${Math.max(numSlots, 3)}ch` }}
          >
            <span
              className={`absolute left-0 top-0 transition-all duration-[1500ms] ease-in-out will-change-transform ${
                showInfinity ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
            >
              {count}{suffix}
            </span>
            {toInfinity && (
              <span
                className={`absolute left-0 top-0 transition-all duration-[1500ms] ease-in-out will-change-transform ${
                  showInfinity ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                ∞
              </span>
            )}
            {/* reserve height so layout never jumps */}
            <span className="invisible" aria-hidden>
              {end}{suffix}
            </span>
          </span>
          <span className="text-white text-sm tracking-wide font-medium shrink-0">
            {label}
          </span>
        </div>
        <p className="text-white/80 text-sm font-light leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

const VALUES: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: 'Purpose',
    description:
      'Every project begins with a reason to exist. We align design decisions with human needs, client aspirations and business objectives to create meaningful outcomes.',
    Icon: Target,
  },
  {
    title: 'Empathy',
    description:
      'We design with people in mind. By understanding their needs, behaviours and experiences, we create environments that respond to the people who inhabit them.',
    Icon: Users,
  },
  {
    title: 'Innovation',
    description:
      'We challenge convention and explore new possibilities. Through curiosity and multidisciplinary thinking, we develop solutions that are relevant, considered and ready for what lies ahead.',
    Icon: Lightbulb,
  },
  {
    title: 'Excellence',
    description:
      'We pursue quality through thoughtful design, technical rigour and precision in execution. Every decision and detail contributes to the integrity of the whole.',
    Icon: Award,
  },
  {
    title: 'Collaboration',
    description:
      'Better outcomes emerge when perspectives come together. We share knowledge, respect expertise and work across disciplines to create solutions stronger than any one contribution.',
    Icon: Handshake,
  },
  {
    title: 'Impact',
    description:
      'We look beyond what we deliver to what it enables. Success lies in creating lasting value for people, clients, businesses and the environments we shape.',
    Icon: TrendingUp,
  },
];

export function AboutUsPage() {
  return (
    <div className="about-us-page relative min-h-screen bg-black scroll-smooth font-sans">
      {/* Skyline travels with page content (no sticky lock) */}
      <div className="about-page-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <img
          src={aboutPageSkyline}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center grayscale"
        />
        <div className="about-page-bg__veil" />
      </div>

      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Our Story */}
        <section
          id="story"
          className="about-section relative min-h-screen flex items-start overflow-hidden"
        >
          <div className="bts-shell relative z-10 w-full">
            <AboutEyebrow className="mb-5" />

            <div className="w-full max-w-3xl lg:max-w-4xl">
              <h1
                className="bts-title about-headline"
                style={{ textAlign: 'left', textAlignLast: 'left', fontWeight: 300 }}
              >
                Our Story
              </h1>

              <div className="mt-5 mb-3 sm:mt-6" aria-hidden>
                <div className="h-1 w-16 bg-red-600" />
              </div>

              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-6">
                Every Space Begins With an Intent.
              </p>

              <div className="story-copy space-y-4 text-white text-base lg:text-lg font-light leading-[1.8]">
                <p>
                  We are the architects of your space – for it to Be That Space.
                </p>
                <p>
                  BeThatSpace is both our name and our philosophy: a belief that every environment holds the potential to become something more than its physical form.
                </p>
                <p>
                  It begins with understanding what is unseen – the aspirations, needs and possibilities that give a space its purpose. Through reflection and clarity, these take shape as ideas, and through design and build, those ideas become tangible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values — same section top height as Story */}
        <section
          id="values"
          className="about-section values-section relative min-h-screen flex items-start overflow-hidden"
        >
          <div className="bts-shell relative z-10 w-full">
            <AboutEyebrow className="mb-5" />

            <div className="values-intro mb-6 lg:mb-7">
              <AboutHeadline first="Our" second="Values" />
              <div className="values-intro__rule" aria-hidden />
              <p className="values-intro__copy text-white text-base lg:text-lg font-light leading-[1.7]">
                Our values shape how we think, how we work together and how we deliver. They guide our decisions, define our relationships and hold us accountable to the outcomes we create.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1 lg:gap-x-4 lg:gap-y-1.5 mb-6 lg:mb-7">
              {VALUES.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="values-card group bg-black/30 px-4 py-4 lg:px-5 lg:py-5 transition-all duration-500 flex gap-3"
                >
                  <div className="shrink-0 pt-0.5">
                    <Icon className="w-9 h-9 lg:w-10 lg:h-10 text-red-600" strokeWidth={1.25} aria-hidden />
                  </div>
                  <div className="border-l border-red-600 pl-3 min-w-0">
                    <h3 className="text-lg lg:text-xl text-white font-semibold mb-1.5 leading-tight">
                      {title}
                    </h3>
                    <p className="values-card-copy text-white/80 text-sm lg:text-[0.95rem] font-light leading-[1.6]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <p className="values-footer-line text-white text-sm lg:text-base font-semibold leading-none whitespace-nowrap">
                Integrity, ownership and sustainability are the principles that underpin every value, and every decision we make.
              </p>
            </div>
          </div>
        </section>

        {/* Our Impact — reference layout */}
        <section id="impact" className="about-section relative">
          <div className="bts-shell relative z-10 w-full">
            <AboutEyebrow className="mb-5" />

            <h2
              className="bts-title about-headline"
              style={{ textAlign: 'left', textAlignLast: 'left', fontWeight: 300 }}
            >
              Our Impact
            </h2>

            <div className="mt-5 mb-3 sm:mt-6" aria-hidden>
              <div className="h-1 w-16 bg-red-600" />
            </div>

            <div className="impact-copy max-w-3xl mb-4">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-6">
                Beyond What We Build.
              </p>
              <div className="space-y-8 text-white text-base lg:text-lg font-light leading-[1.85]">
                <p>
                  The value of a space is measured not only by what it contains, but by what it makes possible. A well-considered environment can help people connect, enable ideas to develop, support better ways of working and help businesses move forward.
                </p>
                <p>
                  Our aim is to translate design intent into tangible outcomes, creating places that serve their purpose today while remaining relevant to the possibilities of tomorrow.
                </p>
              </div>
            </div>

            <p className="text-white text-base lg:text-lg font-semibold leading-snug mb-4">
              We measure our work by what it enables.
            </p>

            <div className="impact-stats">
              <div className="impact-stats__cell">
                <ImpactStat
                  end={100}
                  label="Ideas"
                  Icon={Lightbulb}
                  delay={0}
                  toInfinity
                  description="Endless creativity and design possibilities."
                />
              </div>
              <div className="impact-stats__cell">
                <ImpactStat
                  end={100}
                  label="People"
                  suffix="+"
                  Icon={Users}
                  delay={150}
                  description="Lives touched by spaces we create."
                />
              </div>
              <div className="impact-stats__cell">
                <ImpactStat
                  end={500}
                  label="Businesses"
                  suffix="+"
                  Icon={TrendingUp}
                  delay={300}
                  description="Organisations we help move forward."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA — same section frame as Our Story so / ABOUT US sits at same height */}
        <section
          id="cta"
          className="about-section relative min-h-screen flex items-start overflow-hidden"
        >
          <div className="bts-shell relative z-10 w-full">
            <AboutEyebrow className="mb-5" />

            <div className="w-full max-w-3xl lg:max-w-4xl">
              <h2
                className="bts-title about-headline"
                style={{ textAlign: 'left', textAlignLast: 'left', fontWeight: 300 }}
              >
                Let&apos;s Make Space for Possibility.
              </h2>

              {/* ~1.5 body-lines of space */}
              <div className="h-[2.6em] text-base lg:text-lg" aria-hidden />

              <p className="text-white text-base lg:text-lg font-light leading-[1.8] mb-12 lg:mb-14">
                Have a project in mind, an opportunity to collaborate, or an idea worth exploring? We would like to understand what you are working towards and how we might help bring it to life.
              </p>

              <div className="cta-actions flex flex-col items-start gap-8 lg:gap-10">
                <button
                  type="button"
                  onClick={() => {
                    window.history.pushState({}, '', '/explore');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                    setTimeout(() => {
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="cta-action group flex items-center gap-4 bg-transparent p-0"
                >
                  <MessageCircle className="w-8 h-8 text-red-600 shrink-0" strokeWidth={1.5} aria-hidden />
                  <span className="cta-action__rule" aria-hidden />
                  <span className="explore-flow text-base lg:text-lg font-semibold">
                    Start a Conversation
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.history.pushState({}, '', '/careers');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="cta-action group flex items-center gap-4 bg-transparent p-0"
                >
                  <Users className="w-8 h-8 text-red-600 shrink-0" strokeWidth={1.5} aria-hidden />
                  <span className="cta-action__rule" aria-hidden />
                  <span className="explore-flow text-base lg:text-lg font-semibold">
                    Join Our Team
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
