// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarStyles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-item">
        <Link to="/">Inicio</Link>
      </div>
      <div className="nav-item">
        <Link to="/registro-habitacion">Registro de habitaciones</Link>
      </div>
      <div className="nav-item">
        <Link to="/ventas">Ventas</Link>
      </div>
      <div className="nav-item">
        <Link to="/almacen">Almacén</Link>
      </div>
      <div className="nav-item">
        <Link to="/parqueo">Parqueo</Link>
      </div>
      <div className="nav-item">
        <Link to="/reportes">Reportes</Link>
      </div>
    </div>
  );
};

export default Sidebar;
