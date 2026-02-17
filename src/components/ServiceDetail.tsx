import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/aa11cddccf649bb4189ffcfb3f0474378376d096.png';

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const serviceData: Record<string, any> = {
    'architectural-design': {
      title: 'Architectural Design',
      subtitle: 'Crafting Spaces That Inspire',
      heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      overview: 'Our architectural design services encompass the entire spectrum of built environment creation, from initial concept development to final construction documentation. We believe that great architecture emerges from a deep understanding of context, culture, and the unique needs of each client.',
      approach: [
        'We begin every project with comprehensive research and analysis, studying site conditions, local regulations, climate factors, and cultural context.',
        'Our design process is highly collaborative, involving clients, stakeholders, and consultants at every stage to ensure alignment with vision and objectives.',
        'Sustainability is integrated into every decision, utilizing passive design strategies, renewable materials, and energy-efficient systems.',
        'We leverage cutting-edge technology including BIM (Building Information Modeling), parametric design tools, and virtual reality to visualize and refine our concepts.'
      ],
      services: [
        {
          title: 'Conceptual Design',
          description: 'Initial visioning and schematic design that establishes the foundational ideas, spatial relationships, and aesthetic direction of the project.'
        },
        {
          title: 'Design Development',
          description: 'Detailed refinement of architectural systems, materials, finishes, and technical specifications to prepare for construction documentation.'
        },
        {
          title: 'Construction Documentation',
          description: 'Comprehensive drawings and specifications that guide contractors through the building process with precision and clarity.'
        },
        {
          title: 'Construction Administration',
          description: 'On-site oversight and coordination to ensure design intent is maintained throughout the construction phase.'
        }
      ],
      expertise: [
        'Residential Architecture (Single-family homes, Multi-family housing, Luxury estates)',
        'Commercial Architecture (Office buildings, Retail spaces, Mixed-use developments)',
        'Institutional Buildings (Educational facilities, Healthcare centers, Cultural institutions)',
        'Adaptive Reuse & Historic Preservation',
        'Sustainable & Net-Zero Buildings',
        'Landscape Integration & Site Planning'
      ],
      image1: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    'interior-design': {
      title: 'Interior Design',
      subtitle: 'Creating Atmospheres That Resonate',
      heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      overview: 'Our interior design practice focuses on creating environments that enhance human experience through thoughtful spatial planning, curated material palettes, and sophisticated detailing. We transform spaces into places that inspire, comfort, and elevate daily life.',
      approach: [
        'Every interior design project begins with understanding how spaces will be lived in, worked in, and experienced by their users.',
        'We develop comprehensive mood boards, material libraries, and 3D visualizations to help clients envision the final outcome.',
        'Our specifications include custom millwork, furniture design, lighting systems, and finish selections that create cohesive, harmonious environments.',
        'We coordinate closely with architects, contractors, and artisans to ensure seamless execution of our interior visions.'
      ],
      services: [
        {
          title: 'Space Planning',
          description: 'Strategic organization of interior spaces to optimize flow, functionality, and spatial efficiency while supporting desired activities and experiences.'
        },
        {
          title: 'Material & Finish Selection',
          description: 'Curated palettes of flooring, wall treatments, countertops, fixtures, and finishes that create the desired aesthetic and sensory experience.'
        },
        {
          title: 'Custom Furniture Design',
          description: 'Bespoke furniture pieces designed specifically for the space, ensuring perfect proportions, functionality, and unique character.'
        },
        {
          title: 'Lighting Design',
          description: 'Comprehensive lighting strategies including ambient, task, and accent lighting to create layered, dynamic interior environments.'
        }
      ],
      expertise: [
        'Residential Interiors (Living spaces, Kitchens, Bathrooms, Bedrooms)',
        'Commercial Interiors (Offices, Hospitality, Retail)',
        'Workplace Design & Strategy',
        'Restaurant & Bar Design',
        'Wellness & Spa Environments',
        'Color Consultation & Material Libraries'
      ],
      image1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    'urban-planning': {
      title: 'Urban Planning',
      subtitle: 'Designing Cities for Tomorrow',
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      overview: 'Our urban planning services address the complex challenges of creating vibrant, sustainable, and equitable communities. We work at multiple scales—from neighborhood revitalization to regional master planning—always prioritizing human-centered design and environmental stewardship.',
      approach: [
        'We employ participatory planning methods that engage community stakeholders, ensuring diverse voices shape the future of their neighborhoods.',
        'Our planning strategies integrate land use, transportation, infrastructure, public space, and economic development into cohesive visions.',
        'Climate resilience and adaptation strategies are central to our planning work, addressing issues like flooding, heat islands, and ecological restoration.',
        'We utilize GIS analysis, demographic studies, and economic modeling to inform evidence-based planning decisions.'
      ],
      services: [
        {
          title: 'Master Planning',
          description: 'Comprehensive long-term visions for cities, neighborhoods, campuses, and large development sites that guide growth and transformation.'
        },
        {
          title: 'Zoning & Land Use Planning',
          description: 'Regulatory frameworks and policy recommendations that shape development patterns, density, and character of urban areas.'
        },
        {
          title: 'Public Realm Design',
          description: 'Design of streets, plazas, parks, and civic spaces that create vibrant, accessible, and inclusive public environments.'
        },
        {
          title: 'Mobility & Transit Planning',
          description: 'Integrated transportation strategies that promote walkability, cycling, public transit, and reduced automobile dependence.'
        }
      ],
      expertise: [
        'Neighborhood & District Planning',
        'Transit-Oriented Development (TOD)',
        'Climate Action & Sustainability Planning',
        'Affordable Housing Strategies',
        'Economic Development Planning',
        'Historic Preservation & Cultural Resource Planning',
        'Parks & Open Space Planning',
        'Smart Growth & Infill Development'
      ],
      image1: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    }
  };

  const service = serviceData[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleBackClick = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Header */}
      <Header />

      {/* Full Screen Hero Split */}
      <section className="relative h-screen flex items-center mt-20 lg:mt-24">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="mb-6">
                <div className="h-1 w-20 bg-red-600 mb-8" />
                <h1 className="text-5xl lg:text-7xl text-white font-semibold mb-6 tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-2xl lg:text-3xl text-white/60 font-light tracking-wide italic">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-white/10 relative group">
                <ImageWithFallback
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent mix-blend-multiply" />
              </div>
              {/* Decorative corner element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-red-600/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Asymmetric Layout */}
      <section className="bg-black py-32 lg:py-40 relative">
        {/* Large text background */}
        <div className="absolute top-20 left-0 text-[15vw] font-bold text-white/[0.02] leading-none pointer-events-none">
          DESIGN
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Title Column */}
            <div>
              <h2 className="text-2xl lg:text-3xl text-white font-semibold tracking-tight sticky top-32">
                Overview
              </h2>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2">
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed font-light text-justify mb-16">
                {service.overview}
              </p>

              <div className="space-y-8">
                {service.approach.map((item: string, index: number) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                        <span className="text-white/40 font-semibold text-sm">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/60 text-base leading-relaxed font-light text-justify flex-1 pt-2">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Image Divider */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.image1}
            alt={`${service.title} showcase`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Floating stat or quote */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl lg:text-9xl text-white/10 font-bold mb-4">15+</div>
            <p className="text-white text-lg lg:text-xl font-light tracking-widest uppercase">
              Years of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered - Card Grid */}
      <section className="bg-neutral-950 py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl lg:text-4xl text-white font-semibold tracking-tight">
              What We Offer
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-12 mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {service.services.map((item: any, index: number) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xl">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="relative bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500 p-8 lg:p-10 pt-12 h-full overflow-hidden">
                  <h3 className="text-xl lg:text-2xl text-white font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light text-justify">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise - Minimal List */}
      <section className="bg-black py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Title - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl lg:text-4xl text-white font-semibold tracking-tight mb-6">
                  Areas of<br />Expertise
                </h2>
                <div className="h-1 w-16 bg-red-600" />
              </div>
            </div>

            {/* List - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {service.expertise.map((item: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 pb-6 border-b border-white/5"
                >
                  <span className="text-white/20 font-mono text-sm flex-shrink-0">
                    [{(index + 1).toString().padStart(2, '0')}]
                  </span>
                  <span className="text-white/70 text-base lg:text-lg font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Side by Side */}
      <section className="bg-neutral-950">
        <div className="grid md:grid-cols-2">
          <div className="aspect-square relative overflow-hidden group">
            <ImageWithFallback
              src={service.image1}
              alt={`${service.title} example 1`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <ImageWithFallback
              src={service.image2}
              alt={`${service.title} example 2`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Statement */}
      <section className="bg-black py-32 lg:py-40 relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] leading-none whitespace-nowrap pointer-events-none">
          BeThatSpace™
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl text-white font-semibold mb-8 tracking-tight leading-tight">
              Let's Create Something<br />
              <span className="text-red-600 italic">Extraordinary</span>
            </h2>
            <p className="text-white/60 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to transform your vision into reality? Our {service.title.toLowerCase()} team is prepared to bring expertise, creativity, and precision to your next project.
            </p>
            
            <button 
              onClick={handleBackClick}
              className="group inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-10 py-5 transition-all duration-300 font-medium text-lg"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}