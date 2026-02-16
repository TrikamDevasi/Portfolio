// src/components/Hero/index.jsx

import React, { useMemo, useCallback, useRef } from 'react';
import '../../styles/Hero/Hero.css';
import profilePic from '../../assets/portfoliopic.png';
import resumePdf from '../../assets/Trikam Devasi Resume.pdf';
import { heroMessages, techStack, achievements, liveActivities, stats } from '../../data/heroData';
import { HERO_CONFIG } from './utils/heroConfig';
import { Icons } from './utils/icons';
import { generateParticles } from './utils/particles';
import { useMouseTracking } from '../../hooks/useMouseTracking';
import { useParallax } from '../../hooks/useParallax';
import { useViewCounter } from './hooks/useViewCounter';
import { deviceDetector } from '../../utils/deviceDetector';
import { useHeroState } from './hooks/useHeroState';
import Typewriter from '../shared/Typewriter';
import StatusBar from './components/StatusBar';
import HeroButtons from './components/HeroButtons';
import TechStack from './components/TechStack';
import HeroStats from './components/HeroStats';
import Achievements from './components/Achievements';
import HeroInteractions from './components/HeroInteractions';
import ProfileCard from './components/ProfileCard';

function Hero() {
  // State
  const {
    showAchievements, setShowAchievements,
    activeAchievement, setActiveAchievement,
    likeCount, setLikeCount,
    isLiked, setIsLiked,
    showTechStack, setShowTechStack,
    showActivities, setShowActivities,
    copiedEmail, setCopiedEmail,
    isPaused, setIsPaused
  } = useHeroState();

  // Custom hooks
  const heroRef = useRef(null);

  // Premium Mouse Tracking
  const { elementX, elementY, isHovering } = useMouseTracking(heroRef);

  // Parallax Effect
  const { offset } = useParallax({ speed: 0.1 });

  const { viewCount } = useViewCounter();

  // Optimized Particles
  const particles = useMemo(() => {
    const count = deviceDetector.getRecommendedParticleCount();
    return generateParticles(count);
  }, []);

  // Handlers
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();

    const element = document.querySelector(targetId);
    if (!element) return;

    const headerOffset = HERO_CONFIG.SCROLL.HEADER_OFFSET;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  const handleLike = useCallback(() => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  }, [isLiked]);

  const handleAchievementClick = useCallback((achievement) => {
    if (!achievement.unlocked) return;

    setActiveAchievement(achievement);
    setTimeout(() => setActiveAchievement(null), HERO_CONFIG.TIMEOUTS.ACHIEVEMENT_TOAST);
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(HERO_CONFIG.CONTACT.EMAIL)
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), HERO_CONFIG.TIMEOUTS.EMAIL_COPIED);
      })
      .catch(err => console.error('Failed to copy email:', err));
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      {/* Background Layers */}
      {/* Background Layers */}
      <div
        className="hero-mesh"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
        aria-hidden="true"
      />
      <div
        className="hero-gradient-orb"
        style={{ transform: `translateY(${offset * 0.8}px)` }}
        aria-hidden="true"
      />

      {/* Mouse Cursor Glow — positioned via tracked coordinates */}
      <div
        className="hero-cursor-glow"
        style={{
          left: elementX,
          top: elementY,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Status Bar */}
      <StatusBar />

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-layout">
          {/* LEFT: Main Text */}
          <div className="hero-main">
            {/* Kicker */}
            <p className="hero-kicker">
              <span className="hero-kicker-icon" aria-hidden="true">⚡</span>
              Full‑stack developer
              <span className="hero-kicker-dot" aria-hidden="true">•</span>
              B.Tech CSE
              <span className="hero-kicker-badge">2025</span>
            </p>

            {/* Title */}
            <h1 className="hero-title" id="hero-title">
              <span className="hero-name-primary">Trikam</span>{' '}
              <span className="hero-name-secondary">Devasi</span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle">
              <span className="hero-subtitle-strong">
                <Icons.Code />
                I build fast, production‑ready web apps.
              </span>

              <div
                className="hero-subtitle-rotating"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                tabIndex={0}
                role="region"
                aria-label="Dynamic skills showcase"
              >
                <Typewriter
                  strings={heroMessages}
                  paused={isPaused}
                  typeSpeed={40}
                  backSpeed={25}
                  backDelay={2000}
                />
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="hero-highlights">
              <button
                className="hero-highlight-pill"
                onClick={() => setShowTechStack(prev => !prev)}
                aria-expanded={showTechStack}
                aria-label="Toggle technical skills"
                type="button"
              >
                <span className="pill-icon" aria-hidden="true">⚛️</span>
                React · Next.js
              </button>
              <span className="hero-highlight-pill">
                <span className="pill-icon" aria-hidden="true">📗</span>
                Node · Express · MongoDB
              </span>
              <span className="hero-highlight-pill hero-highlight-pill-special">
                <Icons.Zap />
                Perf‑first (Lighthouse ~92)
              </span>
            </div>

            {/* Tech Stack Progress Bars */}
            {showTechStack && (
              <TechStack techStack={techStack} />
            )}

            {/* Action Buttons */}
            <HeroButtons
              resumePdf={resumePdf}
              onSmoothScroll={handleSmoothScroll}
            />

            {/* Enhanced Stats */}
            <HeroStats stats={stats} viewCount={viewCount} />

            {/* Achievements */}
            <Achievements
              achievements={achievements}
              showAchievements={showAchievements}
              activeAchievement={activeAchievement}
              onToggle={() => setShowAchievements(prev => !prev)}
              onAchievementClick={handleAchievementClick}
            />

            {/* Interactions */}
            <HeroInteractions
              likeCount={likeCount}
              isLiked={isLiked}
              copiedEmail={copiedEmail}
              onLike={handleLike}
              onCopyEmail={handleCopyEmail}
            />

            {/* Scroll Cue */}
            <a
              className="hero-scrollcue"
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              aria-label="Scroll to projects section"
            >
              <span className="hero-scrollcue-line" aria-hidden="true" />
              <span className="hero-scrollcue-text">Scroll to explore</span>
            </a>
          </div>

          {/* RIGHT: Profile Card */}
          <ProfileCard
            profilePic={profilePic}
            liveActivities={liveActivities}
            showActivities={showActivities}
            onToggleActivities={() => setShowActivities(prev => !prev)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
