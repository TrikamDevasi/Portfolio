import React from 'react';
import { SocialIcons } from '../shared/SocialIcons';
import { skillCategories } from '../../data/aboutData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';


import SkillCategory from './SkillCategory';

function SkillsSection() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="about-skills" ref={ref}>
      <div className="skills-header">
        <SocialIcons.Sparkles />
        <h3>Technical Skills</h3>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <SkillCategory
            key={category.title}
            category={category}
            index={catIndex}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(SkillsSection);
