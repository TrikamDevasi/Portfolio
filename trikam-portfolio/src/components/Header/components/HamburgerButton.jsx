import React from 'react';
import PropTypes from 'prop-types';

const HamburgerButton = ({ isOpen, onClick }) => {
    return (
        <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={onClick}
            type="button"
        >
            <span />
            <span />
            <span />
        </button>
    );
};

HamburgerButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
