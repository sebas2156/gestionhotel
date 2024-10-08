import React from 'react';
import '../styles/Registrohabitacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTag, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const RegistroHabitacion = () => {
  return (
    <div className="registro-habitacion-container">
      <h1 className="titulo">Registro de Habitación</h1>
      
      <div className="formulario">
        <div className="fila">
          <div className="campo">
            <label htmlFor="numero-habitacion">
              <FontAwesomeIcon icon={faBed} className="icon" />
              Nº Habitación:
            </label>
            <select id="numero-habitacion">
              <option value="">Seleccionar</option>
              {/* Opciones de número de habitación */}
            </select>
          </div>

          <div className="campo">
            <label htmlFor="tipo-habitacion">
              <FontAwesomeIcon icon={faTag} className="icon" />
              Tipo de Habitación:
            </label>
            <select id="tipo-habitacion">
              <option value="">Seleccionar</option>
              {/* Opciones de tipo de habitación */}
            </select>
          </div>

          <div className="campo">
            <label htmlFor="nivel-piso">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Nivel / Piso:
            </label>
            <select id="nivel-piso">
              <option value="">Seleccionar</option>
              {/* Opciones de nivel o piso */}
            </select>
          </div>
        </div>

        <div className="fila">
          <div className="campo">
            <label htmlFor="estado">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Estado:
            </label>
            <select id="estado">
              <option value="">Seleccionar</option>
              {/* Opciones de estado */}
            </select>
          </div>

          <div className="campo">
            <label htmlFor="precio">
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              Precio:
            </label>
            <input type="text" id="precio" value="0.0 Bs" readOnly />
          </div>
        </div>

        <div className="fila descripcion">
          <div className="campo">
            <label htmlFor="descripcion">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Descripción:
            </label>
            <textarea id="descripcion" placeholder="Descripción de la habitación"></textarea>
          </div>
        </div>

        <div className="botones">
          <button className="btn-atras">Volver Atrás</button>
          <button className="btn-registrar">Agregar Registro</button>
        </div>
      </div>
    </div>
  );
};

export default RegistroHabitacion;
