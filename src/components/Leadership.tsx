import { Plus, Minus, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  {
    name: 'Priya Sharma',
    designation: 'Associate Director - Architecture',
    bio: 'With over 12 years of experience in sustainable architecture, Priya leads innovative residential and commercial projects. Her expertise in eco-friendly design has earned multiple Green Building certifications and industry recognition.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Arjun Patel',
    designation: 'Head of Interior Design',
    bio: 'Arjun specializes in luxury interior design with a keen eye for detail and spatial harmony. His portfolio includes high-end residential projects and hospitality spaces that blend contemporary aesthetics with functional excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Meera Desai',
    designation: 'Head of Urban Planning',
    bio: 'Meera brings expertise in creating sustainable urban environments that prioritize community well-being. Her work focuses on inclusive planning strategies that transform cities into livable, connected spaces.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Rohan Kumar',
    designation: 'Associate Director - Projects',
    bio: 'Rohan excels in managing complex architectural projects from concept to completion. His technical expertise and problem-solving approach ensure seamless execution of large-scale commercial and institutional developments.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Ananya Reddy',
    designation: 'Head of Interior Styling',
    bio: 'Ananya curates sophisticated material palettes and furnishing concepts that define the character of interior spaces. Her styling expertise brings cohesion and elegance to every project.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Vikram Singh',
    designation: 'Head of Structural Engineering',
    bio: 'Vikram ensures structural integrity and innovation in every design. His engineering excellence bridges architectural vision with practical execution, delivering safe and groundbreaking structures.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Kavya Iyer',
    designation: 'Head of 3D Visualization',
    bio: 'Kavya creates photorealistic renderings and immersive visualizations that bring architectural concepts to life. Her digital artistry helps clients envision their spaces before construction begins.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Aditya Malhotra',
    designation: 'Associate Director - Landscape',
    bio: 'Aditya integrates natural elements seamlessly into architectural projects. His landscape architecture expertise creates harmonious indoor-outdoor connections that enhance environmental sustainability.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Sanya Kapoor',
    designation: 'Head of Design Innovation',
    bio: 'Sanya drives cutting-edge design thinking and innovation at BeThatSpace™. Her fresh perspectives and expertise in emerging technologies push the boundaries of contemporary architectural practice.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
];

export function Leadership() {
  const [showMore, setShowMore] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
          <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="bts-title mb-6">Culture & People</h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-10" />
            <p className="text-white text-xl lg:text-2xl font-semibold mb-6">
              Be the Space Where People Thrive.
            </p>
            <div className="bts-body text-white/70 text-base lg:text-lg space-y-4 mb-8">
              <p className="text-white/80">
                The spaces we create for others begin with the space we create for one another.
              </p>
              <p>
                At BeThatSpace™, we believe people do their best work when they are trusted to think, encouraged to question, empowered to take ownership and given room to grow.
              </p>
              <p>
                We bring different experiences, disciplines and perspectives together, creating an environment where people can contribute meaningfully, learn continuously and turn individual potential into collective progress.
              </p>
              <p className="text-white/80">
                Because the way we work shapes the work we create.
              </p>
              <p className="text-white/90 font-normal">
                Together, we make space for better possibilities.
              </p>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
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
              <div className="text-center mb-10 max-w-3xl mx-auto">
                <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-3">Cultural Pivots</p>
                <h3 className="bts-title mb-6">A Culture of Becoming.</h3>
                <div className="bts-body text-white/70 text-base lg:text-lg space-y-4 mb-12">
                  <p>
                    Culture is not what we declare. It is what we practise, in the choices we make, the way we work and the responsibility we take for our outcomes.
                  </p>
                  <p>
                    At BeThatSpace™, we are building a culture that moves:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                {CULTURAL_PIVOTS.map((pivot) => (
                  <div
                    key={pivot.title}
                    className="group bg-black/50 backdrop-blur-md border border-white/10 hover:border-red-600/50 p-8 transition-all duration-500 min-h-[200px] flex flex-col"
                  >
                    <h4 className="text-lg lg:text-xl text-white font-semibold mb-4 group-hover:text-red-600 transition-colors text-center">
                      {pivot.title}
                    </h4>
                    <p className="bts-body bts-justify text-white/70 text-sm flex-1">
                      {pivot.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bts-body max-w-3xl mx-auto space-y-4 text-white/70 text-base">
                <p>
                  These are not destinations we claim to have reached. They are the shifts we commit to making - every day, together.
                </p>
                <p className="text-white/90 font-normal">
                  The promise we make through our work begins with the culture we build within.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* People — 12 equal tiles, 3 cols */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {PEOPLE.map((person, index) => (
              <div
                key={person.name}
                onClick={() => toggleExpand(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-600/50 transition-all duration-500 p-5 pb-6 cursor-pointer overflow-visible"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="aspect-square w-20 lg:w-24 bg-neutral-900 border border-white/10 overflow-hidden hover:border-red-600/50 transition-all duration-500 relative">
                      <ImageWithFallback
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 overflow-visible">
                    <h4 className="text-sm lg:text-base text-white mb-1 font-semibold break-words">
                      {person.name}
                    </h4>
                    <p className="text-white/70 text-[10px] lg:text-xs uppercase tracking-wider font-medium mb-3 break-words leading-relaxed">
                      {person.designation}
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex gap-2.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social">
                          <Linkedin className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white/60 group-hover/social:text-white transition-colors duration-300" />
                        </a>
                        <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social">
                          <Instagram className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white/60 group-hover/social:text-white transition-colors duration-300" />
                        </a>
                      </div>
                      <span className="text-white/30 text-sm select-none mx-1" aria-hidden>|</span>
                      <span className="text-[10px] lg:text-xs font-medium text-white/80 group-hover:text-red-600 transition-colors flex items-center gap-2 shrink-0 pl-1">
                        <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-white/80 group-hover:border-red-600 flex items-center justify-center transition-colors duration-300 inline-flex">
                          {expandedIndex === index ? <Minus className="w-2 h-2 lg:w-2.5 lg:h-2.5" /> : <Plus className="w-2 h-2 lg:w-2.5 lg:h-2.5" />}
                        </span>
                        {expandedIndex === index ? 'Show Less' : 'Read More'}
                      </span>
                    </div>
                  </div>
                </div>
                {expandedIndex === index && (
                  <p className="bts-body bts-justify text-white/60 text-[10px] lg:text-xs mt-4 animate-in fade-in duration-300 break-words whitespace-normal">
                    {person.bio}
                  </p>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out overflow-hidden" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
