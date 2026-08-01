export default function VisitorCounter() {
  return (
    <div className="visitor-counter-wrapper">
      {/* ===== KIRI: LABEL ===== */}
      <div className="visitor-label">
        <span>Pengunjung</span>
      </div>

      {/* ===== KANAN: BADGE ===== */}
      <div className="visitor-badge">
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
