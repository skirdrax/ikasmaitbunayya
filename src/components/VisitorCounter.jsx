export default function VisitorCounter() {
  return (
    <div className="visitor-counter-wrapper">
      {/* ===== VIEW TOTAL ===== */}
      <div className="visitor-item">
        <span className="visitor-label">Total</span>
        <a
          href="https://visitorbadge.io/status?path=ika-smaitbunayya.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="visitor-badge-link">
          <img
            src="https://api.visitorbadge.io/api/visitors?path=ika-smaitbunayya.web.id&label=View%20Total&labelColor=%23697689&countColor=%23263759&style=plastic&labelStyle=none"
            alt="View Total"
          />
        </a>
      </div>

      {/* ===== VIEW DAILY ===== */}
      <div className="visitor-item">
        <span className="visitor-label">Hari Ini</span>
        <a
          href="https://visitorbadge.io/status?path=ika-smaitbunayya.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="visitor-badge-link">
          <img
            src="https://api.visitorbadge.io/api/daily?path=ika-smaitbunayya.web.id&label=View%20Daily&labelColor=%23697689&countColor=%23263759&style=plastic&labelStyle=none"
            alt="View Daily"
          />
        </a>
      </div>
    </div>
  );
}
