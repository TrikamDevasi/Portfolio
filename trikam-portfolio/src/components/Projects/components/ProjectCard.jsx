// src/components/Projects/components/ProjectCard.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectIcons } from '../utils/projectIcons';
import ProjectMetrics from './ProjectMetrics';
import { use3dTilt } from '../../../hooks/use3dTilt';

function ProjectCard({ project, viewMode, isFavorite, onFavorite, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { style: tiltStyle, handleMouseMove, handleMouseLeave, handleMouseEnter } = use3dTilt({
    max: 10,
    speed: 400,
    scale: 1.02
  });

  const handleCardClick = (e) => {
    // Don't trigger if clicking on links or buttons
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return;
    }
    onClick(project);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onFavorite(project.id);
  };

  return (
    <article
      className={`project-card ${viewMode}-view ${project.featured ? 'featured' : ''}`}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleCardClick(e)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="featured-badge">
          <ProjectIcons.Star />
          <span>Featured</span>
        </div>
      )}

      {/* Favorite Button */}
      <button
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        type="button"
      >
        <ProjectIcons.Heart />
      </button>

      {/* Project Image */}
      <div className={`project-image ${!imageLoaded ? 'loading' : ''}`}>
        <span
          className="project-icon"
          role="img"
          aria-label={project.title}
        >
          {project.icon}
        </span>
        <div className="project-overlay">
          <span className="view-details">
            <ProjectIcons.Eye />
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Meta Row */}
        <div className="project-meta-row">
          <span className="project-type">{project.type}</span>
          <span className={`project-status status-${project.status}`}>
            {project.status === 'live' ? (
              <>
                <ProjectIcons.CheckCircle />
                Live
              </>
            ) : (
              <>
                <ProjectIcons.Clock />
                In Progress
              </>
            )}
          </span>
        </div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-description">
          {project.description}
        </p>

        {/* Metrics */}
        <ProjectMetrics metrics={project.metrics} />

        {/* Tags */}
        <div className="project-tags">
          {project.tags.slice(0, viewMode === 'list' ? 6 : 4).map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
          {project.tags.length > (viewMode === 'list' ? 6 : 4) && (
            <span className="project-tag more-tags">
              +{project.tags.length - (viewMode === 'list' ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="project-card-stats">
          <span className="stat-item" title="GitHub Stars">
            <ProjectIcons.Star />
            {project.stats.stars}
          </span>
          <span className="stat-item" title="Views">
            <ProjectIcons.Eye />
            {project.stats.views}
          </span>
          <span className="stat-item" title="Likes">
            <ProjectIcons.Heart />
            {project.stats.likes}
          </span>
        </div>

        {/* Links */}
        <div className="project-links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.title} code on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectIcons.GitHub />
              <span>Code</span>
            </a>
          )}
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
              aria-label={`Visit ${project.title} live app`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectIcons.ExternalLink />
              <span>Live App</span>
            </a>
          ) : (
            <span className="project-link disabled">
              <ProjectIcons.Clock />
              <span>Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node,
    featured: PropTypes.bool,
    type: PropTypes.string,
    status: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    metrics: PropTypes.object,
    stats: PropTypes.shape({
      stars: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
    links: PropTypes.shape({
      github: PropTypes.string,
      live: PropTypes.string,
    }),
  }).isRequired,
  viewMode: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(ProjectCard);
