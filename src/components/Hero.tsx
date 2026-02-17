import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroGif from 'figma:asset/5d66df7b49003cc2819d921f853ed04086d65c25.png';

export function Hero() {
  const [gifKey, setGifKey] = useState(Date.now());

  useEffect(() => {
    // Force GIF to reload and play once on mount
    setGifKey(Date.now());
  }, []);

  const scrollToPunchline = () => {
    const punchlineSection = document.getElementById('punchline');
    if (punchlineSection) {
      punchlineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToWhyWeChanged = () => {
    // Navigate to Why We Changed page
    window.history.pushState({}, '', '/why-we-changed');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const goToExplore = () => {
    // Navigate to Explore page
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden z-20">
      {/* Solid black background overlay to prevent any background images from showing */}
      <div className="absolute inset-0 bg-black z-0" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-32 text-center w-full flex flex-col justify-between min-h-screen lg:justify-center">
        <div className="flex-1 flex items-center justify-center lg:flex-none lg:mb-20">
          <div className="mb-16 lg:mb-0">
            <img 
              key={gifKey}
              src={`${heroGif}?${gifKey}`}
              alt="BeThatSpace™" 
              className="mx-auto max-w-full lg:max-w-2xl h-auto mb-12 animate-fade-in object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 lg:mb-20">
          {/* Primary Button - Why We Changed */}
          <button 
            onClick={goToWhyWeChanged} 
            className="px-10 py-5 bg-transparent group min-w-[240px]"
          >
            <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors relative inline-block">
              Why We Changed
              <span className="absolute bottom-0 left-0 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-out" />
            </span>
          </button>

          {/* Secondary Button - Explore */}
          <button 
            onClick={goToExplore}
            className="px-10 py-5 bg-transparent group min-w-[240px]"
          >
            <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors relative inline-block">
              Explore BeThatSpace™
              <span className="absolute bottom-0 left-0 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-out" />
            </span>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
    </section>
  );
}