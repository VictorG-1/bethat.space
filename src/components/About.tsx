import { ChevronDown, Plus } from 'lucide-react';
import tathastuImage from 'figma:asset/a26bdc211f505ea4ce3e1426ab6f413f1f679ec9.png';

export function About() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-semibold text-white mb-6">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-white/70 leading-relaxed text-base lg:text-lg text-center font-light">
                BeThatSpace™ is a multidisciplinary architecture and spatial design studio dedicated to creating transformative environments that foster growth, creativity, innovation, and meaningful human connection across India. We bring unique Indian perspectives to contemporary global design challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Tathastu Image */}
        <div className="flex justify-center my-16">
          <img 
            src={tathastuImage} 
            alt="तथास्तु" 
            className="max-w-md w-full h-auto opacity-90"
          />
        </div>

        {/* Read More - below image, above down arrow */}
        <div className="flex justify-center">
          <button 
            onClick={() => {
              sessionStorage.setItem('lastSection', 'about');
              window.history.pushState({}, '', '/about-us');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
          >
            <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
              <Plus className="w-3 h-3" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
          </button>
        </div>

        <a href="#leadership" className="flex justify-center mt-20">
          <ChevronDown className="w-8 h-8 text-white/30" />
        </a>
      </div>
    </section>
  );
}