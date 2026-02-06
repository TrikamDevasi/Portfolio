import React from 'react'

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <span className="logo-mark">Trikam</span>
            <span className="logo-rest">Devasi</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certificates">CERTIFICATES</a></li>
          <li><a href="#case-study">CASE STUDY</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <div className="nav-right">
          <div className="theme-switcher">
            <button
              className="theme-toggle"
              aria-label="Change color theme"
            >
              ☾
            </button>
            <div className="theme-menu">
              <button
                className="theme-dot"
                data-theme="theme-tech-neon"
                title="Tech Neon"
              />
              <button
                className="theme-dot"
                data-theme="theme-emerald"
                title="Emerald Tech"
              />
              <button
                className="theme-dot"
                data-theme="theme-royal-purple"
                title="Royal Purple"
              />
              <button
                className="theme-dot"
                data-theme="theme-warm-sunset"
                title="Warm Sunset"
              />
            </div>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
