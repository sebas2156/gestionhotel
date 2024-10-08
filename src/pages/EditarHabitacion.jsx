import React, { useState } from 'react';
import '../styles/EditarHabitacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTag, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const EditarHabitacion = () => {
  // Estados simulados de la habitación a editar
  const [habitacion, setHabitacion] = useState({
    numero: 'A1',
    tipo: 'Matrimonial',
    nivel: 'Piso 1',
    estado: 'Limpio',
    precio: '90.0 Bs',
    descripcion: 'CUENTA CON WIFI Y TV CABLE',
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitacion({ ...habitacion, [name]: value });
  };

  return (
    <div className="editar-habitacion-container">
      <h1 className="titulo">Editar Datos de Habitación</h1>
      
      <div className="formulario">
        <div className="fila">
          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faBed} className="icon" />
              Nº Habitación:
            </label>
            <select name="numero" value={habitacion.numero} onChange={handleChange}>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              {/* Añade más opciones según sea necesario */}
            </select>
          </div>

          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faTag} className="icon" />
              Tipo de Habitación:
            </label>
            <select name="tipo" value={habitacion.tipo} onChange={handleChange}>
              <option value="Matrimonial">Matrimonial</option>
              <option value="Doble">Doble</option>
              {/* Añade más opciones según sea necesario */}
            </select>
          </div>

          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Nivel / Piso:
            </label>
            <select name="nivel" value={habitacion.nivel} onChange={handleChange}>
              <option value="Piso 1">Piso 1</option>
              <option value="Piso 2">Piso 2</option>
              {/* Añade más opciones según sea necesario */}
            </select>
          </div>
        </div>

        <div className="fila">
          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Estado:
            </label>
            <select name="estado" value={habitacion.estado} onChange={handleChange}>
              <option value="Limpio">Limpio</option>
              <option value="Ocupado">Ocupado</option>
              {/* Añade más opciones según sea necesario */}
            </select>
          </div>

          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              Precio:
            </label>
            <input
              type="text"
              name="precio"
              value={habitacion.precio}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="fila descripcion">
          <div className="campo">
            <label>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Descripción:
            </label>
            <textarea
              name="descripcion"
              value={habitacion.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="botones">
          <button className="btn-atras">Volver Atrás</button>
          <button className="btn-guardar">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
};

export default EditarHabitacion;
