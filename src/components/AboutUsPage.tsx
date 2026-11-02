import { Header } from './Header';
import { Footer } from './Footer';
import bgImage from 'figma:asset/c621f8e2b94cd37ccbe0edbb8d8595d829d1df5c.png';
import { useState, useEffect, useRef } from 'react';

function StatCounter({ end, label, suffix, hoverWords }: { end: number, label: string, suffix: string, hoverWords?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const runAnimation = () => {
    setCount(0);
    const duration = 2000;

    const getMilestones = () => {
      if (end === Infinity || suffix === 'M+') {
        return [100, 50000, 100000, 250000, 500000, 750000, 1000000];
      }
      if (suffix === '+' && end > 100) {
        const m: number[] = [];
        for (let i = 100; i < end; i += 200) m.push(i);
        m.push(end);
        return m;
      }
      return [0, end];
    };

    const milestones = getMilestones();
    const stepMs = duration / milestones.length;
    let index = 0;

    const interval = setInterval(() => {
      if (index < milestones.length - 1) {
        setCount(milestones[index]);
        index++;
      } else {
        if (end === Infinity) {
          setCount(1000000);
          setTimeout(() => setCount(Infinity), 150);
        } else {
          setCount(milestones[milestones.length - 1]);
        }
        clearInterval(interval);
      }
    }, stepMs);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    runAnimation();
    const loop = setInterval(runAnimation, 5000);
    return () => clearInterval(loop);
  }, [isVisible, end, suffix]);

  const displayValue = () => {
    if (count === Infinity) return '∞';
    if (suffix === 'M+') {
      if (count >= 1000000) return '1M+';
      if (count >= 1000) return `${Math.floor(count / 1000)}K+`;
      return count + '+';
    }
    if (suffix === '∞' && count >= 1000000) return '1M';
    if (suffix === '∞') return count.toString();
    return count + suffix;
  };

  return (
    <div
      ref={counterRef}
      className="border border-white/10 p-8 hover:border-red-600/30 transition-colors duration-300 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-5xl lg:text-6xl text-red-600 font-bold mb-3 min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center leading-none">
        <span className={displayValue() === '∞' ? 'text-[30em]' : ''}>{displayValue()}</span>
      </div>
      <p className="text-white/60 text-sm uppercase tracking-wider">{label}</p>
      {hoverWords && (
        <p
          className={`bts-justify mt-3 min-h-[2.5rem] text-white/80 text-sm font-light leading-snug transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {hoverWords}
        </p>
      )}
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
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Header />
      
      <main className="pt-20">
        <div 
          className="relative min-h-[70vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full py-24 lg:py-32">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="bts-title mb-4">
                About Us
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-8" />
              
              <div className="bts-body space-y-6 text-white/80 text-base lg:text-lg">
                <p>
                  We are an award-winning, multidisciplinary architecture, interior design and design+build practice with a strong presence across the Indian subcontinent.
                </p>
                <p>
                  We bring together strategy, creativity and technical expertise to shape workplaces, hospitality environments and institutional spaces that elevate human experience and enable performance.
                </p>
                <p>
                  By connecting perspectives across disciplines and working closely with our clients, we turn complex aspirations into clear, considered solutions, from the first idea to the finished environment.
                </p>
                <p>
                  Our work spans architecture, interior design, workplace strategy, sustainability, engineering and build management. What unites it is a shared commitment to purposeful thinking, design integrity and lasting impact.
                </p>
                <p className="text-white/90 font-normal">
                  We don't just create spaces. We create the conditions for what happens within them.
                </p>
              </div>
              <div className="bts-body pt-8 space-y-3 text-white/70 text-base lg:text-lg">
                <p className="text-white text-xl lg:text-2xl font-semibold text-center">We are BeThatSpace™</p>
                <p>
                  A proclamation of intent.
                  A blessing for every space we touch.
                  A dialogue with the inanimate.
                </p>
                <p>Where the abstract gets manifested,</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section id="story" className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="text-center mb-12">
              <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3">Our Story</p>
              <h2 className="bts-title mb-6">
                Every Space Begins With an Intent.
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto" />
            </div>

            <div className="bts-body max-w-3xl mx-auto space-y-8 text-white/80 text-base lg:text-lg">
              <p>
                We are the architects of your space - for it to Be That Space.
              </p>
              <p>
                BeThatSpace is both our name and our philosophy: a belief that every environment holds the potential to become something more than its physical form.
              </p>
              <p>
                It begins with understanding what is unseen - the aspirations, needs and possibilities that give a space its purpose. Through reflection and clarity, these take shape as ideas, and through design and build, those ideas become tangible.
              </p>
              <p>
                We see this journey as four ways of becoming -
              </p>
              <ul className="space-y-4 text-white/90 text-left">
                <li><span className="font-semibold text-white">To Be Aware</span>: Recognise what could be.</li>
                <li><span className="font-semibold text-white">To Be Still</span>: Make room for understanding.</li>
                <li><span className="font-semibold text-white">To Be Clear</span>: Give intention a direction.</li>
                <li><span className="font-semibold text-white">To Be Manifested</span>: Give form to possibility.</li>
              </ul>
              <p>
                This is our process of becoming: from the abstract to the tangible, from intent to manifestation, from space as it is to space as it could be.
              </p>
              <div className="pt-4 space-y-2 text-white/90">
                <p>To design is to declare.</p>
                <p>To build is to believe.</p>
                <p>To Be That Space is to give intent its form.</p>
              </div>
              <p className="text-white text-xl font-semibold pt-4 text-center">Abstract Manifested.</p>
            </div>
          </div>
        </section>

        {/* Our Values — 2 cols × 3 rows */}
        <section className="relative bg-black py-20 lg:py-32">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="text-center mb-6">
              <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3">Our Values</p>
              <h2 className="bts-title mb-6">
                What We Stand For
              </h2>
              <p className="bts-body text-white/70 text-base lg:text-lg max-w-3xl mx-auto mb-12">
                Our values shape how we think, how we work together and how we deliver. They guide our decisions, define our relationships and hold us accountable to the outcomes we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="group border border-white/10 hover:border-red-600/50 p-8 lg:p-10 transition-all duration-500 min-h-[220px] flex flex-col"
                >
                  <h3 className="text-xl lg:text-2xl text-white font-semibold mb-4 group-hover:text-red-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="bts-body bts-justify text-white/70 text-sm lg:text-base flex-1">
                    {value.description}
                  </p>
                  <div className="mt-6 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>

            <p className="bts-body text-white/60 text-sm lg:text-base max-w-3xl mx-auto">
              Integrity, ownership and sustainability are the principles that underpin every value, and every decision we make.
            </p>
          </div>
        </section>

        {/* Our Impact */}
        <section className="bg-neutral-950 py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
            <div className="text-center mb-8">
              <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3">Our Impact</p>
              <h2 className="bts-title mb-6">
                Beyond What We Build.
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-10" />
            </div>

            <div className="bts-body max-w-3xl mx-auto space-y-6 text-white/80 text-base lg:text-lg mb-16">
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

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <StatCounter end={Infinity} label="Ideas" suffix="∞" hoverWords="Endless creativity and design possibilities." />
              <StatCounter end={1} label="People" suffix="M+" hoverWords="Lives touched by spaces we create." />
              <StatCounter end={2000} label="Businesses" suffix="+" hoverWords="Organisations we help move forward." />
            </div>
          </div>
        </section>

        <section className="relative bg-neutral-900 py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-14 text-center">
            <h2 className="bts-title mb-8">
              Let's Make Space for Possibility.
            </h2>
            <p className="bts-body text-white/70 text-base lg:text-lg mb-12 max-w-3xl mx-auto">
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
