import React, { useState } from 'react';
import '../styles/RegistroHabitaciones.css';

const RegistroHabitaciones = () => {
  // Datos simulados de habitaciones
  const [habitaciones, setHabitaciones] = useState([
    {
      numero: 'A1',
      descripcion: 'Descripción',
      precio: '90.0 Bs',
      tipo: 'Matrimonial',
      nivel: 'Piso 1',
      estado: 'DISPONIBLE',
    },
    {
      numero: 'A2',
      descripcion: 'Descripción',
      precio: '120.0 Bs',
      tipo: 'Doble',
      nivel: 'Piso 2',
      estado: 'OCUPADO',
    },
    // Agregar más habitaciones según sea necesario
  ]);

  // Función para manejar la eliminación de habitaciones
  const eliminarHabitacion = (numero) => {
    const nuevasHabitaciones = habitaciones.filter(
      (habitacion) => habitacion.numero !== numero
    );
    setHabitaciones(nuevasHabitaciones);
  };

  return (
    <div className="registro-habitaciones-container">
      <h1 className="titulo">REGISTRO DE HABITACIONES</h1>
      
      <div className="barra-superior">
        <input
          type="text"
          className="buscador"
          placeholder="Puede buscar por (Tipo Habitación), (Nivel Piso) o (Descripción)"
        />
        <button className="btn-buscar">Buscar</button>
        <button className="btn-agregar">
          Agregar nueva Habitación <span>+</span>
        </button>
      </div>

      <table className="tabla-habitaciones">
        <thead>
          <tr>
            <th>N° HABITACION</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
            <th>TIPO HABITACION</th>
            <th>NIVEL/PISO</th>
            <th>ESTADO</th>
            <th>EDITAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion) => (
            <tr key={habitacion.numero}>
              <td>{habitacion.numero}</td>
              <td>{habitacion.descripcion}</td>
              <td>{habitacion.precio}</td>
              <td>{habitacion.tipo}</td>
              <td>{habitacion.nivel}</td>
              <td>
                <span
                  className={`estado ${
                    habitacion.estado === 'DISPONIBLE' ? 'disponible' : 'ocupado'
                  }`}
                >
                  {habitacion.estado}
                </span>
              </td>
              <td>
                <button className="btn-editar">✏️</button>
              </td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarHabitacion(habitacion.numero)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroHabitaciones;
