import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useParallaxBlobs } from './hooks/useParallaxBlobs';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomCursor from './components/Cursor';

// Lazy load below-fold sections for faster initial load
const Projects = lazy(() => import('./components/Projects'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const About = lazy(() => import('./components/About'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Utility: RequestAnimationFrame throttle for smooth animations
import { rafThrottle } from './utils/performance';

// Section loading fallback
import SectionFallback from './components/shared/SectionFallback';

function App() {




  useIntersectionObserver();

  useParallaxBlobs();

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>

      <CustomCursor />
      <Header />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <CaseStudy />
        <About />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
