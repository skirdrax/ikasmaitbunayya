import { useState, useEffect, useRef } from 'react';
import { students } from '../data/mockData.js';

export default function Hero({ onSearchResult }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ===== COUNTER ANIMASI =====
  const [counts, setCounts] = useState({ alumni: 0, lulus: 0, kota: 0 });
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const targetAlumni = 50;
    const targetLulus = 100;
    const targetKota = 10;

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

              // Ease out cubic
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts({
                alumni: Math.round(ease * targetAlumni),
                lulus: Math.round(ease * targetLulus),
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

  const handleSelectStudent = (student) => {
    setQuery(student.nama);
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearchResult) {
      onSearchResult(student);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSelectStudent(suggestions[0]);
    }
  };

  return (
    <section className="hero" id="beranda">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="eyebrow">Ikatan Alumni SMA IT Bunayya</div>

          <div className="search-wrapper">
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
                placeholder="Cari Alumni (Nama / Jurusan / Kampus / Kota / Angkatan)"
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
                        onClick={() => handleSelectStudent(student)}>
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

          <h1>
            Menjalin <span className="accent">Silaturahmi</span>,<br />
            Mengabdi untuk Bangsa
          </h1>

          <p className="lead">
            Wadah silaturahmi, kolaborasi, dan kontribusi alumni SMA IT Bunayya
            dari setiap angkatan — tersebar di seluruh Indonesia
          </p>

          {/* COUNTERS DENGAN ANIMASI */}
          <div className="counters" ref={counterRef}>
            <div className="counter-card">
              <div className="num">{counts.alumni.toLocaleString()}+</div>
              <div className="label">Alumni Terdaftar</div>
            </div>
            <div className="counter-card">
              <div className="num">{counts.lulus}%</div>
              <div className="label">Lolos PTN </div>
            </div>
            <div className="counter-card">
              <div className="num">{counts.kota}+</div>
              <div className="label">Kota Sebaran</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
