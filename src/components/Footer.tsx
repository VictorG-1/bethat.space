import { Linkedin, Instagram, Plus, MapPin, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredMap, setHoveredMap] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/bethatspace/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bethatspace',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1Hu6KbwqLp/?mibextid=wwXIfr',
      icon: Facebook,
    },
  ];

  const locations = [
    {
      name: 'Thane',
      address:
        '801, Floor T, Centura Square,\nS. G. Barve Road,\nMIDC-Wagle Estate,\nThane (West) – 400 604, MH, India.',
      mapUrl:
        'https://maps.google.com/?q=Centura+Square+S+G+Barve+Road+MIDC+Wagle+Estate+Thane+West+400604',
    },
    {
      name: 'Pune',
      address:
        'BSB Capital, S. No. 80,\nBaner Road,\nAbhimanshree Chowk, Sakal Nagar,\nPune - 411 007, MH, India.',
      mapUrl:
        'https://maps.google.com/?q=BSB+Capital+S+No+80+Abhimanshree+Chowk+Baner+Road+Sakal+Nagar+Pune+411007',
    },
    {
      name: 'Chennai',
      address:
        '141, Floor 7, Agnitio Park,\nKandhanchavadi,\nRajiv Gandhi Salai, OMR, Perungudi,\nChennai - 600 096, TN, India.',
      mapUrl:
        'https://maps.google.com/?q=Agnitio+Park+Kandhanchavadi+OMR+Perungudi+Chennai+600096',
    },
  ];

  return (
    <footer id="footer" className="relative bg-black">
      <div className="w-full h-px bg-white/20" aria-hidden />

      <div className="relative py-12 lg:py-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 bts-shell w-full">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-12">
            {/* Left Side: Three Address Columns */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {locations.map((location, index) => (
                  <div key={index}>
                    <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">
                      {location.name}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed mb-4">
                      {location.address.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < location.address.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <div
                      className="relative inline-block"
                      onMouseEnter={() => setHoveredMap(location.name)}
                      onMouseLeave={() => setHoveredMap(null)}
                    >
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-red-600 transition-colors duration-300 group"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-medium">
                          View on Map
                        </span>
                      </a>

                      {hoveredMap === location.name && (
                        <div className="hidden lg:block absolute bottom-full left-0 mb-4 pointer-events-none z-50">
                          <div className="bg-white p-4 rounded-lg shadow-2xl border-2 border-gray-300">
                            <div className="text-center">
                              <div className="w-[140px] h-[140px] bg-white flex items-center justify-center mb-3">
                                <img
                                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(location.mapUrl)}`}
                                  alt={`${location.name} map QR Code`}
                                  className="w-full h-full"
                                  style={{ imageRendering: 'pixelated' }}
                                />
                              </div>
                              <p className="text-xs text-gray-700 font-semibold whitespace-nowrap">
                                {location.name} Map
                              </p>
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
            </div>

            {/* Right Side: Plus Icons & Contact */}
            <div className="flex flex-col items-end justify-between gap-8 lg:gap-12">
              <div className="flex items-center gap-12 lg:gap-16">
                <a href="#about" className="group">
                  <Plus
                    className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </a>
                <a href="#projects" className="group">
                  <Plus
                    className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </a>
                <a href="#services" className="group">
                  <Plus
                    className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              <div className="text-right">
                <p className="text-white text-xs mb-4 leading-relaxed font-bold">
                  P:{' '}
                  <a href="tel:+912265541100" className="hover:text-red-600 transition-colors">
                    +91 22 6554 1100
                  </a>{' '}
                  <span className="text-red-600 font-bold">|</span> F: +91 22 6554 1199{' '}
                  <span className="text-red-600 font-bold">|</span>{' '}
                  <a href="mailto:info@bethat.space" className="hover:text-red-600 transition-colors">
                    info@bethat.space
                  </a>
                </p>
                <div className="flex gap-3 justify-end">
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
                          <div className="hidden lg:block absolute bottom-full right-0 mb-4 pointer-events-none z-50">
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
                                <p className="text-xs text-gray-700 font-semibold whitespace-nowrap">
                                  {social.name}
                                </p>
                              </div>
                              <div className="absolute top-full right-6 -mt-[9px]">
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
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
            </p>

            <nav className="flex flex-wrap gap-6 text-white/50 text-xs uppercase tracking-wider justify-center md:justify-end">
              <a href="#philosophy" className="hover:text-red-600 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="hover:text-red-600 transition-colors duration-300">
                About Us
              </a>
              <a href="#leadership" className="hover:text-red-600 transition-colors duration-300">
                Culture
              </a>
              <a href="#services" className="hover:text-red-600 transition-colors duration-300">
                Services
              </a>
              <a href="#projects" className="hover:text-red-600 transition-colors duration-300">
                Projects
              </a>
              <a href="#footer" className="hover:text-red-600 transition-colors duration-300">
                Contact Us
              </a>
              <a
                href="/careers"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/careers');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="hover:text-red-600 transition-colors duration-300"
              >
                Join Our Team
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
