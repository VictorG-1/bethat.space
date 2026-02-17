import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { MainSite } from './components/MainSite';
import { WhyWeChanged } from './components/WhyWeChanged';
import { AboutUsPage } from './components/AboutUsPage';
import { ServiceDetail } from './components/ServiceDetail';
import { CulturePage } from './components/CulturePage';
import { CareersPage } from './components/CareersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);

  useEffect(() => {
    // Simple routing based on URL path
    const path = window.location.pathname;
    if (path === '/why-we-changed') {
      setCurrentPage('why-we-changed');
    } else if (path === '/explore') {
      setCurrentPage('explore');
    } else if (path === '/about-us') {
      setCurrentPage('about-us');
    } else if (path.startsWith('/service/')) {
      setCurrentPage('service');
      setServiceSlug(path.replace('/service/', ''));
    } else if (path === '/culture') {
      setCurrentPage('culture');
    } else if (path === '/careers') {
      setCurrentPage('careers');
    } else {
      setCurrentPage('home');
    }

    // Listen for URL changes
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/why-we-changed') {
        setCurrentPage('why-we-changed');
      } else if (path === '/explore') {
        setCurrentPage('explore');
      } else if (path === '/about-us') {
        setCurrentPage('about-us');
      } else if (path.startsWith('/service/')) {
        setCurrentPage('service');
        setServiceSlug(path.replace('/service/', ''));
      } else if (path === '/culture') {
        setCurrentPage('culture');
      } else if (path === '/careers') {
        setCurrentPage('careers');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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

  if (currentPage === 'culture') {
    return <CulturePage />;
  }

  if (currentPage === 'careers') {
    return <CareersPage />;
  }

  // Landing page - just Hero section
  return (
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Hero />
    </div>
  );
}