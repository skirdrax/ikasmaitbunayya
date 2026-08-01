import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pins } from '../data/mockData.js';

export default function MapSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fungsi untuk ambil koordinat sesuai device
  const getPinPosition = (pin) => {
    if (isMobile) {
      return {
        top: pin.topMobile || pin.top,
        left: pin.leftMobile || pin.left,
      };
    }
    return {
      top: pin.top,
      left: pin.left,
    };
  };

  return (
    <section className="section" id="peta">
      <div className="container">
        <div className="section-head" data-aos="fade-up" data-aos-delay="0">
          <div className="eyebrow orange">Peta Sebaran</div>
          <h2>Alumni Tersebar di Seluruh Indonesia</h2>
          <p>Alumni SMAIT Bunayya di berbagai Provinsi</p>
        </div>

        <div className="map-simple" data-aos="fade-up" data-aos-delay="150">
          <div className="map-title" data-aos="fade-down" data-aos-delay="100">
            PETA SEBARAN ALUMNI SMA IT BUNAYYA DI INDONESIA
          </div>

          <div className="map-grid">
            <img
              src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/id/vector.svg"
              alt="Peta Indonesia"
              className="map-bg-svg"
            />

            {pins.map((pin, i) => {
              const pos = getPinPosition(pin);
              const delay = 100 + i * 50;
              return (
                <div
                  key={i}
                  className="map-point"
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}>
                  <div className="map-point-dot"></div>
                  <div className="map-point-label">{pin.city}</div>
                  <div className="map-point-tooltip">
                    <strong>{pin.city}</strong>
                    <br />
                    <span>{pin.count} Alumni</span>
                    <br />
                    <small className="campus-text">{pin.campus}</small>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="map-legend-simple"
            data-aos="fade-up"
            data-aos-delay="500">
            <span className="legend-dot"></span>
            <span>Sebaran Alumni</span>
          </div>
        </div>
      </div>
    </section>
  );
}
