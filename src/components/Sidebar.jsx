import React from 'react';
import { NavLink } from 'react-router-dom';
import HotelIcon from '../icons/hotel.png'; // Cambia a la ruta de tu logo
import '../styles/SidebarStyles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Contenedor del icono del hotel */}
      <div className="hotel-icon-container">
        <img src={HotelIcon} alt="Hotel Logo" className="hotel-icon" />
      </div>
      
      <div className="nav-item">
        <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/registro-habitacion" activeClassName="active">Registro de habitaciones</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/editar-habitacion" activeClassName="active">Editar Habitación</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/ventas" activeClassName="active">Ventas</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/almacen" activeClassName="active">Almacén</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/parqueo" activeClassName="active">Parqueo</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/reportes" activeClassName="active">Reportes</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
