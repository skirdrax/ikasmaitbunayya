import { useState } from 'react';
import { batches, students } from '../data/mockData.js';

export default function BatchDirectory({ onSelectBatch }) {
  const getStudentCount = (tahun) => {
    return students.filter((s) => s.angkatan === tahun).length;
  };

  // State untuk tracking loading setiap batch
  const [imageLoading, setImageLoading] = useState({});
  const [imageError, setImageError] = useState({});

  const handleImageLoad = (batchId) => {
    setImageLoading((prev) => ({ ...prev, [batchId]: false }));
  };

  const handleImageError = (batchId) => {
    setImageLoading((prev) => ({ ...prev, [batchId]: false }));
    setImageError((prev) => ({ ...prev, [batchId]: true }));
  };

  return (
    <section className="section directory-section" id="direktori">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Direktori Angkatan</div>
          <h2>Temukan Angkatanmu, Temukan Kawan Lama</h2>
          <p>
            Setiap angkatan menyimpan cerita dan wajah yang berbeda. Pilih
            angkatan untuk melihat daftar lengkap alumninya.
          </p>
        </div>

        <div className="batch-grid">
          {batches.map((b) => {
            const jumlahSiswa = getStudentCount(b.tahun);
            const isLoading = imageLoading[b.id] !== false; // default true
            const hasError = imageError[b.id] || false;

            return (
              <div className="batch-card" key={b.id}>
                <div className="batch-photo">
                  <span className="batch-tag">{b.tahun}</span>

                  {/* Loading Spinner */}
                  {isLoading && (
                    <div className="batch-photo-loading">
                      <div className="batch-spinner"></div>
                    </div>
                  )}

                  {/* Error State */}
                  {hasError && !isLoading && (
                    <div className="batch-photo-error">
                      <span>📷</span>
                    </div>
                  )}

                  {/* Image */}
                  <img
                    src={b.photo}
                    alt={`Foto ${b.label}`}
                    onLoad={() => handleImageLoad(b.id)}
                    onError={() => handleImageError(b.id)}
                    style={{
                      opacity: isLoading || hasError ? 0 : 1,
                      transition: 'opacity 0.5s ease',
                    }}
                  />
                </div>
                <div className="batch-body">
                  <h3>{b.label}</h3>
                  <div className="batch-stats">
                    <div>
                      <b>{jumlahSiswa}</b>Alumni
                    </div>
                    <div>
                      <b>{b.tahun}</b>Tahun Lulus
                    </div>
                  </div>
                  <button
                    className="btn btn-outline"
                    onClick={() => onSelectBatch(b.id)}>
                    Lihat Daftar Murid
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
