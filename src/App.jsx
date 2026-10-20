import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThisSeason from './pages/ThisSeason';
import History from './pages/History';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<ThisSeason />} />
          <Route path="/history" element={<History />} />
          <Route path="/historical" element={<Navigate to="/history" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
