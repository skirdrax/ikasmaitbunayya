import { useState } from 'react';

export default function ReportModal({ onClose }) {
  const [formData, setFormData] = useState({
    nama: '',
    angkatan: '',
    masalah: '',
    detail: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const subject = `Saran & Masukan - ${formData.nama}`;
    const body = `
      Nama Alumni: ${formData.nama}
      Angkatan: ${formData.angkatan}
      Jenis Masalah: ${formData.masalah}
      
      Detail:
      ${formData.detail}
      
      ---
      Dikirim dari website IKA SMAIT Bunayya
    `;

    window.location.href = `mailto:ardraalfarezi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSending(false);
    setIsSent(true);

    setTimeout(() => {
      onClose();
      setIsSent(false);
    }, 2000);
  };

  return (
    <div
      className="modal-backdrop show"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal report-modal">
        <div className="modal-top">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div className="modal-icon">💬</div>
          <h3 className="modal-name">Saran &amp; Masukan</h3>
          <div className="modal-sub">
            Kirim saran atau laporkan data yang perlu diperbaiki
          </div>
        </div>

        <div className="modal-body">
          {isSent ? (
            <div className="report-success">
              <span>✅</span>
              <h4>Terima Kasih!</h4>
              <p>Saran &amp; masukan Anda telah terkirim.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-group">
                <label>Nama Alumni</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama alumni"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Angkatan</label>
                <input
                  type="number"
                  name="angkatan"
                  placeholder="Contoh: 2024"
                  value={formData.angkatan}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Jenis Masukan</label>
                <select
                  name="masalah"
                  value={formData.masalah}
                  onChange={handleChange}
                  required>
                  <option value="">Pilih jenis masukan</option>
                  <option value="Nama salah">Nama alumni salah</option>
                  <option value="Jurusan salah">Jurusan salah</option>
                  <option value="Kampus salah">Kampus salah</option>
                  <option value="Angkatan salah">Angkatan salah</option>
                  <option value="Data duplikat">Data duplikat</option>
                  <option value="Data hilang">Data alumni hilang</option>
                  <option value="Saran perbaikan">
                    Saran perbaikan website
                  </option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label>Detail</label>
                <textarea
                  name="detail"
                  placeholder="Jelaskan saran atau masalahnya secara detail..."
                  value={formData.detail}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSending}>
                {isSending ? 'Mengirim...' : 'Kirim Saran & Masukan'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
