// ============ PETA SEBARAN ============
export const pins = [
  {
    city: 'Kepulauan Riau',
    top: '34%',
    left: '20%',
    topMobile: '34%',
    leftMobile: '10%',
    count: 1,
    campus: 'Polibatam',
  },
  {
    city: 'Lampung',
    top: '68%',
    left: '22%',
    topMobile: '60%',
    leftMobile: '12%',
    count: 4,
    campus: 'Unila & Polinela',
  },
  {
    city: 'Banten',
    top: '73%',
    left: '24%',
    topMobile: '67%',
    leftMobile: '16%',
    count: 15,
    campus: 'Untirta, Esa Unggul, Global Institute, PoliKirana',
  },
  {
    city: 'DKI Jakarta',
    top: '73%',
    left: '26.5%',
    topMobile: '66%',
    leftMobile: '21%',
    count: 7,
    campus: 'UNJ, Polimedia, UPER & UP',
  },
  {
    city: 'Jawa Barat',
    top: '77%',
    left: '29%',
    topMobile: '68%',
    leftMobile: '25%',
    count: 5,
    campus: 'Unpad, UIN Bandung, Polindra, ISBI,& Unsil',
  },
  {
    city: 'Jawa Tengah',
    top: '77%',
    left: '33%',
    topMobile: '70%',
    leftMobile: '30%',
    count: 7,
    campus: 'UNS, Unsoed, UIN Purwokerto, Telkom',
  },
  {
    city: 'Jawa Timur',
    top: '78%',
    left: '37%',
    topMobile: '71%',
    leftMobile: '37%',
    count: 2,
    campus: 'Unbraw & Polinema',
  },
];
// ============ DATA ANGKATAN ============
export const batches = [
  { id: 1, label: 'Angkatan 1', tahun: 2024, jumlah: 14 },
  { id: 2, label: 'Angkatan 2', tahun: 2025, jumlah: 22 },
  { id: 3, label: 'Angkatan 3', tahun: 2026, jumlah: 10 },
];

// ============ DATA ALUMNI ============
export const students = [
  // ===== ANGKATAN 1 (2024) - 14 ORANG =====
  {
    id: 1,
    nama: 'Azriel Alviansyah',
    jurusan: 'Bekerja',
    kampus: 'RS Sari Asih Sangiang',
    kota: 'Kota Tangerang',
    angkatan: 2024,
    foto: 'https://ui-avatars.com/api/?name=Ahmad+Ramadhan&background=1A4D3E&color=F7F5F0&size=160',
  },

  {
    id: 2,
    nama: 'Dimas Satrio Syawalis',
    jurusan: 'D3 Desain Grafis',
    kampus: 'Politeknik Negeri Media Kreatif ',
    kota: 'DKI Jakarta',
    angkatan: 2024,
    foto: 'https://ui-avatars.com/api/?name=Ahmad+Ramadhan&background=1A4D3E&color=F7F5F0&size=160',
  },
  {
    id: 3,
    nama: 'Jasmine Iltizam Fairuzzaki',
    jurusan: 'S1 Pendidikan Anak Usia Dini',
    kampus: 'Universitas Sultan Ageng Tirtayasa ',
    kota: 'Serang',
    angkatan: 2024,
    foto: 'https://ui-avatars.com/api/?name=Ahmad+Ramadhan&background=1A4D3E&color=F7F5F0&size=160',
  },
  {
    id: 4,
    nama: 'Lathifah Nur Ardhiyanti',
    jurusan: 'D3 Akuntansi',
    kampus: 'Universitas Sebelas Maret',
    kota: 'Surakarta',
    angkatan: 2024,
    foto: 'https://ui-avatars.com/api/?name=Ahmad+Ramadhan&background=1A4D3E&color=F7F5F0&size=160',
  },

  // ===== ANGKATAN 2 (2025) - 22 ORANG =====
  {
    id: 15,
    nama: 'zaki Ramadhan',
    jurusan: 'Teknik Sipil',
    kampus: 'Institut Teknologi Bandung',
    kota: 'Jawa Barat',
    angkatan: 2025,
    foto: 'https://ui-avatars.com/api/?name=Dzaki+Ramadhan&background=1A4D3E&color=F7F5F0&size=160',
  },

  // ===== ANGKATAN 3 (2026) - 10 ORANG =====
  {
    id: 37,
    nama: 'uwi Sartika',
    jurusan: 'Ekonomi Syariah',
    kampus: 'UIN Syarif Hidayatullah',
    kota: 'DKI Jakarta',
    angkatan: 2026,
    foto: 'https://ui-avatars.com/api/?name=Dewi+Sartika&background=1A4D3E&color=F7F5F0&size=160',
  },
];

// ============ STUDENTS BY BATCH ============
export const studentsByBatch = batches.reduce((acc, batch) => {
  acc[batch.id] = students.filter((s) => s.angkatan === batch.tahun);
  return acc;
}, {});
