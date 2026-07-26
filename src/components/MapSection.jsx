import { pins, intlChips } from '../data/mockData.js';

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
          <div className="map-title">PETA INDONESIA</div>

          <div className="map-grid">
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
                  {pin.count} Alumni
                  <br />
                  {pin.campus}
                </div>
              </div>
            ))}
          </div>

          <div className="map-legend-simple">
            <span className="legend-dot"></span>
            <span>Sebaran Alumni</span>
          </div>
        </div>

        <div className="intl-strip">
          {intlChips.map((chip, i) => (
            <div key={i} className="intl-chip">
              <span className="dot"></span>
              {chip}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
