import { useEffect } from 'react';
import { batches, students } from '../data/mockData.js';

export default function StudentOverlay({ batchId, onBack, onSelectStudent }) {
  const batch = batches.find((b) => b.id === batchId);
  const studentsByBatch = students.filter((s) => s.angkatan === batch?.tahun);

  // ===== TANGKAP TOMBOL BACK BROWSER =====
  useEffect(() => {
    // Push state baru ke history
    window.history.pushState({ overlay: true }, '');

    // Listener untuk popstate (tombol back)
    const handlePopState = (event) => {
      if (event.state?.overlay) {
        onBack();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  return (
    <div className="overlay show">
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
        <div className="overlay-head">
          <div>
            <h2>Daftar Murid — {batch?.label}</h2>
            <p>
              Lulus tahun {batch?.tahun} · {studentsByBatch.length} alumni
            </p>
          </div>
        </div>

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
