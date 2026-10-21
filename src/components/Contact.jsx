import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Copy,
  Check,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    // Prepare mailto link as direct action
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      message: 'Thank you! Your email client has been launched with your message.'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      id: 'email',
      icon: <Mail size={22} />,
      label: 'Email Address',
      value: personalInfo.email,
      copyText: personalInfo.email,
      actionDesc: 'Click to copy email'
    },
    {
      id: 'phone',
      icon: <Phone size={22} />,
      label: 'Contact Number',
      value: personalInfo.phone,
      copyText: personalInfo.phone,
      actionDesc: 'Click to copy phone'
    },
    {
      id: 'location',
      icon: <MapPin size={22} />,
      label: 'Location',
      value: personalInfo.location,
      copyText: personalInfo.location,
      actionDesc: 'Bengaluru, India'
    },
    {
      id: 'website',
      icon: <Globe size={22} />,
      label: 'Portfolio Website',
      value: 'portfolio-vamshi-krishna.vercel.app',
      copyText: personalInfo.website,
      actionDesc: 'Live Web Portfolio'
    }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a job opportunity, project inquiry, or just want to chat software engineering,
            my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-cards-group">
            {contactCards.map((card) => (
              <div
                key={card.id}
                className="glass-card contact-info-card"
                onClick={() => handleCopy(card.copyText, card.id)}
                title={card.actionDesc}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopy(card.copyText, card.id);
                  }
                }}
              >
                <div className="contact-icon-box">{card.icon}</div>
                <div className="contact-text-group">
                  <span className="contact-label">{card.label}</span>
                  <span className="contact-value">{card.value}</span>
                </div>
                <div>
                  {copiedField === card.id ? (
                    <span className="copy-feedback-badge" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={16} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-panel">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Send Me a Direct Message
            </h3>

            {status && (
              <div
                className={`form-status-alert ${status.type === 'success' ? 'success' : ''}`}
                style={{
                  marginBottom: '1rem',
                  ...(status.type === 'error'
                    ? { background: 'rgba(244, 63, 94, 0.12)', color: 'var(--accent-rose)', border: '1px solid rgba(244, 63, 94, 0.3)' }
                    : {})
                }}
              >
                {status.type === 'success' ? <Check size={18} /> : null}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Satya Nadella"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Software Engineering Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hi Vamshi, I'd love to connect regarding..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
