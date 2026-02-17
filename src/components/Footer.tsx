import { Linkedin, Instagram, Plus, MapPin, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

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
      address: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor\nincididunt ut labore dolore',
      mapUrl: 'https://maps.google.com/?q=Thane,Mumbai,India',
    },
    {
      name: 'Pune',
      address: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor\nincididunt ut labore dolore',
      mapUrl: 'https://maps.google.com/?q=Pune,India',
    },
    {
      name: 'Chennai',
      address: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor\nincididunt ut labore dolore',
      mapUrl: 'https://maps.google.com/?q=Chennai,India',
    },
  ];

  return (
    <footer id="footer" className="relative bg-black py-12 lg:py-16 border-t border-white/10">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-12">
          {/* Left Side: Three Address Columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {locations.map((location, index) => (
                <div key={index}>
                  <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">{location.name}</h4>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">
                    {location.address.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {/* Google Maps Pin */}
                  <a 
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-red-600 transition-colors duration-300 group"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">View on Map</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Plus Icons & Contact */}
          <div className="flex flex-col items-end justify-between gap-8 lg:gap-12">
            {/* Three Plus Icons */}
            <div className="flex items-center gap-12 lg:gap-16">
              <a href="#about" className="group">
                <Plus className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300" strokeWidth={1.5} />
              </a>
              <a href="#projects" className="group">
                <Plus className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300" strokeWidth={1.5} />
              </a>
              <a href="#services" className="group">
                <Plus className="w-6 h-6 text-white/60 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300" strokeWidth={1.5} />
              </a>
            </div>

            {/* Contact Info & Social */}
            <div className="text-right">
              <p className="text-white text-xs mb-4 leading-relaxed font-bold">
                P: <a href="tel:+910266641800" className="hover:text-red-600 transition-colors">+91 (0) 26664 1800</a> <span className="font-bold">|</span> F: +91 (0) 26664 1809 <span className="font-bold">|</span> <a href="mailto:info@bethat.space" className="hover:text-red-600 transition-colors">info@bethat.space</a>
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
                      
                      {/* QR Code Popup - Desktop Only */}
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
                              <p className="text-xs text-gray-700 font-semibold whitespace-nowrap">{social.name}</p>
                            </div>
                            {/* Arrow */}
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
          {/* Copyright */}
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
          </p>

          {/* Bottom Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-white/50 text-xs uppercase tracking-wider justify-center md:justify-end">
            <a href="/" className="hover:text-red-600 transition-colors duration-300">Home</a>
            <a href="#philosophy" className="hover:text-red-600 transition-colors duration-300">Philosophy</a>
            <a href="#about" className="hover:text-red-600 transition-colors duration-300">About Us</a>
            <a href="/leadership" className="hover:text-red-600 transition-colors duration-300">Leadership</a>
            <a href="/services" className="hover:text-red-600 transition-colors duration-300">Services</a>
            <a href="#projects" className="hover:text-red-600 transition-colors duration-300">Projects</a>
            <a href="/careers" className="hover:text-red-600 transition-colors duration-300">Careers</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}