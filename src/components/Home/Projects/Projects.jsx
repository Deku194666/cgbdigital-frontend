import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaHeartbeat,
  FaDatabase,
  FaArrowRight,
   
} from "react-icons/fa";
import "./Projects.css";

const tagIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <FaDatabase />,
  "App Móvil": <FaMobileAlt />,
  Salud: <FaHeartbeat />,
};

const projects = [
  {
    name: "Hikari",
    initial: "H",
    category: "Plataforma Web · Veterinaria",
    description:
      "Plataforma full-stack de gestión veterinaria con dashboards para veterinarios y clientes, alertas de stock y sistema de citas.",
    role: "Desarrollo full-stack",
    year: "2026",
    highlights: [
      "Sistema de citas con recordatorios automáticos",
      "Panel de administración de stock e inventario",
      "Fichas clínicas por paciente con historial",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    status: "Entregado",
    statusType: "done",
    liveLink: "https://www.hikarivet.com/",
    repoLink: "#",
  },
  {
    name: "Fitnex",
    initial: "F",
    category: "App Móvil · Salud Digital",
    description:
      "Aplicación de salud digital pensada para el seguimiento de salud integral. Actualmente en fase de mejora continua.",
    role: "Desarrollo de producto",
    year: "2025",
    highlights: [
      "Seguimiento de progreso físico y mental por usuario",
      "Registro de sesiones y ejercicios asignados",
      "Pensada para uso diario en consulta y en casa",
    ],
    tags: ["App Móvil", "Salud"],
    status: "En desarrollo",
    statusType: "progress",
    liveLink: null,
    repoLink: null,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <div className="projects-header">
        <span className="section-eyebrow3">Nuestro trabajo</span>
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-subtitle">
          Productos reales que hemos desarrollado de principio a fin, desde el 
          diseño hasta el despliegue en producción.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className={`project-card-header header-${p.statusType}`}>
              <span className="project-initial">{p.initial}</span>
              <span className={`project-status status-${p.statusType}`}>
                {p.status}
              </span>
            </div>

            <div className="project-card-body">
              <span className="project-category">{p.category}</span>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-description">{p.description}</p>

              <div className="project-meta">
                <div className="project-meta-item">
                  <span className="meta-label">Rol</span>
                  <span className="meta-value">{p.role}</span>
                </div>
                <div className="project-meta-item">
                  <span className="meta-label">Año</span>
                  <span className="meta-value">{p.year}</span>
                </div>
              </div>

              <ul className="project-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span className="project-tag" key={j}>
                    {tagIcons[tag]} {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {p.liveLink && (
                  <a href={p.liveLink} className="project-btn project-btn-primary"   target="_blank" rel="noopener noreferrer"    >  
                    Ver proyecto <FaArrowRight />
                  </a>
                )}
                
                {!p.liveLink && !p.repoLink && (
                  <a href="#contacto" className="project-btn project-btn-primary">
                    Quiero probar {p.name} <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;