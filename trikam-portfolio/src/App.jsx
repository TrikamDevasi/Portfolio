import React, { useEffect, useRef, lazy, Suspense } from 'react';
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
const SectionFallback = () => (
  <div style={{ minHeight: '400px' }} />
);

function App() {
  const scrollObserverRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // =============================
    // INTERSECTION OBSERVER (reveal animations)
    // =============================
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    };

    scrollObserverRef.current = new IntersectionObserver((entries) => {
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserverRef.current?.unobserve(entry.target);
          }
        });
      });
    }, observerOptions);

    // Observe elements efficiently
    const revealEls = document.querySelectorAll('.reveal-text, .scale-on-scroll, .zoom-wrapper');
    revealEls.forEach((el) => scrollObserverRef.current?.observe(el));

    // Skill tags with delay
    const skillCats = document.querySelectorAll('.skill-category');
    skillCats.forEach((category) => {
      const tags = category.querySelectorAll('.skill-tag');
      tags.forEach((tag) => {
        tag.classList.add('stagger-item');
        scrollObserverRef.current?.observe(tag);
      });
    });

    // Project/Cert cards with stagger
    const projectCertCards = document.querySelectorAll('.project-card, .cert-card');
    projectCertCards.forEach((card, index) => {
      card.style.setProperty('--delay', `${Math.min(index * 0.08, 0.6)}s`);
      scrollObserverRef.current?.observe(card);
    });

    // =============================
    // PARALLAX BLOBS (Desktop only, reduced motion aware)
    // =============================
    let blobsArray = [];

    const handleMouseMoveBlobs = rafThrottle((e) => {
      if (prefersReducedMotion || window.innerWidth < 768) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (e.clientX - centerX) * 0.008;
      const moveY = (e.clientY - centerY) * 0.008;

      blobsArray.forEach((blob, index) => {
        const speed = (index + 1) * 0.3;
        const x = moveX * speed;
        const y = moveY * speed;
        blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });

    // Cache blob elements
    if (!prefersReducedMotion && window.innerWidth >= 768) {
      blobsArray = Array.from(document.querySelectorAll('.morphing-blob'));
      if (blobsArray.length > 0) {
        window.addEventListener('mousemove', handleMouseMoveBlobs, { passive: true });
      }
    }

    // =============================
    // CLEANUP
    // =============================
    return () => {
      handleMouseMoveBlobs.cancel?.();
      window.removeEventListener('mousemove', handleMouseMoveBlobs);

      if (scrollObserverRef.current) {
        scrollObserverRef.current.disconnect();
      }
    };
  }, []);

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
