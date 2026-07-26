export default function Footer() {
  return (
    <footer id="kontak">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-mark">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2">
                <path d="M12 2L14.5 8.5L21 9.3L16 13.8L17.5 20.5L12 17L6.5 20.5L8 13.8L3 9.3L9.5 8.5Z" />
              </svg>
            </div>
            <div>
              IKA Bunayya
              <small
                style={{
                  color: '#c9a96e',
                  fontSize: '10px',
                  display: 'block',
                }}>
                Ikatan Alumni
              </small>
            </div>
          </div>
          <p>Merajut silaturahmi, membina kontribusi, membangun peradaban.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              📱
            </a>
            <a href="#" aria-label="LinkedIn">
              🔗
            </a>
            <a href="#" aria-label="X / Twitter">
              🐦
            </a>
            <a href="#" aria-label="YouTube">
              ▶️
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Navigasi</h5>
          <a href="#beranda">Beranda</a>
          <a href="#peta">Peta Sebaran</a>
          <a href="#direktori">Direktori Angkatan</a>
          <a href="#galeri">Galeri</a>
        </div>

        <div className="footer-col">
          <h5>Kontak</h5>
          <a href="mailto:tu@smaitbunayya.sch.id">tu@smaitbunayya.sch.id</a>
          <a href="tel:0218765432">(021) 8765-4321</a>
          <a href="#">Jl. Pendidikan No. 1, Depok</a>
        </div>

        <div className="footer-col">
          <h5>Lainnya</h5>
          <a href="#">Program Beasiswa</a>
          <a href="#">Login Alumni</a>
          <a href="#">Karir</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Ikatan Alumni SMAIT Bunayya. Seluruh hak dilindungi.</span>
        <span>Dibangun dengan ukhuwah 🤝</span>
      </div>
    </footer>
  );
}
