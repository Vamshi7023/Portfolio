import React from 'react';
import {
  Mail,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useResume } from '../context/ResumeContext';

export default function Footer() {
  const { resumeUrl, openModal } = useResume();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="nav-brand">
              <img src="/images/profile-pic.jpg" alt={personalInfo.name} className="brand-avatar" />
              <span>
                Vamshi<span className="brand-accent">.dev</span>
              </span>
            </div>
            <p className="footer-bio">
              Software Engineer specializing in scalable Node.js microservices, RESTful API pipelines,
              and modern React web applications.
            </p>
            <div className="hero-socials" style={{ marginTop: '0.5rem' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LeetCode"
              >
                <LeetCode size={18} />
              </a>
              <a href={personalInfo.socials.email} className="social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#about">About</a></li>
              <li className="footer-link-item"><a href="#experience">Experience</a></li>
              <li className="footer-link-item"><a href="#skills">Skills</a></li>
              <li className="footer-link-item"><a href="#projects">Projects</a></li>
              <li className="footer-link-item"><a href="#certifications">Certifications</a></li>
              <li className="footer-link-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href={personalInfo.socials.email}>{personalInfo.email}</a>
              </li>
              <li className="footer-link-item">
                <a href={personalInfo.socials.phone}>{personalInfo.phone}</a>
              </li>
              <li className="footer-link-item">
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  {personalInfo.location}
                </span>
              </li>
              <li className="footer-link-item">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}
                >
                  Download Curriculum Vitae (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            <span
              onClick={openModal}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              title=""
            >
              ©
            </span>{' '}
            {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Vanilla CSS.
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
