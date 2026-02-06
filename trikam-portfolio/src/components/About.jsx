import React from 'react'

function About() {
  return (
    <section id="about">
      <div className="section-title reveal-text">
        <h2>About Me</h2>
        <p>My background and skills</p>
      </div>

      <div className="about-content">
        <div className="about-text reveal-text">
          <p>
            I am a Full Stack Developer focused on building real, usable web
            applications — not just tutorials. I started with HTML and CSS and
            now work with modern tools like React, Next.js, Node.js, and
            MongoDB to ship complete experiences.
          </p>
          <p>
            I care about fast load times, clean architecture, and UIs that feel
            smooth even on low-end devices. Every project in this portfolio was
            designed, built, and deployed by me end‑to‑end.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
