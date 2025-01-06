// src/App.tsx
import { Routes, Route } from 'react-router-dom'; // Mengimpor Routes dan Route
import HomePage from './pages/HomePage'; // Komponen halaman utama
import AboutPage from './pages/AboutPage'; // Komponen halaman tentang

const App = () => {
  return (
    <div>
      {/* Menampilkan header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
