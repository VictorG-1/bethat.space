import { Linkedin, Instagram, MapPin, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredMapIndex, setHoveredMapIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/kbnk-design-build-pvt-ltd',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kbnk_db',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/WixStudio',
      icon: Facebook,
    },
  ];

  const locations = [
    {
      name: 'Thane',
      address: '801, Floor T, Centura Square, S. G. Barve Road, MIDC-Wagle Estate,\nThane (West) – 400 604, MH, India.',
      mapUrl: 'https://maps.google.com/?q=Centura+Square+S+G+Barve+Road+MIDC+Wagle+Estate+Thane+West+400604',
    },
    {
      name: 'Pune',
      address: 'BSB Capital, Abhimanshree Chowk, Baner Road, Sakal Nagar,\nPune - 411 007, MH, India.',
      mapUrl: 'https://maps.google.com/?q=BSB+Capital+Abhimanshree+Chowk+Baner+Road+Sakal+Nagar+Pune+411007',
    },
    {
      name: 'Chennai',
      address: '141, Floor 7, Agnitio Park, Kandhanchavadi, Rajiv Gandhi Salai, OMR, Perungudi,\nChennai - 600 096, TN, India.',
      mapUrl: 'https://maps.google.com/?q=Agnitio+Park+Kandhanchavadi+OMR+Perungudi+Chennai+600096',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Culture & People', href: '#leadership' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Media', href: '#media' },
    { name: 'Contact Us', href: '#footer' },
    { name: 'Join Our Team', href: '/careers' },
  ];

  const handleQuickLink = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/careers') {
      window.history.pushState({}, '', '/careers');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer id="footer" className="relative bg-black pt-24 lg:pt-32 pb-16 lg:pb-20 border-t border-white/60">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Contact intro */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="bts-title mb-6">
            Let's Make Space for Possibility.
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600/50 to-transparent mx-auto mb-8" />
          <p className="bts-body text-white/70 text-base lg:text-lg mb-4">
            Have a project in mind, an opportunity to collaborate, or an idea worth exploring?
            We would like to understand what you are working towards and how we might help bring it to life.
          </p>
          <p className="text-white text-sm uppercase tracking-[0.2em] font-medium text-center">
            Start a Conversation.
          </p>
        </div>

        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {locations.map((location, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">{location.name}</h4>
                  <p className="bts-body text-white/50 text-xs mb-4">
                    {location.address.split('\n').join(' ')}
                  </p>
              <div
                className="relative inline-block"
                onMouseEnter={() => setHoveredMapIndex(index)}
                onMouseLeave={() => setHoveredMapIndex(null)}
              >
                <a 
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-red-600 transition-colors duration-300 group"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium">View on Map</span>
                </a>
                {hoveredMapIndex === index && (
                  <div className="hidden lg:block absolute bottom-full left-0 mb-4 pointer-events-none z-50">
                    <div className="bg-white p-4 rounded-lg shadow-2xl border-2 border-gray-300">
                      <div className="text-center">
                        <div className="w-[140px] h-[140px] bg-white flex items-center justify-center mb-3">
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(location.mapUrl)}`}
                            alt={`${location.name} Map QR Code`}
                            className="w-full h-full"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        </div>
                        <p className="text-xs text-gray-700 font-semibold whitespace-nowrap">View on Map</p>
                      </div>
                      <div className="absolute top-full left-6 -mt-[9px]">
                        <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-300 transform rotate-45" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact + Quick Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12 pt-8 border-t border-white/10">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Contact</p>
            <p className="text-white text-sm leading-relaxed space-y-1">
              <span className="block">
                <span className="text-white/50 mr-2">P</span>
                <a href="tel:+912265541100" className="hover:text-red-600 transition-colors">+91 22 6554 1100</a>
              </span>
              <span className="block">
                <span className="text-white/50 mr-2">F</span>
                <span className="hover:text-red-600 transition-colors cursor-default">+91 22 6554 1199</span>
              </span>
              <span className="block">
                <span className="text-white/50 mr-2">E</span>
                <a href="mailto:info@bethat.space" className="hover:text-red-600 transition-colors">info@bethat.space</a>
              </span>
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div
                    key={social.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-red-600 transition-colors duration-300 block"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                    {hoveredSocial === social.name && (
                      <div className="hidden lg:block absolute bottom-full left-0 mb-4 pointer-events-none z-50">
                        <div className="bg-white p-4 rounded-lg shadow-2xl border-2 border-gray-300">
                          <div className="text-center">
                            <div className="w-[140px] h-[140px] bg-white flex items-center justify-center mb-3">
                              <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(social.url)}`}
                                alt={`${social.name} QR Code`}
                                className="w-full h-full"
                                style={{ imageRendering: 'pixelated' }}
                              />
                            </div>
                            <p className="text-xs text-gray-700 font-semibold whitespace-nowrap">{social.name}</p>
                          </div>
                          <div className="absolute top-full left-6 -mt-[9px]">
                            <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-300 transform rotate-45" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Quick Links</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-white/50 text-xs uppercase tracking-wider lg:justify-end">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleQuickLink(link.href)}
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 mt-4 border-t border-white/10">
          <p className="text-xs leading-relaxed flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-3 text-center">
            <span className="text-white/40">© BeThatSpace™ {new Date().getFullYear()}. All rights reserved.</span>
            <span className="text-white/25 hidden sm:inline" aria-hidden>|</span>
            <span className="text-white/30">BeThatSpace™ is a trademark of BeThat Space Pvt. Ltd.</span>
            <span className="text-white/25 hidden sm:inline" aria-hidden>|</span>
            <span className="text-white/50 font-medium tracking-wide">BeThatSpace™. Abstract Manifested.</span>
          </p>
          <p className="mt-6 text-white/40 text-xs tracking-[0.15em] uppercase text-center">
            Architecture <span className="mx-2">|</span> Interior Design <span className="mx-2">|</span> Design + Build
          </p>
        </div>
      </div>
    </footer>
  );
}
