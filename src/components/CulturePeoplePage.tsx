import { Header } from './Header';
import { Footer } from './Footer';
import cultureBgVideo from '../assets/culture-bg.mp4';
import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Handshake,
  Layers,
  type LucideIcon,
} from 'lucide-react';

function CultureEyebrow({ className = '' }: { className?: string }) {
  return (
    <p className={`about-eyebrow text-xs uppercase tracking-[0.22em] text-white ${className}`.trim()}>
      <span className="text-red-600 mr-1.5">/</span>
      CULTURE
    </p>
  );
}

function CultureHeadline({
  first,
  second,
  as: Tag = 'h1',
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

const CULTURAL_PIVOTS: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: 'From Compliance to Ownership',
    description:
      'Go beyond completing tasks. Take responsibility for outcomes, think independently and act with intent. Ownership means caring about what happens because of the work we do.',
    Icon: Target,
  },
  {
    title: 'From Silos to Shared Intelligence',
    description:
      "Bring people, disciplines and perspectives together. Share knowledge openly, build on one another's ideas and recognise that collective intelligence creates stronger solutions.",
    Icon: Users,
  },
  {
    title: 'From Assumptions to Curiosity',
    description:
      'Question what seems obvious. Listen before deciding, explore before concluding and remain open to perspectives that challenge your own.',
    Icon: Lightbulb,
  },
  {
    title: 'From Activity to Impact',
    description:
      'Look beyond busyness to meaningful progress. Prioritise the work that creates value for clients, colleagues, projects and businesses.',
    Icon: TrendingUp,
  },
  {
    title: 'From Ego to Collective Growth',
    description:
      'Make room for others to contribute, learn and lead. Share knowledge generously, respect differences and recognise that individual growth strengthens the whole.',
    Icon: Handshake,
  },
  {
    title: 'From Intent to Manifestation',
    description:
      'Turn ideas into action and ambition into outcomes. Bring clarity to complexity, rigour to execution and care to every detail.',
    Icon: Layers,
  },
];

export function CulturePeoplePage() {
  return (
    <div className="about-us-page culture-page relative min-h-screen bg-black scroll-smooth font-sans">
      <div className="culture-page-bg pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black" aria-hidden>
        <video
          className="culture-page-bg__video absolute inset-0 h-full w-full object-cover object-center"
          src={cultureBgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <section className="about-section values-section relative min-h-screen flex items-start overflow-hidden">
          <div className="bts-shell relative z-10 w-full">
            <CultureEyebrow className="mb-5" />

            <div className="values-intro mb-6 lg:mb-7">
              <CultureHeadline first="Cultural" second="Pivots" />
              <div className="values-intro__rule" aria-hidden />
              <div className="values-intro__copy text-white text-base lg:text-lg font-light leading-[1.7] space-y-3">
                <p className="font-semibold text-white leading-snug">A Culture of Becoming.</p>
                <p>
                  Culture is not what we declare. It is what we practise, in the choices we make, the
                  way we work and the responsibility we take for our outcomes.
                </p>
                <p>
                  At <span className="font-bold text-white">BeThatSpace™</span>, we are building a
                  culture that moves:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1 lg:gap-x-4 lg:gap-y-1.5 mb-6 lg:mb-7">
              {CULTURAL_PIVOTS.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="values-card group bg-black/30 px-4 py-4 lg:px-5 lg:py-5 transition-all duration-500 flex gap-3"
                >
                  <div className="shrink-0 pt-0.5">
                    <Icon
                      className="w-9 h-9 lg:w-10 lg:h-10 text-red-600"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                  <div className="border-l border-red-600 pl-3 min-w-0">
                    <h2 className="text-lg lg:text-xl text-white font-semibold mb-1.5 leading-tight">
                      {title}
                    </h2>
                    <p className="values-card-copy text-white/80 text-sm lg:text-[0.95rem] font-light leading-[1.6]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto space-y-3">
              <p className="values-footer-line text-white text-sm lg:text-base font-semibold leading-snug">
                These are not destinations we claim to have reached. They are the shifts we commit to
                making - every day, together.
              </p>
              <p className="values-footer-line text-white text-sm lg:text-base font-semibold leading-snug">
                The promise we make through our work begins with the culture we build within.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
