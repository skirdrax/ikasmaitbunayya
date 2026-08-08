import { useState, useEffect } from 'react';

export default function PopupNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pake timeout biar setState ga langsung di dalam effect
    const timer = setTimeout(() => {
      const lastShown = localStorage.getItem('ika_popup_last_shown');
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      const lastShownTime = lastShown ? parseInt(lastShown, 10) : 0;

      if (!lastShown || isNaN(lastShownTime) || now - lastShownTime > oneDay) {
        setIsVisible(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem('ika_popup_last_shown', Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose}>
          ✕
        </button>
        <div className="popup-icon"></div>
        <h3 className="popup-title">
          Selamat Datang di Website IKA SMA IT Bunayya
        </h3>
        <p className="popup-text">
          Website IKA SMA IT Bunayya ini masih dalam tahap{' '}
          <strong>stabilitas performa</strong> dan{' '}
          <strong>pengembangan lanjutan</strong>.
          <br />
          <br />
          Mohon maaf jika performa website tidak optimal. Kami berkomitmen untuk
          bisa website dengan performa terbaik.
        </p>
        <button className="popup-btn" onClick={handleClose}>
          Mengerti, Saya Tahu
        </button>
      </div>
    </div>
  );
}
