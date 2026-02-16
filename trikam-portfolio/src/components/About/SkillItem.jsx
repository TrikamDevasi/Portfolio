import React from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from '../../hooks/useCountUp';

const SkillItem = ({ skill, index, inView }) => {
    const percentage = useCountUp(skill.level, { duration: 1500 }, inView);

    return (
        <div
            className="skill-item"
            data-level={skill.category}
        >
            <div className="skill-item-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: inView ? `${skill.level}%` : '0%',
                        transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                        transitionDelay: `${index * 0.1}s` // Staggered bars
                    }}
                />
            </div>
        </div>
    );
};

SkillItem.propTypes = {
    skill: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
};

export default React.memo(SkillItem);
