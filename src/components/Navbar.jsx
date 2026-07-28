import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('beranda');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false);
  };

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
            IKA SMANAYA
            <small>Ikatan Alumni SMA IT BUNAYYA</small>
          </div>
        </div>

        <div className="nav-links">
          <a
            href="#beranda"
            className={activeMenu === 'beranda' ? 'active' : ''}
            onClick={() => handleMenuClick('beranda')}>
            Beranda
          </a>
          <a
            href="#peta"
            className={activeMenu === 'peta' ? 'active' : ''}
            onClick={() => handleMenuClick('peta')}>
            Peta Sebaran
          </a>
          <a
            href="#direktori"
            className={activeMenu === 'direktori' ? 'active' : ''}
            onClick={() => handleMenuClick('direktori')}>
            Direktori
          </a>
          <a
            href="#manfaat"
            className={activeMenu === 'manfaat' ? 'active' : ''}
            onClick={() => handleMenuClick('manfaat')}>
            Manfaat
          </a>
          <a
            href="#kampus"
            className={activeMenu === 'kampus' ? 'active' : ''}
            onClick={() => handleMenuClick('kampus')}>
            Kampus Alumni
          </a>
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
          <a
            href="#beranda"
            className={activeMenu === 'beranda' ? 'active' : ''}
            onClick={() => handleMenuClick('beranda')}>
            Beranda
          </a>
          <a
            href="#peta"
            className={activeMenu === 'peta' ? 'active' : ''}
            onClick={() => handleMenuClick('peta')}>
            Peta Sebaran
          </a>
          <a
            href="#direktori"
            className={activeMenu === 'direktori' ? 'active' : ''}
            onClick={() => handleMenuClick('direktori')}>
            Direktori
          </a>
          <a
            href="#manfaat"
            className={activeMenu === 'manfaat' ? 'active' : ''}
            onClick={() => handleMenuClick('manfaat')}>
            Manfaat
          </a>
          <a
            href="#kampus"
            className={activeMenu === 'kampus' ? 'active' : ''}
            onClick={() => handleMenuClick('kampus')}>
            Kampus Alumni
          </a>
          <button className="btn btn-join">Gabung</button>
        </div>
      )}
    </header>
  );
}
