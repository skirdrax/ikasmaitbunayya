import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ManfaatIKA() {
  const manfaatList = [
    {
      id: 1,
      title: 'Silaturahmi',
      desc: 'Mempererat tali persaudaraan antar alumni lintas angkatan, menjaga ukhuwah Islamiyah yang kokoh.',
    },
    {
      id: 2,
      title: 'Berbagi Ilmu & Pengalaman',
      desc: 'Wadah berbagi pengalaman profesional, akademik, dan kehidupan untuk saling menginspirasi.',
    },
    {
      id: 3,
      title: 'Pengembangan Karir',
      desc: 'Akses ke jaringan profesional dan peluang karir melalui sesi sharing dan kolaborasi antar alumni.',
    },
    {
      id: 4,
      title: 'Beasiswa & Bantuan Pendidikan',
      desc: 'Menggalang dana beasiswa untuk adik-adik kelas dan program bantuan pendidikan lainnya.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="section" id="manfaat">
      <div className="container">
        <div className="section-head" data-aos="fade-up" data-aos-delay="0">
          <div className="eyebrow orange">Manfaat IKA</div>
          <h2>IKA SMA IT Bunayya</h2>
          <p>
            Ikatan Alumni (IKA) SMAIT Bunayya hadir untuk memberikan manfaat
          </p>
        </div>

        {/* ===== LAYOUT KIRI-KANAN TETAP ===== */}
        <div className="manfaat-layout" data-aos="fade-up" data-aos-delay="150">
          {/* ===== SISI KIRI: MENU ===== */}
          <div className="manfaat-sidebar">
            {manfaatList.map((item, index) => (
              <div
                key={item.id}
                className={`manfaat-menu ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}>
                <span className="manfaat-menu-title">{item.title}</span>
                <span className="manfaat-menu-arrow">→</span>
              </div>
            ))}
          </div>

          {/* ===== SISI KANAN: DETAIL ===== */}
          <div
            className="manfaat-detail"
            data-aos="fade-left"
            data-aos-delay="300">
            <h3>{manfaatList[activeIndex].title}</h3>
            <p>{manfaatList[activeIndex].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
