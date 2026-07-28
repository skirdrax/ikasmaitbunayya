import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import BatchDirectory from './components/BatchDirectory';
import ManfaatIKA from './components/ManfaatIKA';
import KampusAlumni from './components/KampusAlumni';
import StudentOverlay from './components/StudentOverlay';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // ===== FUNGSI INI DIPANGGIL DARI HERO =====
  const handleSearchResult = (student) => {
    console.log('🔍 App menerima student:', student);
    console.log('🔍 Nama student:', student?.nama);
    setSelectedStudent(student);
  };

  console.log('🟢 selectedStudent saat ini:', selectedStudent);

  return (
    <>
      <Navbar />
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
          onClose={() => {
            console.log('❌ Modal ditutup');
            setSelectedStudent(null);
          }}
        />
      )}
    </>
  );
}

export default App;
