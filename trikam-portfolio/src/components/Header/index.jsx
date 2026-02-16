// src/components/Header/index.jsx

import React, { useState, useCallback, useMemo } from 'react';
import '../../styles/Header/Header.css';
import { themes, navLinks } from '../../data/headerData';
import { useScrollState } from '../../hooks/useScrollState';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useGreeting } from './hooks/useGreeting';
import { useAudioFeedback } from './hooks/useAudioFeedback';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { navigateToSection } from './utils/navigation';
import ScrollProgress from './components/ScrollProgress';
import StatusIndicators from './components/StatusIndicators';
import HeaderNav from './components/HeaderNav';
import ThemeSwitcher from './components/ThemeSwitcher';
import MobileMenu from './components/MobileMenu';
import SearchModal from './components/SearchModal';
import ShortcutsModal from './components/ShortcutsModal';
import ScrollToTop from './components/ScrollToTop';
import HamburgerButton from './components/HamburgerButton';
import CurrentTime from './components/CurrentTime';

function Header() {
  // Menu state
  const [menuState, setMenuState] = useState({
    mobile: false,
    theme: false,
    search: false,
    shortcuts: false,
  });

  // Custom hooks
  const scrollState = useScrollState();
  const activeSectionId = useActiveSection(useMemo(() => navLinks.map(l => l.href.substring(1)), []));
  const activeSection = activeSectionId ? `#${activeSectionId}` : '';
  const { playSound } = useAudioFeedback();
  const { activeTheme, applyTheme } = useTheme(playSound);
  const isOnline = useOnlineStatus();
  const { greeting, currentTime } = useGreeting();

  // Close all menus
  const closeAllMenus = useCallback(() => {
    setMenuState({ mobile: false, theme: false, search: false, shortcuts: false });
  }, []);

  // Navigation handler
  const handleNavClick = useCallback((e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    closeAllMenus();
    navigateToSection(href, playSound);
  }, [closeAllMenus, playSound]);

  // Theme change handler
  const handleThemeChange = useCallback((themeId) => {
    applyTheme(themeId);
    setMenuState(prev => ({ ...prev, theme: false }));
  }, [applyTheme]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playSound('click');
  }, [playSound]);

  // Keyboard shortcuts handlers
  const keyboardHandlers = useMemo(() => ({
    openSearch: () => setMenuState(prev => ({ ...prev, search: true })),
    openShortcuts: () => setMenuState(prev => ({ ...prev, shortcuts: true })),
    toggleTheme: () => setMenuState(prev => ({ ...prev, theme: !prev.theme })),
    toggleMobile: () => setMenuState(prev => ({ ...prev, mobile: !prev.mobile })),
    closeAll: closeAllMenus,
    navigate: (href) => {
      closeAllMenus();
      navigateToSection(href, playSound);
    }
  }), [closeAllMenus, playSound]);

  // Use keyboard shortcuts
  useKeyboardShortcuts(keyboardHandlers, menuState.search);

  // Current theme info
  const currentTheme = useMemo(() =>
    themes.find(t => t.id === activeTheme),
    [activeTheme]
  );

  // Formatted time
  const formattedTime = useMemo(() =>
    currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }),
    [currentTime]
  );

  return (
    <>
      {/* Main Header */}
      <header
        className={`
          ${scrollState.isScrolled ? 'header-shrink' : ''} 
          ${!scrollState.isVisible ? 'header-hidden' : ''}
        `}
        role="banner"
      >
        {/* Scroll Progress Bar */}
        <ScrollProgress progress={scrollState.progress} />

        <nav aria-label="Main navigation">
          {/* Left Side - Logo & Status */}
          <div className="nav-left">
            <a
              href="#home"
              className="logo"
              aria-label="Trikam Devasi - Go to top of page"
              onClick={handleNavClick}
            >
              <span className="logo-icon">TD</span>
              <div className="logo-text">
                <span className="logo-mark">Trikam</span>
                <span className="logo-rest">Devasi</span>
              </div>
            </a>

            <StatusIndicators isOnline={isOnline} greeting={greeting} />
          </div>

          {/* Center - Navigation Links */}
          <HeaderNav
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          {/* Right Side - Actions */}
          <div className="nav-right">
            {/* Current Time */}
            <CurrentTime time={formattedTime} />

            {/* Search Button */}
            <button
              className="action-button search-button"
              onClick={() => setMenuState(prev => ({ ...prev, search: true }))}
              aria-label="Open search"
              title="Search (Ctrl+K)"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Theme Switcher - ONLY ONE */}
            <ThemeSwitcher
              isOpen={menuState.theme}
              currentTheme={currentTheme}
              activeTheme={activeTheme}
              onToggle={() => setMenuState(prev => ({ ...prev, theme: !prev.theme }))}
              onThemeChange={handleThemeChange}
              onClose={() => setMenuState(prev => ({ ...prev, theme: false }))}
            />

            {/* Keyboard Shortcuts Button */}
            <button
              className="action-button shortcuts-button"
              onClick={() => setMenuState(prev => ({ ...prev, shortcuts: true }))}
              aria-label="View keyboard shortcuts"
              title="Keyboard Shortcuts (Ctrl+/)"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10" />
              </svg>
            </button>

            {/* Hamburger Menu */}
            <HamburgerButton
              isOpen={menuState.mobile}
              onClick={() => setMenuState(prev => ({ ...prev, mobile: !prev.mobile }))}
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuState.mobile && (
          <MobileMenu
            activeSection={activeSection}
            greeting={greeting}
            isOnline={isOnline}
            onClose={() => setMenuState(prev => ({ ...prev, mobile: false }))}
            onNavClick={handleNavClick}
          />
        )}
      </header>

      {/* Search Modal */}
      {menuState.search && (
        <SearchModal
          onClose={() => setMenuState(prev => ({ ...prev, search: false }))}
          onNavClick={handleNavClick}
        />
      )}

      {/* Keyboard Shortcuts Modal */}
      {menuState.shortcuts && (
        <ShortcutsModal
          onClose={() => setMenuState(prev => ({ ...prev, shortcuts: false }))}
        />
      )}

      {/* Scroll to Top Button */}
      <ScrollToTop
        onClick={scrollToTop}
        isVisible={scrollState.isScrolled}
      />
    </>
  );
}

export default Header;
