import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './SkillCategory.css';

const SkillCategory = ({ category, items }) => {
  return (
    <div>
      <h3 className="skill-category-heading">{category}</h3>
      <div className="skills-section-container">
        {items?.map((item, index) => (
          <SkillCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
