import React from 'react';
import './RegistroHabitacion.css';

const RegistroHabitacion = () => {
  return (
    <div className="registro-habitacion-container">
      <h1 className="titulo">REGISTRO DE HABITACION</h1>
      
      <div className="formulario">
        <div className="fila">
          <div className="campo">
            <label>Nº HABITACION :</label>
            <select>
              <option>Seleccionar</option>
              {/* Opciones de número de habitación */}
            </select>
          </div>

          <div className="campo">
            <label>TIPO DE HABITACION :</label>
            <select>
              <option>Seleccionar</option>
              {/* Opciones de tipo de habitación */}
            </select>
          </div>

          <div className="campo">
            <label>NIVEL / PISO :</label>
            <select>
              <option>Seleccionar</option>
              {/* Opciones de nivel o piso */}
            </select>
          </div>
        </div>

        <div className="fila">
          <div className="campo">
            <label>ESTADO :</label>
            <select>
              <option>Seleccionar</option>
              {/* Opciones de estado */}
            </select>
          </div>

          <div className="campo">
            <label>PRECIO :</label>
            <input type="text" value="0.0 Bs" readOnly />
          </div>
        </div>

        <div className="fila descripcion">
          <div className="campo">
            <label>DESCRIPCION :</label>
            <textarea placeholder="Descripción de la habitación"></textarea>
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
