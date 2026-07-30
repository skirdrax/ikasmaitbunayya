import { useEffect, useState } from 'react';
import { batches, students } from '../data/mockData.js';

export default function StudentOverlay({ batchId, onBack, onSelectStudent }) {
  const batch = batches.find((b) => b.id === batchId);
  const studentsByBatch = students.filter((s) => s.angkatan === batch?.tahun);

  // ===== STATE UNTUK SLIDE FOTO =====
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== DATA FOTO PER ANGKATAN (4 SLIDE MASING-MASING) =====
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

  // ===== AMBIL FOTO SESUAI ANGKATAN (DEFAULT KE ANGKATAN 1) =====
  const photoSlides = photoData[batchId] || photoData[1];

  // ===== DATA FLIPHTML5 PER ANGKATAN =====
  const flipData = {
    1: {
      title: 'Buku Tahunan Sekolah',
      url: 'https://online.fliphtml5.com/izvhs/yice/',
    },
    2: {
      title: 'Yearbook Angkatan Kedua SMAIT Bunayya',
      url: '', // ← GANTI LINK NYA
    },
    3: {
      title: 'Buku Tahunan Sekolah',
      url: 'https://online.fliphtml5.com/izvhs/BTS-angkatan-3-2026/', // ← GANTI LINK NYA
    },
  };

  // ===== CEK APAKAH ANGKATAN PUNYA FLIPHTML5 =====
  const hasFlip = flipData[batchId] !== undefined;

  // ===== TANGKAP TOMBOL BACK BROWSER =====
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

  // ===== FUNGSI SLIDE =====
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + photoSlides.length) % photoSlides.length,
    );
  };

  return (
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
            <p></p>
            <p>
              Lulus tahun {batch?.tahun} · {studentsByBatch.length} alumni
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* ===== SLIDE FOTO (4 SLIDE PER ANGKATAN) ===== */}
        {/* ========================================== */}
        <div className="photo-slide-container">
          <div className="photo-slide-wrapper">
            <button className="slide-btn prev" onClick={prevSlide}>
              ❮
            </button>
            <div className="photo-slide">
              <img
                src={photoSlides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
              />
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
        {/* ===== FlipHTML5 (UNTUK ANGKATAN YANG ADA) ===== */}
        {/* ========================================== */}
        {hasFlip && (
          <div className="fliphtml5-container">
            <div className="fliphtml5-header">
              <h3>{flipData[batchId].title}</h3>
              <p>Jika ada iklan..klik di tengah supaya tidak keluar Website</p>
            </div>
            <div className="fliphtml5-wrapper">
              <iframe
                src={flipData[batchId].url}
                title={flipData[batchId].title}
                className="fliphtml5-iframe"
                allowFullScreen
                loading="lazy"
              />
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
  );
}
