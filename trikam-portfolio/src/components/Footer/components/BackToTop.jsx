// src/components/Footer/components/BackToTop.jsx

import React from 'react';

function BackToTop({ isVisible, onClick }) {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="back-to-top"
      aria-label="Back to top"
      title="Scroll to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

import PropTypes from 'prop-types';

BackToTop.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(BackToTop);
