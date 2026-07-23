



import React from "react";
import "./About.css";

const team = [
  {
    name: "Carlos Garcés Jiménez",
    role: "Innovación y Desarrollo",
    bio: "Ingeniero Informático y Kinesiólogo. Lidera el desarrollo web, de apps y las soluciones tecnológicas de la empresa — con una mirada clínica poco común en el rubro tech.",
    initials: "CG",
  },
  {
    name: "Bárbara Pirul Hernández",
    role: "Estrategia Comercial",
    bio: "Ingeniera Comercial. A cargo de la relación con clientes y el crecimiento del negocio.",
    initials: "BP",
  },
];

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="about-header">
        <span className="section-eyebrow">Quiénes somos</span>
        <h2 className="section-title">El equipo detrás de CGB Digital</h2>
        <p className="about-intro">
          Somos un equipo joven que combina tecnología, negocio y experiencia
          real en distintas áreas para construir soluciones digitales
          confiables.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="team-avatar">{member.initials}</div>
            <h3 className="team-name">{member.name}</h3>
            <span className="team-role">{member.role}</span>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;