import { ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export function WhyWeChanged() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Header />
      
      <main className="pt-32">
        <section className="relative min-h-screen bg-black py-20 lg:py-32">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
            {/* Back Button */}
            <button 
              onClick={goBack}
              className="group flex items-center gap-3 text-white/60 hover:text-red-600 transition-colors duration-300 mb-12"
            >
              <div className="w-10 h-10 rounded-full border border-white/60 group-hover:border-red-600 flex items-center justify-center transition-colors duration-300">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
            </button>

            {/* Visual box */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-neutral-900 border border-white/10 flex items-center justify-center relative my-12">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </svg>
                <div className="relative z-10 text-center px-4">
                  <span className="text-neutral-600 text-sm uppercase tracking-[0.2em] font-medium block mb-2">Transformation Visual</span>
                  <span className="text-neutral-700 text-xs uppercase tracking-wider">1920 × 1080 px</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}