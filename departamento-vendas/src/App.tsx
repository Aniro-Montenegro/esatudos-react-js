import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';

import { Home } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '16px', background: '#090F25', display: 'flex', gap: '24px', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#F2C400', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/produtos" style={{ color: '#F2C400', textDecoration: 'none', fontWeight: 'bold' }}>Produtos</Link>
      </nav>

      {/* Configuração das Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter >
  );
}