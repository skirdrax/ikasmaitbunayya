import { useState } from 'react';
import { batches, students } from '../data/mockData.js';

const filters = [
  { key: 'semua', label: 'Semua' },
  { key: 'kuliah', label: 'Kuliah PTN/PTS' },
  { key: 'bekerja', label: 'Bekerja' },
  { key: 'wirausaha', label: 'Wirausaha' },
];

export default function StudentOverlay({ batchId, onBack, onSelectStudent }) {
  const [activeFilter, setActiveFilter] = useState('semua');

  const batch = batches.find((b) => b.id === batchId);
  const studentsByBatch = students.filter((s) => s.angkatan === batch?.tahun);
  const filteredStudents = studentsByBatch;

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
              Lulus tahun {batch?.tahun} · {filteredStudents.length} alumni
            </p>
          </div>
        </div>

        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="student-grid">
          {filteredStudents.map((s) => (
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
