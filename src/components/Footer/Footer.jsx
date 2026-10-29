import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Marca / descripción */}
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">CGB Technologies</h3>
          <p className="footer-tagline">
            Desarrollo de páginas web y aplicaciones a medida para
            profesionales y negocios.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Legal Healtnex */}
        <div className="footer-col">
          <h4>Legal — Healtnex</h4>
          <ul>
            <li><a href="/healtnex/terminos.html">Términos de Servicio</a></li>
            <li><a href="/healtnex/privacidad.html">Política de Privacidad</a></li>
            <li><a href="/healtnex/cookies.html">Política de Cookies</a></li>
          </ul>
        </div>

        {/* Columna 4: Legal CGB */}
        <div className="footer-col">
          <h4>Legal — CGB</h4>
          <ul>
            <li><Link to="/terminos-de-servicio">Términos de Servicio</Link></li>
            <li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
            <li><Link to="/politica-de-cookies">Política de Cookies</Link></li>
          </ul>
        </div>

        {/* Columna 5: Contacto y redes */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <a href="mailto:contacto@cgbtechnologies.com">
                <FaEnvelope /> contacto@cgbtechnologies.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/56998765432"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} CGB Technologies. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;