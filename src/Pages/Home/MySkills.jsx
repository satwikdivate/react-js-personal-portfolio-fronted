import React from 'react';
import data from '../../data/index.json';
import SkillCategory from '../../Component/Skills/SkillCategory';
import './MySkills.css';

const MySkills = () => {
  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio-container">
        <h1>My Skills</h1>

      <SkillCategory category="Programming Languages" items={data?.skills} />
        
      </div>

      {/* Web Development */}
      <SkillCategory category="Web Development" items={data?.Web} />

      {/* Databases */}
      <SkillCategory category="Databases" items={data?.databases} />
    </section>
  );
};

export default MySkills;
