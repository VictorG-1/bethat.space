import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type TransitionEvent,
} from 'react';
import { X, ArrowLeft } from 'lucide-react';
import logo from '../assets/Bethat Space White Logo Transparent Background-01-RGB.png';

const PATH_TITLES: Record<string, string> = {
  '/': 'BeThatSpace™',
  '/explore': 'Explore',
  '/about-us': 'About Us',
  '/culture-people': 'Culture & People',
  '/careers': 'Careers',
  '/why-we-changed': 'Why We Changed',
};

const SERVICE_TITLES: Record<string, string> = {
  'architectural-design': 'Architectural Design',
  'interior-design': 'Interior Design',
  'urban-planning': 'Urban Planning',
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState('/explore');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const openMenu = useCallback(() => {
    setMenuMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuOpen(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    if (menuOpen) closeMenu();
    else openMenu();
  };

  const handleNavTransitionEnd = (e: TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== 'transform' && e.propertyName !== 'opacity') return;
    if (!menuOpen) setMenuMounted(false);
  };

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
        closeMenu();
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
  }, [closeMenu]);

  const isSubPage = currentPath !== '/explore' && currentPath !== '/';

  const subPageTitle = (() => {
    if (currentPath.startsWith('/service/')) {
      const slug = currentPath.replace('/service/', '');
      return SERVICE_TITLES[slug] ?? 'Service';
    }
    return PATH_TITLES[currentPath] ?? 'BeThatSpace™';
  })();

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
    closeMenu();

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
    { name: 'Culture', href: '#leadership' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 z-50 transition-transform duration-300 ease-out will-change-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bts-shell w-full py-4 flex items-center gap-4 lg:gap-6">
        <button
          type="button"
          onClick={handleLogoClick}
          className="shrink-0 focus:outline-none focus:ring-0"
        >
          <img src={logo} alt="BeThatSpace™" className="h-12 lg:h-16 w-auto" />
        </button>

        <div className="flex-1 min-w-0 flex items-center justify-end">
          {isSubPage ? (
            <div className="flex items-center gap-4 lg:gap-6">
              <p className="hidden sm:block text-white text-xs lg:text-sm font-light tracking-[0.18em] uppercase truncate">
                {subPageTitle}
              </p>
              {currentPath === '/why-we-changed' ? (
                <button onClick={handleBackToMain} className="px-6 py-3 bg-transparent group shrink-0">
                  <span className="tracking-[0.2em] text-sm font-medium text-white group-hover:text-red-600 transition-colors inline-block">
                    Enter
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleBackToMain}
                  className="flex items-center gap-2 text-white/60 hover:text-red-600 transition-colors duration-300 group p-2 shrink-0"
                >
                  <ArrowLeft className="w-7 h-7" />
                  <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">
                    Back to Main
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3 lg:gap-5 min-w-0 w-full">
              {/* Inline nav titles — slide in from right on open, reverse on close */}
              {menuMounted && (
                <nav
                  className={`header-inline-nav ${menuOpen ? 'header-inline-nav--open' : ''}`}
                  onTransitionEnd={handleNavTransitionEnd}
                  aria-hidden={!menuOpen}
                >
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="header-inline-nav__link"
                      style={{ transitionDelay: menuOpen ? `${index * 40}ms` : `${(navItems.length - 1 - index) * 30}ms` }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              )}

              <button
                onClick={toggleMenu}
                className="p-2 transition-colors rounded font-medium group shrink-0"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
