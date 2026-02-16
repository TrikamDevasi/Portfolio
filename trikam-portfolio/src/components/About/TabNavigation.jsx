// src/components/About/TabNavigation.jsx

import React from 'react';
import PropTypes from 'prop-types';

function TabNavigation({ activeTab, onChange }) {
  const tabs = [
    { id: 'bio', label: 'Bio', icon: '👨‍💻' },
    { id: 'journey', label: 'Journey', icon: '🚀' },
    { id: 'interests', label: 'Interests', icon: '✨' },
  ];

  return (
    <div className="about-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`about-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
          aria-label={`View ${tab.label}`}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

TabNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(TabNavigation);
