import { useState } from 'react';
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
