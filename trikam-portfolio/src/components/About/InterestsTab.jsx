// src/components/About/InterestsTab.jsx

import React from 'react';
import { interests } from '../../data/aboutData';

import PropTypes from 'prop-types';

function InterestsTab({ items = interests }) {
  return (
    <div className="tab-content-wrapper fade-in">
      <div className="interests-grid">
        {items.map((interest, index) => (
          <div
            key={interest.name}
            className="interest-card"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <span className="interest-icon">{interest.icon}</span>
            <h4 className="interest-name">{interest.name}</h4>
            <p className="interest-description">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

InterestsTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default React.memo(InterestsTab);
