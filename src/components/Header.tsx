import { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import logo from '../assets/Bethat Space White Logo Transparent Background-01-RGB.png';

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
    const getScrollTop = () => {
      const main = document.querySelector('main');
      if (main && main.scrollHeight > main.clientHeight + 1) {
        return main.scrollTop;
      }
      return window.scrollY || document.documentElement.scrollTop || 0;
    };

    const handleScroll = () => {
      const currentScrollY = getScrollTop();
      const scrollingDown = currentScrollY > lastScrollY.current + 4;
      const scrollingUp = currentScrollY < lastScrollY.current - 4;

      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (scrollingDown) {
        setIsVisible(false);
        setMenuOpen(false);
      } else if (scrollingUp) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const main = document.querySelector('main');
    window.addEventListener('scroll', handleScroll, { passive: true });
    main?.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      main?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isSubPage = currentPath !== '/explore' && currentPath !== '/';

  const handleLogoClick = () => {
    if (currentPath !== '/' && currentPath !== '/explore') {
      window.history.pushState({}, '', '/explore');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const el = document.getElementById('home');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToMain = () => {
    const lastSection = sessionStorage.getItem('lastSection');
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
    
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
    if (href.startsWith('/') && !href.startsWith('/#')) {
      const sections = ['home', 'about', 'leadership', 'services', 'projects', 'media', 'footer'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      sessionStorage.setItem('lastSection', currentSection);
    }
    setMenuOpen(false);

    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/') {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Culture & People', href: '#leadership' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Media', href: '#media' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 z-50 transition-transform duration-300 ease-out will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 py-4 flex items-center justify-between w-full">
          <button type="button" onClick={handleLogoClick} className="focus:outline-none focus:ring-0">
            <img src={logo} alt="BeThatSpace™" className="h-12 lg:h-16 w-auto" />
          </button>
          
          {isSubPage ? (
            currentPath === '/why-we-changed' ? (
              <button
                onClick={handleBackToMain}
                className="px-6 py-3 bg-transparent group"
              >
                <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors inline-block">
                  Enter
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
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Hamburger panel — 1/3 width from the right */}
      {!isSubPage && menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-300"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="fixed top-0 right-0 z-50 h-full w-full sm:w-1/2 lg:w-1/3 max-w-md bg-black/90 backdrop-blur-md border-l border-white/10 px-8 lg:px-10 py-8 lg:py-10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-end mb-10 lg:mb-14">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2 transition-colors rounded font-medium group"
                aria-label="Close menu"
              >
                <X className="w-7 h-7 text-white group-hover:text-red-600 transition-colors" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-5 lg:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-white text-lg lg:text-xl tracking-wider font-medium hover:text-red-600 transition-colors duration-300"
                  style={{ textAlign: 'left', textAlignLast: 'left' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
