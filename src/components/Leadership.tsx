import { Plus, Minus, Linkedin, Instagram } from 'lucide-react';
import { useRef, useState } from 'react';
import kshitijImg from '../assets/people/Kshitij Sir.jpg.jpeg';
import maithileeImg from '../assets/people/Maithilee Mam-04.png';
import kaushikImg from '../assets/people/kaushik.png';
import cultureBgVideo from '../assets/culture-bg.mp4';

const PEOPLE = [
  {
    name: 'Kshitij Limaye',
    designation: 'Principal Architect | Managing Director',
    bio: 'With over 26 years of global experience, Kshitij brings together narrative, strategy and sustainability to conceive and deliver distinctive commercial environments. His approach combines creative thinking with contextual sensitivity to create spaces that inspire and perform.',
    image: kshitijImg,
    linkedin: 'https://www.linkedin.com/in/kshitij-limaye-a78bb35',
    instagram: 'https://www.instagram.com/kshitijlimaye',
  },
  {
    name: 'Maithilee Tamhankar',
    designation: 'Executive Director',
    bio: 'With over 24 years of experience in client solutions and general management, Maithilee brings strategic insight and a people-first approach to business. She focuses on building meaningful client relationships, aligning solutions with aspirations and translating business needs into effective outcomes.',
    image: maithileeImg,
    linkedin: 'https://www.linkedin.com/in/maithilee-tamhankar-a888026',
    instagram: 'https://www.instagram.com/maithilitamhankar',
  },
  {
    name: 'Kaushik Joshi',
    designation: 'Director',
    bio: 'With over 20 years of experience, Kaushik combines architectural creativity with executional precision to deliver purposeful workplace environments. He leads the P&L for Design Consultancy and Design+Build businesses across Western India, driving regional growth through design excellence and strategic execution.',
    image: kaushikImg,
    linkedin: 'https://www.linkedin.com/in/kaushik-joshi-8577551b2',
    instagram: 'https://www.instagram.com/kaushiksjoshi',
  },
];

