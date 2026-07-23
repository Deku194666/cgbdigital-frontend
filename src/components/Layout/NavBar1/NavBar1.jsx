



import React, { useState } from "react";
import "./NavBar1.css";

const NavBar1 = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    // Por ahora solo redirige a la home con el término como query
    window.location.href = `/?buscar=${encodeURIComponent(search)}`;
  };

  return (
    <div className="navbar1">
      <a href="/" className="navbar1-brand">
        CGB <span className="brand-accent">Digital</span>
      </a>

      <form className="navbar1-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar servicios, proyectos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" aria-label="Buscar">
          🔍
        </button>
      </form>

      <div className="navbar1-actions">
        <a href="/login" className="navbar1-btn navbar1-btn-outline">
          Iniciar sesión
        </a>
        <a href="/register" className="navbar1-btn navbar1-btn-solid">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default NavBar1;