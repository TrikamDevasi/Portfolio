// src/components/Footer/components/FooterBottom.jsx

import React from 'react';

function FooterBottom({ currentYear, legalLinks, lastUpdated, deploymentPlatform }) {
  return (
    <>
      {/* Divider */}
      <div className="footer-divider" role="separator"></div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          {/* Copyright */}
          <div className="footer-copyright">
            <p>
              © {currentYear} <strong>Trikam Devasi</strong>. All rights reserved.
            </p>
            <p className="copyright-note">
              Built with <span className="heart" aria-label="love">❤️</span> using React, Node.js, and modern web technologies.
            </p>
          </div>

          {/* Legal Links */}
          <nav className="footer-legal" aria-label="Legal">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a href={link.href} className="legal-link">
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="separator" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Extra Info */}
          <div className="footer-extra">
            <span className="extra-badge">
              <span className="badge-icon" aria-hidden="true">🚀</span>
              Deployed on {deploymentPlatform}
            </span>
            <span className="extra-badge">
              <span className="badge-icon" aria-hidden="true">⚡</span>
              Last updated: {lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

import PropTypes from 'prop-types';

FooterBottom.propTypes = {
  currentYear: PropTypes.number.isRequired,
  legalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  lastUpdated: PropTypes.string.isRequired,
  deploymentPlatform: PropTypes.string.isRequired,
};

export default React.memo(FooterBottom);
