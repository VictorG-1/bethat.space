import { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/aa11cddccf649bb4189ffcfb3f0474378376d096.png';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/explore');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    
    updatePath();
    window.addEventListener('popstate', updatePath);
    
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerThreshold = documentHeight - windowHeight - 200;

      // Always show at top (first 100px)
      if (currentScrollY < 100) {
        setIsVisible(true);
      }
      // Always show near footer
      else if (currentScrollY >= footerThreshold) {
        setIsVisible(true);
      }
      // Show on scroll up, hide on scroll down
      else {
        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSubPage = currentPath !== '/explore' && currentPath !== '/';

  const handleLogoClick = () => {
    if (currentPath !== '/' && currentPath !== '/explore') {
      window.history.pushState({}, '', '/explore');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const el = document.getElementById('philosophy');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('philosophy');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToMain = () => {
    const lastSection = sessionStorage.getItem('lastSection');
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
    
    // Scroll to last section after a brief delay to ensure page loads
    if (lastSection) {
      setTimeout(() => {
        const element = document.getElementById(lastSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('lastSection');
      }, 100);
    }
  };

  const handleNavClick = (href: string) => {
    // Store current section if navigating to a subpage
    if (href.startsWith('/') && !href.startsWith('/#')) {
      // Get current section from scroll position
      const sections = ['hero', 'philosophy', 'about', 'leadership', 'services', 'projects', 'footer'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      sessionStorage.setItem('lastSection', currentSection);
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'About Us', href: '#about' },
    { name: 'Culture & People', href: '#leadership' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button type="button" onClick={handleLogoClick} className="focus:outline-none focus:ring-0">
            <img src={logo} alt="BeThatSpace™" className="h-12 lg:h-16 w-auto" />
          </button>
          
          {/* Burger Menu Button OR Back/Explore Button */}
          {isSubPage ? (
            currentPath === '/why-we-changed' ? (
              <button
                onClick={handleBackToMain}
                className="px-6 py-3 bg-transparent group"
              >
                <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors inline-block">
                  Explore BeThatSpace™
                </span>
              </button>
            ) : (
              <button
                onClick={handleBackToMain}
                className="flex items-center gap-2 text-white/60 hover:text-red-600 transition-colors duration-300 group p-2"
              >
                <ArrowLeft className="w-7 h-7" />
                <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">Back to Main</span>
              </button>
            )
          ) : (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 transition-colors rounded font-medium group"
            >
              {menuOpen ? (
                <X className="w-7 h-7 text-white group-hover:text-red-600 transition-colors" />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <div className="w-7 h-0.5 bg-white group-hover:bg-red-600 transition-all" />
                  <div className="w-7 h-0.5 bg-white group-hover:bg-red-600 transition-all" />
                  <div className="w-7 h-0.5 bg-white group-hover:bg-red-600 transition-all" />
                </div>
              )}
            </button>
          )}
        </div>
      </header>

      {/* Menu Overlay - Only show on main page */}
      {menuOpen && !isSubPage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white text-2xl lg:text-3xl tracking-wider font-semibold hover:text-red-600 transition-colors duration-300 capitalize"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}