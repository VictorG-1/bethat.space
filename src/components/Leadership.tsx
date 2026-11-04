import { Plus, Minus, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import kshitijImg from '../assets/people/kshitij.jpg';
import maithileeImg from '../assets/people/maithilee.jpg';
import kaushikImg from '../assets/people/kaushik.jpg';

const CULTURAL_PIVOTS = [
  {
    title: 'From Compliance to Ownership',
    description: 'Go beyond completing tasks. Take responsibility for outcomes, think independently and act with intent. Ownership means caring about what happens because of the work we do.',
  },
  {
    title: 'From Silos to Shared Intelligence',
    description: "Bring people, disciplines and perspectives together. Share knowledge openly, build on one another's ideas and recognise that collective intelligence creates stronger solutions.",
  },
  {
    title: 'From Assumptions to Curiosity',
    description: 'Question what seems obvious. Listen before deciding, explore before concluding and remain open to perspectives that challenge your own.',
  },
  {
    title: 'From Activity to Impact',
    description: 'Look beyond busyness to meaningful progress. Prioritise the work that creates value for clients, colleagues, projects and businesses.',
  },
  {
    title: 'From Ego to Collective Growth',
    description: 'Make room for others to contribute, learn and lead. Share knowledge generously, respect differences and recognise that individual growth strengthens the whole.',
  },
  {
    title: 'From Intent to Manifestation',
    description: 'Turn ideas into action and ambition into outcomes. Bring clarity to complexity, rigour to execution and care to every detail.',
  },
];

const PEOPLE = [
  {
    name: 'Kshitij Limaye',
    designation: 'Principal Architect | Managing Director',
    bio: 'With over 26 years of global experience, Kshitij brings together narrative, strategy and sustainability to conceive and deliver distinctive commercial environments. His approach combines creative thinking with contextual sensitivity to create spaces that inspire and perform.',
    image: kshitijImg,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Maithilee Tamhankar',
    designation: 'Executive Director',
    bio: 'With over 24 years of experience in client solutions and general management, Maithilee brings strategic insight and a people-first approach to business. She focuses on building meaningful client relationships, aligning solutions with aspirations and translating business needs into effective outcomes.',
    image: maithileeImg,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Kaushik Joshi',
    designation: 'Director',
    bio: 'With over 20 years of experience, Kaushik combines architectural creativity with executional precision to deliver purposeful workplace environments. He leads the P&L for Design Consultancy and Design+Build businesses across Western India, driving regional growth through design excellence and strategic execution.',
    image: kaushikImg,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
];

export function Leadership() {
  const [showMore, setShowMore] = useState(false);
  const [expandedName, setExpandedName] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedName((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <section id="leadership" className="relative overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full py-20 lg:py-32">
          <div className="mb-12 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="bts-title mb-6 text-center">Culture & People</h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-6 lg:mb-8" />
            <div className="about-copy flex flex-col text-white/70 text-base lg:text-lg font-light leading-[1.85] mb-8">
              <p className="text-white text-xl lg:text-2xl font-semibold leading-snug mb-5" style={{ textAlign: 'left', textAlignLast: 'left' }}>
                Be the Space Where People Thrive.
              </p>
              <p className="text-white/80 mb-5">
                The spaces we create for others begin with the space we create for one another.
              </p>
              <p className="mb-5">
                At BeThatSpace™, we believe people do their best work when they are trusted to think, encouraged to question, empowered to take ownership and given room to grow.
              </p>
              <div className="h-5" aria-hidden />
              <p className="mb-5">
                We bring different experiences, disciplines and perspectives together, creating an environment where people can contribute meaningfully, learn continuously and turn individual potential into collective progress.
              </p>
              <div className="h-5" aria-hidden />
              <p className="text-white/80 mb-5">
                Because the way we work shapes the work we create.
              </p>
              <div className="h-5" aria-hidden />
              <p className="text-white/70 font-light">
                Together, we make space for better possibilities.
              </p>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn mx-auto w-fit"
            >
              <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                {showMore ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider">
                {showMore ? 'Show Less' : 'Read More'}
              </span>
            </button>
          </div>

          {showMore && (
            <div className="animate-in fade-in duration-500">
              <div className="text-center mb-10 max-w-[1440px] mx-auto">
                <h3 className="bts-title mb-4">Cultural Pivots</h3>
                <p className="text-white text-xl lg:text-2xl font-semibold leading-snug mb-6">
                  A Culture of Becoming.
                </p>
                <div className="bts-body text-white/70 text-sm sm:text-base lg:text-lg space-y-4 mb-12 max-w-3xl mx-auto">
                  <p style={{ textAlign: 'justify', textAlignLast: 'left' }}>
                    Culture is not what we declare. It is what we practise, in the choices we make, the way we work
                    <br />
                    and the responsibility we take for our outcomes.
                  </p>
                  <p style={{ textAlign: 'center', textAlignLast: 'center' }}>
                    At BeThatSpace™, we are building a culture that moves:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1440px] mx-auto mb-12">
                {CULTURAL_PIVOTS.map((pivot) => (
                  <div
                    key={pivot.title}
                    className="group bg-black/50 backdrop-blur-md border border-white/10 hover:border-red-600/50 p-8 transition-all duration-500 min-h-[200px] flex flex-col"
                  >
                    <h4 className="text-lg lg:text-xl text-white font-semibold mb-4 group-hover:text-red-600 transition-colors text-left">
                      {pivot.title}
                    </h4>
                    <p
                      className="values-card-copy text-white/70 text-sm flex-1 font-light leading-[1.85]"
                      style={{ textAlign: 'justify', textAlignLast: 'left' }}
                    >
                      {pivot.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bts-body max-w-[1440px] mx-auto space-y-4 text-white/70 text-sm sm:text-base">
                <p className="whitespace-nowrap overflow-x-auto px-2" style={{ textAlign: 'center', textAlignLast: 'center' }}>
                  These are not destinations we claim to have reached. They are the shifts we commit to making - every day, together.
                </p>
                <p className="text-white/90 font-normal" style={{ textAlign: 'center', textAlignLast: 'center' }}>
                  The promise we make through our work begins with the culture we build within.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* People */}
      <section className="relative bg-black py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 w-full">
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h3 className="bts-title mb-4">People</h3>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-8" />
            <div className="bts-body text-white/80 text-base lg:text-lg space-y-2 mb-6">
              <p>Every Space Has a Story.</p>
              <p>Every Story Has People Who Shape It.</p>
            </div>
            <div className="bts-body text-white/70 text-base lg:text-lg space-y-2">
              <p className="max-w-4xl mx-auto">
                Behind every meaningful space are people who bring the vision, expertise and conviction to make it real.
              </p>
              <p>
                Meet the people who help shape our thinking, guide our work and turn possibilities into outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PEOPLE.map((person) => {
              const isOpen = expandedName === person.name;
              return (
              <div
                key={person.name}
                onClick={() => toggleExpand(person.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(person.name);
                  }
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-600/50 transition-all duration-500 p-5 lg:p-6 cursor-pointer overflow-hidden min-w-0"
              >
                <div className="flex flex-col gap-4 w-full min-w-0">
                  <div className="flex items-start gap-3 lg:gap-4 w-full min-w-0">
                    <img
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="w-28 h-28 lg:w-32 lg:h-32 shrink-0 self-start object-cover object-center grayscale border border-white/10 bg-neutral-900"
                    />

                    <div className="min-w-0 flex-1 flex flex-col justify-between gap-3 self-stretch">
                      <div>
                        <h4
                          className="text-sm lg:text-base text-white mb-1.5 font-semibold leading-snug break-words"
                          style={{ textAlign: 'left', textAlignLast: 'left' }}
                        >
                          {person.name}
                        </h4>
                        <p
                          className="text-white text-[11px] lg:text-xs font-medium leading-snug break-words"
                          style={{ textAlign: 'left', textAlignLast: 'left' }}
                        >
                          {person.designation}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-2 min-w-0">
                        <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social shrink-0">
                            <Linkedin className="w-3 h-3 text-white/70 group-hover/social:text-white transition-colors duration-300" />
                          </a>
                          <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social shrink-0">
                            <Instagram className="w-3 h-3 text-white/70 group-hover/social:text-white transition-colors duration-300" />
                          </a>
                        </div>
                        <span
                          className="shrink-0 select-none px-3 text-white/45 text-sm leading-none"
                          aria-hidden
                        >
                          |
                        </span>
                        <span className="text-xs font-medium tracking-wide text-white/80 group-hover:text-red-600 transition-colors inline-flex items-center gap-2 min-w-0">
                          <span className="w-5 h-5 shrink-0 rounded-full border border-white/80 group-hover:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                            {isOpen ? <Minus className="w-2.5 h-2.5" /> : <Plus className="w-2.5 h-2.5" />}
                          </span>
                          <span className="whitespace-nowrap">{isOpen ? 'Show Less' : 'Read More'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {isOpen && (
                    <p
                      className="text-white text-sm animate-in fade-in duration-300 font-light leading-relaxed break-words"
                      style={{ textAlign: 'justify', textAlignLast: 'left' }}
                    >
                      {person.bio}
                    </p>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
