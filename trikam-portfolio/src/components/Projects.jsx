import React from 'react'

function Projects() {
  return (
    <section id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
        <p>Recent work I've done</p>
      </div>

      <div className="projects-intro reveal-text">
        <p>
          A curated set of projects that reflect how I think about product,
          performance, and developer experience — from API-heavy apps to clean
          UI clones.
        </p>
      </div>

      <div className="projects-grid">
        {/* Project 1 – Cinephiles Watch */}
        <article className="project-card">
          <div className="project-image" />
          <div className="project-content">
            <h3>Cinephiles Watch</h3>
            <p>
              Built a movie discovery platform so users can quickly find what to
              watch next, powered by TMDB’s API for live data. Designed a
              search‑first UI with genre, rating, and year filters plus detail
              pages for each title. Implemented debounced search and skeleton
              loaders so browsing stays smooth even on slower networks.
            </p>
            <div className="project-metrics">
              <span className="metric-pill">Lighthouse Perf ~92</span>
              <span className="metric-pill">FCP ~1.1s on 4G</span>
            </div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">TMDB API</span>
              <span className="project-tag">Tailwind CSS</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/TrikamDevasi/cinephiles-watch-react.js-"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://trikamdevasi.github.io/cinephiles-watch-react.js-/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            <details className="project-details">
              <summary>Read how I built this</summary>
              <div className="project-details-body">
                <h4>Architecture &amp; key decisions</h4>
                <p>
                  Component‑based layout with reusable movie cards, a central
                  API layer for TMDB, and client‑side routing for detail views.
                  Debounced input avoids flooding the API while still feeling
                  instant.
                </p>
              </div>
            </details>
          </div>
        </article>

        {/* Project 2 – Expense Manager */}
        <article className="project-card">
          <div className="project-image" />
          <div className="project-content">
            <h3>Expense Manager</h3>
            <p>
              Developed a full‑stack expense tracker to replace messy
              spreadsheets for daily budgeting. Built a REST API with
              Node.js/Express and MongoDB, including authentication, categories,
              and per‑user data isolation. Deployed with a persistent database
              so users can securely log and review expenses across sessions in
              real time.
            </p>
            <div className="project-metrics">
              <span className="metric-pill">Protected API</span>
              <span className="metric-pill">Per‑user data isolation</span>
            </div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Express</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/expense-manager"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
            <details className="project-details">
              <summary>Read how I built this</summary>
              <div className="project-details-body">
                <h4>Architecture &amp; key decisions</h4>
                <p>
                  JWT‑based authentication, RESTful routes for CRUD on expenses,
                  and a MongoDB schema that keeps user data separated. The
                  frontend consumes the API via a simple data layer, making it
                  easy to swap or extend later.
                </p>
              </div>
            </details>
          </div>
        </article>

        {/* Project 3 – OLX Clone */}
        <article className="project-card">
          <div className="project-image" />
          <div className="project-content">
            <h3>OLX Clone</h3>
            <p>
              Recreated the core experience of OLX: browsing, searching, and
              viewing listings in a clean, responsive UI. Focused on layout,
              accessibility, and mobile‑first design using semantic HTML and
              modern CSS. This project shows I can match real‑world product
              flows and interaction patterns with attention to detail.
            </p>
            <div className="project-metrics">
              <span className="metric-pill">Mobile‑first layout</span>
              <span className="metric-pill">Keyboard‑friendly nav</span>
            </div>
            <div className="project-tags">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/olx-clone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
            <details className="project-details">
              <summary>Read how I built this</summary>
              <div className="project-details-body">
                <h4>Architecture &amp; key decisions</h4>
                <p>
                  Semantic sections for header, listings, and filters, with CSS
                  Grid and Flexbox for responsive layouts. Focused on accessible
                  color contrast and clear focus states so the UI is usable with
                  keyboard only.
                </p>
              </div>
            </details>
          </div>
        </article>

        {/* Project 4 – Game Hub / Multiplayer games */}
        <article className="project-card">
          <div className="project-image" />
          <div className="project-content">
            <h3>Game Hub – Multiplayer Games Collection</h3>
            <p>
              Built a game portal that aggregates multiple real‑time multiplayer
              games like Chess and Tic‑Tac‑Toe into one clean hub. Players can
              launch different games from a single interface and experience
              synchronized gameplay over the network.
            </p>
            <div className="project-metrics">
              <span className="metric-pill">Real‑time multiplayer</span>
              <span className="metric-pill">Multiple games in one hub</span>
            </div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">WebSockets</span>
              <span className="project-tag">Game Dev</span>
            </div>
            <div className="project-links">
              <a
                href="https://trikamdevasi.github.io/game-portal/"
                target="_blank"
                rel="noreferrer"
              >
                Live Game Hub
              </a>
              <a
                href="https://github.com/TrikamDevasi/game-portal"
                target="_blank"
                rel="noreferrer"
              >
                Hub GitHub
              </a>
            </div>

            <details className="project-details">
              <summary>View individual game repos</summary>
              <div className="project-details-body">
                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem' }}>
                  <li>
                    <a
                      href="https://github.com/TrikamDevasi/chess-multiplayer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chess Multiplayer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/TrikamDevasi/tictactoe_multiplayer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tic‑Tac‑Toe Multiplayer
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
