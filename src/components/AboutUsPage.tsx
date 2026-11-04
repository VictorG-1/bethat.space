import { Header } from './Header';
import { Footer } from './Footer';
import aboutPageBg from '../assets/about/about-page-bg.jpg';
import tathastuImage from 'figma:asset/a26bdc211f505ea4ce3e1426ab6f413f1f679ec9.png';
import { useState, useEffect, useRef } from 'react';

function StatCounter({
  end,
  label,
  suffix = '',
  description,
  delay = 0,
  toInfinity = false,
}: {
  end: number;
  label: string;
  suffix?: string;
  description?: string;
  delay?: number;
  toInfinity?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showInfinity, setShowInfinity] = useState(false);
  const [done, setDone] = useState(false);
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

    const runCount = () => {
      clearTimers();
      setDone(false);
      setShowInfinity(false);
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
          setDone(true);
          if (toInfinity) {
            timers.push(
              window.setTimeout(() => {
                if (!cancelled) setShowInfinity(true);
              }, 1100)
            );
          }
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    timers.push(window.setTimeout(runCount, delay));

    const loop = window.setInterval(() => {
      if (!cancelled) runCount();
    }, 5500);

    return () => {
      cancelled = true;
      clearTimers();
      window.clearInterval(loop);
    };
  }, [isVisible, end, delay, toInfinity]);

  const progress = Math.min(1, count / Math.max(end, 1));

  return (
    <div
      ref={counterRef}
      className={`group relative border border-white/10 p-8 lg:p-10 transition-all duration-700 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } hover:border-red-600/50 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(220,38,38,0.12)]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.14), transparent 65%)',
        }}
      />

      <div className="relative z-10 mb-4 h-20 lg:h-24 flex items-center justify-center">
        <span
          className={`absolute text-5xl lg:text-6xl text-red-600 font-bold leading-none tabular-nums transition-all duration-1000 ease-in-out ${
            showInfinity ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          } ${done && !showInfinity ? 'animate-[stat-glow_2.4s_ease-in-out_infinite]' : ''}`}
        >
          {count}{suffix}
        </span>
        {toInfinity && (
          <span
            className={`absolute text-5xl lg:text-6xl text-red-600 font-bold leading-none transition-all duration-1000 ease-in-out ${
              showInfinity
                ? 'opacity-100 scale-100 animate-[stat-infinity_2.8s_ease-in-out_infinite]'
                : 'opacity-0 scale-110'
            }`}
          >
            ∞
          </span>
        )}
      </div>

      <div className="relative z-10 mx-auto mb-6 h-px w-16 overflow-hidden bg-white/10">
        <div
          className="absolute inset-y-0 left-0 bg-red-600 transition-[width] duration-100 ease-out"
          style={{
            width: `${progress * 100}%`,
            boxShadow: '0 0 8px rgba(220,38,38,0.6)',
          }}
        />
      </div>

      <p className="relative z-10 text-white text-sm uppercase tracking-[0.22em] font-medium mb-3">
        {label}
      </p>
      {description && (
        <p className="relative z-10 text-white text-sm font-light leading-relaxed text-center">
          {description}
        </p>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </div>
  );
}

const VALUES = [
  {
    title: 'Purpose',
    description: 'Every project begins with a reason to exist. We align design decisions with human needs, client aspirations and business objectives to create meaningful outcomes.',
  },
  {
    title: 'Empathy',
    description: 'We design with people in mind. By understanding their needs, behaviours and experiences, we create environments that respond to the people who inhabit them.',
  },
  {
    title: 'Innovation',
    description: 'We challenge convention and explore new possibilities. Through curiosity and multidisciplinary thinking, we develop solutions that are relevant, considered and ready for what lies ahead.',
  },
  {
    title: 'Excellence',
    description: 'We pursue quality through thoughtful design, technical rigour and precision in execution. Every decision and detail contributes to the integrity of the whole.',
  },
  {
    title: 'Collaboration',
    description: 'Better outcomes emerge when perspectives come together. We share knowledge, respect expertise and work across disciplines to create solutions stronger than any one contribution.',
  },
  {
    title: 'Impact',
    description: 'We look beyond what we deliver to what it enables. Success lies in creating lasting value for people, clients, businesses and the environments we shape.',
  },
];

export function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-black scroll-smooth font-sans">
      {/* Sticky bg: stays framed to the viewport while page text scrolls over it */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            src={aboutPageBg}
            alt=""
            className="h-full w-full object-cover object-center grayscale opacity-[0.10] brightness-50"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>

      <Header />
      
      <main className="relative z-10 pt-20">
        <section
          id="about"
          className="relative min-h-[70vh] flex items-center justify-center border-b border-white/10"
        >
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full py-24 lg:py-32 pb-28 lg:pb-36 flex flex-col items-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              <h1 className="bts-title mb-4">
                About Us
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-8" />

              <div className="about-copy space-y-6 text-white/80 text-base lg:text-lg font-light leading-[1.85] text-left">
                <p>
                  We are an award-winning, multidisciplinary architecture, interior design and design+build practice with a strong presence across the Indian subcontinent.
                </p>
                <p>
                  We bring together strategy, creativity and technical expertise to shape workplaces, hospitality environments and institutional spaces that elevate human experience and enable performance. By connecting perspectives across disciplines and working closely with our clients, we turn complex aspirations into clear, considered solutions - from the first idea to the finished environment. What unites it all is a shared commitment to purposeful thinking, design integrity and lasting impact.
                </p>
                <p className="text-white/90 font-normal">
                  We don't just create spaces. We create the conditions for what happens within them.
                </p>
              </div>
            </div>

            <div className="h-5" aria-hidden />
            <div className="h-5" aria-hidden />
            <div className="pt-16 lg:pt-20 text-center max-w-4xl mx-auto w-full">
              <div
                className="text-white/90 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight"
                style={{ lineHeight: 'calc(1.375em + 0.25px)' }}
              >
                <p className="block text-white">
                  We are <span className="font-bold">BeThatSpace™</span>
                </p>
                <p className="block mt-3 sm:mt-4">A proclamation of intent.</p>
                <p className="block mt-3 sm:mt-4">A blessing for every space we touch.</p>
                <p className="block mt-3 sm:mt-4">A dialogue with the inanimate.</p>
                <p className="block mt-3 sm:mt-4">Where the abstract gets manifested,</p>
              </div>
              <div className="flex justify-center mt-16 lg:mt-20">
                <img
                  src={tathastuImage}
                  alt="तथास्तु"
                  className="max-w-md w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="relative pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="bts-title mb-6">Our Story</h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto" />
            </div>

            <div
              className="story-copy max-w-3xl mx-auto space-y-6 text-white/80 text-base lg:text-lg font-light leading-[1.85]"
              style={{ textAlign: 'justify', textAlignLast: 'left' }}
            >
              <p
                className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug"
                style={{ textAlign: 'justify', textAlignLast: 'left' }}
              >
                Every Space Begins With an Intent.
              </p>
              <p style={{ textAlign: 'justify', textAlignLast: 'left' }}>
                We are the architects of your space - for it to Be That Space.
              </p>
              <p style={{ textAlign: 'justify', textAlignLast: 'left' }}>
                BeThatSpace is both our name and our philosophy: a belief that every environment holds the potential to become something more than its physical form.
              </p>
              <p style={{ textAlign: 'justify', textAlignLast: 'left' }}>
                It begins with understanding what is unseen - the aspirations, needs and possibilities that give a space its purpose. Through reflection and clarity, these take shape as ideas, and through design and build, those ideas become tangible.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values — all 6 cards in one section */}
        <section
          id="values"
          className="relative py-20 lg:py-28 border-t border-white/10 border-b border-white/10"
        >
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="bts-title mb-6">Our Values</h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-8" />
              <p
                className="bts-body text-white/70 text-base lg:text-lg max-w-3xl mx-auto"
                style={{ textAlign: 'justify', textAlignLast: 'left' }}
              >
                Our values shape how we think, how we work together and how we deliver. They guide our decisions, define our relationships and hold us accountable to the outcomes we create.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="group border border-white/10 hover:border-red-600/50 p-6 lg:p-8 transition-all duration-500 flex flex-col"
                >
                  <h3 className="text-xl lg:text-2xl text-white font-semibold mb-3 group-hover:text-red-600 transition-colors text-left">
                    {value.title}
                  </h3>
                  <p className="values-card-copy text-white/70 text-sm lg:text-base flex-1">
                    {value.description}
                  </p>
                  <div className="mt-5 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>

            <p className="text-white text-sm lg:text-base font-bold text-center px-2">
              Integrity, ownership and sustainability are the principles that underpin every value, and every decision we make.
            </p>
          </div>
        </section>

        {/* Our Impact */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="text-center mb-12">
              <h2 className="bts-title mb-6">Our Impact</h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto" />
            </div>

            <div className="about-copy max-w-3xl mx-auto space-y-6 text-white/80 text-base lg:text-lg font-light leading-[1.85] mb-16">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug" style={{ textAlign: 'left', textAlignLast: 'left' }}>
                Beyond What We Build.
              </p>
              <p>
                The value of a space is measured not only by what it contains, but by what it makes possible. A well-considered environment can help people connect, enable ideas to develop, support better ways of working and help businesses move forward.
              </p>
              <p>
                Our aim is to translate design intent into tangible outcomes, creating places that serve their purpose today while remaining relevant to the possibilities of tomorrow.
              </p>
              <p className="text-white/90 font-normal">
                We measure our work by what it enables.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
              <StatCounter
                end={100}
                label="Ideas"
                delay={0}
                toInfinity
                description="Endless creativity and design possibilities."
              />
              <StatCounter
                end={100}
                label="People"
                suffix="+"
                delay={150}
                description="Lives touched by spaces we create."
              />
              <StatCounter
                end={500}
                label="Businesses"
                suffix="+"
                delay={300}
                description="Organisations we help move forward."
              />
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-14 text-center">
            <h2 className="bts-title mb-8">
              Let's Make Space for Possibility.
            </h2>
            <p
              className="bts-body text-white/70 text-base lg:text-lg mb-12 max-w-3xl mx-auto"
              style={{ textAlign: 'justify', textAlignLast: 'left' }}
            >
              Have a project in mind, an opportunity to collaborate, or an idea worth exploring? We would like to understand what you are working towards and how we might help bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/explore');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  setTimeout(() => {
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-10 py-5 bg-transparent group min-w-[240px]"
              >
                <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors inline-block">
                  Start a Conversation
                </span>
              </button>
              
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/careers');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="px-10 py-5 bg-transparent group min-w-[240px]"
              >
                <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors inline-block">
                  Join Our Team
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
