import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 51, 0.88), rgba(30, 58, 110, 0.82)), url(${process.env.PUBLIC_URL}/images/hero-office.jpg)`,
      }}
    >
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-logo-badge">CGB DIGITAL</div>
          <h1 className="hero-title">
            Transformando <span className="highlight-blue">ideas</span> en
            soluciones <span className="highlight-orange">digitales</span>
          </h1>
          <p className="hero-subtitle">
            Realizamos proyectos digitales a medida: desde sitios web y apps
            hasta reparación de equipos y soluciones con inteligencia
            artificial
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">
              Contáctanos
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;