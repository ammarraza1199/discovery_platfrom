import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChemistryQuantisPage } from './pages/ChemistryQuantisPage';
import { BiologicsDiscoveryPage } from './pages/BiologicsDiscoveryPage';
import { WallahGPTPage } from './pages/WallahGPTPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chemistry-quantis" element={<ChemistryQuantisPage />} />
        <Route path="/biologics-discovery" element={<BiologicsDiscoveryPage />} />
        <Route path="/wallahgpt" element={<WallahGPTPage />} />
        
        {/* Redirects for old routes */}
        <Route path="/chemistry42" element={<Navigate to="/chemistry-quantis" replace />} />
        <Route path="/generative-biologics" element={<Navigate to="/biologics-discovery" replace />} />
        <Route path="/preciousgpt" element={<Navigate to="/wallahgpt" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
