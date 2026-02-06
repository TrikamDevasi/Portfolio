import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Let’s work together</p>
      </div>

      <div className="contact-content">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value
            alert(`Thank you, ${name}! I will get back to you soon.`)
            form.reset()
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Project Inquiry"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Hello, I'd like to discuss a project..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Send Message
          </button>
        </form>

        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
