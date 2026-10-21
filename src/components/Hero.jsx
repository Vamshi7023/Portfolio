import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Code2,
  Cpu,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useResume } from '../context/ResumeContext';

const titles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Backend & Cloud Engineer',
  '500+ DSA Problem Solver'
];

export default function Hero() {
  const { resumeUrl } = useResume();
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for Software Engineering Roles</span>
            </div>

            <div>
              <span className="hero-greeting">Hi there, I'm</span>
              <h1 className="hero-name">
                TK <span className="gradient-text">Vamshi Krishna</span>
              </h1>
              <h2 className="hero-title">
                A passionate{' '}
                <span className="gradient-text-gold" style={{ borderBottom: '2px dashed var(--accent-secondary)' }}>
                  {titles[titleIndex]}
                </span>
              </h2>
            </div>

            <p className="hero-bio">
              Graduate from <strong style={{ color: 'var(--text-primary)' }}>VIT</strong> with industry experience
              in full-stack and backend engineering at <strong style={{ color: 'var(--text-primary)' }}>Danfoss</strong>.
              I build production-grade Node.js services, scalable REST APIs, and automated CI/CD pipelines at scale.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Works</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FileText size={17} />
                <span>Resume PDF</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LeetCode (500+ DSA Problems Solved)"
                aria-label="LeetCode Profile"
              >
                <LeetCode size={20} />
              </a>

              <a
                href={personalInfo.socials.email}
                className="social-link"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>

              <a
                href={personalInfo.socials.phone}
                className="social-link"
                title="Call Phone"
                aria-label="Call Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Floating Badges */}
          <div className="hero-visual">
            <div className="hero-avatar-wrapper">
              <div className="avatar-glow"></div>
              <img
                src="/images/profile-pic.jpg"
                alt={personalInfo.name}
                className="hero-avatar-img"
              />



              {/* Floating Badge 2: ItJobXs */}
              <div className="floating-badge floating-badge-2">
                <span className="badge-icon">💼</span>
                <div>
                  <div className="badge-text-title">ItJobXs</div>
                  <div className="badge-text-sub">Web Developer Intern</div>
                </div>
              </div>
              {/* Floating Badge 1: Danfoss */}
              <div className="floating-badge floating-badge-1">
                <span className="badge-icon">⚡</span>
                <div>
                  <div className="badge-text-title">Danfoss Industries PVT LTD</div>
                  <div className="badge-text-sub">Software Engineer Intern</div>
                </div>
              </div>

              {/* Floating Badge 3: LeetCode / DSA */}
              <div className="floating-badge floating-badge-3">
                <span className="badge-icon">🏆</span>
                <div>
                  <div className="badge-text-title">500+ DSA Solved</div>
                  <div className="badge-text-sub">LeetCode & Problem Solving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
