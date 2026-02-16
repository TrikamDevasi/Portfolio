import React from 'react';
import PropTypes from 'prop-types';

const ScrollToTop = ({ onClick, isVisible }) => {
    if (!isVisible) return null;

    return (
        <button
            className="scroll-to-top"
            onClick={onClick}
            aria-label="Scroll to top"
            title="Back to top"
            type="button"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    );
};

ScrollToTop.propTypes = {
    onClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
};

export default ScrollToTop;
