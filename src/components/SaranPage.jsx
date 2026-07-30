import { useState, useEffect } from 'react';

export default function SaranPage({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    angkatan: '',
    jenis: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // ===== TANGKAP TOMBOL BACK BROWSER =====
  useEffect(() => {
    // Push state baru ke history
    window.history.pushState({ saranPage: true }, '');

    // Listener untuk popstate (tombol back)
    const handlePopState = (event) => {
      if (event.state?.saranPage) {
        onBack();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'e837d397-cc77-4bde-bf95-77579f2b0d35');
    formDataToSend.append('subject', 'Saran & Masukan IKA SMAIT Bunayya');
    formDataToSend.append('from_name', 'Website IKA SMAIT BUNAYYA');
    formDataToSend.append('name', formData.name);
    formDataToSend.append(
      'message',
      `
      Nama: ${formData.name}
      Angkatan: ${formData.angkatan}
      Jenis Masukan: ${formData.jenis}
      
      Pesan:
      ${formData.message}
      
      ---
      Dikirim dari website IKA SMAIT Bunayya
    `,
    );

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setIsSuccess(true);
          setFormData({ name: '', angkatan: '', jenis: '', message: '' });
          setTimeout(() => {
            onBack();
          }, 3000);
        } else {
          setErrorMessage('Gagal mengirim. Silakan coba lagi.');
        }
      })
      .catch(() => {
        setErrorMessage('Terjadi kesalahan jaringan. Silakan coba lagi.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="saran-page">
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
          Kembali ke Beranda
        </button>

        <div className="saran-content">
          <div className="saran-header">
            <div className="saran-icon">💬</div>
            <h1>Saran &amp; Masukan</h1>
            <p>Kirim saran atau laporkan data alumni yang perlu diperbaiki</p>
          </div>

          {isSuccess ? (
            <div className="saran-success">
              <span>✅</span>
              <h4>Terima Kasih!</h4>
              <p>Saran &amp; masukan Anda telah terkirim.</p>
              <button className="btn btn-primary" onClick={onBack}>
                Kembali ke Beranda
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="saran-form">
              <div className="form-group">
                <label>Nama Alumni</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama alumni"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label>Angkatan</label>
                <select
                  name="angkatan"
                  value={formData.TahunA}
                  onChange={handleChange}
                  required
                  disabled={isLoading}>
                  <option value="">Pilih Tahun Kelulusan</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>

              <div className="form-group">
                <label>Jenis Masukan</label>
                <select
                  name="jenis"
                  value={formData.jenis}
                  onChange={handleChange}
                  required
                  disabled={isLoading}>
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
                  name="message"
                  rows="5"
                  placeholder="Jelaskan saran atau masalahnya secara detail..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {errorMessage && (
                <div className="saran-error">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Mengirim...
                  </>
                ) : (
                  'Kirim Saran & Masukan'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
