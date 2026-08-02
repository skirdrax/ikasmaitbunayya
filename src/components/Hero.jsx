import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { students } from '../data/mockData.js';
import LogoMarquee from './LogoMarquee';

export default function Hero({ onSearchResult }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showNotFound, setShowNotFound] = useState(false);

  // ===== COUNTER ANIMASI =====
  const [counts, setCounts] = useState({ alumni: 0, pt: 0, kota: 0 });
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  // ===== INIT AOS =====
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    const targetAlumni = 45;
    const targetpt = 25;
    const targetKota = 15;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const duration = 2000;
            const startTime = Date.now();

            const animateCounter = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts({
                alumni: Math.round(ease * targetAlumni),
                pt: Math.round(ease * targetpt),
                kota: Math.round(ease * targetKota),
              });

              if (progress < 1) {
                requestAnimationFrame(animateCounter);
              }
            };

            animateCounter();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ===== SEARCH =====
  const handleSearch = (e) => {
    const value = e.target.value;

    setQuery(value);
    setSelectedStudent(null);
    setShowNotFound(false);

    if (value.length > 0) {
      const searchTerm = value.toLowerCase();
      const filtered = students.filter((student) => {
        const namaLower = student.nama.toLowerCase();
        return namaLower.startsWith(searchTerm);
      });
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (student) => {
    setQuery(student.nama);
    setSelectedStudent(student);
    setSuggestions([]);
    setShowSuggestions(false);
    setShowNotFound(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (selectedStudent) {
      console.log('✅ Membuka modal untuk:', selectedStudent.nama);
      if (onSearchResult) {
        onSearchResult(selectedStudent);
      }
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedStudent(null);
      setShowNotFound(false);
      return;
    }

    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) return;

    const student = students.find((s) => s.nama.toLowerCase() === searchTerm);

    if (student) {
      console.log('✅ Exact match ditemukan:', student.nama);
      if (onSearchResult) {
        onSearchResult(student);
      }
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedStudent(null);
      setShowNotFound(false);
    } else {
      setShowNotFound(true);
      setTimeout(() => {
        setShowNotFound(false);
      }, 3000);
    }
  };

  return (
    <section className="hero" id="beranda">
      <div className="hero-inner">
        <div className="hero-content">
          {/* ===== EYEBROW ===== */}
          <div className="eyebrow" data-aos="fade-down" data-aos-delay="0">
            Ikatan Alumni SMA IT Bunayya
          </div>

          {/* ===== SEARCH BAR ===== */}
          <div
            className="search-wrapper"
            data-aos="fade-up"
            data-aos-delay="100">
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Cari Nama Alumni yang anda kenal..."
                value={query}
                onChange={handleSearch}
                onFocus={() => query.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary">
                Cari
              </button>
            </form>

            {showSuggestions && query.length > 0 && (
              <div className="search-suggestions">
                {suggestions.length > 0 ? (
                  <>
                    {suggestions.map((student) => (
                      <div
                        key={student.id}
                        className="search-suggestion-item"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectSuggestion(student);
                        }}>
                        <div className="suggestion-avatar">
                          <img src={student.foto} alt={student.nama} />
                        </div>
                        <div className="suggestion-info">
                          <div className="suggestion-name">{student.nama}</div>
                          <div className="suggestion-detail">
                            {student.jurusan} • {student.kampus}
                          </div>
                          <div className="suggestion-detail">
                            {student.kota} • Angkatan {student.angkatan}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="search-suggestion-footer">
                      {suggestions.length} alumni ditemukan
                    </div>
                  </>
                ) : (
                  <div className="search-no-result">
                    <span>🔍</span>
                    <p>Tidak ada alumni yang ditemukan</p>
                    <small>Coba dengan kata kunci lain</small>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ===== TITLE ===== */}
          <h1 data-aos="fade-up" data-aos-delay="150">
            Menjalin <span className="accent">Silaturahmi</span>,<br />
            Mengabdi untuk Bangsa
          </h1>

          {/* ===== SUBTITLE ===== */}
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            Wadah silaturahmi, kolaborasi, dan kontribusi alumni SMA IT Bunayya
            dari setiap angkatan — tersebar di seluruh Indonesia
          </p>

          {/* ===== COUNTERS ===== */}
          <div className="counters" ref={counterRef}>
            <div className="counter-card">
              <div className="num">{counts.alumni.toLocaleString()}+</div>
              <div className="label">Alumni Terdaftar</div>
            </div>
            <div className="counter-card">
              <div className="num">{counts.pt}+</div>
              <div className="label">Perguruan Tinggi</div>
            </div>
            <div className="counter-card">
              <div className="num">{counts.kota}+</div>
              <div className="label">Kota Sebaran</div>
            </div>
          </div>
        </div>

        {/* ===== LOGO MARQUEE ===== */}
        <div>
          <LogoMarquee />
        </div>
      </div>

      {/* ===== POPUP NOT FOUND ===== */}
      {showNotFound && (
        <div className="popup-notfound">
          <div className="popup-notfound-content">
            <span className="popup-icon">🔍</span>
            <h3>Alumni Tidak Ditemukan</h3>
            <p>Mohon periksa kembali nama yang anda cari</p>
          </div>
        </div>
      )}
    </section>
  );
}
