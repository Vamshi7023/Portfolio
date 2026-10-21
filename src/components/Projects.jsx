import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

const categories = ['All', 'Full Stack', 'Backend & API', 'React App', 'AI & IoT'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'Full Stack' && project.category === 'Full Stack') ||
        (activeCategory === 'Backend & API' && project.category === 'Backend & API') ||
        (activeCategory === 'React App' && (project.category === 'React App' || project.category === 'Frontend')) ||
        (activeCategory === 'AI & IoT' && (project.category === 'AI & Deep Learning' || project.category === 'IoT & Hardware'));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Full-stack platforms, microservices architectures, AI computer vision, and IoT assistive technology.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="projects-controls">
          <div className="skills-filter-bar" style={{ marginBottom: 0 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-search-box">
            <Search size={17} className="search-icon" />
            <input
              type="text"
              placeholder="Search by keyword, tech, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="project-search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="glass-card project-card">
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    // Fallback visual if an image path fails to load
                    e.currentTarget.src = '/images/Portfolio.png';
                  }}
                />
                <div className="project-overlay"></div>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tagline">{project.tagline}</div>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="project-highlight-item">
                        <span className="highlight-dot">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-tags-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No projects match your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-outline btn-sm"
              style={{ marginTop: '0.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
