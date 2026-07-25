



import React, { useState } from "react";
import "./ClientPerfilSection.css";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
};

const ClientPerfilSection = () => {
  const storedUser = getStoredUser();
  const [nombre, setNombre] = useState(storedUser.name || "");
  const [telefono, setTelefono] = useState(storedUser.telefono || "");
  const [empresa, setEmpresa] = useState(storedUser.empresa || "");

  const inicial = (storedUser.name || "C").charAt(0);

  const handleGuardar = (e) => {
    e.preventDefault();
    // TODO: conectar con el endpoint de actualización de perfil
  };

  return (
    <div className="cp-perfil">
      <h1 className="cp-perfil-titulo">Mi Perfil</h1>
      <p className="cp-perfil-subtitulo">Tu información personal de la cuenta.</p>

      <form className="cp-perfil-card" onSubmit={handleGuardar}>
        <div className="cp-perfil-avatar-col">
          <div className="cp-perfil-avatar">{inicial}</div>
          <span className="cp-perfil-avatar-hint">
            Click en la foto para cambiarla (se guarda solo en este navegador por ahora)
          </span>
        </div>

        <div className="cp-perfil-campos">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Correo electrónico</label>
          <input type="email" value={storedUser.email || ""} disabled />
          <span className="cp-perfil-hint">El correo no se puede editar desde aquí</span>

          <label>Teléfono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <label>Empresa</label>
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />

          <button type="submit" className="cp-perfil-guardar">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientPerfilSection;