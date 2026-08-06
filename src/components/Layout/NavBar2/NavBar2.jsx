import React from "react";
import { Link } from "react-router-dom";
import "./NavBar2.css";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" }, // usa la nueva ServicesPage
  { label: "Proyectos", href: "/proyectospage" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contact" },
];

const NavBar2 = () => {
  return (
    <nav className="navbar2">
      <div className="navbar2-scroll">
        {links.map((link, i) => (
          <Link key={i} to={link.href} className="navbar2-link">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar2;