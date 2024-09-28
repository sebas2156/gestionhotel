// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import RegistroHabitacion from './pages/Registrohabitacion';
import './styles/AppStyles.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro-habitacion" element={<RegistroHabitacion />} />
            {/* Agregar más rutas aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
