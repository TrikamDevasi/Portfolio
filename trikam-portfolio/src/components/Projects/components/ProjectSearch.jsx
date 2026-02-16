// src/components/Projects/components/ProjectSearch.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ProjectIcons } from '../utils/projectIcons';

function ProjectSearch({ searchQuery, setSearchQuery, resultCount }) {
  return (
    <div className="project-search">
      <div className="search-input-wrapper">
        <ProjectIcons.Search />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search projects"
        />
        {searchQuery && (
          <button
            className="search-clear"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
            type="button"
          >
            <ProjectIcons.X />
          </button>
        )}
      </div>
      {searchQuery && (
        <span className="search-results-count">
          {resultCount} {resultCount === 1 ? 'result' : 'results'}
        </span>
      )}
    </div>
  );
}

ProjectSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
};

export default React.memo(ProjectSearch);
