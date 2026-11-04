import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const MEDIA_ITEMS = [
  {
    category: 'Publications',
    title: 'Publications',
    description: 'Our latest thinking, features and written perspectives on design and the built environment.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop',
    href: '#',
  },
  {
    category: 'Accolades',
    title: 'Accolades',
    description: 'Recognition for the spaces we shape and the outcomes they enable.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    href: '#',
  },
  {
    category: 'Conversations',
    title: 'Conversations',
    description: 'Dialogues, interviews and shared knowledge that explore how environments respond to changing needs.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full">
        <div className="mb-12 max-w-3xl mx-auto">
          <h2 className="bts-title mb-6 text-center">
            Media
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
          <p className="text-white text-xl lg:text-2xl font-semibold mb-6 text-center">
            Ideas Beyond the Space.
          </p>
          <div className="about-copy text-white/70 text-base lg:text-lg font-light leading-[1.85] space-y-4">
            <p style={{ textAlign: 'justify', textAlignLast: 'left' }}>
              Design is a conversation between people, places and possibilities. Through our work, perspectives and shared knowledge, we explore how the environments we create can respond to changing needs and shape better outcomes.
            </p>
            <p className="text-white/80" style={{ textAlign: 'center', textAlignLast: 'center' }}>
              Explore our latest thinking, publications, features and conversations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-white text-xl mb-2 font-semibold">{item.title}</h3>
                <p className="bts-body bts-justify text-white/60 text-sm mb-4">
                  {item.description}
                </p>
                <span className="flex items-center gap-2 text-white/80 group-hover:text-red-600 transition-colors duration-300">
                  <span className="w-5 h-5 rounded-full border border-white/80 group-hover:border-red-600 flex items-center justify-center transition-colors duration-300">
                    <Plus className="w-3 h-3" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
            </a>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs uppercase tracking-[0.2em]">
          Publications <span className="mx-2">|</span> Accolades <span className="mx-2">|</span> Conversations
        </p>
      </div>
    </section>
  );
}
