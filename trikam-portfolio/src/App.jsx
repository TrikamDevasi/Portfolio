import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'

function App() {
  useEffect(() => {
    // Header background + shrink + scroll progress
    function handleScroll() {
      const header = document.querySelector('header')
      if (header) {
        const scrolled = window.scrollY || window.pageYOffset

        if (scrolled > 100) {
          header.style.background = 'rgba(10, 10, 10, 0.95)'
        } else {
          header.style.background = 'rgba(10, 10, 10, 0.6)'
        }

        if (scrolled > 40) {
          header.classList.add('header-shrink')
        } else {
          header.classList.remove('header-shrink')
        }
      }

      const winScroll = document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0
      const bar = document.querySelector('.scroll-progress')
      if (bar) bar.style.width = scrolledPercent + '%'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // IntersectionObserver animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px',
    }

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      observerOptions,
    )

    const revealEls = document.querySelectorAll(
      '.reveal-text, .scale-on-scroll, .zoom-wrapper',
    )
    revealEls.forEach((el) => scrollObserver.observe(el))

    const skillCats = document.querySelectorAll('.skill-category')
    skillCats.forEach((category) => {
      const tags = category.querySelectorAll('.skill-tag')
      tags.forEach((tag) => {
        tag.classList.add('stagger-item')
        scrollObserver.observe(tag)
      })
    })

    const projectCertCards = document.querySelectorAll(
      '.project-card, .cert-card',
    )
    projectCertCards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.1}s`)
      scrollObserver.observe(card)
    })

    // Parallax blobs
    function handleMouseMove(e) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
      document
        .querySelectorAll('.morphing-blob')
        .forEach((blob, index) => {
          const speed = (index + 1) * 0.5
          blob.style.transform = `translate(${
            moveX * speed
          }px, ${moveY * speed}px)`
        })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // THEME SWITCHER
    const themeToggle = document.querySelector('.theme-toggle')
    const themeDots = document.querySelectorAll('.theme-dot')
    const AVAILABLE_THEMES = [
      'theme-tech-neon',
      'theme-emerald',
      'theme-royal-purple',
      'theme-warm-sunset',
    ]

    function setActiveDot(theme) {
      themeDots.forEach((d) => d.classList.remove('active'))
      const active = document.querySelector(
        `.theme-dot[data-theme="${theme}"]`,
      )
      if (active) active.classList.add('active')
    }

    let savedTheme = localStorage.getItem('portfolio-theme')
    if (!AVAILABLE_THEMES.includes(savedTheme)) {
      savedTheme = 'theme-tech-neon'
    }
    document.body.classList.add(savedTheme)
    setActiveDot(savedTheme)

    const handleThemeToggleClick = () => {
      if (themeToggle && themeToggle.parentElement) {
        themeToggle.parentElement.classList.toggle('open')
      }
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', handleThemeToggleClick)
    }

    const handleDocClick = (e) => {
      if (
        themeToggle &&
        themeToggle.parentElement &&
        !themeToggle.parentElement.contains(e.target)
      ) {
        themeToggle.parentElement.classList.remove('open')
      }
    }

    document.addEventListener('click', handleDocClick)

    const handleThemeDotClick = (e) => {
      const dot = e.currentTarget
      const theme = dot.getAttribute('data-theme')
      if (!theme) return
      document.body.classList.remove(...AVAILABLE_THEMES)
      document.body.classList.add(theme)
      localStorage.setItem('portfolio-theme', theme)
      setActiveDot(theme)
    }

    themeDots.forEach((dot) =>
      dot.addEventListener('click', handleThemeDotClick),
    )

    // HAMBURGER
    const hamburger = document.querySelector('.hamburger')
    const handleHamburgerClick = () => {
      if (!hamburger) return
      const isOpen = document.body.classList.toggle('nav-open')
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    }

    if (hamburger) {
      hamburger.addEventListener('click', handleHamburgerClick)
    }

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      scrollObserver.disconnect()
      if (themeToggle) {
        themeToggle.removeEventListener(
          'click',
          handleThemeToggleClick,
        )
      }
      document.removeEventListener('click', handleDocClick)
      themeDots.forEach((dot) =>
        dot.removeEventListener('click', handleThemeDotClick),
      )
      if (hamburger) {
        hamburger.removeEventListener('click', handleHamburgerClick)
      }
    }
  }, [])

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <div className="scroll-progress" />

      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <CaseStudy />
      <Contact />
      <Footer />
    </>
  )
}

export default App
