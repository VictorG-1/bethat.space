import { Plus, Minus, Target, Box, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState } from 'react';
import specialistCollaborationImg from '../assets/services/specialist-collaboration.png';
import designBuildImg from '../assets/services/design-build.jpg';

const APPROACH = [
  {
    title: 'Design',
    line: 'Brings intent into focus.',
    Icon: Target,
  },
  {
    title: 'Build',
    line: 'Gives it form.',
    Icon: Box,
  },
  {
    title: 'Collaborate',
    line: 'Strengthens the result.',
    Icon: Users,
  },
] as const;

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const dropRefs = useRef<Array<HTMLDivElement | null>>([]);
  const savedScrollYRef = useRef<number | null>(null);

  const services = [
    {
      title: 'Design Consultancy',
      watermark: 'DC',
      paragraphs: [
        'Creative & sustainable design interventions that bridge tangible needs with intangible aspirations.',
        'We translate aspirations into environments through creative, context-responsive and technically informed design. Balancing human needs, business objectives and environmental considerations, we create spaces where form, function and experience work together.',
        'Our Expertise: Workplace Strategy, Architecture, Interior Design, MEPF Design. The Outcome: Environments that respond intelligently, perform effectively and support the people who use them.',
      ],
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'Design + Build',
      watermark: 'DB',
      paragraphs: [
        'Efficient & seamless design+build solutions that merge creative precision with accountable execution.',
        'We bring design and execution together through an integrated approach that connects creative intent with practical delivery. With coordinated teams, transparent processes and disciplined project management, we work to maintain design integrity while managing cost, quality and time.',
        'Our Expertise: Construction Management (Cost Plus), Integrated Design + Build. The Outcome: A more connected journey from concept to completion, with clarity of responsibility and confidence in delivery.',
      ],
      image: designBuildImg,
    },
    {
      title: 'Specialist Collaboration',
      watermark: 'SC',
      paragraphs: [
        'Specialist partnerships that amplify design depth and project performance.',
        'Complex projects benefit from expertise that extends beyond any single discipline. We collaborate with specialist consultants and partners to bring complementary knowledge into the design and delivery process.',
        'Our Collaborative Disciplines: Structural Design, Façade Design, Sustainability & Wellness Consulting, AV & Acoustics Design, Environmental Graphic Design (EGD). The Outcome: Cohesive, technically integrated environments in which every discipline contributes to the performance of the whole.',
      ],
      image: specialistCollaborationImg,
    },
  ];

  const getScroller = () => {
    const main = document.querySelector('main');
    if (main && main.scrollHeight > main.clientHeight + 1) return main;
    return null;
  };

  const getScrollTop = () => {
    const main = getScroller();
    if (main) return main.scrollTop;
    return window.scrollY || document.documentElement.scrollTop || 0;
  };

  const scrollToY = (y: number) => {
    const main = getScroller();
    if (main) main.scrollTo({ top: y, behavior: 'smooth' });
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollDropIntoView = (index: number) => {
    const panel = dropRefs.current[index];
    if (!panel) return;

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    window.requestAnimationFrame(() => {
      const rect = panel.getBoundingClientRect();
      const headerOffset = 108;
      const bottomGap = 40;
      const topOverflow = headerOffset - rect.top;
      const bottomOverflow = rect.bottom - (window.innerHeight - bottomGap);
      const delta = topOverflow > 0 ? -topOverflow : bottomOverflow > 0 ? bottomOverflow : 0;
      if (!delta) return;
      const main = getScroller();
      if (main) main.scrollBy({ top: delta, behavior: 'smooth' });
      else window.scrollBy({ top: delta, behavior: 'smooth' });
    });
  };

  const toggleExpand = (index: number) => {
    const closing = expandedService === index;
    const opening = expandedService !== index;

    if (opening) {
      savedScrollYRef.current = getScrollTop();
    }

    setExpandedService((prev) => (prev === index ? null : index));

    if (opening) {
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollDropIntoView(index), 280);
      });
    } else if (closing && savedScrollYRef.current !== null) {
      const y = savedScrollYRef.current;
      savedScrollYRef.current = null;
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollToY(y), 80);
      });
    }
  };

  return (
    <section
      id="services"
      className="explore-section relative min-h-screen bg-black flex items-start overflow-visible"
    >
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 bts-shell w-full overflow-visible">
        <div className="mb-6">
          <div className="bts-section-head mb-6">
            <h2 className="bts-title">Services</h2>
            <div className="bts-bar-wrap">
              <div className="bts-bar" />
            </div>
          </div>
          <div className="main-copy">
            <p className="text-white text-xl lg:text-2xl font-semibold mb-1 text-center">
              From Intent to Impact.
            </p>
            <p className="about-copy text-white/70 text-base lg:text-lg font-light leading-[1.85]">
              A space should do more than serve a function. It should meet human needs, express purpose
              and enable better outcomes. At BeThatSpace™, we combine design intelligence, technical
              expertise and accountable execution to transform ideas and aspirations into purposeful
              built environments.
            </p>
          </div>
        </div>

        <div className="relative main-copy overflow-visible" data-service-cards>
          <div className="services-cards people-cards grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {services.map((service, index) => {
              const isOpen = expandedService === index;

              return (
                <article
                  key={service.title}
                  data-service-card
                  className={`people-card group relative flex flex-col bg-black border transition-all duration-500 ease-out ${
                    isOpen
                      ? 'people-card--open border-red-600 overflow-visible'
                      : 'border-white/10 hover:border-red-600/50 overflow-hidden'
                  }`}
                  style={isOpen ? { zIndex: 20 } : undefined}
                >
                  <div className="people-card__face relative overflow-hidden">
                    <div className="people-card__photo absolute inset-0 overflow-hidden bg-black">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className={`people-card__img absolute inset-0 w-full h-full object-cover object-center grayscale transition-all duration-700 ${
                          !isOpen ? 'group-hover:scale-105' : ''
                        }`}
                      />

                      {!isOpen && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                      )}

                      <div className="absolute top-6 right-6 text-white/30 text-[80px] lg:text-[100px] font-bold leading-none pointer-events-none select-none z-[1]">
                        {service.watermark}
                      </div>
                    </div>

                    {!isOpen ? (
                      <div className="people-card__meta absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end">
                        <div className="people-card__meta-panel">
                          <div className="flex items-end justify-between gap-3">
                            <h3 className="people-card__name text-sm lg:text-base text-white font-bold leading-snug min-w-0">
                              {service.title}
                            </h3>
                            <button
                              type="button"
                              onClick={() => toggleExpand(index)}
                              className="people-card__more shrink-0 flex items-center gap-1.5 font-medium tracking-wide text-white hover:text-red-600 transition-colors duration-300"
                            >
                              <span className="w-4 h-4 shrink-0 rounded-full border border-white inline-flex items-center justify-center">
                                <Plus className="w-2 h-2" />
                              </span>
                              <span className="whitespace-nowrap">Read More</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="service-card__open-title absolute left-0 right-0 z-10 pointer-events-none"
                        style={{ top: 0, height: '33.333%' }}
                      >
                        <h3 className="people-card__name absolute bottom-4 left-0 right-0 text-sm lg:text-base text-white font-bold leading-snug">
                          {service.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  {isOpen && (
                    <div
                      ref={(node) => {
                        dropRefs.current[index] = node;
                      }}
                      className="service-card__drop people-card__bio-panel relative border-2 border-red-600 bg-white animate-in fade-in slide-in-from-top-1 duration-300"
                      style={{ marginTop: '-66.666%', zIndex: 30 }}
                    >
                      {service.paragraphs.map((para, pi) => (
                        <p key={pi} className="service-card__drop-para people-card__bio">
                          {para}
                        </p>
                      ))}

                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="service-card__drop-less people-card__more inline-flex items-center gap-1.5 font-medium tracking-wide text-black hover:text-red-600 transition-colors duration-300"
                      >
                        <span className="w-4 h-4 shrink-0 rounded-full border border-black/80 inline-flex items-center justify-center">
                          <Minus className="w-2 h-2" />
                        </span>
                        <span className="whitespace-nowrap">Read Less</span>
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="services-approach main-copy mt-12 lg:mt-16">
          <p className="services-approach__label main-sub">Our Approach</p>
          <div className="services-approach__row">
            {APPROACH.map(({ title, line, Icon }) => (
              <div key={title} className="services-approach__item">
                <Icon className="services-approach__icon" strokeWidth={1.5} aria-hidden />
                <p className="services-approach__text">
                  <span className="services-approach__title">{title}</span>{' '}
                  <span className="services-approach__line">{line}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="services-approach__closing">
            Together, they enable us to create conducive environments where people and businesses thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
