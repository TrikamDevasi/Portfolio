// src/components/Footer/components/FooterNewsletter.jsx

import React from 'react';
import FooterSocial from './FooterSocial';

function FooterNewsletter({
  email,
  setEmail,
  isSubscribed,
  handleSubscribe,
  socialLinks
}) {
  return (
    <div className="footer-column footer-newsletter">
      <h4 className="footer-heading">Stay Updated</h4>
      <p className="newsletter-description">
        Get the latest updates on new projects and tech insights.
      </p>

      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <div className="input-group">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
            disabled={isSubscribed}
            aria-describedby={isSubscribed ? "subscription-success" : undefined}
          />
          <button
            type="submit"
            className="newsletter-button"
            disabled={isSubscribed}
            aria-label={isSubscribed ? "Subscribed successfully" : "Subscribe to newsletter"}
          >
            {isSubscribed ? (
              <>
                <span className="button-icon" aria-hidden="true">✓</span>
                Subscribed!
              </>
            ) : (
              <>
                <span className="button-icon" aria-hidden="true">→</span>
                Subscribe
              </>
            )}
          </button>
        </div>
      </form>

      {isSubscribed && (
        <p id="subscription-success" className="success-message" role="status">
          🎉 Thanks for subscribing! Check your inbox.
        </p>
      )}

      {/* Social Links */}
      <FooterSocial socialLinks={socialLinks} />
    </div>
  );
}

import PropTypes from 'prop-types';

FooterNewsletter.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  handleSubscribe: PropTypes.func.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(FooterNewsletter);
