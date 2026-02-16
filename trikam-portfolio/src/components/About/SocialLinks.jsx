// src/components/About/SocialLinks.jsx

import React from 'react';
import { SocialIcons } from '../shared/SocialIcons';
import { socialLinks } from '../../data/aboutData';

import PropTypes from 'prop-types';

function SocialLinks({ links = socialLinks }) {
  return (
    <div className="about-social">
      <h3 className="about-social-title">
        <span className="about-social-icon">
          <SocialIcons.Code />
        </span>
        <span>Connect with me</span>
      </h3>

      <div className="about-social-grid">
        {links.map((link, index) => {
          const IconComponent = SocialIcons[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external !== false ? '_blank' : undefined}
              rel={link.external !== false ? 'noopener noreferrer' : undefined}
              className="social-link"
              aria-label={`${link.label} profile`}
              style={{
                '--link-color': link.color,
                '--animation-delay': `${index * 0.05}s`
              }}
            >
              <span className="social-link-icon">
                <IconComponent />
              </span>
              <div className="social-link-content">
                <span className="social-link-label">{link.label}</span>
                {link.username && (
                  <span className="social-link-username">{link.username}</span>
                )}
              </div>
              {link.external !== false && (
                <SocialIcons.ExternalLink />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      color: PropTypes.string,
      username: PropTypes.string,
      external: PropTypes.bool,
    })
  ),
};

export default React.memo(SocialLinks);
