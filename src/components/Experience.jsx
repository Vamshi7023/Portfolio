import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">
            Professional <span className="gradient-text-gold">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated engineering impact in enterprise backend pipelines and production web platforms.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card-wrapper">
              <div className="timeline-marker"></div>

              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div className="exp-role-group">
                    <div className="exp-company-row">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="exp-logo" />
                      ) : (
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '8px',
                            background: 'var(--accent-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            color: '#0b0f19',
                            fontSize: '1rem'
                          }}
                        >
                          {exp.company.charAt(0)}
                        </div>
                      )}
                      <h3 className="exp-company">{exp.company}</h3>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--text-muted)' }}
                          title="Visit Website"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                    <h4 className="exp-role">{exp.role}</h4>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-badge">{exp.badge}</span>
                    <span className="exp-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />
                      {exp.period}
                    </span>
                    <span className="exp-period">
                      <MapPin size={13} style={{ display: 'inline', marginRight: 4 }} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="exp-points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="exp-point">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Row */}
                <div className="exp-tech-row">
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.25rem' }}>
                    Technologies:
                  </span>
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
