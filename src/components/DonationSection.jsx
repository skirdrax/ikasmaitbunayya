export default function DonationSection() {
  return (
    <section className="section" id="donasi">
      <div className="container">
        <div className="donation">
          <div className="donation-text">
            <div className="eyebrow">Bakti Alumni</div>
            <h2>Wujudkan Program Beasiswa untuk Adik Kelas</h2>
            <p>
              Mari bersama-sama berkontribusi memberikan akses pendidikan lebih
              baik bagi adik-adik kelas kita di SMAIT Bunayya.
            </p>
          </div>
          <div className="donation-panel">
            <div className="goal">
              <span>Dana Terkumpul</span>
              <b>Rp 87.500.000</b>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '72%' }}></div>
            </div>
            <div className="sub">Target Rp 120.000.000 • 72% tercapai</div>
            <button className="btn btn-primary">Donasi Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  );
}
