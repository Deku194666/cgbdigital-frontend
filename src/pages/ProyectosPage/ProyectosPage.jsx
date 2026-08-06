



import React from "react";
import Projects from "../../components/Home/Projects/Projects";
import "./ProyectosPage.css";

const ProyectosPage = () => {
  return (
    <div className="proyectospage">
      {/* HERO */}
      <div
        className="proyectospage-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 51, 0.88), rgba(30, 58, 110, 0.82)), url(${process.env.PUBLIC_URL}/images/hero-office.jpg)`,
        }}
      >
        <div className="proyectospage-hero-inner">
          <span className="section-eyebrow">Nuestro trabajo</span>
          <h1 className="proyectospage-hero-title">Proyectos</h1>
          <p className="proyectospage-hero-subtitle">
            Algunos de nuestros proyectos mas destacados.
          </p>
        </div>
      </div>

      {/* GRID DE PROYECTOS */}
      <Projects />
    </div>
  );
};

export default ProyectosPage;