import { ArrowLeft, ChevronDown, X } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import bgImage from 'figma:asset/c621f8e2b94cd37ccbe0edbb8d8595d829d1df5c.png';
import { useState, useEffect, useRef } from 'react';

function StatCounter({ end, label, suffix, hoverWords }: { end: number, label: string, suffix: string, hoverWords?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Handle Infinity case
          if (end === Infinity) {
            let current = 1;
            const interval = setInterval(() => {
              if (current < 100) {
                setCount(current);
                current++;
              } else {
                clearInterval(interval);
                setCount(Infinity);
              }
            }, 20);
            return () => clearInterval(interval);
          }
          
          // Handle Million case (1M+)
          if (suffix === 'M+') {
            const milestones = [0, 100, 500, 1000, 5000, 10000, 50000, 100000, 250000, 500000, 750000, 1000000];
            let index = 0;
            const interval = setInterval(() => {
              if (index < milestones.length - 1) {
                setCount(milestones[index]);
                index++;
              } else {
                setCount(1000000); // 1M
                clearInterval(interval);
              }
            }, 150);
            return () => clearInterval(interval);
          }
          
          // Handle normal counting
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = () => {
    if (count === Infinity) return '∞';
    if (suffix === 'M+') {
      if (count >= 1000000) return '1M+';
      if (count >= 1000) return `${Math.floor(count / 1000)}K`;
      return count;
    }
    return count + (suffix !== '∞' ? suffix : '');
  };

  return (
    <div
      ref={counterRef}
      className="border border-white/10 p-8 hover:border-red-600/30 transition-colors duration-300 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-5xl lg:text-6xl text-red-600 font-bold mb-3">
        {displayValue()}
      </div>
      <p className="text-white/60 text-sm uppercase tracking-wider">{label}</p>
      {hoverWords && (
        <p
          className={`mt-3 min-h-[2.5rem] text-white/80 text-sm font-light leading-snug transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {hoverWords}
        </p>
      )}
    </div>
  );
}

export function AboutUsPage() {
  const handleBack = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Background */}
        <div 
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-32">
            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-6xl lg:text-8xl tracking-tight font-semibold text-white mb-8">
                About Us
              </h1>
              
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-12" />
              
              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed font-light mb-8">
                BeThatSpace™ is a multidisciplinary architecture and spatial design studio dedicated to creating environments that foster growth, creativity, and human connection.
              </p>
            </div>

            <a href="#story" className="flex justify-center mt-20">
              <ChevronDown className="w-8 h-8 text-white/30 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Our Story Section */}
        <section id="story" className="relative bg-black py-20 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NzAxOTc4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-6xl tracking-tight font-semibold text-white mb-6">
                Our Story
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto" />
            </div>

            {/* Story Paragraphs - Centered and Highlighted */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/5 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                <p className="text-white text-base lg:text-lg leading-relaxed font-light text-justify">
                  Founded with a vision to transform architectural spaces, BeThatSpace™ creates environments that inspire. Our multidisciplinary approach combines innovation with sustainability.
                </p>
              </div>
              
              <div className="bg-white/5 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                <p className="text-white text-base lg:text-lg leading-relaxed font-light text-justify">
                  With studios across Thane, Pune, and Chennai, we bring international design excellence with local insights to every project we undertake.
                </p>
              </div>

              <div className="bg-white/5 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                <p className="text-white text-base lg:text-lg leading-relaxed font-light text-justify">
                  We believe in collaboration and human-centered design, ensuring each space reflects our commitment to quality, creativity, and community.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        {/* Stats Section */}
        <section className="bg-neutral-950 py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl tracking-tight font-semibold text-white mb-6">
                Our Impact
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <StatCounter end={Infinity} label="Ideas" suffix="∞" hoverWords="We pursue endless creativity and design possibilities." />
              <StatCounter end={1} label="People" suffix="M+" hoverWords="Lives touched by spaces we created." />
              <StatCounter end={2000} label="Businesses" suffix="+" hoverWords="Companies and brands we have partnered with." />
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
      </main>
      
      <Footer />
    </div>
  );
}