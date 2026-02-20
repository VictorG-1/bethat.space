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
      description: 'We translate vision into space — with empathy, logic, and aesthetic clarity. From strategy to detailing, our design approach is rooted in purpose and shaped for performance.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      subServices: [
        {
          name: 'Workplace Strategy',
          description: 'We help organizations align their people, culture, and physical space. It\'s about understanding how teams actually work, then designing environments that support meaningful engagement and collaboration.'
        },
        {
          name: 'Architecture',
          description: 'Our architectural approach responds to context, climate, and community. We design buildings that belong—structures that feel right for their place and purpose.'
        },
        {
          name: 'Interior Design',
          description: 'We craft interior experiences that express identity and enhance daily life. Every material, every detail, every choice serves both function and feeling.'
        },
        {
          name: 'MEPF Design',
          description: 'We integrate mechanical, electrical, plumbing, and fire systems thoughtfully. These invisible systems sustain comfort, efficiency, and wellness—the foundation of great spaces.'
        }
      ],
      outcome: 'Spaces that breathe, adapt, and empower people to thrive. We\'ve seen it happen—environments that truly support their occupants become catalysts for growth and success.',
      paragraphs: [
        'Creative & sustainable design interventions that bridge tangible needs with intangible aspirations. We translate vision into space with empathy, logic, and aesthetic clarity.',
        'From strategy to detailing, our design approach is rooted in purpose and shaped for performance. Every material, every detail, every choice serves both function and feeling.',
        'Spaces that breathe, adapt, and empower people to thrive. Environments that truly support their occupants become catalysts for growth and success.'
      ]
    },
    {
      title: 'Design & Build',
      watermark: 'DB',
      intro: 'Efficient & seamless design+build solutions that merge creative precision with accountable execution.',
      description: 'We believe building is an act of design — where intent meets integrity. Our integrated delivery ensures seamless coordination, transparent processes, and consistent quality.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      subServices: [
        {
          name: 'Construction Management',
          description: 'We manage construction with transparency and collaboration. Our Cost Plus model means you see everything—no surprises, just honest execution that respects both budget and vision.'
        },
        {
          name: 'Design + Build',
          description: 'When design and construction work as one, magic happens. Our unified delivery model ensures what we design gets built exactly as intended—with efficiency, speed, and unwavering fidelity to the vision.'
        }
      ],
      outcome: 'Projects realized with confidence, care, and craftsmanship. When design intent meets construction excellence, the result speaks for itself.',
      paragraphs: [
        'Efficient & seamless design+build solutions that merge creative precision with accountable execution. We believe building is an act of design—where intent meets integrity.',
        'Our integrated delivery ensures seamless coordination, transparent processes, and consistent quality. When design and construction work as one, what we design gets built exactly as intended.',
        'Projects realized with confidence, care, and craftsmanship. When design intent meets construction excellence, the result speaks for itself.'
      ]
    },
    {
      title: 'Collaboration',
      watermark: 'CB',
      intro: 'Specialist partnerships that amplify design depth and project performance.',
      description: 'We collaborate with experts who share our belief that the best spaces are created together. Each partner adds a layer of intelligence, precision, and soul to the project.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      subServices: [
        {
          name: 'Structural Design',
          description: 'Our structural partners ensure buildings stand strong and safe, while supporting our design vision.'
        },
        {
          name: 'Façade Design',
          description: 'Specialist façade designers help us create building skins that perform beautifully—protecting, expressing, and inspiring.'
        },
        {
          name: 'Sustainability & Wellness Consulting',
          description: 'We work with consultants who help us create spaces that are good for people and the planet—healthy, efficient, and future-ready.'
        },
        {
          name: 'AV & Acoustics Design',
          description: 'Audio-visual and acoustic experts ensure spaces sound as good as they look—supporting communication, focus, and connection.'
        },
        {
          name: 'Environmental Graphic Design (EGD)',
          description: 'EGD partners help us tell stories through space—wayfinding, branding, and identity woven into the built environment.'
        }
      ],
      outcome: 'Integrated, future-ready environments that are technically sound, experientially rich, and deeply human. These are spaces that work beautifully on every level—from the systems that power them to the experiences they enable.',
      paragraphs: [
        'Specialist partnerships that amplify design depth and project performance. We collaborate with experts who share our belief that the best spaces are created together.',
        'Each partner adds a layer of intelligence, precision, and soul to the project. From structural and façade design to sustainability and acoustics—we integrate expertise that elevates every outcome.',
        'Integrated, future-ready environments that are technically sound, experientially rich, and deeply human. Spaces that work beautifully on every level.'
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
          <h2 className="text-3xl lg:text-5xl tracking-tight text-white mb-6 font-semibold">
            Services
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
        </div>

        <p className="text-white/70 text-center text-base lg:text-lg font-light max-w-2xl mx-auto mb-12">
          End-to-end solutions that bring your vision to life.
        </p>

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
                      /* Collapsed: title + Read more at bottom */
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <h3 className="text-2xl lg:text-3xl text-white font-semibold mb-4 tracking-tight">
                          {service.title}
                        </h3>
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
                          <p key={i} className="text-black/70 text-sm lg:text-base leading-relaxed font-light text-justify">
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

      </div>
    </section>
  );
}