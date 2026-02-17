import { ChevronDown, Plus, Minus, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PEOPLE = [
  { name: 'Priya Sharma', designation: 'Associate Director - Architecture', bio: 'With over 12 years of experience in sustainable architecture, Priya leads innovative residential and commercial projects. Her expertise in eco-friendly design has earned multiple Green Building certifications and industry recognition.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/priyasharma', instagram: 'https://instagram.com/priyasharma' },
  { name: 'Arjun Patel', designation: 'Head of Interior Design', bio: 'Arjun specializes in luxury interior design with a keen eye for detail and spatial harmony. His portfolio includes high-end residential projects and hospitality spaces that blend contemporary aesthetics with functional excellence.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/arjunpatel', instagram: 'https://instagram.com/arjunpatel' },
  { name: 'Meera Desai', designation: 'Head of Urban Planning', bio: 'Meera brings expertise in creating sustainable urban environments that prioritize community well-being. Her work focuses on inclusive planning strategies that transform cities into livable, connected spaces.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/meeradesai', instagram: 'https://instagram.com/meeradesai' },
  { name: 'Rohan Kumar', designation: 'Associate Director - Projects', bio: 'Rohan excels in managing complex architectural projects from concept to completion. His technical expertise and problem-solving approach ensure seamless execution of large-scale commercial and institutional developments.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/rohankumar', instagram: 'https://instagram.com/rohankumar' },
  { name: 'Ananya Reddy', designation: 'Head of Interior Styling', bio: 'Ananya curates sophisticated material palettes and furnishing concepts that define the character of interior spaces. Her styling expertise brings cohesion and elegance to every project.', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/ananyareddy', instagram: 'https://instagram.com/ananyareddy' },
  { name: 'Vikram Singh', designation: 'Head of Structural Engineering', bio: 'Vikram ensures structural integrity and innovation in every design. His engineering excellence bridges architectural vision with practical execution, delivering safe and groundbreaking structures.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/vikramsingh', instagram: 'https://instagram.com/vikramsingh' },
  { name: 'Kavya Iyer', designation: 'Head of 3D Visualization', bio: 'Kavya creates photorealistic renderings and immersive visualizations that bring architectural concepts to life. Her digital artistry helps clients envision their spaces before construction begins.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/kavyaiyer', instagram: 'https://instagram.com/kavyaiyer' },
  { name: 'Aditya Malhotra', designation: 'Associate Director - Landscape', bio: 'Aditya integrates natural elements seamlessly into architectural projects. His landscape architecture expertise creates harmonious indoor-outdoor connections that enhance environmental sustainability.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/adityamalhotra', instagram: 'https://instagram.com/adityamalhotra' },
  { name: 'Sanya Kapoor', designation: 'Head of Design Innovation', bio: 'Sanya drives cutting-edge design thinking and innovation at BeThatSpace™. Her fresh perspectives and expertise in emerging technologies push the boundaries of contemporary architectural practice.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', linkedin: 'https://linkedin.com/in/sanyakapoor', instagram: 'https://instagram.com/sanyakapoor' },
];

export function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleNavigation = (path: string) => {
    sessionStorage.setItem('lastSection', 'leadership');
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="leadership" className="relative min-h-screen bg-black py-20 lg:py-32 flex items-center">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl tracking-tight text-white mb-6 font-semibold">
            People & Culture
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          </div>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {PEOPLE.map((person, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-600/50 transition-all duration-500 overflow-hidden p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="aspect-square w-20 lg:w-24 bg-neutral-900 border border-white/10 overflow-hidden hover:border-red-600/50 transition-all duration-500 relative">
                        <ImageWithFallback
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm lg:text-base text-white mb-1 font-semibold">
                        {person.name}
                      </h4>
                      <p className="text-white/70 text-[10px] lg:text-xs uppercase tracking-wider font-medium mb-3">
                        {person.designation}
                      </p>
                      <div className="flex gap-2 mb-3">
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social">
                          <Linkedin className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white/60 group-hover/social:text-white transition-colors duration-300" />
                        </a>
                        <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/social">
                          <Instagram className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white/60 group-hover/social:text-white transition-colors duration-300" />
                        </a>
                      </div>
                      {expandedIndex === index && (
                        <p className="text-white/60 leading-relaxed text-[10px] lg:text-xs text-justify font-light mb-2 animate-in fade-in duration-300">
                          {person.bio}
                        </p>
                      )}
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center gap-1.5 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
                      >
                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
                          {expandedIndex === index ? <Minus className="w-2 h-2 lg:w-2.5 lg:h-2.5" /> : <Plus className="w-2 h-2 lg:w-2.5 lg:h-2.5" />}
                        </div>
                        <span className="text-[10px] lg:text-xs font-medium">
                          {expandedIndex === index ? 'Show Less' : 'Read More'}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              ))}
            </div>
        </div>

        {/* Read more - below 9 people */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => handleNavigation('/culture')}
            className="flex items-center gap-2 text-white/80 hover:text-red-600 transition-colors duration-300 group/btn"
          >
            <div className="w-5 h-5 rounded-full border border-white/80 group-hover/btn:border-red-600 flex items-center justify-center transition-colors duration-300">
              <Plus className="w-3 h-3" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider">Read More</span>
          </button>
        </div>

        <a href="#services" className="flex justify-center mt-12 lg:mt-16">
          <ChevronDown className="w-8 h-8 text-white/30" />
        </a>
      </div>
    </section>
  );
}
