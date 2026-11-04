import { Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import specialistCollaborationImg from '../assets/services/specialist-collaboration.png';
import designBuildImg from '../assets/services/design-build.jpg';

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const [panelTop, setPanelTop] = useState(0);

  useEffect(() => {
    if (expandedService === null || !cardsGridRef.current) {
      setPanelTop(0);
      return;
    }

    const updatePanelTop = () => {
      const card = cardsGridRef.current?.querySelector('[data-service-card]') as HTMLElement | null;
      if (card) {
        // Start white box exactly after the top 1/3 of the service image
        setPanelTop(card.offsetHeight / 3);
      }
    };

    updatePanelTop();
    window.addEventListener('resize', updatePanelTop);
    return () => window.removeEventListener('resize', updatePanelTop);
  }, [expandedService]);

  const services = [
    {
      title: 'Design Consultancy',
      watermark: 'DC',
      intro: 'Creative & sustainable design interventions that bridge tangible needs with intangible aspirations.',
      description: 'We translate aspirations into environments through creative, context-responsive and technically informed design. Balancing human needs, business objectives and environmental considerations, we create spaces where form, function and experience work together.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      subServices: [
        {
          name: 'Workplace Strategy',
          description: 'Aligning people, culture and space with organisational objectives and evolving ways of working.'
        },
        {
          name: 'Architecture',
          description: 'Shaping built environments in response to context, climate, function and community.'
        },
        {
          name: 'Interior Design',
          description: 'Creating considered spatial experiences that express identity and enhance everyday use.'
        },
        {
          name: 'MEPF Design',
          description: 'Integrating mechanical, electrical, plumbing and fire-protection systems for comfort, safety and operational efficiency.'
        }
      ],
      outcome: 'Environments that respond intelligently, perform effectively and support the people who use them.',
      paragraphs: [
        'Creative & sustainable design interventions that bridge tangible needs with intangible aspirations.',
        'We translate aspirations into environments through creative, context-responsive and technically informed design. Balancing human needs, business objectives and environmental considerations, we create spaces where form, function and experience work together.',
        'Our Expertise: Workplace Strategy, Architecture, Interior Design, MEPF Design. The Outcome: Environments that respond intelligently, perform effectively and support the people who use them.'
      ]
    },
    {
      title: 'Design + Build',
      watermark: 'DB',
      intro: 'Efficient & seamless design+build solutions that merge creative precision with accountable execution.',
      description: 'We bring design and execution together through an integrated approach that connects creative intent with practical delivery. With coordinated teams, transparent processes and disciplined project management, we work to maintain design integrity while managing cost, quality and time.',
      image: designBuildImg,
      subServices: [
        {
          name: 'Construction Management (Cost Plus)',
          description: 'Collaborative project delivery with transparent cost management, coordinated procurement and accountable execution.'
        },
        {
          name: 'Integrated Design + Build',
          description: 'A unified delivery model that aligns design, engineering, procurement and construction under coordinated project leadership.'
        }
      ],
      outcome: 'A more connected journey from concept to completion, with clarity of responsibility and confidence in delivery.',
      paragraphs: [
        'Efficient & seamless design+build solutions that merge creative precision with accountable execution.',
        'We bring design and execution together through an integrated approach that connects creative intent with practical delivery. With coordinated teams, transparent processes and disciplined project management, we work to maintain design integrity while managing cost, quality and time.',
        'Our Expertise: Construction Management (Cost Plus), Integrated Design + Build. The Outcome: A more connected journey from concept to completion, with clarity of responsibility and confidence in delivery.'
      ]
    },
    {
      title: 'Specialist Collaboration',
      watermark: 'SC',
      intro: 'Specialist partnerships that amplify design depth and project performance.',
      description: 'Complex projects benefit from expertise that extends beyond any single discipline. We collaborate with specialist consultants and partners to bring complementary knowledge into the design and delivery process. By integrating their expertise with our own, we develop solutions that are coordinated, technically robust and responsive to the experience the space is intended to create.',
      image: specialistCollaborationImg,
      subServices: [
        { name: 'Structural Design', description: '' },
        { name: 'Façade Design', description: '' },
        { name: 'Sustainability & Wellness Consulting', description: '' },
        { name: 'AV & Acoustics Design', description: '' },
        { name: 'Environmental Graphic Design (EGD)', description: '' }
      ],
      outcome: 'Cohesive, technically integrated environments in which every discipline contributes to the performance of the whole.',
      paragraphs: [
        'Specialist partnerships that amplify design depth and project performance.',
        'Complex projects benefit from expertise that extends beyond any single discipline. We collaborate with specialist consultants and partners to bring complementary knowledge into the design and delivery process.',
        'Our Collaborative Disciplines: Structural Design, Façade Design, Sustainability & Wellness Consulting, AV & Acoustics Design, Environmental Graphic Design (EGD). The Outcome: Cohesive, technically integrated environments in which every discipline contributes to the performance of the whole.'
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="relative min-h-screen bg-black py-20 lg:py-32 flex items-center overflow-visible">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="bts-title mb-6">
            Services
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-white text-xl lg:text-2xl font-semibold mb-6"
              style={{ textAlign: 'left', textAlignLast: 'left' }}
            >
              From Intent to Impact.
            </p>
            <p
              className="about-copy text-white/70 text-base lg:text-lg font-light leading-[1.85]"
              style={{ textAlign: 'justify', textAlignLast: 'left' }}
            >
              A space should do more than serve a function. It should respond to human needs, express a clear purpose and enable better outcomes. At BeThatSpace™, we bring together design intelligence, technical expertise and accountable execution to translate tangible requirements and intangible aspirations into purposeful built environments. From the first strategic question to the final detail on site, we connect the thinking, making and collaboration required to bring an idea to life.
            </p>
          </div>
        </div>

        {/* Services: top 1/3 images stay visible; white text covers all 3 cards in lower 2/3 */}
        <div className="relative" data-service-cards>
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const isExpanded = expandedService === index;
              return (
                <div
                  key={index}
                  data-service-card
                  className={`group relative bg-neutral-900 transition-all duration-500 overflow-hidden aspect-square ${
                    isExpanded
                      ? 'border-2 border-red-600 z-10'
                      : expandedService !== null
                        ? 'border border-white/10'
                        : 'border border-white/10 hover:border-red-600/50'
                  }`}
                >
                  <div
                    className="relative h-full overflow-hidden cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-700 grayscale ${
                        !isExpanded && expandedService === null ? 'group-hover:scale-105' : ''
                      } ${
                        expandedService !== null && !isExpanded ? 'brightness-50' : ''
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                    <div className="absolute top-6 right-6 text-white/30 text-[80px] lg:text-[100px] font-bold leading-none pointer-events-none">
                      {service.watermark}
                    </div>

                    {!isExpanded ? (
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 lg:p-8 transition-opacity duration-500 ${
                          expandedService !== null ? 'opacity-30' : 'opacity-100'
                        }`}
                      >
                        <h3
                          className="text-xl lg:text-2xl text-white font-semibold mb-2 tracking-tight"
                          style={{ textAlign: 'left', textAlignLast: 'left' }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-white/70 text-xs lg:text-sm mb-4 line-clamp-3 font-light leading-relaxed"
                          style={{ textAlign: 'justify', textAlignLast: 'left' }}
                        >
                          {service.intro}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(index);
                          }}
                          className="inline-flex items-center text-white/80 hover:text-red-600 transition-colors duration-300 group/btn leading-none"
                          style={{ gap: 12 }}
                        >
                          <span className="w-5 h-5 shrink-0 rounded-full border border-white/80 group-hover/btn:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                            <Plus className="w-3 h-3" />
                          </span>
                          <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
                        </button>
                      </div>
                    ) : (
                      <div
                        className="absolute left-0 right-0 p-4 lg:p-6 z-10"
                        style={{ top: 0, height: '33.333%' }}
                      >
                        <h3
                          className="text-xl lg:text-2xl text-white font-semibold tracking-tight absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6"
                          style={{ textAlign: 'left', textAlignLast: 'left' }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    )}

                    {expandedService !== null && !isExpanded && (
                      <div className="absolute inset-0 z-20 bg-black/70 pointer-events-none transition-opacity duration-500" />
                    )}
                  </div>

                  {!isExpanded && expandedService === null && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Full-width white box over all 3 services in the lower 2/3 */}
          {expandedService !== null && (() => {
            const service = services[expandedService];
            const paragraphs = service.paragraphs ?? [
              service.intro,
              service.description,
              service.outcome,
            ];
            return (
              <>
                <div
                  className="hidden md:flex absolute z-30 left-0 right-0 bottom-0 bg-white border-2 border-red-600 animate-in fade-in duration-300 overflow-y-auto"
                  style={{ top: panelTop || '33.333%' }}
                >
                  <div className="w-full px-6 lg:px-12 py-8 lg:py-10 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 flex-1">
                      {paragraphs.slice(0, 3).map((para, pi) => (
                        <p
                          key={pi}
                          className="text-black/75 text-sm lg:text-base font-light leading-[1.85]"
                          style={{ textAlign: 'justify', textAlignLast: 'left' }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedService(null)}
                      className="inline-flex items-center self-start text-black/80 hover:text-red-600 transition-colors duration-300 group/btn leading-none"
                      style={{ gap: 12 }}
                    >
                      <span className="w-5 h-5 shrink-0 rounded-full border border-black/80 group-hover/btn:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                        <Minus className="w-3 h-3" />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider">Show Less</span>
                    </button>
                  </div>
                </div>

                <div className="md:hidden bg-white border-2 border-red-600 animate-in fade-in duration-300">
                  <div className="px-6 py-8">
                    <div className="space-y-4 mb-6">
                      {paragraphs.slice(0, 3).map((para, pi) => (
                        <p
                          key={pi}
                          className="text-black/75 text-sm font-light leading-[1.85]"
                          style={{ textAlign: 'justify', textAlignLast: 'left' }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpandedService(null)}
                      className="inline-flex items-center text-black/80 hover:text-red-600 transition-colors duration-300 group/btn leading-none"
                      style={{ gap: 12 }}
                    >
                      <span className="w-5 h-5 shrink-0 rounded-full border border-black/80 group-hover/btn:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                        <Minus className="w-3 h-3" />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider">Show Less</span>
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>

        {/* Our Approach */}
        <div className="mt-20 lg:mt-28 max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3 text-center">Our Approach</p>
          <div className="text-white/70 text-base lg:text-lg font-light leading-[1.85] space-y-4">
            <p className="text-white text-lg lg:text-xl" style={{ textAlign: 'center', textAlignLast: 'center' }}>
              Design brings intent into focus. Build gives it form. Collaboration strengthens the result.
            </p>
            <p style={{ textAlign: 'center', textAlignLast: 'center' }}>
              Together, they enable us to create conducive environments where people and businesses thrive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}