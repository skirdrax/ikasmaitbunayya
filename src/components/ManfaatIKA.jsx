export default function ManfaatIKA() {
  const manfaatList = [
    {
      icon: '🤝',
      title: 'Silaturahmi',
      desc: 'Mempererat tali persaudaraan antar alumni lintas angkatan, menjaga ukhuwah Islamiyah yang kokoh.',
    },
    {
      icon: '📚',
      title: 'Berbagi Ilmu & Pengalaman',
      desc: 'Wadah berbagi pengalaman profesional, akademik, dan kehidupan untuk saling menginspirasi.',
    },
    {
      icon: '💼',
      title: 'Pengembangan Karir',
      desc: 'Akses ke jaringan profesional dan peluang karir melalui sesi sharing dan kolaborasi antar alumni.',
    },
    {
      icon: '🎓',
      title: 'Beasiswa & Bantuan Pendidikan',
      desc: 'Menggalang dana beasiswa untuk adik-adik kelas dan program bantuan pendidikan lainnya.',
    },
  ];

  return (
    <section className="section" id="manfaat">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Manfaat IKA</div>
          <h2>Manfaat Bergabung di IKA SMAIT Bunayya</h2>
          <p>
            Ikatan Alumni (IKA) SMAIT Bunayya hadir untuk memberikan manfaat
            nyata bagi seluruh alumni dan masyarakat
          </p>
        </div>

        <div className="manfaat-grid">
          {manfaatList.map((item, index) => (
            <div className="manfaat-card" key={index}>
              <div className="manfaat-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
