import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import RegistroHabitacion from './pages/Registrohabitacion';
import EditarHabitacion from './pages/EditarHabitacion';
import ThemeToggle from './components/ThemeToggle';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro-habitacion" element={<RegistroHabitacion />} />
            <Route path="/editar-habitacion" element={<EditarHabitacion />} />
            {/* Agregar más rutas aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
