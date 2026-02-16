// src/components/Projects/components/ProjectFilters.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { projectCategories, projectStatuses, sortOptions } from '../../../data/projectsData';
import { ProjectIcons } from '../utils/projectIcons';

function ProjectFilters({ filters, setFilter, clearFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = filters.category !== 'all' || filters.status !== 'all' || filters.sort !== 'featured';

  return (
    <div className="project-filters">
      <button
        className={`filters-toggle ${hasActiveFilters ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle filters"
        type="button"
      >
        <ProjectIcons.Filter />
        <span>Filters</span>
        {hasActiveFilters && <span className="filter-count">●</span>}
      </button>

      {isOpen && (
        <div className="filters-dropdown">
          <div className="filters-header">
            <h4>Filters</h4>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="btn-clear" type="button">
                Clear all
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="filter-options">
              {projectCategories.map(cat => (
                <button
                  key={cat.value}
                  className={`filter-option ${filters.category === cat.value ? 'active' : ''}`}
                  onClick={() => setFilter('category', cat.value)}
                  type="button"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <div className="filter-options">
              {projectStatuses.map(status => (
                <button
                  key={status.value}
                  className={`filter-option ${filters.status === status.value ? 'active' : ''}`}
                  onClick={() => setFilter('status', status.value)}
                  type="button"
                >
                  <span>{status.icon}</span>
                  <span>{status.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={filters.sort}
              onChange={(e) => setFilter('sort', e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

ProjectFilters.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default React.memo(ProjectFilters);
