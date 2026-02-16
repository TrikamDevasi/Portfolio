// src/components/Projects/components/ProjectGrid.jsx

import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

function ProjectGrid({ projects, viewMode, favorites, onFavorite, onProjectClick }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className={`project-grid ${viewMode}-view`} ref={ref}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-grid-item ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <ProjectCard
            project={project}
            viewMode={viewMode}
            isFavorite={favorites.includes(project.id)}
            onFavorite={onFavorite}
            onClick={onProjectClick}
          />
        </div>
      ))}
    </div>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewMode: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onFavorite: PropTypes.func.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

export default React.memo(ProjectGrid);
