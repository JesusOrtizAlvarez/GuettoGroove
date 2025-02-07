import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Programacion } from './pages/programacion';
import { Artistas } from './pages/artistas';
import { Contacta } from './pages/contacta';
import { ComprarEntradas } from './pages/tickets';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programacion" element={<Programacion />} />
      <Route path="/artistas" element={<Artistas />} />
      <Route path="/contacta" element={<Contacta />} />
      <Route path="/comprar-entradas/:id" element={<ComprarEntradas />} />
    </Routes>
  );
}