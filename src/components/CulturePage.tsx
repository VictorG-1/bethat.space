import { Target, Users, Lightbulb, Heart, Globe, Award } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';

export function CulturePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { icon: Target, title: 'Excellence', description: 'We pursue the highest standards in every project, never settling for mediocrity. Our commitment to excellence drives us to continuously innovate and refine our craft.' },
    { icon: Users, title: 'Collaboration', description: 'Great design emerges from diverse perspectives working together. We foster a culture of open communication, mutual respect, and collective problem-solving.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new ideas, technologies, and methodologies. Innovation is not just encouraged—it\'s expected, celebrated, and integrated into our daily practice.' },
    { icon: Heart, title: 'Integrity', description: 'Honesty, transparency, and ethical conduct guide all our relationships—with clients, partners, and each other. We do what\'s right, even when it\'s difficult.' },
    { icon: Globe, title: 'Sustainability', description: 'Environmental responsibility is central to our design philosophy. We create spaces that minimize ecological impact and contribute to a sustainable future.' },
    { icon: Award, title: 'Client-Centricity', description: 'Our clients\' visions, needs, and aspirations drive everything we do. We listen deeply, communicate clearly, and deliver beyond expectations.' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      {/* Single Full Section - YouTube Background with Parallax Cards */}
      <main className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-screen h-screen"
            style={{
              transform: 'translate(-50%, -50%)',
              minWidth: '100vw',
              minHeight: '100vh',
              width: '177.78vh',
              height: '56.25vw',
            }}
            src="https://www.youtube.com/embed/Y7cpCDlRfV0?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=0&modestbranding=1&playsinline=1"
            title="Culture Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center py-32 lg:py-40">
          <div className="text-center mb-20">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-8" />
              <h1 className="text-4xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
                Our Culture
              </h1>
              <p className="text-xl lg:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                A workplace built on shared values, mutual respect, and a passion for creating extraordinary spaces.
              </p>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-md border border-white/10 hover:border-red-600/50 p-8 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `translateY(-${scrollY * (0.1 + index * 0.02)}px)`,
                    transition: 'transform 0.1s linear'
                  }}
                >
                  <value.icon className="w-12 h-12 text-red-600 mb-6 transition-transform duration-700 group-hover:scale-105" />
                  <h3 className="text-2xl text-white font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-light text-justify">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Our Values Section */}
      <section className="relative bg-black py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl tracking-tight font-semibold text-white mb-16 text-center">
              Our Values
            </h2>

            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <span className="text-2xl text-white font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-white mb-3 font-semibold group-hover:text-red-600 transition-colors duration-300">Excellence</h3>
                    <p className="text-white/70 leading-relaxed text-base lg:text-lg font-light text-justify">
                      We are committed to excellence in every aspect of our work, from initial concept to final execution. Quality is never compromised, and every detail matters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <span className="text-2xl text-white font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-white mb-3 font-semibold group-hover:text-red-600 transition-colors duration-300">Innovation</h3>
                    <p className="text-white/70 leading-relaxed text-base lg:text-lg font-light text-justify">
                      We constantly push boundaries and explore new possibilities, embracing cutting-edge technologies and sustainable practices to create forward-thinking designs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <span className="text-2xl text-white font-semibold">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-white mb-3 font-semibold group-hover:text-red-600 transition-colors duration-300">Sustainability</h3>
                    <p className="text-white/70 leading-relaxed text-base lg:text-lg font-light text-justify">
                      Environmental responsibility is woven into the fabric of our practice. We design with the future in mind, creating spaces that are sustainable and responsible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <span className="text-2xl text-white font-semibold">04</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-white mb-3 font-semibold group-hover:text-red-600 transition-colors duration-300">Human-Centered Design</h3>
                    <p className="text-white/70 leading-relaxed text-base lg:text-lg font-light text-justify">
                      At the heart of every project is the human experience. We design spaces that enhance wellbeing, inspire creativity, and foster meaningful connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-neutral-900 py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl tracking-tight font-semibold text-white mb-8">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-white/70 text-lg lg:text-xl mb-12 max-w-3xl mx-auto font-light">
            Whether you're planning a new project or looking to transform an existing space, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/explore');
                window.dispatchEvent(new PopStateEvent('popstate'));
                setTimeout(() => {
                  document.getElementById('offices')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="group relative px-12 py-4 bg-red-600 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm font-semibold overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Get in Touch</span>
            </button>
            
            <button
              onClick={() => {
                window.history.pushState({}, '', '/careers');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="group relative px-12 py-4 border-2 border-white/20 text-white hover:border-red-600 hover:bg-red-600 transition-all duration-500 uppercase tracking-[0.2em] text-sm font-semibold w-full sm:w-auto"
            >
              <span className="relative z-10">Join Us</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}