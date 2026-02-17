import { ChevronDown } from 'lucide-react';

export function Punchline() {
  return (
    <section 
      id="punchline" 
      className="relative min-h-screen flex items-center justify-center py-32 lg:py-40 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/90 text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-light max-w-4xl mx-auto">
            We design & build conducive spaces<br />where people & businesses thrive.
          </p>
        </div>

        <a href="#about" className="inline-block mt-20">
          <ChevronDown className="w-8 h-8 text-white/30" />
        </a>
      </div>
    </section>
  );
}