import { Plus } from 'lucide-react';
import tathastuImage from 'figma:asset/a26bdc211f505ea4ce3e1426ab6f413f1f679ec9.png';

export function About() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="bts-title mb-6">
              About Us
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-10" />
          </div>

          <div className="bts-body space-y-6 text-white/80 text-base lg:text-lg mb-12">
            <p>
              We are an award-winning, multidisciplinary architecture, interior design and design+build practice with a strong presence across the Indian subcontinent.
            </p>
            <p>
              We bring together strategy, creativity and technical expertise to shape workplaces, hospitality environments and institutional spaces that elevate human experience and enable performance.
            </p>
            <p>
              By connecting perspectives across disciplines and working closely with our clients, we turn complex aspirations into clear, considered solutions, from the first idea to the finished environment.
            </p>
            <p>
              Our work spans architecture, interior design, workplace strategy, sustainability, engineering and build management. What unites it is a shared commitment to purposeful thinking, design integrity and lasting impact.
            </p>
            <p className="text-white/90 font-normal">
              We don't just create spaces. We create the conditions for what happens within them.
            </p>
          </div>

          <div className="bts-body space-y-4 mb-12 text-white/70 text-base lg:text-lg">
            <p className="text-white text-xl lg:text-2xl font-semibold text-center">We are BeThatSpace™</p>
            <p>
              A proclamation of intent.
              A blessing for every space we touch.
              A dialogue with the inanimate.
            </p>
            <p>
              Where the abstract gets manifested,
            </p>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <img 
            src={tathastuImage} 
            alt="तथास्तु" 
            className="max-w-md w-full h-auto opacity-90"
          />
        </div>

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
      </div>
    </section>
  );
}
