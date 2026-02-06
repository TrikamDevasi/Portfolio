import React from 'react'

function CaseStudy() {
  return (
    <section id="case-study" className="case-study">
      <div className="section-title">
        <h2>Featured Case Study</h2>
        <p>How I approach real‑world problems</p>
      </div>

      <div className="case-study-body">
        <div className="case-meta">
          <h3>Cinephiles Watch – Movie Discovery App</h3>
          <p>
            <strong>Role:</strong> Solo developer
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <strong>Stack:</strong> React, TMDB API, Tailwind CSS
          </p>
        </div>

        <div className="case-block">
          <h4>The problem</h4>
          <p>
            People waste time scrolling multiple sites to decide what to watch.
            I wanted a single, fast interface that surfaces relevant movies with
            useful details instead of endless lists.
          </p>
        </div>

        <div className="case-block">
          <h4>My approach</h4>
          <p>
            I integrated TMDB’s API for live movie data, then designed a
            search‑first UI with filters for genre, rating, and release year. On
            the technical side, I implemented debounced search, client‑side
            routing, and skeleton loading states to keep perceived performance
            high.
          </p>
        </div>

        <div className="case-block">
          <h4>Results &amp; performance</h4>
          <p>
            Lighthouse scores: Performance ~92, Accessibility ~96, Best
            Practices 100, SEO ~98 on typical 4G tests. First contentful paint
            is around 1.1s with interactivity under 2s.
          </p>
        </div>

        <div className="case-block">
          <h4>What I learned</h4>
          <p>
            This project improved my API integration skills, error‑handling
            patterns, and UX around loading states. It also taught me how to
            structure components so I can reuse cards and layouts across
            sections without duplication.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
