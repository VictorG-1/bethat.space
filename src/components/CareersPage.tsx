import { ArrowLeft, Upload, Phone } from 'lucide-react';
import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import logo from 'figma:asset/aa11cddccf649bb4189ffcfb3f0474378376d096.png';

// List of countries with their calling codes
const countries = [
  { code: '+1', name: 'USA/Canada', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
];

export function CareersPage() {
  const [fileName, setFileName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleBackClick = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14 text-center">
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8" />
          <h1 className="text-4xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-xl lg:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Build the future with BeThatSpace™. We're looking for passionate, talented individuals to join our award-winning design studio.
          </p>
          
          {/* Global Contact Number */}
          <div className="mt-12 flex items-center justify-center gap-3 text-white/80">
            <Phone className="w-5 h-5 text-red-600" />
            <span className="text-lg">Contact us: +91 98765 43210</span>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-neutral-950 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl tracking-tight text-white mb-4 font-semibold">
              Apply Now
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </div>
            <p className="text-white/60 text-justify max-w-2xl mx-auto">
              Interested in joining our team? Send us your details and we'll get back to you within 48 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="mobile" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                Mobile Number *
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code} className="bg-black">
                      {country.flag} {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="mobile"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white"
                  placeholder="XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="position" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                Position Applied For *
              </label>
              <input
                type="text"
                id="position"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white"
                placeholder="e.g., Senior Architect, Interior Designer, etc."
              />
            </div>

            <div className="group">
              <label htmlFor="cv" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                CV / Portfolio * <span className="text-white/40 text-xs normal-case font-normal">(Max 10MB)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="cv"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="cv"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 hover:border-red-600/50 transition-colors text-white/60 cursor-pointer flex items-center gap-3 group"
                >
                  <Upload className="w-5 h-5 text-white/40 group-hover:text-red-600 transition-colors" />
                  <span className="flex-1 text-left">
                    {fileName || 'Upload your CV or Portfolio (PDF, DOC)'}
                  </span>
                </label>
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/60 mb-2 font-semibold">
                Cover Letter / Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-red-600/50 outline-none transition-colors text-white resize-none"
                placeholder="Tell us about yourself and why you'd like to join BeThatSpace™..."
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="group relative px-12 py-4 bg-red-600 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm font-semibold overflow-hidden"
              >
                <span className="relative z-10">Submit Application</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-6 tracking-tight">
              Why Join BeThatSpace™?
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl text-red-600 font-bold mb-4">01</div>
              <h3 className="text-xl text-white font-semibold mb-3">Growth & Learning</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Continuous professional development through mentorship, workshops, and exposure to diverse, challenging projects.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl lg:text-6xl text-red-600 font-bold mb-4">02</div>
              <h3 className="text-xl text-white font-semibold mb-3">Collaborative Culture</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Work with talented professionals in a supportive environment that values creativity, innovation, and teamwork.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl lg:text-6xl text-red-600 font-bold mb-4">03</div>
              <h3 className="text-xl text-white font-semibold mb-3">Impactful Work</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Contribute to transformative projects that shape communities and leave lasting positive impacts on society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}