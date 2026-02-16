// src/components/Footer/components/FooterColumn.jsx

import React from 'react';

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4 className="footer-heading">{title}</h4>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="footer-link"
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.name}
            >
              <span className="link-arrow" aria-hidden="true">→</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import PropTypes from 'prop-types';

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(FooterColumn);
