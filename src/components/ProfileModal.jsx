export default function ProfileModal({ student, onClose }) {
  if (!student) return null;

  return (
    <div
      className="modal-backdrop show"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-top">
          <button className="modal-close" onClick={onClose} aria-label="Tutup">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="modal-photo">
            <img src={student.foto} alt={student.nama} />
          </div>
          <h3 className="modal-name">{student.nama}</h3>
          <div className="modal-sub">{student.jurusan}</div>
        </div>

        <div className="modal-body">
          <div className="modal-card">
            <h5>Kampus</h5>
            <p>{student.kampus}</p>
          </div>
          <div className="modal-card">
            <h5>Kota</h5>
            <p>{student.kota}</p>
          </div>
          <div className="modal-card">
            <h5>Angkatan</h5>
            <p>{student.angkatan}</p>
          </div>

          <div className="modal-socials">
            <a href="#" title="LinkedIn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" title="Instagram">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" title="Email">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
