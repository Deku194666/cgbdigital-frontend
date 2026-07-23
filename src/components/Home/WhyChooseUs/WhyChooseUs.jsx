import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "💻",
    title: "Soporte Remoto o Presencial",
    text: "Resolvemos tu problema donde estés, sin traslados innecesarios.",
    color: "#1d6fd6",
  },
  {
    icon: "❤️",
    title: "Atención Personalizada",
    text: "Cada proyecto se adapta a las necesidades reales de tu negocio.",
    color: "#e0527a",
  },
  {
    icon: "🎓",
    title: "Profesionales Capacitados",
    text: "Equipo con formación técnica sólida y experiencia real en cada área.",
    color: "#2f8f4e",
  },
  {
    icon: "🔬",
    title: "Diagnóstico Preciso",
    text: "Evaluamos tu sistema o equipo a fondo antes de actuar.",
    color: "#7b3fa0",
  },
  {
    icon: "⏰",
    title: "Horarios Flexibles",
    text: "Coordinamos reuniones y soporte según tu disponibilidad.",
    color: "#e08a1e",
  },
  {
    icon: "💰",
    title: "Precios Justos",
    text: "Servicios de calidad con valores accesibles. Sin sorpresas.",
    color: "#546272",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="por-que-elegirnos">
      <div className="why-choose-header">
        <span className="section-eyebrow4">¿Por qué elegirnos?</span>
        <h2 className="section-title">
          Somos más que desarrolladores, somos el soporte tecnológico que tu
          negocio necesita
        </h2>
      </div>

      <div className="why-choose-grid">
        {reasons.map((r, i) => (
          <div className="why-choose-card" key={i} style={{ "--card-color": r.color }}>
            <div className="why-choose-icon-wrap">
              <span className="why-choose-icon">{r.icon}</span>
            </div>
            <h3 className="why-choose-title">{r.title}</h3>
            <p className="why-choose-text">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;