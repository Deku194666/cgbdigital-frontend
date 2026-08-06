import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight, FaChevronDown } from "react-icons/fa";
import "./ServiceDetail.css";

const ServiceDetail = ({ data }) => {
  const {
    slug,
    icon,
    title,
    tagline,
    intro,
    color,
    features,
    audience,
    process,
    stack,
    faqs,
  } = data;

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      className={`svcdet-page ${slug ? `svcdet-${slug}` : ""}`}
      style={{ "--card-color": color }}
    >
      {/* HERO */}
      <section className="svcdet-hero">
        <div className="svcdet-breadcrumb">
          <Link to="/">Inicio</Link> <span>/</span>{" "}
          <Link to="/servicios">Servicios</Link> <span>/</span>{" "}
          <span>{title}</span>
        </div>

        <div className="svcdet-hero-icon">{icon}</div>
        <h1 className="svcdet-title">{title}</h1>
        <p className="svcdet-tagline">{tagline}</p>
        <p className="svcdet-intro">{intro}</p>

        <div className="svcdet-hero-actions">
          <Link to="/#contacto" className="svcdet-btn svcdet-btn-primary">
            Solicitar cotización <FaArrowRight />
          </Link>
          <Link to="/servicios" className="svcdet-btn svcdet-btn-ghost">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="svcdet-section">
        <h2 className="svcdet-section-title">¿Qué incluye este servicio?</h2>
        <div className="svcdet-features-grid">
          {features.map((f, i) => (
            <div className="svcdet-feature-card" key={i}>
              <span className="svcdet-feature-check">
                <FaCheck />
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="svcdet-section svcdet-section-alt">
        <h2 className="svcdet-section-title">¿Para quién es este servicio?</h2>
        <ul className="svcdet-audience-list">
          {audience.map((a, i) => (
            <li key={i}>
              <span className="svcdet-audience-check">✓</span> {a}
            </li>
          ))}
        </ul>
      </section>


      {/* PRECIOS (solo si el servicio los define) */}
      {data.pricing && (
        <section className="svcdet-section svcdet-section-alt">
          <h2 className="svcdet-section-title">Planes y precios</h2>
          {data.pricingNote && (
            <p className="svcdet-pricing-note">{data.pricingNote}</p>
          )}
          <div className="svcdet-pricing-grid">
            {data.pricing.map((plan, i) => (
              <div
                className={`svcdet-pricing-card ${plan.highlight ? "highlight" : ""}`}
                key={i}
              >
                {plan.highlight && (
                  <span className="svcdet-pricing-badge">Más elegido</span>
                )}
                <h3>{plan.name}</h3>
                <p className="svcdet-pricing-price">{plan.price}</p>
                <p className="svcdet-pricing-desc">{plan.description}</p>
                <ul className="svcdet-pricing-items">
                  {plan.items.map((item, j) => (
                    <li key={j}>
                      <FaCheck /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/#contacto" className="svcdet-btn svcdet-btn-primary">
                  Cotizar este plan <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROCESO */}
      <section className="svcdet-section">
        <h2 className="svcdet-section-title">Cómo trabajamos</h2>
        <div className="svcdet-process">
          {process.map((p, i) => (
            <div className="svcdet-process-step" key={i}>
              <span className="svcdet-process-num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      {stack && stack.length > 0 && (
        <section className="svcdet-section svcdet-section-alt">
          <h2 className="svcdet-section-title">Tecnologías que usamos</h2>
          <div className="svcdet-stack">
            {stack.map((s, i) => (
              <span className="svcdet-stack-tag" key={i}>
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="svcdet-section">
        <h2 className="svcdet-section-title">Preguntas frecuentes</h2>
        <div className="svcdet-faq">
          {faqs.map((f, i) => (
            <div
              className={`svcdet-faq-item ${openFaq === i ? "open" : ""}`}
              key={i}
            >
              <button className="svcdet-faq-question" onClick={() => toggleFaq(i)}>
                {f.q}
                <FaChevronDown className="svcdet-faq-icon" />
              </button>
              {openFaq === i && <p className="svcdet-faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="svcdet-cta">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Cuéntame qué necesitas y te respondo con una propuesta clara.</p>
        <Link to="/#contacto" className="svcdet-btn svcdet-btn-primary">
          Escríbeme <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetail;