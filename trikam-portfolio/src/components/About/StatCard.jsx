import React from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from '../../hooks/useCountUp';

const StatCard = ({ stat, index, inView }) => {
    const count = useCountUp(stat.value, { duration: 2000 }, inView);

    return (
        <div
            className="stat-card"
            style={{
                '--delay': `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: `${index * 0.1}s`
            }}
        >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
                {count}
                <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
        </div>
    );
};

StatCard.propTypes = {
    stat: PropTypes.shape({
        value: PropTypes.number.isRequired,
        icon: PropTypes.node.isRequired,
        suffix: PropTypes.string,
        label: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
};

export default StatCard;
