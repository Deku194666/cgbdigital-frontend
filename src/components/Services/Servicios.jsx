import { useEffect, useRef } from "react";
import "./Servicios.css";

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
  features: ["Capacitación", "Manuales y guías", "Sesiones grabadas", "Soporte post-capacitación"],
  color: "#6b4f2f",
  link: "/servicios/capacitacion-tecnologica",
},
{
  icon: "🔄",
  title: "Migración de Datos y Sistemas",
  text: "Muevo tu información y sistemas desde una plataforma antigua a una nueva, sin perder nada en el camino.",
  features: ["Migración sin pérdida de datos", "Cambio de plataforma", "Validación post-migración", "Plan de contingencia"],
  color: "#2f5f8a",
  link: "/servicios/migracion-datos",
},
{
  icon: "🎨",
  title: "Diseño UX/UI",
  text: "Mejoro cómo se ve y se usa tu sitio o sistema actual, sin necesidad de tocar todo el código de fondo.",
  features: ["Auditoría de usabilidad", "Rediseño de interfaz", "Prototipos interactivos", "Pruebas con usuarios"],
  color: "#a0527a",
  link: "/servicios/diseno-ux-ui",
},
];

const process = [
  { step: "01", title: "Descubrimiento", text: "Entendemos tu negocio, objetivos y a quién le hablas." },
  { step: "02", title: "Propuesta", text: "Alcance, plazos y cotización claros antes de empezar." },
  { step: "03", title: "Desarrollo", text: "Construcción con avances visibles desde tu portal." },
  { step: "04", title: "Lanzamiento", text: "Publicación en producción y pruebas finales contigo." },
  { step: "05", title: "Soporte", text: "Garantía inicial y, si quieres, plan de mantención continuo." },
];

const plans = [
  {
    name: "Proyecto Cerrado",
    tag: "Alcance definido",
    text: "Precio fijo acordado antes de empezar. Ideal si ya sabes exactamente qué necesitas.",
  },
  {
    name: "Por Horas",
    tag: "Flexible",
    text: "Pagas solo por el trabajo realizado. Bueno para tareas puntuales o cambios continuos.",
  },
  {
    name: "Plan Mensual",
    tag: "Relación continua",
    text: "Una tarifa fija mensual que incluye horas de soporte, mantención y prioridad de atención.",
  },
];

// Hook simple para revelar elementos al hacer scroll
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const RevealCard = ({ children, className = "", style }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
};

const Servicios = () => {
  return (
    <div className="svc-page">
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-grid-bg" aria-hidden="true" />
        <div className="svc-hero-content">
          <span className="svc-eyebrow">CATÁLOGO DE SERVICIOS</span>
          <h1>
            Planos claros para
            <br />
            construir tu proyecto
          </h1>
          <p className="svc-hero-text">
            Desde una landing page simple hasta un portal completo con
            clientes, agenda y pagos. Elegimos juntos las piezas que tu
            negocio realmente necesita.
          </p>
          <div className="svc-hero-actions">
            <a href="/contact" className="svc-btn svc-btn-primary">
              Solicitar cotización
            </a>
            <a href="#catalogo" className="svc-btn svc-btn-ghost">
              Ver servicios
            </a>
          </div>
        </div>

        <svg
          className="svc-hero-schematic"
          viewBox="0 0 420 300"
          fill="none"
          aria-hidden="true"
        >
          <rect x="20" y="20" width="120" height="60" rx="4" className="svc-draw" style={{ animationDelay: "0.1s" }} />
          <text x="80" y="55" textAnchor="middle" className="svc-schem-label">INICIO</text>

          <rect x="180" y="20" width="120" height="60" rx="4" className="svc-draw" style={{ animationDelay: "0.3s" }} />
          <text x="240" y="55" textAnchor="middle" className="svc-schem-label">SERVICIOS</text>

          <rect x="100" y="130" width="120" height="60" rx="4" className="svc-draw" style={{ animationDelay: "0.5s" }} />
          <text x="160" y="165" textAnchor="middle" className="svc-schem-label">PORTAL</text>

          <rect x="260" y="130" width="120" height="60" rx="4" className="svc-draw" style={{ animationDelay: "0.7s" }} />
          <text x="320" y="165" textAnchor="middle" className="svc-schem-label">CONTACTO</text>

          <path d="M80 80 L80 105 L160 105 L160 130" className="svc-draw-line" style={{ animationDelay: "0.9s" }} />
          <path d="M240 80 L240 105 L320 105 L320 130" className="svc-draw-line" style={{ animationDelay: "1.1s" }} />
          <path d="M140 50 L180 50" className="svc-draw-line" style={{ animationDelay: "1.3s" }} />
        </svg>
      </section>

      {/* CATALOGO DE SERVICIOS — mismas tarjetas que en Home */}
      <section className="svc-catalog" id="catalogo">
        <div className="svc-section-head">
          <span className="svc-eyebrow">01 — SERVICIOS</span>
          <h2>Todo lo que podemos construir para ti</h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <RevealCard
              key={i}
              className="service-card"
              style={{ "--card-color": s.color, transitionDelay: `${(i % 4) * 60}ms` }}
            >
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
            </RevealCard>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="svc-process">
        <div className="svc-section-head">
          <span className="svc-eyebrow">02 — SECUENCIA DE TRABAJO</span>
          <h2>Cómo pasamos de idea a producción</h2>
        </div>

        <div className="svc-process-line">
          {process.map((p) => (
            <RevealCard key={p.step} className="svc-process-step">
              <span className="svc-process-num">{p.step}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* MODELOS DE COBRO */}
      <section className="svc-plans">
        <div className="svc-section-head">
          <span className="svc-eyebrow">03 — MODELOS DE TRABAJO</span>
          <h2>Formas de trabajar juntos</h2>
        </div>

        <div className="svc-plans-grid">
          {plans.map((plan) => (
            <RevealCard key={plan.name} className="svc-plan-card">
              <span className="svc-plan-tag">{plan.tag}</span>
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="svc-cta">
        <RevealCard className="svc-cta-inner">
          <h2>¿Listo para construir tu proyecto?</h2>
          <p>Cuéntame qué necesitas y armamos juntos el plano.</p>
          <a href="/contact" className="svc-btn svc-btn-primary">
            Escríbenos
          </a>
        </RevealCard>
      </section>
    </div>
  );
};

export default Servicios;