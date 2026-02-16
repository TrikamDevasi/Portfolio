// src/components/Contact/components/ContactInfoCards.jsx

import React, { useState } from 'react';

function ContactInfoCards({ contactInfo }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('trikam.devasi.cg@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <div className="contact-info-grid">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        return (
          <div
            key={index}
            className="contact-info-card"
            style={{ '--card-color': info.color, '--delay': `${index * 0.1}s` }}
            onClick={info.copyable ? copyEmailToClipboard : undefined}
            role={info.copyable ? 'button' : undefined}
            tabIndex={info.copyable ? 0 : undefined}
            aria-label={info.copyable ? 'Copy email to clipboard' : undefined}
          >
            <div className="info-icon" style={{ color: info.color }}>
              <IconComponent className="icon-svg" />
            </div>
            <div className="info-content">
              <h3 className="info-title">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="info-value" style={{ color: info.color }}>
                  {info.value}
                </a>
              ) : (
                <p className="info-value">{info.value}</p>
              )}
              {info.copyable && (
                <span className="copy-hint">
                  {copiedEmail ? '✓ Copied!' : 'Click to copy'}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import PropTypes from 'prop-types';

ContactInfoCards.propTypes = {
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      link: PropTypes.string,
      color: PropTypes.string,
      copyable: PropTypes.bool,
    })
  ).isRequired,
};

export default React.memo(ContactInfoCards);
