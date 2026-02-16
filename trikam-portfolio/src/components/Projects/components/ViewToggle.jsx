// src/components/Projects/components/ViewToggle.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ProjectIcons } from '../utils/projectIcons';

function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="view-toggle" role="group" aria-label="View mode">
      <button
        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => setViewMode('grid')}
        aria-label="Grid view"
        aria-pressed={viewMode === 'grid'}
        type="button"
      >
        <ProjectIcons.Grid />
      </button>
      <button
        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => setViewMode('list')}
        aria-label="List view"
        aria-pressed={viewMode === 'list'}
        type="button"
      >
        <ProjectIcons.List />
      </button>
    </div>
  );
}

ViewToggle.propTypes = {
  viewMode: PropTypes.oneOf(['grid', 'list']).isRequired,
  setViewMode: PropTypes.func.isRequired,
};

export default React.memo(ViewToggle);
