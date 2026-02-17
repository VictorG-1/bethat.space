import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Plus, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import capovitezLogo from 'figma:asset/ee8f8545dad18dc5b362fcc32f41e729a657b33b.png';
import chettinadLogo from 'figma:asset/648addd6cd905a16a70f0841ab88595408492712.png';
import enilLogo from 'figma:asset/3948c92c417cd14a37c1e7404327037434a5a6af.png';
import galeriesLogo from 'figma:asset/dba96fda61fcaddf6a536716ddf30bc6cd56be42.png';
import howdenLogo from 'figma:asset/05f8b619ae1e447a27f0182bd458e3d59cd7b105.png';
import mirchiLogo from 'figma:asset/67bcad7062de3e160843ee4a866bb997ad0cdbf8.png';
import missIndiaLogo from 'figma:asset/47110e22525a86f7708687d327160c832b33dc82.png';
import nirmalLogo from 'figma:asset/7a550deaffe8ca609a436e3e1a22403a5eb6dc74.png';
import parksydeLogo from 'figma:asset/143cbc1e3910a5c14a10b24548f65e2507568004.png';
import adityaBirlaLogo from 'figma:asset/f18f5a5287bdb16541ae1e5cf9d714cfa9dae0fe.png';
import worldBankLogo from 'figma:asset/83147915d5cb5bf8c6d5a1b56b42558c3a11111e.png';
import suttattiLogo from 'figma:asset/57c618288600296e6e257293069781cd314e3df2.png';
import rahejaUniversalLogo from 'figma:asset/313c74ed29ee94aa047f942139decfffd8aa8b80.png';
import tableSpaceLogo from 'figma:asset/f7ac8eac76909b8f59c55391bf77611fbc7aedfd.png';
import timesNetworkLogo from 'figma:asset/56af81cf2f2fe44c3e4734398b67a2c983c6f3ea.png';
import timesMusicLogo from 'figma:asset/5da83aaf7b3fec7650755551d00410b02102bbd4.png';
import timesGroupLogo from 'figma:asset/5306657025de7b13e2f59a1fb3f24656f20025b1.png';
import unileverFragranceLogo from 'figma:asset/4c94c12ca8875a52c885834941eaeabb7b493cae.png';
import ubsLogo from 'figma:asset/6d16ec7e15db1d1b25cec11cf14c9691e5d19621.png';
import unileverLogo from 'figma:asset/a3236b9a3f4a8da160da0d8f548c96489369359c.png';

