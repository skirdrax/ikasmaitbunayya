const news = [
  {
    title: 'Reuni Akbar & Silaturahmi 10 Tahun Bunayya',
    desc: 'Ratusan alumni lintas angkatan berkumpul merayakan satu dekade perjalanan sekolah.',
    img: 'https://picsum.photos/seed/kegiatan1/500/320',
  },
  {
    title: 'Kajian Rutin: Membangun Karakter Qurani di Dunia Kerja',
    desc: 'Kajian bulanan bersama alumni praktisi dan asatidz pembina.',
    img: 'https://picsum.photos/seed/kegiatan2/500/320',
  },
  {
    title: 'Bunayya Mengajar: Bakti Alumni ke Sekolah Binaan',
    desc: 'Program berbagi ilmu dan motivasi untuk adik-adik di pelosok daerah.',
    img: 'https://picsum.photos/seed/kegiatan3/500/320',
  },
];

export default function NewsSection() {
  return (
    <section className="section" id="kegiatan">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Kegiatan &amp; Berita</div>
          <h2>Kabar Terbaru dari Keluarga Bunayya</h2>
          <p>
            Reuni akbar, kajian rutin, hingga program pengabdian — ikuti terus
            langkah IKA Bunayya.
          </p>
        </div>

        <div className="batch-grid">
          {news.map((n) => (
            <div className="batch-card" key={n.title}>
              <div className="batch-photo">
                <img src={n.img} alt={n.title} />
              </div>
              <div className="batch-body">
                <h3 className="news-title">{n.title}</h3>
                <p className="news-desc">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
