import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ZoomIn, Calendar } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials & Honors</span>
          <h2 className="section-title">
            Industry <span className="gradient-text-gold">Certifications & Awards</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials from Oracle, TCS, NVIDIA, IEEE, and international hackathons.
            Click on any credential to inspect the verified certificate.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card cert-card"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-zoom-overlay">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                    <ZoomIn size={18} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              <div className="cert-body">
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-badge">{cert.badge}</span>
                </div>

                <div className="cert-issuer">{cert.issuer}</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>

                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
