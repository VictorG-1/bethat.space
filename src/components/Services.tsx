import { ChevronDown, Plus, Minus } from 'lucide-react';
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
        setPanelOffset(gridHeight / 3);
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
      outcome: 'Spaces that breathe, adapt, and empower people to thrive. We\'ve seen it happen—environments that truly support their occupants become catalysts for growth and success.'
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
      outcome: 'Projects realized with confidence, care, and craftsmanship. When design intent meets construction excellence, the result speaks for itself.'
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
      outcome: 'Integrated, future-ready environments that are technically sound, experientially rich, and deeply human. These are spaces that work beautifully on every level—from the systems that power them to the experiences they enable.'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="relative min-h-screen bg-black py-20 lg:py-32 flex items-center">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
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
        <div className="space-y-0">
          {/* Service Cards Row */}
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6" data-service-cards>
            {services.map((service, index) => {
              const isExpanded = expandedService === index;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden bg-neutral-900 transition-all duration-500 ${
                    isExpanded ? 'border-2 border-red-600' : 'border border-white/10 hover:border-red-600/50'
                  }`}
                >
                  {/* Card: aspect-square, top 2/3 image, bottom 1/3 info when expanded */}
                  <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => toggleExpand(index)}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-700 grayscale ${
                        !isExpanded && 'group-hover:scale-105'
                      }`}
                    />

                    {/* Dark gradient - when expanded, only over top 2/3 so bottom 1/3 is for info box */}
                    <div
                      className="absolute left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
                      style={{ top: 0, height: isExpanded ? '66.666%' : '100%' }}
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
                        {/* Expanded: top 2/3 - title in visible image area */}
                        <div className="absolute left-0 right-0 p-4 lg:p-6" style={{ top: 0, height: '66.666%' }}>
                          <h3 className="text-xl lg:text-2xl text-white font-semibold tracking-tight absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                            {service.title}
                          </h3>
                        </div>

                        {/* Expanded: bottom 1/3 - red-bordered start (connector to white stack below) */}
                        <div
                          className="absolute left-0 right-0 bottom-0 border-t-2 border-l-2 border-r-2 border-red-600 bg-white"
                          style={{ height: '33.333%' }}
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

          {/* White info stack - starts from bottom 1/3 of the row (below image), extends down past last service */}
          {expandedService !== null && (
            <div
              className="relative z-20 bg-white border-2 border-red-600 animate-in fade-in duration-300"
              style={{ marginTop: panelOffset > 0 ? -panelOffset : 0 }}
            >
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 border-2 border-red-600/30 flex items-center justify-center shrink-0">
                    <span className="text-red-600 font-bold text-2xl">{services[expandedService].watermark}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl text-black font-semibold tracking-tight">
                    {services[expandedService].title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {services[expandedService].subServices.map((sub, subIndex) => (
                    <div key={subIndex} className="border-l-2 border-red-600/30 pl-6">
                      <h4 className="text-black font-semibold text-lg mb-2">{sub.name}</h4>
                      <p className="text-black/60 text-sm lg:text-base leading-relaxed font-light text-justify">
                        {sub.description}
                      </p>
                    </div>
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
          )}
        </div>

        <a href="#projects" className="flex justify-center mt-20 lg:mt-24">
          <ChevronDown className="w-8 h-8 text-white/30 hover:text-red-600 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
}