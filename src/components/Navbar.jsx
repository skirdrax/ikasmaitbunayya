import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L14.5 8.5L21 9.3L16 13.8L17.5 20.5L12 17L6.5 20.5L8 13.8L3 9.3L9.5 8.5Z" />
            </svg>
          </div>
          <div>
            IKA SMA IT Bunayya
            <small>Ikatan Alumni</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#beranda" className="active">
            Beranda
          </a>
          <a href="#peta">Peta Sebaran</a>
          <a href="#direktori">Direktori</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </div>

        <div className="nav-right">
          <button className="btn btn-join">Gabung</button>
          <button className="burger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#beranda">Beranda</a>
          <a href="#peta">Peta Sebaran</a>
          <a href="#direktori">Direktori</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
          <button className="btn btn-join">Gabung</button>
        </div>
      )}
    </header>
  );
}
