import { pins } from '../data/mockData.js';

export default function MapSection() {
  return (
    <section className="section" id="peta">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Peta Sebaran</div>
          <h2>Alumni Tersebar di Seluruh Indonesia</h2>
          <p>
            Dari Sabang sampai Merauke, alumni SMAIT Bunayya hadir dan
            berprestasi di berbagai bidang
          </p>
        </div>

        <div className="map-simple">
          <div className="map-title">PETA SEBARAN ALUMNI INDONESIA</div>

          <div className="map-grid">
            {/* Vektor Siluet Peta Indonesia */}
            <img
              src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/id/vector.svg"
              alt="Peta Indonesia"
              className="map-bg-svg"
            />

            {pins.map((pin, i) => (
              <div
                key={i}
                className="map-point"
                style={{
                  top: pin.top,
                  left: pin.left,
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
            ))}
          </div>

          <div className="map-legend-simple">
            <span className="legend-dot"></span>
            <span>Sebaran Alumni</span>
          </div>
        </div>

        {/* INTERNATIONAL CHIPS DIHAPUS */}
      </div>
    </section>
  );
}
