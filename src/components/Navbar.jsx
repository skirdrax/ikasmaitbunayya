import { useState, useEffect } from 'react';

export default function Navbar({ onSaranClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState('beranda');

  // ===== DETEK SCROLL & DIRECTION (HIDE/SHOW) =====
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // ===== SCROLL SPY =====
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['beranda', 'peta', 'direktori', 'manfaat', 'kampus'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveMenu(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // ===== HANDLE MENU CLICK =====
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false);

    const element = document.getElementById(menu);
    if (element) {
      const headerHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`${scrolled ? 'scrolled' : ''} ${!visible ? 'nav-hidden' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <div>
            IKA SMA IT BUNAYYA
            <small>Ikatan Keluarga Alumni SMA IT BUNAYYA</small>
          </div>
        </div>

        <div className="nav-links">
          <a
            href="#beranda"
            className={activeMenu === 'beranda' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('beranda');
            }}>
            Beranda
          </a>
          <a
            href="#peta"
            className={activeMenu === 'peta' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('peta');
            }}>
            Peta Sebaran
          </a>
          <a
            href="#direktori"
            className={activeMenu === 'direktori' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('direktori');
            }}>
            Direktori
          </a>
          <a
            href="#manfaat"
            className={activeMenu === 'manfaat' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('manfaat');
            }}>
            Manfaat
          </a>
          <a
            href="#kampus"
            className={activeMenu === 'kampus' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('kampus');
            }}>
            Kampus Alumni
          </a>
        </div>

        <div className="nav-right">
          <button className="btn btn-report" onClick={onSaranClick}>
            Saran & Masukan
          </button>
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
          <button
            className="btn btn-report mobile-report"
            onClick={onSaranClick}>
            Saran & Masukan
          </button>
        </div>
      )}
    </header>
  );
}
