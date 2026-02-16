// src/components/Projects/components/ProjectStats.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ProjectIcons } from '../utils/projectIcons';

function ProjectStats({ stats }) {
  return (
    <div className="projects-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <ProjectIcons.Briefcase />
        </div>
        <div className="stat-content">
          <span className="stat-value">{stats.total}</span>
          <span className="stat-label">Total Projects</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <ProjectIcons.CheckCircle />
        </div>
        <div className="stat-content">
          <span className="stat-value">{stats.live}</span>
          <span className="stat-label">Live Apps</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <ProjectIcons.Code />
        </div>
        <div className="stat-content">
          <span className="stat-value">{stats.technologies}</span>
          <span className="stat-label">Technologies</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <ProjectIcons.Star />
        </div>
        <div className="stat-content">
          <span className="stat-value">{stats.featured}</span>
          <span className="stat-label">Featured</span>
        </div>
      </div>
    </div>
  );
}

ProjectStats.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    live: PropTypes.number.isRequired,
    technologies: PropTypes.number.isRequired,
    featured: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(ProjectStats);
