// src/components/About/JourneyTab.jsx

import React from 'react';
import { timeline } from '../../data/aboutData';

import PropTypes from 'prop-types';

function JourneyTab({ items = timeline }) {
  return (
    <div className="tab-content-wrapper fade-in">
      <div className="timeline">
        {items.map((item, index) => (
          <div
            key={item.year}
            className={`timeline-item timeline-${item.type}`}
            style={{ '--delay': `${index * 0.15}s` }}
          >
            <div className="timeline-marker">
              <span className="timeline-icon">{item.icon}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

JourneyTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default React.memo(JourneyTab);
