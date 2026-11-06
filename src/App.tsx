import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { MainSite } from './components/MainSite';
import { WhyWeChanged } from './components/WhyWeChanged';
import { AboutUsPage } from './components/AboutUsPage';
import { ServiceDetail } from './components/ServiceDetail';
import { CareersPage } from './components/CareersPage';
import { CulturePeoplePage } from './components/CulturePeoplePage';

function pageFromPath(path: string): { page: string; serviceSlug: string | null } {
  if (path === '/why-we-changed') return { page: 'why-we-changed', serviceSlug: null };
  if (path === '/explore') return { page: 'explore', serviceSlug: null };
  if (path === '/about-us') return { page: 'about-us', serviceSlug: null };
  if (path.startsWith('/service/')) {
    return { page: 'service', serviceSlug: path.replace('/service/', '') };
  }
  if (path === '/careers') return { page: 'careers', serviceSlug: null };
  if (path === '/culture-people') return { page: 'culture-people', serviceSlug: null };
  return { page: 'home', serviceSlug: null };
}

const SERVICE_TITLES: Record<string, string> = {
  'architectural-design': 'Architectural Design',
  'interior-design': 'Interior Design',
  'urban-planning': 'Urban Planning',
};

function titleForPage(page: string, serviceSlug: string | null): string {
  const brand = 'BeThatSpace™';
  switch (page) {
    case 'home':
      return brand;
    case 'explore':
      return `Explore | ${brand}`;
    case 'about-us':
      return `About Us | ${brand}`;
    case 'culture-people':
      return `Culture & People | ${brand}`;
    case 'careers':
      return `Careers | ${brand}`;
    case 'why-we-changed':
      return `Why We Changed | ${brand}`;
    case 'service':
      return `${SERVICE_TITLES[serviceSlug ?? ''] ?? 'Service'} | ${brand}`;
    default:
      return brand;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);

  useEffect(() => {
    const applyPath = () => {
      const { page, serviceSlug: slug } = pageFromPath(window.location.pathname);
      setCurrentPage(page);
      setServiceSlug(slug);
      document.title = titleForPage(page, slug);
    };

    applyPath();
    window.addEventListener('popstate', applyPath);
    return () => window.removeEventListener('popstate', applyPath);
  }, []);

  if (currentPage === 'why-we-changed') {
    return <WhyWeChanged />;
  }

  if (currentPage === 'explore') {
    return <MainSite />;
  }

  if (currentPage === 'about-us') {
    return <AboutUsPage />;
  }

  if (currentPage === 'service' && serviceSlug) {
    return <ServiceDetail slug={serviceSlug} />;
  }

  if (currentPage === 'careers') {
    return <CareersPage />;
  }

  if (currentPage === 'culture-people') {
    return <CulturePeoplePage />;
  }

  return (
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Hero />
    </div>
  );
}
