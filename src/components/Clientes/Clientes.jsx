import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Clientes.css";

const clients = [
  {
    name: "Hikari",
    category: "Veterinaria",
    description:
      "Plataforma de gestión veterinaria con fichas clínicas, sistema de citas y control de stock.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "Entregado",
    statusType: "done",
    image: "/images/clients/hikari.jpg",
    link: "https://www.hikarivet.com/",
    color: "#2f6fed",
    imageMaxWidth: "350px",
  },
  {
    name: "Fitnex",
    category: "Salud Digital",
    description:
      "App de salud integral, donde puedes integrar distintos módulos de tu salud, como Nutrición, Ejercicios, Sueño, Medicamentos, Salud Mental, Signos Vitales, entre otros. Todo esto integrado con una IA.",
    tags: ["App Móvil", "Salud"],
    status: "En desarrollo",
    statusType: "progress",
    image: "/images/clients/fitnex.jpg",
    link: null,
    color: "#2f8f4e",
    imageMaxWidth: "360px",
  },
  {
    name: "Tu Mercado Online",
    category: "E-commerce",
    description:
      "Tienda online con catálogo, carrito y pagos integrados para una tienda de sushi a domicilio.",
    tags: ["React", "Node.js", "E-commerce"],
    status: "Entregado",
    statusType: "done",
    image: "/images/clients/sr-robot-sushi.jpg",
    link: null,
    color: "#c94f4f",
  },
];

const categories = ["Todos", ...new Set(clients.map((c) => c.category))];

const Clientes = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos" ? clients : clients.filter((c) => c.category === filter);

  return (
    <section className="clientes">
      {/* HERO */}
      <div
        className="clientes-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 51, 0.88), rgba(30, 58, 110, 0.82)), url(${process.env.PUBLIC_URL}/images/hero-office.jpg)`,
        }}
      >
        <div className="clientes-hero-inner">
          <span className="section-eyebrow">Trabajos recientes</span>
          <h1 className="clientes-hero-title">Conoce nuestro portafolio</h1>
          <p className="clientes-hero-subtitle">
            Comprueba la calidad que tendrá tu proyecto si trabajas con nosotros.
          </p>
        </div>
      </div>

      {/* FILTROS Y GRID */}
      <div className="clientes-content">
        <div className="clientes-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="clientes-grid">
          {filtered.map((c, i) => {
            const CardTag = c.link ? "a" : "div";
            const cardProps = c.link
              ? { href: c.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardTag className="cliente-card" key={i} style={{ "--card-color": c.color }} {...cardProps}>
                <div
                  className="cliente-image-wrapper"
                  style={c.imageMaxWidth ? { maxWidth: c.imageMaxWidth, margin: "0 auto" } : undefined}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="cliente-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add("no-image");
                    }}
                  />
                  <div className="cliente-image-fallback">{c.name.charAt(0)}</div>

                  <span className={`cliente-status status-${c.statusType}`}>
                    {c.status}
                  </span>

                  {c.link && (
                    <span className="cliente-view-overlay">
                      Ver sitio <FaExternalLinkAlt />
                    </span>
                  )}
                </div>

                <div
                  className="cliente-card-body"
                  style={c.imageMaxWidth ? { textAlign: "center" } : undefined}
                >
                  <span className="cliente-category">{c.category}</span>
                  <h3 className="cliente-name">{c.name}</h3>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clientes;