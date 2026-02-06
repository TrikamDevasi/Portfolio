import React from 'react'

function Certificates() {
  return (
    <section id="certificates">
      <div className="section-title">
        <h2>Certificates</h2>
        <p>Credentials that back my skills</p>
      </div>

      <div className="certs-grid reveal-text">
        <article className="cert-card">
          <h3>JavaScript (Intermediate)</h3>
          <p className="cert-org">HackerRank</p>
          <p className="cert-meta">
            Issued 2025 • Credential ID JSINT1234
          </p>
          <p className="cert-desc">
            Assessed on ES6, asynchronous programming, data structures, and
            problem‑solving in real coding challenges under time pressure.
          </p>
          <a
            href="https://horrible-moccasin-v8tubyve4i.edgeone.app/internship-cer.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            View certificate →
          </a>
        </article>

        <article className="cert-card">
          <h3>Frontend Web Development</h3>
          <p className="cert-org">Coursera / Meta</p>
          <p className="cert-meta">Issued 2025</p>
          <p className="cert-desc">
            Covered responsive layouts, accessibility, React fundamentals, and
            deploying production‑ready interfaces.
          </p>
          <a
            href="https://wet-fuchsia-fobz7i1sat.edgeone.app/c7064de1-2705-4741-af9b-fb5afcf4bd46.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            View certificate →
          </a>
        </article>

        <article className="cert-card">
          <h3>Backend with Node.js</h3>
          <p className="cert-org">Udemy</p>
          <p className="cert-meta">Issued 2025</p>
          <p className="cert-desc">
            Built REST APIs with Express, JWT auth, MongoDB models, and
            followed best practices for error handling and security basics.
          </p>
          <a
            href="https://wet-fuchsia-fobz7i1sat.edgeone.app/c7064de1-2705-4741-af9b-fb5afcf4bd46.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            View certificate →
          </a>
        </article>
      </div>
    </section>
  )
}

export default Certificates
