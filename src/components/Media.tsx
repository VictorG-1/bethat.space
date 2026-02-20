import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const MEDIA_ITEMS = [
  {
    category: 'Project Update',
    date: '2 months ago',
    title: 'Times Group HQ — Completion',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    href: '#',
  },
  {
    category: 'Insight',
    date: '3 months ago',
    title: 'Designing for Wellbeing',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop',
    href: '#',
  },
  {
    category: 'Press',
    date: '4 months ago',
    title: 'BeThat Space in Design India',
    image: 'https://images.unsplash.com/photo-1586717799252-22c2b2c7c0e6?w=800&h=500&fit=crop',
    href: '#',
  },
];

export function Media() {
  return (
    <section id="media" className="relative min-h-screen bg-black py-20 lg:py-32 flex items-center">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl tracking-tight text-white mb-6 font-semibold">
            Media
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
        </div>

        <p className="text-white/70 text-center text-base lg:text-lg font-light max-w-2xl mx-auto mb-12">
          News, insights, and updates from our studio and projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {MEDIA_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative bg-neutral-900 border border-white/10 hover:border-red-600/50 transition-all duration-500 overflow-hidden aspect-[4/3] block"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1 font-semibold">{item.title}</h3>
                <p className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                  {item.category} · {item.date}
                </p>
                <span className="flex items-center gap-2 text-white/80 group-hover:text-red-600 transition-colors duration-300">
                  <span className="w-5 h-5 rounded-full border border-white/80 group-hover:border-red-600 flex items-center justify-center transition-colors duration-300">
                    <Plus className="w-3 h-3" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
