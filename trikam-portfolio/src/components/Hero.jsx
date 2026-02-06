import React, { useEffect, useState } from 'react'

const heroRoles = [
  'Built & deployed 5+ full‑stack projects',
  'React & Next.js for production UIs',
  'API‑driven apps with Node & MongoDB',
  'Performance‑minded frontend engineer',
]

function Hero() {
  const [index, setIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out')
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroRoles.length)
        setAnimationClass('fade-in')
        setTimeout(() => setAnimationClass(''), 400)
      }, 300)
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="morphing-blob blob-1" />
      <div className="morphing-blob blob-2" />
      <div className="morphing-blob blob-3" />

      <div className="hero-content">
        <div className="hero-layout">
          <div className="hero-main">
            <h1
              className="glitch hero-title"
              data-text="Trikam Devasi"
            >
              <span className="hero-name-primary">Trikam</span>
              <span className="hero-name-secondary">Devasi</span>
            </h1>

            <p className="hero-subtitle">
              <span className="hero-subtitle-static">
                Full Stack Developer • B.Tech CSE •
              </span>
              <span
                className={`hero-subtitle-rotating ${animationClass}`}
              >
                {heroRoles[index]}
              </span>
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-profile-card">
            <div className="profile-image-ring">
              <div className="profile-image-inner">
                <img
                  src="https://aggregate-silver-ykhnbggbyn.edgeone.app/WhatsApp%20Image%202026-02-03%20at%2016.04.55.jpeg"
                  alt="Trikam Devasi profile"
                  className="profile-image"
                  loading="eager"
                />
              </div>
            </div>
            <div className="hero-profile-meta">
              <p className="hero-profile-name">TRIKAM DEVASI</p>
              <p className="hero-profile-role">FULL STACK DEVELOPER</p>
              <p className="hero-profile-tagline">
                Building fast, modern web apps with React, Next.js &amp; Node.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
