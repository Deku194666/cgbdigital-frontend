import React from "react";
import "./Services.css";

const services = [
  {
    icon: "⚙️",
    title: "Desarrollo de Software",
    text: "Creamos soluciones a medida para automatizar y potenciar tu negocio.",
    features: ["Software a medida", "Integraciones", "Optimización de procesos", "Soporte continuo"],
    color: "#2f8f4e",
    link: "/servicios/desarrollo-software",
  },
  {
    icon: "📱",
    title: "Apps Móviles",
    text: "Diseñamos aplicaciones móviles modernas, rápidas y fáciles de usar.",
    features: ["iOS y Android", "Diseño UX/UI", "Notificaciones push", "Publicación en tiendas"],
    color: "#7b3fa0",
    link: "/servicios/apps-moviles",
  },
  {
    icon: "☁️",
    title: "Sistemas en la Nube",
    text: "Infraestructura segura, escalable y disponible cuando la necesites.",
    features: ["Hosting en la nube", "Copias de seguridad", "Escalabilidad", "Monitoreo 24/7"],
    color: "#1d6fd6",
    link: "/servicios/sistemas-nube",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    text: "Construimos sitios webs y plataformas rápidas, responsivas y efectivas.",
    features: ["Sitios corporativos", "E-commerce", "Diseño responsivo", "SEO básico"],
    color: "#1656b0",
    link: "/servicios/desarrollo-web",
  },
  {
    icon: "🔧",
    title: "Automatización y Soporte",
    text: "Optimizamos procesos y damos soporte técnico experto a tu equipo.",
    features: ["Soporte técnico", "Automatización de tareas", "Mantenimiento", "Asesoría técnica"],
    color: "#e08a1e",
    link: "/servicios/automatizacion-soporte",
  },
  {
    icon: "🤖",
    title: "Soluciones con IA",
    text: "Aplicamos inteligencia artificial para impulsar la toma de decisiones.",
    features: ["Chatbots", "Análisis de datos", "Automatización inteligente", "Integraciones IA"],
    color: "#546272",
    link: "/servicios/soluciones-ia",
  },
  {
    icon: "🖥️",
    title: "Reparación de Equipos de PC",
    text: "Diagnóstico y reparación de computadores, ya sea por fallas de hardware o software.",
    features: ["Diagnóstico gratuito", "Formateo e instalación", "Cambio de piezas", "Limpieza y mantención"],
    color: "#c94f4f",
    link: "/servicios/reparacion-equipos",
  },

  {
  icon: "📡",
  title: "Administración de Redes",
  text: "Configuramos y mantenemos tu red y servidores para que todo tu equipo funcione sin interrupciones.",
  features: ["Administración de Active Directory", "Mantención de servidores", "Configuración de redes", "Soporte remoto y presencial"],
  color: "#2f7d6b",
  link: "/servicios/administracion-redes",
},


{
  icon: "🛡️",
  title: "Ciberseguridad Básica",
  text: "Protegemos tus equipos y tu red contra amenazas comunes, con buenas prácticas de seguridad y respaldo.",
  features: ["Firewalls y antivirus empresarial", "Políticas de acceso y contraseñas", "Respaldo de seguridad", "Protección ante amenazas comunes"],
  color: "#3b4a6b",
  link: "/servicios/ciberseguridad-basica",
},

{
  icon: "🎓",
  title: "Capacitación Tecnológica",
  text: "Enseñamos a ti y a tu equipo a usar bien las herramientas que implementamos.",
  features: ["Capacitación", "Manuales y guías", "Sesiones grabadas", "Soporte posterior a capacitación"],
  color: "#6b4f2f",
  link: "/servicios/capacitacion-tecnologica",
},
{
  icon: "🔄",
  title: "Migración de Datos y Sistemas",
  text: "Movemos tu información y sistemas desde una plataforma antigua a una nueva, sin perder nada en el camino.",
  features: ["Migración sin pérdida de datos", "Cambio de plataforma", "Validación post-migración", "Plan de contingencia"],
  color: "#2f5f8a",
  link: "/servicios/migracion-datos",
},
{
  icon: "🎨",
  title: "Diseño UX/UI",
  text: "Mejoramos cómo se ve y se usa tu sitio o sistema actual, sin necesidad de tocar todo el código de fondo.",
  features: ["Auditoría de usabilidad", "Rediseño de interfaz", "Prototipos interactivos", "Pruebas con usuarios"],
  color: "#a0527a",
  link: "/servicios/diseno-ux-ui",
},

];

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="services-header">
        <span className="section-eyebrow2">Qué hacemos</span>
        <h2 className="section-title">Nuestros servicios</h2>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i} style={{ "--card-color": s.color }}>
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-text">{s.text}</p>

            <ul className="service-features">
              {s.features.map((f, j) => (
                <li key={j}>
                  <span className="check-icon">✓</span> {f}
                </li>
              ))}
            </ul>

            <a href={s.link} className="service-cta">
              Más información
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;