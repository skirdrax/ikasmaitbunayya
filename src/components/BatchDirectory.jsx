import { batches, students } from '../data/mockData.js';

export default function BatchDirectory({ onSelectBatch }) {
  const getStudentCount = (tahun) => {
    return students.filter((s) => s.angkatan === tahun).length;
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
            return (
              <div className="batch-card" key={b.id}>
                <div className="batch-photo">
                  <span className="batch-tag">{b.tahun}</span>
                  <img
                    src={b.photo} // ← PAKE FOTO DARI DATA
                    alt={`Foto ${b.label}`}
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
