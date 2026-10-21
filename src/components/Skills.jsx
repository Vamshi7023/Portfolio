import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Check, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of languages, frameworks, developer tools, and core computer science concepts.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="skills-filter-bar">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-icon-wrap">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
