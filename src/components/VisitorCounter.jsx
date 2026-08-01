export default function VisitorCounter() {
  return (
    <div className="visitor-counter-wrapper">
      {/* ===== BARIS ATAS: LABEL ===== */}
      <div className="visitor-label-row">
        <span>Pengunjung Website IKA Smait Bunayya</span>
      </div>

      {/* ===== BARIS BAWAH: BADGE ===== */}
      <div className="visitor-badge-row">
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
