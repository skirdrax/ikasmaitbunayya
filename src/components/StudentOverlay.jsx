import { useEffect, useState } from 'react';
import { batches, students } from '../data/mockData.js';

export default function StudentOverlay({ batchId, onBack, onSelectStudent }) {
  const batch = batches.find((b) => b.id === batchId);
  const studentsByBatch = students.filter((s) => s.angkatan === batch?.tahun);

  // ===== STATE =====
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ===== DATA FOTO =====
  const photoData = {
    1: [
      '/assets/angkatan1/1.jpg',
      '/assets/angkatan1/2.jpg',
      '/assets/angkatan1/3.jpg',
      '/assets/angkatan1/4.jpg',
    ],
    2: [
      '/assets/angkatan2/1.jpg',
      '/assets/angkatan2/2.jpg',
      '/assets/angkatan2/3.jpg',
      '/assets/angkatan2/4.jpg',
    ],
    3: [
      '/assets/angkatan3/1.jpg',
      '/assets/angkatan3/2.jpg',
      '/assets/angkatan3/3.jpg',
      '/assets/angkatan3/4.jpg',
    ],
    4: [
      'https://picsum.photos/seed/angkatan4_1/800/500',
      'https://picsum.photos/seed/angkatan4_2/800/500',
      'https://picsum.photos/seed/angkatan4_3/800/500',
      'https://picsum.photos/seed/angkatan4_4/800/500',
    ],
  };

  const photoSlides = photoData[batchId] || photoData[1];

  // ===== DATA FLIPHTML5 =====
  const flipData = {
    1: {
      title: 'Buku Tahunan Sekolah - Angkatan 1',
      url: 'https://online.fliphtml5.com/izvhs/yice/',
    },
    2: {
      title: 'Buku Tahunan Sekolah - Angkatan 2',
      url: 'https://online.fliphtml5.com/izvhs/BTS-Angkatan-2-smait-bunayya/',
    },
    3: {
      title: 'Buku Tahunan Sekolah - Angkatan 3',
      url: 'https://online.fliphtml5.com/izvhs/BTS-angkatan-3-2026/',
    },
  };

  const hasFlip = flipData[batchId] !== undefined;
  const currentFlip = hasFlip ? flipData[batchId] : null;

  // ===== BACK BROWSER =====
  useEffect(() => {
    window.history.pushState({ overlay: true }, '');

    const handlePopState = (event) => {
      if (event.state?.overlay) {
        onBack();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [onBack]);

  // ===== PRELOAD FOTO =====
  useEffect(() => {
    // avoid synchronous setState calls inside effect to prevent cascading renders
    const initTimer = setTimeout(() => {
      setIsLoading(true);
      setImageError(false);
    }, 0);

    const img = new Image();
    img.src = photoSlides[currentSlide];

    img.onload = () => {
      setIsLoading(false);
      setImageError(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setImageError(true);
      console.error(`Gagal memuat gambar: ${photoSlides[currentSlide]}`);
    };

    return () => {
      clearTimeout(initTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, [currentSlide, photoSlides]);

  // ===== FUNGSI SLIDE =====
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + photoSlides.length) % photoSlides.length,
    );
  };

  // ===== FUNGSI FULLSCREEN =====
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // ===== ESC FULLSCREEN =====
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isFullscreen]);

  return (
    <>
      <div className="overlay show">
        {/* ===== HEADER ===== */}
        <div className="overlay-top">
          <div className="container">
            <button className="back-link" onClick={onBack}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Kembali ke Direktori
            </button>
          </div>
        </div>

        <div className="container">
          {/* ===== JUDUL ===== */}
          <div className="overlay-head">
            <div>
              <h2>Daftar Alumni— {batch?.label}</h2>
              <p>
                Lulus tahun {batch?.tahun} · {studentsByBatch.length} alumni
              </p>
            </div>
          </div>

          {/* ========================================== */}
          {/* ===== SLIDE FOTO ===== */}
          {/* ========================================== */}
          <div className="photo-slide-container">
            <div className="photo-slide-wrapper">
              <button className="slide-btn prev" onClick={prevSlide}>
                ❮
              </button>

              <div className="photo-slide">
                {isLoading ? (
                  <div className="slide-loading">
                    <div className="spinner"></div>
                    <span className="loading-text">Memuat foto...</span>
                  </div>
                ) : imageError ? (
                  <div className="slide-loading">
                    <span style={{ fontSize: '40px' }}>⚠️</span>
                    <span className="loading-text">Gagal memuat gambar</span>
                    <button
                      onClick={() => {
                        setIsLoading(true);
                        setImageError(false);
                        const img = new Image();
                        img.src = photoSlides[currentSlide];
                        img.onload = () => setIsLoading(false);
                        img.onerror = () => {
                          setIsLoading(false);
                          setImageError(true);
                        };
                      }}
                      style={{
                        padding: '6px 20px',
                        borderRadius: '6px',
                        border: 'none',
                        background: '#c9a96e',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '13px',
                        marginTop: '4px',
                      }}>
                      Coba Lagi
                    </button>
                  </div>
                ) : (
                  <img
                    src={photoSlides[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    loading="lazy"
                  />
                )}

                <div className="slide-counter">
                  {currentSlide + 1} / {photoSlides.length}
                </div>
              </div>

              <button className="slide-btn next" onClick={nextSlide}>
                ❯
              </button>
            </div>
          </div>

          {/* ========================================== */}
          {/* ===== FlipHTML5 ===== */}
          {/* ========================================== */}
          {hasFlip && (
            <div className="fliphtml5-container">
              <div className="fliphtml5-header">
                <h3>{currentFlip.title}</h3>
                <p>
                  Jika ada iklan..klik di tengah supaya tidak keluar Website
                </p>
              </div>
              <div className="fliphtml5-wrapper">
                <iframe
                  src={currentFlip.url}
                  title={currentFlip.title}
                  className="fliphtml5-iframe"
                  allowFullScreen
                  loading="lazy"
                />
                <button
                  className="fliphtml5-zoom-btn"
                  onClick={toggleFullscreen}
                  title="Perbesar">
                  ⛶
                </button>
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* ===== DAFTAR SISWA ===== */}
          {/* ========================================== */}
          <div className="student-grid">
            {studentsByBatch.map((s) => (
              <div className="student-card" key={s.id}>
                <div className="student-photo">
                  <img src={s.foto} alt={s.nama} />
                </div>
                <h4>{s.nama}</h4>
                <div className="status">{s.jurusan}</div>
                <div className="badge-tahfizh">{s.kampus}</div>
                <br />
                <button
                  className="btn btn-outline"
                  onClick={() => onSelectStudent(s)}>
                  Lihat Profil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* ===== FULLSCREEN MODAL BTS ===== */}
      {/* ========================================== */}
      {isFullscreen && hasFlip && (
        <div
          className="bts-fullscreen-overlay"
          onClick={() => setIsFullscreen(false)}>
          <div
            className="bts-fullscreen-content"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="bts-fullscreen-close"
              onClick={() => setIsFullscreen(false)}>
              ✕
            </button>
            <div className="bts-fullscreen-wrapper">
              <iframe
                src={currentFlip.url}
                title={currentFlip.title}
                className="bts-fullscreen-iframe"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="bts-fullscreen-hint">
              Tekan ESC atau klik ✕ untuk menutup
            </p>
          </div>
        </div>
      )}
    </>
  );
}
