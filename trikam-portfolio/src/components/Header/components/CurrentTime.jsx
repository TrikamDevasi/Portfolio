import React from 'react';
import PropTypes from 'prop-types';

const CurrentTime = ({ time }) => {
    return (
        <div className="current-time" aria-label="Current local time">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{time}</span>
        </div>
    );
};

CurrentTime.propTypes = {
    time: PropTypes.string.isRequired,
};

export default CurrentTime;
