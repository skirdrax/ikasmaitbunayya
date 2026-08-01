import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import BatchDirectory from './components/BatchDirectory';
import ManfaatIKA from './components/ManfaatIKA';
import KampusAlumni from './components/KampusAlumni';
import StudentOverlay from './components/StudentOverlay';
import ProfileModal from './components/ProfileModal';
import SaranPage from './components/SaranPage';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showSaranPage, setShowSaranPage] = useState(false);

  const handleSearchResult = (student) => {
    setSelectedStudent(student);
  };

  // Jika halaman Saran aktif, tampilkan itu saja
  if (showSaranPage) {
    return <SaranPage onBack={() => setShowSaranPage(false)} />;
  }

  return (
    <>
      {/* ===== SEO & SOCIAL SHARE ===== */}
      <Helmet>
        <title>IKA SMAIT Bunayya - Ikatan Alumni SMA IT Bunayya</title>
        <meta
          name="description"
          content="Ikatan Alumni SMAIT Bunayya. Wadah silaturahmi, kolaborasi, dan kontribusi alumni SMA IT Bunayya dari setiap angkatan."
        />
        <meta
          name="keywords"
          content="IKA SMAIT Bunayya, Alumni Bunayya, SMA IT Bunayya, SMAIT BUNAYYA, Smait Bunayya, smait bunayya, Ikatan Alumni, Silaturahmi Alumni"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="IKA SMAIT Bunayya" />

        {/* ===== Google Site Verification ===== */}
        <meta
          name="google-site-verification"
          content="zkj8PKbo_BafZdgfBaR3frObEAG2Y-FqqnMKuuNvHtY"
        />

        {/* ===== Open Graph (Facebook, WhatsApp, LinkedIn) ===== */}
        <meta
          property="og:title"
          content="IKA SMAIT Bunayya - Ikatan Keluarga Alumni SMA IT Bunayya"
        />
        <meta
          property="og:description"
          content="Ikatan Alumni SMAIT Bunayya. Wadah silaturahmi, kolaborasi, dan kontribusi alumni SMA IT Bunayya dari setiap angkatan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ika-smaitbunayya.web.id" />
        <meta
          property="og:image"
          content="https://ika-smaitbunayya.web.id/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IKA SMAIT Bunayya" />
        <meta property="og:locale" content="id_ID" />

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IKA SMAIT Bunayya - Ikatan Alumni SMA IT Bunayya"
        />
        <meta
          name="twitter:description"
          content="Ikatan Alumni SMAIT Bunayya. Wadah silaturahmi, kolaborasi, dan kontribusi alumni SMA IT Bunayya."
        />
        <meta
          name="twitter:image"
          content="https://ika-smaitbunayya.web.id/og-image.jpg"
        />

        {/* ===== Canonical URL ===== */}
        <link rel="canonical" href="https://ika-smaitbunayya.web.id" />

        {/* ===== Favicon ===== */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Helmet>

      <Navbar onSaranClick={() => setShowSaranPage(true)} />
      <Hero onSearchResult={handleSearchResult} />
      <MapSection />
      <BatchDirectory onSelectBatch={setSelectedBatch} />
      <ManfaatIKA />
      <KampusAlumni />
      <Footer />

      {selectedBatch && (
        <StudentOverlay
          batchId={selectedBatch}
          onBack={() => setSelectedBatch(null)}
          onSelectStudent={setSelectedStudent}
        />
      )}

      {selectedStudent && (
        <ProfileModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </>
  );
}

export default App;
