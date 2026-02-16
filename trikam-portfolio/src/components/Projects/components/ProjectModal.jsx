// src/components/Projects/components/ProjectModal.jsx

import React, { useEffect } from 'react';
import { ProjectIcons } from '../utils/projectIcons';
import ProjectMetrics from './ProjectMetrics';

function ProjectModal({ project, onClose, isFavorite, onFavorite }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <ProjectIcons.X />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <span className="modal-icon">{project.icon}</span>
          <div>
            <h2 id="modal-title">{project.title}</h2>
            <div className="modal-meta">
              <span className="project-type">{project.type}</span>
              <span className={`project-status status-${project.status}`}>
                {project.status === 'live' ? 'Live' : 'In Progress'}
              </span>
            </div>
          </div>
          <button
            className={`favorite-btn-large ${isFavorite ? 'active' : ''}`}
            onClick={() => onFavorite(project.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            type="button"
          >
            <ProjectIcons.Heart />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Description */}
          <section>
            <h3>About</h3>
            <p>{project.description}</p>
          </section>

          {/* Metrics */}
          {project.metrics && (
            <section>
              <h3>Key Metrics</h3>
              <ProjectMetrics metrics={project.metrics} />
            </section>
          )}

          {/* Tech Stack */}
          {project.tech && (
            <section>
              <h3>Technology Stack</h3>
              <div className="tech-stack-grid">
                {project.tech.frontend && (
                  <div className="tech-column">
                    <h4>Frontend</h4>
                    <ul>
                      {project.tech.frontend.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.tech.backend && (
                  <div className="tech-column">
                    <h4>Backend</h4>
                    <ul>
                      {project.tech.backend.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.tech.deployment && (
                  <div className="tech-column">
                    <h4>Deployment</h4>
                    <ul>
                      {project.tech.deployment.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Features */}
          {project.features && (
            <section>
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    <ProjectIcons.Check />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges & Solution */}
          {project.challenges && project.solution && (
            <section>
              <h3>Technical Challenges</h3>
              <div className="challenge-solution">
                <div className="challenge">
                  <h4>Challenge</h4>
                  <p>{project.challenges}</p>
                </div>
                <div className="solution">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              </div>
            </section>
          )}

          {/* Related Projects */}
          {project.relatedProjects && (
            <section>
              <h3>Related Projects</h3>
              <ul className="related-links">
                {project.relatedProjects.map((related, i) => (
                  <li key={i}>
                    <a
                      href={related.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {related.name}
                      <ProjectIcons.ExternalLink />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Timeline */}
          {project.timeline && (
            <section>
              <h3>Timeline</h3>
              <div className="timeline-info">
                <span>Started: {project.timeline.started}</span>
                {project.timeline.completed && (
                  <span>Completed: {project.timeline.completed}</span>
                )}
                <span>Duration: {project.timeline.duration}</span>
              </div>
            </section>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ProjectIcons.GitHub />
              View Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ProjectIcons.ExternalLink />
              Visit Live App
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    metrics: PropTypes.array,
    tech: PropTypes.shape({
      frontend: PropTypes.arrayOf(PropTypes.string),
      backend: PropTypes.arrayOf(PropTypes.string),
      deployment: PropTypes.arrayOf(PropTypes.string),
    }),
    features: PropTypes.arrayOf(PropTypes.string),
    challenges: PropTypes.string,
    solution: PropTypes.string,
    relatedProjects: PropTypes.arrayOf(PropTypes.object),
    timeline: PropTypes.shape({
      started: PropTypes.string,
      completed: PropTypes.string,
      duration: PropTypes.string,
    }),
    links: PropTypes.shape({
      github: PropTypes.string,
      live: PropTypes.string,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default React.memo(ProjectModal);
