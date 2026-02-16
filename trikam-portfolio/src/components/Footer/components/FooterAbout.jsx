// src/components/Footer/components/FooterAbout.jsx

import React from 'react';

function FooterAbout({ description, techStack }) {
  return (
    <div className="footer-column footer-about">
      <h3 className="footer-logo">
        <span className="logo-icon">TD</span>
        Trikam Devasi
      </h3>
      <p className="footer-description">
        {description}
      </p>

      {/* Status Indicators */}
      <div className="footer-status">
        <div className="status-item">
          <span className="status-dot status-online" aria-label="Online"></span>
          <span className="status-text">Available for work</span>
        </div>
        <div className="status-item">
          <span className="status-icon" aria-hidden="true">⚡</span>
          <span className="status-text">Usually responds in 24h</span>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="footer-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

FooterAbout.propTypes = {
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(FooterAbout);
