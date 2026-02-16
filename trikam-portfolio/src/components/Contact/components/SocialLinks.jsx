// src/components/Contact/components/SocialLinks.jsx

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function SocialLinks({ socialLinks }) {
  return (
    <div className="social-section">
      <h3 className="social-heading">Connect With Me</h3>
      <p className="social-subtitle">
        Follow my journey, check out my code, and let's connect on social media
      </p>

      <div className="social-grid">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              data-platform={social.name.toLowerCase()}
              style={{ '--social-color': social.color, '--delay': `${index * 0.05}s` }}
              title={`Connect on ${social.name}`}
              aria-label={`Connect on ${social.name}`}
            >
              <div className="social-icon" style={{ color: social.color }}>
                <IconComponent className="icon-svg" />
              </div>
              <div className="social-details">
                <span className="social-name">{social.name}</span>
                <span className="social-username">{social.username}</span>
              </div>
              <div className="social-arrow">
                <FaArrowRight />
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h4 className="quick-links-title">Quick Links</h4>
        <div className="quick-links-grid">
          <a href="#about" className="quick-link">About Me</a>
          <a href="#projects" className="quick-link">Projects</a>
          <a href="#skills" className="quick-link">Skills</a>
          <a href="#certificates" className="quick-link">Certificates</a>
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(SocialLinks);
