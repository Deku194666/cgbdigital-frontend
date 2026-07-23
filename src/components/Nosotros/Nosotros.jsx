import React from "react";
import "./Nosotros.css";

const team = [
  {
    name: "Carlos Garcés Jiménez",
    role: "Innovación y Desarrollo",
    bio: "Ingeniero Informático y Kinesiólogo. Lidera el desarrollo web, de apps y las soluciones tecnológicas de la empresa — con una mirada clínica poco común en el rubro tech.",
    photo: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Bárbara Pirul Hernández",
    role: "Estrategia Comercial",
    bio: "Ingeniera Comercial. A cargo de la relación con clientes y el crecimiento del negocio, asegurando que cada proyecto tenga sentido para quien lo pide.",
    photo: "https://i.pravatar.cc/400?img=47",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Los primeros pasos",
    text: "Carlos comienza a desarrollar proyectos propios mientras estudiaba, sumando experiencia real en desarrollo web y de apps.",
  },
  {
    year: "2026",
    title: "Nace CGB Digital",
    text: "Carlos y Bárbara unen tecnología y visión comercial para formalizar la empresa y comenzar a tomar proyectos externos.",
  },
  {
    year: "Hoy",
    title: "Construyendo el equipo",
    text: "Seguimos creciendo proyecto a proyecto, con la meta de sumar más personas al equipo de desarrollo y soporte.",
  },
];

const stats = [
  { number: "4+", label: "Proyectos desarrollados" },
  { number: "100%", label: "Proyectos a medida" },
  { number: "24h", label: "Tiempo de respuesta" },
  { number: "3", label: "Áreas de especialización" },
];

const stack = ["React", "React Native", "JavaScript", "HTML5", "CSS3", "Node.js", "Express", "MongoDB", "Python", "R", "mySQL", "Git", "Vercel", "Render",];

const values = [
  {
    icon: "🎯",
    title: "Enfoque en resultados",
    text: "Cada proyecto se mide por el problema real que resuelve, no solo por la tecnología usada.",
  },
  {
    icon: "🤝",
    title: "Cercanía con el cliente",
    text: "Explicamos todo en un lenguaje claro, sin tecnicismos innecesarios.",
  },
  {
    icon: "🔄",
    title: "Mejora continua",
    text: "Seguimos perfeccionando cada proyecto incluso después de entregado.",
  },
  {
    icon: "🌱",
    title: "Crecimiento conjunto",
    text: "Estamos construyendo el equipo pensando en crecer junto a nuestros clientes.",
  },
];

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      {/* Hero de la página */}
      <section className="nosotros-hero">
        <div className="nosotros-hero-circuit"></div>
        <div className="nosotros-hero-content">
          <span className="section-eyebrow-light">Quiénes somos</span>
          <h1 className="nosotros-hero-title">
            La historia detrás de <span className="highlight-orange">CGB Digital</span>
          </h1>
          <p className="nosotros-hero-text">
            Somos un equipo joven que combina tecnología, negocio y
            experiencia real en distintas áreas para construir soluciones
            digitales confiables.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="nosotros-stats">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Misión */}
      <section className="nosotros-mission">
        <div className="mission-card">
          <span className="mission-icon">🚀</span>
          <h2>Nuestra misión</h2>
          <p>
            Acompañar a personas y negocios en su transformación digital,
            ofreciendo soluciones tecnológicas cercanas, funcionales y hechas
            a medida — desde una página web hasta la reparación de un equipo.
          </p>
        </div>
        <div className="mission-card">
          <span className="mission-icon">🔭</span>
          <h2>Nuestra visión</h2>
          <p>
            Convertirnos en un equipo de referencia en desarrollo de
            software, apps y soporte técnico, incorporando en el futuro
            automatización avanzada y robótica a nuestros servicios.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="nosotros-team">
        <div className="nosotros-team-header">
          <span className="section-eyebrow5">El equipo</span>
          <h2 className="section-title">Las personas detrás del proyecto</h2>
          <p className="section-subtitle">
            Dos formaciones distintas, un mismo objetivo: construir
            tecnología que realmente sirva.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>

        <p className="team-note">
          Estamos construyendo el equipo — próximamente sumaremos más
          personas para desarrollo, soporte y diseño.
        </p>
      </section>

      {/* Historia */}
      <section className="nosotros-history">
        <div className="nosotros-team-header">
          <span className="section-eyebrow5">Nuestro camino</span>
          <h2 className="section-title">Cómo llegamos hasta aquí</h2>
        </div>

        <div className="timeline">
          {milestones.map((m, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="nosotros-values">
        <div className="nosotros-team-header">
          <span className="section-eyebrow5">Cómo trabajamos</span>
          <h2 className="section-title">Nuestros valores</h2>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <span className="value-icon">{v.icon}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack tecnológico */}
      <section className="nosotros-stack">
        <div className="nosotros-team-header">
          <span className="section-eyebrow5">Con qué trabajamos</span>
          <h2 className="section-title">Nuestro stack tecnológico</h2>
        </div>

        <div className="stack-grid">
          {stack.map((tech, i) => (
            <span className="stack-badge" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="nosotros-contact">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Conversemos sobre cómo podemos ayudarte a hacerlo realidad.</p>
        <div className="nosotros-contact-links">
          <a href="mailto:soporteinformatico@cgbdigital.com">
            ✉️ soporteinformatico@cgbdigital.com
          </a>
          <a href="tel:+56972664713">📞 +56 972 664 713</a>
          <a href="https://wa.me/56972664713" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp directo
          </a>
        </div>
        <a href="/#contacto" className="nosotros-contact-btn">
          Ir al formulario de contacto
        </a>
      </section>
    </div>
  );
};

export default Nosotros;