export default function KampusAlumni() {
  const kampusList = [
    {
      nama: 'Universitas Padjadjaran',
      logo: '/assets/kampus/UNPAD.png',
    },
    {
      nama: 'Institut pertanian Bogor',
      logo: '/assets/kampus/IPB.png',
    },
    {
      nama: 'Universitas Brawijaya',
      logo: '/assets/kampus/UB.png',
    },

    {
      nama: 'Universitas Negeri Sebelas Maret',
      logo: '/assets/kampus/UNS.png',
    },

    {
      nama: 'Universitas Negeri Jakarta',
      logo: '/assets/kampus/UNJ.png',
    },
    {
      nama: 'Universitas Negeri Semarang',
      logo: '/assets/kampus/UNNES.png',
    },
    {
      nama: 'Universitas Sultan Ageng Tirtayasa',
      logo: '/assets/kampus/UNTIRTA.png',
    },
    {
      nama: 'Universitas jendral Soedirman',
      logo: '/assets/kampus/UNSOED.png',
    },
    {
      nama: 'Universitas Siliwangi',
      logo: '/assets/kampus/UNSIL.png',
    },

    {
      nama: 'Universitas Negeri Lampung',
      logo: '/assets/kampus/UNILA.png',
    },
    {
      nama: 'Institut Seni Budaya Bandung',
      logo: '/assets/kampus/ISBI.png',
    },
    {
      nama: 'UIN Jakarta',
      logo: '/assets/kampus/UINJ.png',
    },
    {
      nama: 'UIN Bandung',
      logo: '/assets/kampus/UINB.png',
    },
    {
      nama: 'UIN Purwokerto',
      logo: '/assets/kampus/UINP.png',
    },
    {
      nama: 'UIN Salatiga',
      logo: '/assets/kampus/UINS.png',
    },

    {
      nama: 'Politeknik Negeri Indramayu',
      logo: '/assets/kampus/POLINDRA.png',
    },
    {
      nama: 'Politeknik Negeri Batam',
      logo: '/assets/kampus/POLIBATAM.png',
    },
    {
      nama: 'Politeknik Negeri Media Kreatif',
      logo: '/assets/kampus/POLIMEDIA.png',
    },
    {
      nama: 'Politeknik Negeri Lampung',
      logo: '/assets/kampus/POLINELA.png',
    },

    {
      nama: 'Politeknik Negeri Banyuwangi',
      logo: '/assets/kampus/POLIWANGI.png',
    },

    {
      nama: 'Universitas Pertamina',
      logo: '/assets/kampus/UPER.png',
    },
    {
      nama: 'Telkom University',
      logo: '/assets/kampus/TELKOM.png',
    },
    {
      nama: 'Universitas Pancasila',
      logo: '/assets/kampus/UP.png',
    },
    {
      nama: 'Universitas Ahmad Dahlan',
      logo: '/assets/kampus/UAD.png',
    },

    {
      nama: 'Universitas Esa Unggul',
      logo: '/assets/kampus/EU.png',
    },
    {
      nama: 'Global Institute University',
      logo: '/assets/kampus/GLO.png',
    },
    {
      nama: 'Universitas Terbuka',
      logo: '/assets/kampus/UT.png',
    },
    {
      nama: 'Politeknik Kirana',
      logo: '/assets/kampus/PK.png',
    },
  ];

  return (
    <section className="section" id="kampus">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Kampus Alumni</div>
          <h2>Alumni Tersebar di Berbagai Kampus</h2>
          <p>
            Alumni SMA IT Bunayya melanjutkan studi ke berbagai Perguruan Tinggi
            Negeri & Swasta di seluruh Indonesia
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
