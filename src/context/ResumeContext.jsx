import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const ResumeContext = createContext();

const DB_NAME = 'VamshiPortfolioDB';
const STORE_NAME = 'resume_store';
const KEY_NAME = 'custom_resume_pdf';

// Simple IndexedDB helper for storing PDF blobs without localStorage 5MB size limit
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function savePdfToIndexedDB(blob) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(blob, KEY_NAME);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to save to IndexedDB', err);
    return false;
  }
}

async function getPdfFromIndexedDB() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY_NAME);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to read from IndexedDB', err);
    return null;
  }
}

export function ResumeProvider({ children }) {
  const [resumeUrl, setResumeUrl] = useState(personalInfo.resumePath);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(() => localStorage.getItem('resume_last_updated') || null);
  const [resumeMeta, setResumeMeta] = useState(() => {
    const saved = localStorage.getItem('resume_meta');
    return saved ? JSON.parse(saved) : { name: 'resume.pdf', size: null };
  });

  // Load custom resume from IndexedDB on startup if available
  useEffect(() => {
    getPdfFromIndexedDB().then((blob) => {
      if (blob instanceof Blob) {
        const url = URL.createObjectURL(blob);
        setResumeUrl(url);
      } else {
        // Fallback to public/resume.pdf with timestamp to avoid stale browser cache
        const t = localStorage.getItem('resume_timestamp');
        if (t) {
          setResumeUrl(`/resume.pdf?t=${t}`);
        }
      }
    });
  }, []);

  // Listen for secret keyboard shortcut: Ctrl + Shift + U or Cmd + Shift + U
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const uploadResume = async (file) => {
    const now = new Date().toISOString();
    const timestamp = Date.now().toString();

    // 1. Try to upload to local Vite server API to write to public/resume.pdf
    let serverUpdated = false;
    try {
      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf'
        },
        body: file
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          serverUpdated = true;
        }
      }
    } catch (err) {
      console.warn('Vite dev server upload endpoint not reached (production/static mode)', err);
    }

    // 2. Save in browser IndexedDB
    await savePdfToIndexedDB(file);

    // 3. Create fresh Object URL and update states
    const localUrl = URL.createObjectURL(file);
    setResumeUrl(localUrl);

    const meta = {
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      updatedAt: now
    };
    setResumeMeta(meta);
    setLastUpdated(now);
    localStorage.setItem('resume_last_updated', now);
    localStorage.setItem('resume_timestamp', timestamp);
    localStorage.setItem('resume_meta', JSON.stringify(meta));

    return {
      success: true,
      serverUpdated,
      meta
    };
  };

  const resetToDefault = async () => {
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(KEY_NAME);
    } catch (e) {}

    localStorage.removeItem('resume_last_updated');
    localStorage.removeItem('resume_timestamp');
    localStorage.removeItem('resume_meta');

    setResumeUrl('/resume.pdf');
    setLastUpdated(null);
    setResumeMeta({ name: 'resume.pdf', size: null });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeUrl,
        isModalOpen,
        openModal,
        closeModal,
        uploadResume,
        resetToDefault,
        lastUpdated,
        resumeMeta
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
