import React, { useState, useRef, useEffect } from 'react';
import { useResume } from '../context/ResumeContext';
import {
  Lock,
  Unlock,
  UploadCloud,
  FileCheck,
  CheckCircle,
  AlertCircle,
  X,
  FileText,
  ExternalLink,
  RefreshCw,
  Eye,
  Key
} from 'lucide-react';

const DEFAULT_PIN = '7023';

export default function SecretResumeModal() {
  const {
    isModalOpen,
    closeModal,
    resumeUrl,
    uploadResume,
    resetToDefault,
    lastUpdated,
    resumeMeta
  } = useResume();

  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('resume_admin_unlocked') === 'true';
  });
  const [pinError, setPinError] = useState(false);

  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === DEFAULT_PIN) {
      setIsUnlocked(true);
      sessionStorage.setItem('resume_admin_unlocked', 'true');
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  };

  const handleFileSelected = (file) => {
    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      setUploadStatus({
        type: 'error',
        message: 'Invalid file type. Please upload a valid .pdf file.'
      });
      return;
    }
    setSelectedFile(file);
    setUploadStatus(null);
  };

  const handleUploadSubmit = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadStatus(null);

    try {
      const res = await uploadResume(selectedFile);
      setUploadStatus({
        type: 'success',
        message: res.serverUpdated
          ? 'Success! Updated public/resume.pdf directly on disk & loaded live in your portfolio.'
          : 'Success! Loaded live into your portfolio and cached in browser storage.'
      });
      setSelectedFile(null);
    } catch (err) {
      setUploadStatus({
        type: 'error',
        message: 'Failed to update resume: ' + err.message
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={closeModal} style={{ zIndex: 3000 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px', border: '1px solid var(--accent-secondary)' }}
      >
        {/* Header */}
        <div className="modal-header" style={{ background: 'rgba(255, 189, 57, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {isUnlocked ? (
              <Unlock size={22} style={{ color: 'var(--accent-secondary)' }} />
            ) : (
              <Lock size={22} style={{ color: 'var(--accent-secondary)' }} />
            )}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Secret Resume Vault
              </h3>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-secondary)'
                }}
              >
                ADMIN ACCESS ONLY • HOT-UPDATE
              </span>
            </div>
          </div>

          <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ padding: '2rem', alignItems: 'stretch' }}>
          {!isUnlocked ? (
            /* Passcode Screen */
            <form onSubmit={handlePinSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(255, 189, 57, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <Key size={26} />
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Enter Master Security PIN
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  This secret dialog is restricted. Enter your 4-digit code to proceed.
                </p>
              </div>

              {pinError && (
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: 'rgba(244, 63, 94, 0.12)',
                    color: 'var(--accent-rose)',
                    fontSize: '0.85rem'
                  }}
                >
                  Incorrect PIN. Please try again.
                </div>
              )}

              <input
                type="password"
                maxLength={8}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter 4-digit PIN..."
                autoFocus
                className="form-input"
                style={{ textAlign: 'center', letterSpacing: '0.35em', fontSize: '1.25rem', fontWeight: 700 }}
              />

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Unlock Vault
              </button>

            </form>
          ) : (
            /* Upload Management Screen */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Current Active Info Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(56, 189, 248, 0.06)',
                  borderColor: 'rgba(56, 189, 248, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileCheck size={26} style={{ color: 'var(--accent-primary)' }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Active: {resumeMeta.name}
                    </div>
                    <div style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>
                      {resumeMeta.size ? `${resumeMeta.size} • ` : ''}
                      {lastUpdated ? `Updated ${new Date(lastUpdated).toLocaleDateString()}` : 'Default bundled version'}
                    </div>
                  </div>
                </div>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ display: 'inline-flex', padding: '0.4rem 0.85rem' }}
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </a>
              </div>

              {/* Status Alert */}
              {uploadStatus && (
                <div
                  className={`form-status-alert ${uploadStatus.type === 'success' ? 'success' : ''}`}
                  style={{
                    ...(uploadStatus.type === 'error'
                      ? { background: 'rgba(244, 63, 94, 0.12)', color: 'var(--accent-rose)', border: '1px solid rgba(244, 63, 94, 0.3)' }
                      : {})
                  }}
                >
                  {uploadStatus.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{uploadStatus.message}</span>
                </div>
              )}

              {/* Drag and Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: `2px dashed ${dragActive ? 'var(--accent-secondary)' : 'var(--border-medium)'}`,
                  borderRadius: '16px',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: dragActive ? 'rgba(255, 189, 57, 0.08)' : 'var(--bg-tertiary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'rgba(255, 189, 57, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <UploadCloud size={26} />
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {selectedFile ? selectedFile.name : 'Click or drag & drop latest Resume PDF'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {selectedFile
                      ? `${(selectedFile.size / 1024).toFixed(1)} KB • Ready to upload`
                      : 'Supports .pdf format (will automatically replace public/resume.pdf)'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  disabled={!selectedFile || isUploading}
                  onClick={handleUploadSubmit}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    opacity: !selectedFile || isUploading ? 0.6 : 1,
                    cursor: !selectedFile || isUploading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isUploading ? (
                    <>
                      <RefreshCw size={16} className="spin" />
                      <span>Writing to disk...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck size={16} />
                      <span>Upload & Update Everywhere</span>
                    </>
                  )}
                </button>

                {lastUpdated && (
                  <button
                    type="button"
                    onClick={resetToDefault}
                    className="btn btn-outline"
                    title="Revert back to default resume"
                    style={{ padding: '0.75rem' }}
                  >
                    <RefreshCw size={16} />
                  </button>
                )}
              </div>

              {/* Secret Hint Footer */}
              <div
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.785rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Shortcut: <kbd style={{ padding: '2px 5px', borderRadius: 4, background: 'var(--bg-tertiary)', border: '1px solid var(--border-medium)' }}>Ctrl + Shift + U</kbd></span>
                <span>or triple-click the logo</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