export function Leadership() {
  const [expandedName, setExpandedName] = useState<string | null>(null);
  const peopleViewRef = useRef<HTMLDivElement>(null);
  const savedScrollYRef = useRef<number | null>(null);

  const getScrollTop = () => {
    const main = document.querySelector('main');
    if (main && main.scrollHeight > main.clientHeight + 1) {
      return main.scrollTop;
    }
    return window.scrollY || document.documentElement.scrollTop || 0;
  };

  const scrollByAmount = (delta: number) => {
    const main = document.querySelector('main');
    if (main && main.scrollHeight > main.clientHeight + 1) {
      main.scrollBy({ top: delta, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: delta, behavior: 'smooth' });
    }
  };

  const scrollToY = (y: number) => {
    const main = document.querySelector('main');
    if (main && main.scrollHeight > main.clientHeight + 1) {
      main.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToFullBio = (name: string) => {
    const id = `people-bio-${name.replace(/\s+/g, '-').toLowerCase()}`;
    const bio = document.getElementById(id);
    if (!bio) return;

    bio.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    window.requestAnimationFrame(() => {
      const rect = bio.getBoundingClientRect();
      const bottomGap = 32;
      const overflow = rect.bottom - (window.innerHeight - bottomGap);
      if (overflow > 0) {
        scrollByAmount(overflow);
      }
    });
  };

  const toggleExpand = (name: string) => {
    const closing = expandedName === name;
    const opening = expandedName !== name;

    if (opening) {
      savedScrollYRef.current = getScrollTop();
    }

    setExpandedName((prev) => (prev === name ? null : name));

    if (opening) {
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollToFullBio(name), 200);
      });
    } else if (closing && savedScrollYRef.current !== null) {
      const y = savedScrollYRef.current;
      savedScrollYRef.current = null;
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollToY(y), 80);
      });
    }
  };

  return (
    <>
      <section id="leadership" className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={cultureBgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="bts-shell relative z-10 w-full py-20 lg:py-32">
          <div className="bts-section-head mb-10 lg:mb-12">
            <h2 className="bts-title">Culture</h2>
            <div className="bts-bar-wrap">
              <div className="bts-bar" />
            </div>
          </div>

          <p className="culture-tagline text-white text-xl lg:text-2xl font-semibold leading-snug mb-8">
            Be the Space Where People Thrive.
          </p>

          <div className="main-copy culture-copy text-white/80 text-base lg:text-lg font-light leading-[1.85] mb-10 lg:mb-12">
            <p>
              The spaces we create for others begin with the space we create for one another.
            </p>
            <br />
            <p>
              At <span className="font-bold text-white">BeThatSpace™</span>, we believe people do their
              best work when they are trusted to think, encouraged to question, empowered to take
              ownership and given room to grow. We bring different experiences, disciplines and
              perspectives together, creating an environment where people can contribute meaningfully,
              learn continuously and turn individual potential into collective progress.
            </p>
            <br />
            <p>
              Because the way we work shapes the work we create. Together, we make space for better
              possibilities.
            </p>
            <br />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                sessionStorage.setItem('lastSection', 'leadership');
                window.history.pushState({}, '', '/culture-people');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn w-fit"
            >
              <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                <Plus className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
            </button>
          </div>
        </div>
      </section>

      <section id="people" className="people-section relative bg-black py-10 lg:py-12 min-h-[100svh]">
        <div className="bts-shell relative z-10 w-full">
          <div className="people-intro mb-6 lg:mb-7">
            <div className="bts-section-head mb-6">
              <h3 className="bts-title">People</h3>
              <div className="bts-bar-wrap">
                <div className="bts-bar" />
              </div>
            </div>
          </div>

          <div ref={peopleViewRef} className="people-view">
            <div className="main-copy mb-6 lg:mb-7">
              <p className="text-white text-base sm:text-lg lg:text-xl font-semibold leading-snug mb-2 text-center">
                Every Space Has a Story. Every Story Has People Who Shape It.
              </p>
              <p className="text-white text-sm lg:text-base font-light leading-[1.65]">
                Behind every meaningful space are people who bring the vision, expertise & conviction
                to make it real. Meet the people who help shape our thinking, guide our work & turn
                possibilities into outcomes.
              </p>
            </div>

            <div className="people-cards main-copy grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              {PEOPLE.map((person) => {
                const isOpen = expandedName === person.name;
                return (
                  <article
                    key={person.name}
                    className={`people-card group flex flex-col bg-black border overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'people-card--open border-red-600 z-10' : 'border-white/15'
                    }`}
                  >
                    <div className="people-card__face relative">
                      <div className="people-card__photo relative overflow-hidden bg-black">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="people-card__img absolute inset-0 w-full h-full object-cover object-top grayscale"
                        />
                        <div className="people-card__veil absolute inset-x-0 bottom-0" aria-hidden />
                        <div
                          className="people-card__red-rule absolute left-0 right-0 bottom-[28%] h-0.5 bg-red-600"
                          aria-hidden
                        />
                      </div>

                      <div className="people-card__meta absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end">
                        <div className="people-card__meta-panel">
                          <div className="people-card__meta-copy">
                            <h4 className="people-card__name text-sm lg:text-base text-white font-bold leading-snug mb-1">
                              {person.name}
                            </h4>
                            <p className="people-card__role text-white text-[11px] lg:text-xs font-medium leading-snug mb-2">
                              {person.designation}
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <a
                                href={person.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="people-card__social w-5 h-5 rounded-full border border-white/40 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social"
                                aria-label={`${person.name} on LinkedIn`}
                              >
                                <Linkedin className="w-2.5 h-2.5 text-white transition-colors" />
                              </a>
                              <a
                                href={person.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="people-card__social w-5 h-5 rounded-full border border-white/40 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social"
                                aria-label={`${person.name} on Instagram`}
                              >
                                <Instagram className="w-2.5 h-2.5 text-white transition-colors" />
                              </a>
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleExpand(person.name)}
                              className={`people-card__more flex items-center gap-1.5 font-medium tracking-wide transition-colors duration-300 ${
                                isOpen ? 'text-red-600' : 'text-white hover:text-red-600'
                              }`}
                            >
                              <span
                                className={`w-4 h-4 shrink-0 rounded-full border inline-flex items-center justify-center transition-colors duration-300 ${
                                  isOpen ? 'border-red-600 bg-red-600/20' : 'border-white'
                                }`}
                              >
                                {isOpen ? <Minus className="w-2 h-2" /> : <Plus className="w-2 h-2" />}
                              </span>
                              <span className="whitespace-nowrap">
                                {isOpen ? 'Read Less' : 'Read More'}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {isOpen && (
                      <div
                        id={`people-bio-${person.name.replace(/\s+/g, '-').toLowerCase()}`}
                        className="people-card__bio-panel border-t-2 border-red-600 bg-white animate-in fade-in slide-in-from-top-1 duration-300"
                      >
                        <p className="people-card__bio text-black text-[11px] lg:text-xs font-light leading-[1.65]">
                          {person.bio}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
