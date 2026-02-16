import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

const SkillCategory = ({ category, index, inView }) => {
    return (
        <div
            className="skill-category"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${index * 0.1}s`
            }}
        >
            <div className="skill-category-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span className="skill-category-icon">{category.icon}</span>
                    <h4 className="skill-category-title">{category.title}</h4>
                </div>
                <span className="skill-category-count">{category.skills.length}</span>
            </div>

            <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                        inView={inView}
                    />
                ))}
            </div>
        </div>
    );
};

SkillCategory.propTypes = {
    category: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        skills: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
};

export default React.memo(SkillCategory);
