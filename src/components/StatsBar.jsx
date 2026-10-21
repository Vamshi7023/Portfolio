import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Award, Code, GitPullRequest, Globe, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: <Code size={24} style={{ color: 'var(--accent-secondary)' }} />,
    value: '500+',
    label: 'DSA Problems Solved',
    detail: 'Algorithmic mastery on LeetCode'
  },
  {
    icon: <Award size={24} style={{ color: 'var(--accent-primary)' }} />,
    value: '8.70',
    label: 'VIT CGPA',
    detail: 'M.Tech Integrated CSE (Core)'
  },
  {
    icon: <GitPullRequest size={24} style={{ color: 'var(--accent-purple)' }} />,
    value: '30+',
    label: 'Pull Requests Handled',
    detail: 'Azure DevOps CI/CD & Git'
  },
  {
    icon: <Globe size={24} style={{ color: 'var(--accent-emerald)' }} />,
    value: '14',
    label: 'Languages Localized',
    detail: 'Node.js backend content pipelines'
  }
];

export default function StatsBar() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="glass-card stat-card">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.25rem' }}>
                {item.icon}
              </div>
              <div className="stat-value gradient-text-gold">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
