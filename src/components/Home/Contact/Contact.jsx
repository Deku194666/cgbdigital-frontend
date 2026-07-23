


import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">
        <div className="contact-text">
          <span className="section-eyebro1">Contáctanos</span>
          <h2 className="contact-title">
            Estamos listos para llevar tu negocio al siguiente nivel.
          </h2>

          <div className="contact-info">
            <a href="mailto:soporteinformatico@cgbdigital.com" className="contact-line">
              ✉️ soporteinformatico@cgbdigital.com
            </a>
            <a href="tel:+56972664713" className="contact-line">
              📞 +56 972 664 713
            </a>
            <a
              href="https://wa.me/56972664713"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-line"
            >
              💬 WhatsApp directo
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Cuéntanos sobre tu proyecto" rows="4" required></textarea>
          <button type="submit" className="contact-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;