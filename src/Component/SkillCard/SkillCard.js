import React from 'react';
import './Skillcard.css';

const SkillCard = ({ item }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-img">
        <img src={item.src} alt={item.title} />
      </div>
      <div className="skill-card-content">
        <h3 className="skill-card-title">{item.title}</h3>
        <p className="skill-card-description">{item.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
