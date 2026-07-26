export default function KampusAlumni() {
  const kampusList = [
    {
      nama: 'Universitas Indonesia',
      logo: 'https://cdn.simpleicons.org/linux/000000',
    },
    {
      nama: 'Institut Teknologi Bandung',
      logo: 'https://cdn.simpleicons.org/ubuntu/E95420',
    },
    {
      nama: 'Universitas Gadjah Mada',
      logo: 'https://cdn.simpleicons.org/debian/A81D33',
    },
    {
      nama: 'Universitas Airlangga',
      logo: 'https://cdn.simpleicons.org/redhat/EE0000',
    },
    {
      nama: 'Institut Teknologi Sepuluh Nopember',
      logo: 'https://cdn.simpleicons.org/fedora/294172',
    },
    {
      nama: 'UIN Syarif Hidayatullah',
      logo: 'https://cdn.simpleicons.org/archlinux/1793D1',
    },
    {
      nama: 'Universitas Padjadjaran',
      logo: 'https://cdn.simpleicons.org/centos/262577',
    },
    {
      nama: 'Universitas Brawijaya',
      logo: 'https://cdn.simpleicons.org/opensuse/73BA25',
    },
    {
      nama: 'Universitas Diponegoro',
      logo: 'https://cdn.simpleicons.org/gentoo/54487A',
    },
    {
      nama: 'Universitas Hasanuddin',
      logo: 'https://cdn.simpleicons.org/freebsd/AB2B28',
    },
    {
      nama: 'Universitas Andalas',
      logo: 'https://cdn.simpleicons.org/android/3DDC84',
    },
    {
      nama: 'Universitas Sriwijaya',
      logo: 'https://cdn.simpleicons.org/apple/000000',
    },
    {
      nama: 'Universitas Sumatera Utara',
      logo: 'https://cdn.simpleicons.org/windows/0078D4',
    },
    {
      nama: 'Universitas Mulawarman',
      logo: 'https://cdn.simpleicons.org/googlechrome/4285F4',
    },
    {
      nama: 'Universitas Riau',
      logo: 'https://cdn.simpleicons.org/firefox/FF7139',
    },
    {
      nama: 'Universitas Jenderal Soedirman',
      logo: 'https://cdn.simpleicons.org/opera/FF1B2D',
    },
    {
      nama: 'Universitas Sebelas Maret',
      logo: 'https://cdn.simpleicons.org/safari/000000',
    },
    {
      nama: 'Universitas Negeri Jakarta',
      logo: 'https://cdn.simpleicons.org/microsoftedge/0078D7',
    },
    {
      nama: 'Universitas Negeri Malang',
      logo: 'https://cdn.simpleicons.org/brave/FB542B',
    },
    {
      nama: 'Universitas Negeri Surabaya',
      logo: 'https://cdn.simpleicons.org/vivaldi/EF3939',
    },
  ];

  return (
    <section className="section" id="kampus">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Kampus Alumni</div>
          <h2>Alumni Tersebar di Berbagai Kampus</h2>
          <p>
            Alumni SMAIT Bunayya melanjutkan studi ke berbagai universitas
            ternama di seluruh Indonesia
          </p>
        </div>

        <div className="kampus-wrapper">
          <div className="kampus-grid">
            {kampusList.map((kampus, index) => (
              <div className="kampus-item" key={index}>
                <img src={kampus.logo} alt={kampus.nama} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
