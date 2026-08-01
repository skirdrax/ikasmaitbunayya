export default function VisitorCounter() {
  return (
    <div className="visitor-counter-wrapper">
      {/* ===== LABEL DI ATAS ===== */}
      <div className="visitor-label-top">
        <span>Pengunjung</span>
      </div>

      {/* ===== BADGE DI BAWAH ===== */}
      <div className="visitor-badge-bottom">
        <a
          href="https://visitorbadge.io/status?path=ika-smaitbunayya.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="visitor-badge-link">
          <img
            src="https://api.visitorbadge.io/api/visitors?path=ika-smaitbunayya.web.id&label=View%20Total&labelColor=%23697689&countColor=%23263759&style=plastic&labelStyle=none"
            alt="Visitor Counter"
          />
        </a>
      </div>
    </div>
  );
}