export function ProjectsClients() {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const projects = [
    {
      title: 'Corporate Headquarters',
      location: 'Mumbai, India',
      year: '2024',
      area: '50,000 sq ft',
      value: '₹150 Cr',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
    {
      title: 'Luxury Hotel',
      location: 'Bangalore, India',
      year: '2023',
      area: '85,000 sq ft',
      value: '₹280 Cr',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
    {
      title: 'Residential Tower',
      location: 'Pune, India',
      year: '2024',
      area: '120,000 sq ft',
      value: '₹350 Cr',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
    {
      title: 'Tech Campus',
      location: 'Hyderabad, India',
      year: '2023',
      area: '200,000 sq ft',
      value: '₹500 Cr',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
    {
      title: 'Fine Dining Restaurant',
      location: 'Delhi, India',
      year: '2024',
      area: '8,500 sq ft',
      value: '₹45 Cr',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
    {
      title: 'Mixed-Use Development',
      location: 'Chennai, India',
      year: '2023',
      area: '150,000 sq ft',
      value: '₹420 Cr',
      images: [
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      ]
    },
  ];

  const clientsRow1 = [
    'Amazon', 'American Express', 'Accor', 'Veolia', 'Chanel', 'Blackstone',
    'Brookfield', 'Reliance'
  ];
  
  const clientsRow2 = [
    'Hermès', 'Hero', 'Pernod Ricard', 'Trilegal',
    'Julius Bär', 'IWC', 'Microsoft', 'BMW'
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length);
    }
  };

  // Auto-play carousel when modal is open
  useEffect(() => {
    if (selectedProject !== null && !isCarouselHovered && projects[selectedProject].images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [selectedProject, isCarouselHovered, projects, currentImageIndex]);

  return (
    <section id="projects" className="relative min-h-screen bg-black py-20 lg:py-32 overflow-hidden flex items-center">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        {/* PROJECTS SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl tracking-tight text-white mb-6 font-semibold">
            Projects
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
        </div>

        {/* Desktop: Grid of 6 Projects */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900 border border-white/10 hover:border-red-600/50 transition-all duration-500 overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Project Image */}
              <ImageWithFallback
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1 font-semibold">{project.title}</h3>
                <p className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                  {project.location}, {project.year}
                </p>
                
                {/* Read More Button */}
                <button 
                  onClick={() => openModal(index)}
                  className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
                >
                  <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                    <Plus className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative px-0 overflow-visible">
            <div className="relative flex items-center justify-center overflow-visible">
              {/* Side preview - left (behind, translucent) */}
              <div className="group absolute left-0 w-[30%] aspect-[4/3.5] bg-neutral-900/30 backdrop-blur-sm border border-white/20 scale-95 z-0 overflow-hidden opacity-80">
                {currentProject > 0 ? (
                  <ImageWithFallback
                    src={projects[currentProject - 1].images[0]}
                    alt=""
                    className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ImageWithFallback
                    src={projects[projects.length - 1].images[0]}
                    alt=""
                    className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              
              {/* Main project (center, on top) */}
              <div className="group relative w-[75%] aspect-[4/3.5] bg-neutral-900 border-2 border-white/40 z-10 overflow-hidden shadow-2xl mx-auto">
                <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out z-10" />
                <ImageWithFallback
                  src={projects[currentProject].images[0]}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl mb-1 font-semibold">{projects[currentProject].title}</h3>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                    {projects[currentProject].location}, {projects[currentProject].year}
                  </p>
                  
                  {/* View More Button */}
                  <button 
                    onClick={() => openModal(currentProject)}
                    className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
                  >
                    <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                      <Plus className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
                  </button>
                </div>
              </div>
              
              {/* Side preview - right (behind, translucent) */}
              <div className="group absolute right-0 w-[30%] aspect-[4/3.5] bg-neutral-900/30 backdrop-blur-sm border border-white/20 scale-95 z-0 overflow-hidden opacity-80">
                {currentProject < projects.length - 1 ? (
                  <ImageWithFallback
                    src={projects[currentProject + 1].images[0]}
                    alt=""
                    className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ImageWithFallback
                    src={projects[0].images[0]}
                    alt=""
                    className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group z-20"
            >
              <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group z-20"
            >
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProject(i)}
                className={`h-1 transition-all duration-300 ${
                  i === currentProject ? 'w-12 bg-red-600' : 'w-8 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CLIENTS SECTION - Mobile Only */}
        <div className="mb-16 lg:hidden -mx-6">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl tracking-tight text-white mb-6 font-semibold">
              Clients
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </div>
          </div>

          <div className="relative">
            {/* Row 1 - Left to Right */}
            <div className="relative mb-6 overflow-hidden">
              <div className="flex animate-marquee-left whitespace-nowrap">
                {[capovitezLogo, chettinadLogo, enilLogo, galeriesLogo, howdenLogo, mirchiLogo, missIndiaLogo, nirmalLogo, parksydeLogo, adityaBirlaLogo, capovitezLogo, chettinadLogo, enilLogo, galeriesLogo, howdenLogo, mirchiLogo, missIndiaLogo, nirmalLogo, parksydeLogo, adityaBirlaLogo].map((logo, index) => (
                  <div 
                    key={index} 
                    className="inline-flex items-center justify-center px-8 py-6 border-r border-white/10 min-w-[180px]">
                    <img src={logo} alt="Client logo" className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-right whitespace-nowrap">
                {[worldBankLogo, suttattiLogo, rahejaUniversalLogo, tableSpaceLogo, timesNetworkLogo, timesMusicLogo, timesGroupLogo, unileverFragranceLogo, ubsLogo, unileverLogo, worldBankLogo, suttattiLogo, rahejaUniversalLogo, tableSpaceLogo, timesNetworkLogo, timesMusicLogo, timesGroupLogo, unileverFragranceLogo, ubsLogo, unileverLogo].map((logo, index) => (
                  <div 
                    key={index} 
                    className="inline-flex items-center justify-center px-8 py-6 border-r border-white/10 min-w-[180px]">
                    <img src={logo} alt="Client logo" className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        <a href="#footer" className="flex justify-center">
          <ChevronDown className="w-8 h-8 text-white/30" />
        </a>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 lg:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-7xl bg-neutral-900 border border-white/10">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 lg:-right-12 lg:top-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group z-10"
            >
              <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Carousel */}
              <div 
                className="relative aspect-[4/3] bg-black overflow-hidden"
                onMouseEnter={() => setIsCarouselHovered(true)}
                onMouseLeave={() => setIsCarouselHovered(false)}
              >
                <ImageWithFallback
                  src={projects[selectedProject].images[currentImageIndex]}
                  alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Carousel Navigation */}
                {projects[selectedProject].images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                    >
                      <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                    >
                      <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </button>

                    {/* Image Dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {projects[selectedProject].images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentImageIndex ? 'w-8 bg-red-600' : 'w-1.5 bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right: Fact File */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl text-white font-semibold mb-2 tracking-tight">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-8 font-medium">
                  {projects[selectedProject].year}
                </p>

                <div className="h-px w-16 bg-red-600 mb-8" />

                <h4 className="text-white/40 uppercase tracking-widest text-xs font-semibold mb-6">
                  Fact File
                </h4>

                <div className="space-y-6">
                  <div className="border-l-2 border-red-600/30 pl-6">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1 font-medium">
                      Location
                    </div>
                    <div className="text-white text-lg font-light">
                      {projects[selectedProject].location}
                    </div>
                  </div>

                  <div className="border-l-2 border-red-600/30 pl-6">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1 font-medium">
                      Area
                    </div>
                    <div className="text-white text-lg font-light">
                      {projects[selectedProject].area}
                    </div>
                  </div>

                  <div className="border-l-2 border-red-600/30 pl-6">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1 font-medium">
                      Value
                    </div>
                    <div className="text-white text-lg font-light">
                      {projects[selectedProject].value}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}