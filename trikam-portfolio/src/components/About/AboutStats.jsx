import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import { stats } from '../../data/aboutData';

import StatCard from './StatCard';

function AboutStats() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="about-stats" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            stat={stat}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(AboutStats);
