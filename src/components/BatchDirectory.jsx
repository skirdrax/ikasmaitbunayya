import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { batches, students } from '../data/mockData.js';

export default function BatchDirectory({ onSelectBatch }) {
  const getStudentCount = (tahun) => {
    return students.filter((s) => s.angkatan === tahun).length;
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

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
        <div className="section-head" data-aos="fade-up" data-aos-delay="0">
          <div className="eyebrow orange">Direktori Angkatan</div>
          <h2>Temukan Angkatanmu, Temukan Kawan Lama</h2>
          <p>
            Setiap angkatan menyimpan cerita dan wajah yang berbeda. Pilih
            angkatan untuk melihat daftar lengkap alumninya.
          </p>
        </div>

        <div className="batch-grid">
          {batches.map((b, index) => {
            const jumlahSiswa = getStudentCount(b.tahun);
            const isLoading = imageLoading[b.id] !== false;
            const hasError = imageError[b.id] || false;
            const delay = 100 + index * 80;

            return (
              <div className="batch-card" key={b.id} data-aos-delay={delay}>
                <div className="batch-photo">
                  <span className="batch-tag">{b.tahun}</span>

                  {/* Loading Spinner */}
                  {isLoading && (
                    <div className="batch-photo-loading">
                      <div className="batch-spinner"></div>
                      <span>Memuat Foto angkatan.. harap sabar</span>
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
