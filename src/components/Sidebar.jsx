// components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBed, 
  faPlus, 
  faEdit,
  faInfo, 
  faShoppingCart, 
  faBox, 
  faParking, 
  faChartLine,
  faChevronUp,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import '../styles/SidebarStyles.css';

const Sidebar = () => {
  const [isHabitacionOpen, setIsHabitacionOpen] = useState(false);

  const toggleHabitacion = () => {
    setIsHabitacionOpen(!isHabitacionOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Panel de Control</div>
      <div className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="icon" /> Inicio
        </Link>
      </div>
      <div className="nav-category">
        <div className="nav-item category-title" onClick={toggleHabitacion}>
          <span>
            <FontAwesomeIcon icon={faBed} className="icon" /> Habitaciones
          </span>
          <span className={`arrow ${isHabitacionOpen ? 'open' : ''}`}>
            <FontAwesomeIcon icon={isHabitacionOpen ? faChevronUp : faChevronRight} />
          </span>
        </div>
        <div className={`sub-items ${isHabitacionOpen ? 'show' : ''}`}>
          <div className="nav-item">
            <Link to="/registro-habitacion">
              <FontAwesomeIcon icon={faPlus} className="icon" /> Registro de habitaciones
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/editar-habitacion">
              <FontAwesomeIcon icon={faEdit} className="icon" /> Editar Habitación
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/registro-habitaciones">
              <FontAwesomeIcon icon={faInfo} className="icon" /> Informacion de habitaciones
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <Link to="/ventas">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Ventas
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/almacen">
          <FontAwesomeIcon icon={faBox} className="icon" /> Almacén
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/parqueo">
          <FontAwesomeIcon icon={faParking} className="icon" /> Parqueo
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/reportes">
          <FontAwesomeIcon icon={faChartLine} className="icon" /> Reportes
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
