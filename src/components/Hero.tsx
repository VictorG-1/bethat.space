import { ArrowRight } from 'lucide-react';
import landingVideo from '../assets/landing-logo.mp4';

export function Hero() {
  const goToExplore = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden z-20">
      <div className="absolute inset-0 bg-black z-0" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 py-32 text-center w-full flex flex-col justify-between min-h-screen lg:justify-center">
        <div className="flex-1 flex items-center justify-center lg:flex-none lg:mb-20">
          <div className="flex flex-col items-center gap-14 sm:gap-16 lg:gap-20 mb-12 lg:mb-0">
            <video
              src={landingVideo}
              autoPlay
              muted
              playsInline
              className="mx-auto max-w-full max-h-[50vh] lg:max-w-2xl lg:max-h-[46vh] w-auto h-auto animate-fade-in object-contain"
              aria-label="BeThatSpace™"
            />
            <p className="text-white/70 text-xs sm:text-sm tracking-[0.28em] uppercase font-medium px-4">
              Architecture <span className="text-white/30 mx-3">|</span> Interior Design <span className="text-white/30 mx-3">|</span> Design + Build
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 lg:mb-20">
          <button 
            onClick={goToExplore}
            className="group inline-flex items-center gap-3 text-white/70 hover:text-red-600 transition-colors duration-300"
            aria-label="Explore"
          >
            <span className="tracking-[0.3em] text-xs font-medium uppercase">Explore</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-red-600 transition-all" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
    </section>
  );
}
