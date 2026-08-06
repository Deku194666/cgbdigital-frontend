import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaChevronDown } from "react-icons/fa";
import { createLeadRequest } from "../../services/leadService";
import "./Contact.css";

const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Trabajamos con precio cerrado para proyectos definidos, o por horas/plan mensual para trabajo continuo. Cotizamos sin costo después de una primera conversación.",
  },
  {
    q: "¿Cuánto se demora un proyecto típico?",
    a: "Una landing page puede estar lista en 1-2 semanas. Proyectos más grandes, como un portal con login o una app a medida, suelen tomar entre 4 y 8 semanas dependiendo del alcance.",
  },
  {
    q: "¿Ofreces soporte después de la entrega?",
    a: "Sí, incluimos un período de garantía sin costo para corregir errores. Después de eso, puedes contratar soporte por horas o un plan de mantención mensual.",
  },
  {
    q: "¿Trabajas con clientes fuera de tu ciudad?",
    a: "Sí, trabajo de forma remota con clientes en cualquier ubicación. Coordinamos avances por el portal de clientes y videollamadas cuando se necesite.",
  },

  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No, para nada. Te explico todo en un lenguaje simple y te muestro avances en el camino, sin asumir que sabes de programación ni de términos técnicos.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Depende del proyecto: normalmente trabajamos con un anticipo para comenzar y el resto contra entrega, o dividido en hitos si el proyecto es más grande. Lo definimos juntos antes de partir.",
  },
  {
    q: "¿Puedo pedir cambios en el diseño una vez que ya empezamos a desarrollar?",
    a: "Sí, aunque mientras antes lo definamos, mejor — cambios grandes de diseño ya avanzado el desarrollo pueden afectar plazos y costo. Los ajustes menores siempre están cubiertos.",
  },
  {
    q: "¿Qué pasa si mi proyecto necesita más funciones de las que cotizamos al principio?",
    a: "No hay problema, es algo bien común. Cotizamos el trabajo adicional aparte antes de hacerlo, para que siempre sepas el costo antes de que avancemos.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      await createLeadRequest(form);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err.message || "No se pudo enviar el mensaje, intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact1" id="contacto">
      <div
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 51, 0.88), rgba(30, 58, 110, 0.82)), url(${process.env.PUBLIC_URL}/images/hero-office.jpg)`,
        }}
      >
        <div className="contact-hero-inner">
          <span className="contact-hero-eyebrow">Hablemos</span>
          <h1 className="contact-hero-title">Contacto</h1>
          <p className="contact-hero-subtitle">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <div className="contact-avatar">CGB</div>
          <div className="contact-intro-text">
            <h3>Equipo CGB-Digital</h3>
            <p>Desarrollador Full-Stack Freelance · Webs y Apps a medida</p>
            <p>Ingeniero en Computación e Informatica · Kinesiólogo · Salud Digital </p>
            <p>Ingeniera Comercial · Comercio Exterior</p>
            <span className="contact-availability">
              <span className="availability-dot" /> Disponible para nuevos proyectos
            </span>
          </div>
        </div>

        <div className="contact-facts">
          <div className="contact-fact">
            <span className="fact-title">Tiempo de respuesta</span>
            <span className="fact-value">Menos de 24 horas</span>
          </div>
          <div className="contact-fact">
            <span className="fact-title">Modalidad</span>
            <span className="fact-value">100% remoto</span>
          </div>
          <div className="contact-fact">
            <span className="fact-title">Primera reunión</span>
            <span className="fact-value">Sin costo</span>
          </div>
        </div>

        <div className="contact-stack">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contact-submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar mensaje"} <FaPaperPlane />
            </button>

            {error && <p className="contact-error">⚠️ {error}</p>}

            {sent && (
              <p className="contact-success">
                ¡Gracias por escribirnos! Te responderemos a la brevedad posible.
              </p>
            )}
          </form>

          <div className="contact-direct">
            <h3>Contacto directo</h3>
            <p>¿Prefieres escribirme directo? Aquí tienes otras vías:</p>

            <a href="mailto:tuemail@ejemplo.com" className="contact-direct-item">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <div>
                <span className="contact-direct-label">Email</span>
                <span className="contact-direct-value">
                  ✉️ soporteinformatico@cgbdigital.com
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/+56972664713"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-item"
            >
              <span className="contact-icon">
                <FaWhatsapp />
              </span>
              <div>
                <span className="contact-direct-label">WhatsApp</span>
                <span className="contact-direct-value">📞 +56 972 664 713</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-faq">
          <h3 className="faq-title">Preguntas frecuentes</h3>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <FaChevronDown className="faq-icon" />
                </button>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;