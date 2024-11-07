// EditarHabitacion.jsx
import React, { useState } from 'react';
import '../styles/EditarHabitacion.css'; // Importa solo el CSS local para EditarHabitacion
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTag, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const EditarHabitacion = () => {
  const [habitacion, setHabitacion] = useState({
    numero: 'A1',
    tipo: 'Matrimonial',
    nivel: 'Piso 1',
    estado: 'Limpio',
    precio: '90.0 Bs',
    descripcion: 'CUENTA CON WIFI Y TV CABLE',
  });

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
            </select>
          </div>
          {/* Otros campos... */}
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
