import React from "react";
import "./WhyUs.css";

const points = [
  {
    icon: "🛡️",
    title: "Tecnología segura y confiable",
    text: "Aplicamos buenas prácticas de seguridad en cada proyecto que desarrollamos.",
  },
  {
    icon: "⏱️",
    title: "Respuesta rápida y eficiente",
    text: "Nos tomamos en serio tus tiempos y plazos de entrega, sin excusas.",
  },
  {
    icon: "🤝",
    title: "Soluciones adaptadas a ti",
    text: "Cada proyecto se diseña según las necesidades reales de tu negocio.",
  },
  {
    icon: "💡",
    title: "Innovación constante",
    text: "Exploramos nuevas tecnologías para mantener tu proyecto a la vanguardia.",
  },
  {
    icon: "📞",
    title: "Comunicación directa",
    text: "Hablas directamente con quien desarrolla tu proyecto, sin intermediarios.",
  },
  {
    icon: "💰",
    title: "Precios transparentes",
    text: "Presupuestos claros, sin letra chica ni sorpresas al final.",
  },
];

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-us-inner">
        <h2 className="why-us-title">
          Innovación que <span className="highlight-orange-dark">impulsa</span> tu
          negocio.
        </h2>

        <div className="why-us-grid">
          {points.map((p, i) => (
            <div className="why-us-item" key={i}>
              <div className="why-us-icon-wrap">
                <span className="why-us-icon">{p.icon}</span>
              </div>
              <h3 className="why-us-item-title">{p.title}</h3>
              <p className="why-us-item-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;