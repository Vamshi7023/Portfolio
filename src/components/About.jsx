import React from 'react';
import {
  GraduationCap,
  Download,
  Code,
  Layers,
  Cloud,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, educationList } from '../data/portfolioData';
import { useResume } from '../context/ResumeContext';

export default function About() {
  const { resumeUrl } = useResume();
  const pillars = [
    {
      icon: <Layers size={22} />,
      title: 'Full-Stack Architecture',
      desc: 'Building responsive React interfaces backed by robust Node.js and Express REST services.'
    },
    {
      icon: <Cloud size={22} />,
      title: 'Cloud & CI/CD Pipelines',
      desc: 'Designing automated YAML pipelines on Azure DevOps and scalable deployments on AWS EC2 & RDS.'
    },
    {
      icon: <Code size={22} />,
      title: 'Algorithmic Problem Solving',
      desc: '500+ solved problems on LeetCode covering graph algorithms, dynamic programming, and system design.'
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: 'Enterprise Localization',
      desc: 'Processed and validated dynamic content transformations across 14 languages at Danfoss.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Engineering Scalable Software & <span className="gradient-text">Reliable Systems</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my background, engineering philosophy, and academic foundation.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Image & Quick Links */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src="/images/about-pic.png"
                alt="TK Vamshi Krishna"
                className="about-image"
              />
              <div className="about-image-badge">
                <GraduationCap size={28} style={{ color: 'var(--accent-secondary)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                    VIT M.Tech CSE (Core)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    CGPA 8.70 • Class of 2026
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={resumeUrl}
                download="TK_Vamshi_Krishna_Resume.pdf"
                className="btn btn-primary"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Code size={16} />
                <span>Coding Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="about-content">
            <p className="about-narrative">
              I am an engineering graduate from <strong>Vellore Institute of Technology (VIT)</strong>,
              specializing in Integrated M.Tech Computer Science & Engineering. With direct industry experience as a
              <strong> Software Engineer Intern at Danfoss</strong> and <strong>Web Developer at ItJobXS</strong>,
              I have engineered mission-critical Node.js services, handled multi-lingual data normalization pipelines,
              and enhanced web platform security against malicious bots.
            </p>

            <p className="about-narrative">
              I bring a disciplined, structured approach to writing clean, maintainable, and well-tested code.
              Whether implementing sub-millisecond Redis caching, configuring end-to-end CI/CD build workflows in
              Azure DevOps, or optimizing React components for 35% faster data fetch times, I focus on measurable impact
              and engineering excellence.
            </p>

            {/* Core Pillars Grid */}
            <div className="about-pillars">
              {pillars.map((pillar, i) => (
                <div key={i} className="glass-card pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Accordion / Cards */}
            <div>
              <h3 className="education-section-title">
                <GraduationCap size={22} style={{ color: 'var(--accent-secondary)' }} />
                <span>Education Background</span>
              </h3>

              <div className="education-timeline" style={{ marginTop: '1rem' }}>
                {educationList.map((edu, idx) => (
                  <div key={idx} className="glass-card edu-card">
                    <div className="edu-info">
                      <div className="edu-institution">{edu.institution}</div>
                      <div className="edu-degree">{edu.degree}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {edu.period} • {edu.location}
                      </div>
                    </div>
                    {edu.grade && <div className="edu-badge">{edu.grade}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
