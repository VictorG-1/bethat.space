import { Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef, useEffect } from 'react';

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const [panelOffset, setPanelOffset] = useState(0);

  useEffect(() => {
    if (expandedService === null || !cardsGridRef.current) {
      setPanelOffset(0);
      return;
    }
    const updateOffset = () => {
      if (cardsGridRef.current) {
        const gridHeight = cardsGridRef.current.offsetHeight;
        setPanelOffset((gridHeight * 2) / 3);
      }
    };
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
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
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
          <p className="text-white text-xl lg:text-2xl font-semibold mb-6">
            From Intent to Impact.
          </p>
          <p className="bts-body text-white/70 text-base lg:text-lg max-w-3xl mx-auto">
            A space should do more than serve a function. It should respond to human needs, express a clear purpose and enable better outcomes. At BeThatSpace™, we bring together design intelligence, technical expertise and accountable execution to translate tangible requirements and intangible aspirations into purposeful built environments. From the first strategic question to the final detail on site, we connect the thinking, making and collaboration required to bring an idea to life.
          </p>
        </div>

        {/* Services - Horizontal Row with Individual Expanders */}
        <div className="space-y-0 overflow-visible">
          {/* Service Cards Row */}
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6" data-service-cards>
            {services.map((service, index) => {
              const isExpanded = expandedService === index;
              const showRightBorder = index < services.length - 1;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden bg-neutral-900 transition-all duration-500 ${
                    isExpanded
                      ? 'border border-white/10 m-3'
                      : 'border border-white/10 hover:border-red-600/50'
                  } ${showRightBorder ? 'md:border-r-2 md:border-r-black' : ''}`}
                >
                  {/* Card: aspect-square, top 1/3 image, bottom 2/3 info when expanded */}
                  <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => toggleExpand(index)}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-700 grayscale ${
                        !isExpanded && 'group-hover:scale-105'
                      }`}
                    />

                    {/* Dark gradient - when expanded, only over top 1/3 so bottom 2/3 is for info box */}
                    <div
                      className="absolute left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
                      style={{ top: 0, height: isExpanded ? '33.333%' : '100%' }}
                    />

                    {expandedService !== null && expandedService !== index && (
                      <div className="absolute inset-0 bg-black/60 transition-opacity duration-500" />
                    )}

                    <div className="absolute top-6 right-6 text-white/30 text-[80px] lg:text-[100px] font-bold leading-none pointer-events-none">
                      {service.watermark}
                    </div>

                    {!isExpanded ? (
                      /* Collapsed: title + intro on main tile + Read more */
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <h3 className="text-xl lg:text-2xl text-white font-semibold mb-2 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="bts-body bts-justify text-white/70 text-xs lg:text-sm mb-4 line-clamp-3">
                          {service.intro}
                        </p>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleExpand(index); }}
                          className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
                        >
                          <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                            <Plus className="w-3 h-3" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Expanded: top 1/3 - title in visible image area */}
                        <div className="absolute left-0 right-0 p-4 lg:p-6" style={{ top: 0, height: '33.333%' }}>
                          <h3 className="text-xl lg:text-2xl text-white font-semibold tracking-tight absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                            {service.title}
                          </h3>
                        </div>

                        {/* Expanded: bottom 2/3 - red-bordered start (connector to white stack below) */}
                        <div
                          className="absolute left-0 right-0 bottom-0 bg-white"
                          style={{ height: '66.666%' }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </>
                    )}
                  </div>

                  {!isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                  )}
                </div>
              );
            })}
          </div>

          {/* 1.5rem vertical gap (same as horizontal gap between cards) below all cards, then full-width read-more container */}
          {expandedService !== null && (
            <>
              {(() => {
                const service = services[expandedService];
                const paragraphs = service.paragraphs ?? [
                  service.intro,
                  service.description,
                  service.outcome
                ];

                const panel = (
                  <div className="bg-white animate-in fade-in duration-300 w-full">
                    <div className="px-6 lg:px-12 py-8 lg:py-12">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-red-600/30 flex items-center justify-center shrink-0">
                          <span className="text-red-600 font-bold text-3xl lg:text-4xl">{service.watermark}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl text-black font-semibold tracking-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* 3 paragraphs aligned below the 3 service cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {paragraphs.slice(0, 3).map((para, i) => (
                          <p key={i} className="bts-body bts-justify text-black/70 text-sm lg:text-base">
                            {para}
                          </p>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <button
                          onClick={() => setExpandedService(null)}
                          className="flex items-center gap-2 text-black/80 hover:text-red-600 transition-colors duration-300 group/btn"
                        >
                          <div className="w-5 h-5 rounded-full border border-black/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                            <Minus className="w-3 h-3" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-wider">Show Less</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <>
                    {/* Mobile: full width, overlap for connection */}
                    <div
                      className="relative z-30 isolate md:hidden overflow-visible"
                      style={{ marginTop: panelOffset > 0 ? -panelOffset : 0 }}
                    >
                      {panel}
                    </div>

                    {/* Desktop: 1/3 + 2/3 — modal under active card only; 1.5rem horizontal gap to other two cards */}
                    <div className="relative z-30 isolate hidden md:block -mt-6 overflow-visible">
                      <div className="grid grid-cols-3 gap-6">
                        <div className={`overflow-visible ${expandedService === 0 ? 'min-w-0' : ''}`}>{expandedService === 0 ? panel : <div aria-hidden />}</div>
                        <div className={`overflow-visible ${expandedService === 1 ? 'min-w-0' : ''}`}>{expandedService === 1 ? panel : <div aria-hidden />}</div>
                        <div className={`overflow-visible ${expandedService === 2 ? 'min-w-0' : ''}`}>{expandedService === 2 ? panel : <div aria-hidden />}</div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </>
          )}
        </div>

        {/* Our Approach */}
        <div className="mt-20 lg:mt-28 max-w-3xl mx-auto">
          <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3 text-center">Our Approach</p>
          <div className="bts-body text-white/70 text-base lg:text-lg space-y-4">
            <p className="text-white text-lg lg:text-xl">
              Design brings intent into focus. Build gives it form. Collaboration strengthens the result.
            </p>
            <p>
              Together, they enable us to create conducive environments where people and businesses thrive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}