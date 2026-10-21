import React, { useEffect } from 'react';
import { X, Award, Calendar, ExternalLink } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Award size={22} style={{ color: 'var(--accent-secondary)' }} />
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>
                {cert.issuer} • {cert.date}
              </div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <img src={cert.image} alt={cert.title} className="modal-full-img" />
          <p style={{ textAlign: 'center', maxWidth: 640, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            {cert.description}
          </p>
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <span>Open High-Resolution File</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
