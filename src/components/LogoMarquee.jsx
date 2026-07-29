export default function LogoMarquee() {
  const kampusList = [
    { nama: 'Universitas Padjadjaran', logo: '/assets/kampus/UNPAD.png' },
    { nama: 'Institut Pertanian Bogor', logo: '/assets/kampus/IPB.png' },
    { nama: 'Universitas Brawijaya', logo: '/assets/kampus/UB.png' },
    {
      nama: 'Universitas Negeri Sebelas Maret',
      logo: '/assets/kampus/UNS.png',
    },
    { nama: 'Universitas Negeri Jakarta', logo: '/assets/kampus/UNJ.png' },
    {
      nama: 'Universitas Sultan Ageng Tirtayasa',
      logo: '/assets/kampus/UNTIRTA.png',
    },
    {
      nama: 'Universitas Jenderal Soedirman',
      logo: '/assets/kampus/UNSOED.png',
    },
    { nama: 'Universitas Siliwangi', logo: '/assets/kampus/UNSIL.png' },
    { nama: 'Universitas Negeri Lampung', logo: '/assets/kampus/UNILA.png' },
    { nama: 'Institut Seni Budaya Bandung', logo: '/assets/kampus/ISBI.png' },
    { nama: 'UIN Jakarta', logo: '/assets/kampus/UINJ.png' },
    { nama: 'UIN Bandung', logo: '/assets/kampus/UINB.png' },
    { nama: 'UIN Purwokerto', logo: '/assets/kampus/UINP.png' },
    { nama: 'Politeknik Negeri Malang', logo: '/assets/kampus/POLINEMA.png' },
    {
      nama: 'Politeknik Negeri Indramayu',
      logo: '/assets/kampus/POLINDRA.png',
    },
    { nama: 'Politeknik Negeri Batam', logo: '/assets/kampus/POLIBATAM.png' },
    {
      nama: 'Politeknik Negeri Media Kreatif',
      logo: '/assets/kampus/POLIMEDIA.png',
    },
    { nama: 'Politeknik Negeri Lampung', logo: '/assets/kampus/POLINELA.png' },
    { nama: 'Politeknik Negeri Jember', logo: '/assets/kampus/POLIJE.png' },
    {
      nama: 'Politeknik Negeri Banyuwangi',
      logo: '/assets/kampus/POLIWANGI.png',
    },
    { nama: 'Universitas Pertamina', logo: '/assets/kampus/UPER.png' },
    { nama: 'Telkom University', logo: '/assets/kampus/TELKOM.png' },
    { nama: 'Universitas Pancasila', logo: '/assets/kampus/UP.png' },
    { nama: 'Universitas Esa Unggul', logo: '/assets/kampus/EU.png' },
    { nama: 'Global Institute University', logo: '/assets/kampus/GLO.png' },
    { nama: 'Politeknik Kirana', logo: '/assets/kampus/PK.png' },
  ];

  // Duplikat 3x buat infinite
  const duplicatedList = [
    ...kampusList,
    ...kampusList,
    ...kampusList,
    ...kampusList,
    ...kampusList,
    ...kampusList,
    ...kampusList,
  ];

  return (
    <div className="logo-marquee-wrapper">
      <div className="logo-marquee-track">
        {duplicatedList.map((kampus, index) => (
          <div className="logo-marquee-item" key={index}>
            <img src={kampus.logo} alt={kampus.nama} />
          </div>
        ))}
      </div>
    </div>
  );
}
