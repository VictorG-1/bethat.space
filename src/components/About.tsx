import { Plus } from 'lucide-react';
import soBeItImg from '../assets/about/so-be-it.png';
import tathastuImg from '../assets/about/tathastu.png';

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32"
    >
      <div className="relative z-10 bts-shell w-full">
        <div className="flex flex-col items-center w-full">
          <section className="explore-copy w-full text-center mb-20 lg:mb-24">
            <div className="bts-section-head mb-10">
              <h2 className="bts-title">About Us</h2>
              <div className="bts-bar-wrap">
                <div className="bts-bar" />
              </div>
            </div>

            <div className="main-copy about-copy space-y-6 text-white/80 text-base lg:text-lg font-light leading-[1.85]">
              <p>
                We are an award-winning, multidisciplinary architecture, interior design and design+build practice with a strong presence across the Indian subcontinent.
              </p>
              <p>
                We bring together strategy, creativity and technical expertise to shape workplaces, hospitality environments and institutional spaces that elevate human experience and enable performance. By connecting perspectives across disciplines and working closely with our clients, we turn complex aspirations into clear, considered solutions - from the first idea to the finished environment. What unites it all is a shared commitment to purposeful thinking, design integrity and lasting impact.
              </p>
              <p className="main-sub text-white/90 font-normal">
                We don't just create spaces. We create the conditions for what happens within them.
              </p>
            </div>
          </section>

          <div className="h-5" aria-hidden />
          <div className="h-5" aria-hidden />
          <section className="explore-copy text-center w-full">
            <div
              className="text-white/90 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight"
              style={{ lineHeight: 'calc(1.375em + 0.25px)' }}
            >
              <p className="block text-white">
                We are <span className="font-bold">BeThatSpace™</span>
              </p>
              <p className="block mt-3 sm:mt-4">A proclamation of intent.</p>
              <p className="block mt-3 sm:mt-4">A blessing for every space we touch.</p>
              <p className="block mt-3 sm:mt-4">A dialogue with the inanimate.</p>
              <p className="block mt-3 sm:mt-4">Where the abstract gets manifested,</p>
            </div>
            <div className="tathastu-swap mt-8 lg:mt-10" aria-label="So be it, तथास्तु">
              <img
                src={soBeItImg}
                alt="So be it,"
                className="tathastu-swap__item tathastu-swap__item--so"
              />
              <img
                src={tathastuImg}
                alt="तथास्तु"
                className="tathastu-swap__item tathastu-swap__item--hi"
              />
            </div>
            <div className="flex justify-center mt-6">
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
          </section>
        </div>
      </div>
    </section>
  );
}
