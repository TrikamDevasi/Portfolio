// src/components/Projects/components/ProjectMetrics.jsx

import React from 'react';

function ProjectMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="project-metrics">
      {metrics.map((metric, index) => (
        <span
          key={index}
          className="metric-pill"
          style={{ '--metric-color': metric.color }}
        >
          <span className="metric-label">{metric.label}:</span>
          <span className="metric-value">{metric.value}</span>
        </span>
      ))}
    </div>
  );
}

import PropTypes from 'prop-types';

ProjectMetrics.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      color: PropTypes.string,
    })
  ),
};

export default React.memo(ProjectMetrics);
