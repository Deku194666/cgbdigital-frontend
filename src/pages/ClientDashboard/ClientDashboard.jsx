import React, { useState, useEffect } from "react";
import {
  FaChartPie,
  FaProjectDiagram,
  FaFolderOpen,
  FaComments,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaSignOutAlt,
  FaChevronLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getProjectsRequest } from "../../services/projectService";

import ResumenSection from "./sections/ResumenSection";
import ProyectoSection from "./sections/ProyectoSection";
import ArchivosSection from "./sections/ArchivosSection";
import MensajesSection from "./sections/MensajesSection";
import AgendaSection from "./sections/AgendaSection";
import FacturacionSection from "./sections/FacturacionSection";
import ClientPerfilSection from "./sections/ClientPerfilSection";

import "./ClientDashboard.css";

// Cada sección tiene su propio color de ícono (mismo lenguaje "sticker" del admin)
const navItems = [
  { key: "resumen", label: "Resumen", icon: <FaChartPie />, bg: "#fdf1f1", fg: "#f97373" },
  { key: "proyecto", label: "Mi Proyecto", icon: <FaProjectDiagram />, bg: "#eafaf0", fg: "#34d399" },
  { key: "archivos", label: "Archivos", icon: <FaFolderOpen />, bg: "#fff8e1", fg: "#f59e0b" },
  { key: "mensajes", label: "Mensajes", icon: <FaComments />, bg: "#f3eeff", fg: "#a78bfa" },
  { key: "agenda", label: "Agenda", icon: <FaCalendarAlt />, bg: "#e8f7ff", fg: "#38bdf8" },
  { key: "facturacion", label: "Facturación", icon: <FaFileInvoiceDollar />, bg: "#e7fbf8", fg: "#2dd4bf" },
];

const sectionComponents = {
  resumen: ResumenSection,
  proyecto: ProyectoSection,
  archivos: ArchivosSection,
  mensajes: MensajesSection,
  agenda: AgendaSection,
  facturacion: FacturacionSection,
  perfil: ClientPerfilSection,
};

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
};

const ClientDashboard = () => {
  const storedUser = getStoredUser();
  const user = {
    nombre: storedUser.name || "Mi cuenta",
    email: storedUser.email || "",
    inicial: (storedUser.name || "C").charAt(0),
  };
  const [section, setSection] = useState("resumen");
  const [sidebarProject, setSidebarProject] = useState(null);
  const [colapsado, setColapsado] = useState(false);

  // Carga liviana solo para mostrar el nombre del proyecto en el logo del sidebar
  useEffect(() => {
    const fetchSidebarProject = async () => {
      try {
        const data = await getProjectsRequest();
        setSidebarProject(data.length > 0 ? data[0] : null);
      } catch {
        // si falla, el sidebar simplemente muestra "Mi cuenta" por defecto
      }
    };
    fetchSidebarProject();
  }, []);

  const ActiveSection = sectionComponents[section] || ResumenSection;
  const inicial = user?.inicial || user?.nombre?.charAt(0) || "C";

  return (
    <div
      className={`client-dashboard ${colapsado ? "sidebar-colapsado" : ""}`}
      style={{ "--proj-color": "#2f6fed" }}
    >
      {/* SIDEBAR */}
      <aside className="client-sidebar">
        <div className="client-top">
          <div className="client-logo">
            <span className="client-logo-badge">
              {sidebarProject ? sidebarProject.title.charAt(0) : "?"}
            </span>
            {!colapsado && (
              <div className="client-logo-info">
                <span className="client-logo-text" title={sidebarProject ? sidebarProject.title : "Mi cuenta"}>
                  {sidebarProject ? sidebarProject.title : "Mi cuenta"}
                </span>
                <span className="client-logo-sub">Portal de Cliente</span>
              </div>
            )}
          </div>

          <button
            className="client-colapsar"
            onClick={() => setColapsado(!colapsado)}
            aria-label={colapsado ? "Expandir menú" : "Colapsar menú"}
          >
            <FaChevronLeft style={{ transform: colapsado ? "rotate(180deg)" : "none" }} />
          </button>
        </div>

        <nav className="client-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`client-nav-item ${section === item.key ? "active" : ""}`}
              onClick={() => setSection(item.key)}
              title={colapsado ? item.label : undefined}
            >
              <span
                className="client-nav-icon"
                style={{ background: item.bg, color: item.fg }}
              >
                {item.icon}
              </span>
              {!colapsado && <span className="client-nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="client-cuenta">
          <button className="client-cuenta-info client-cuenta-link" onClick={() => setSection("perfil")}>
  <span className="client-avatar">{inicial}</span>
  {!colapsado && (
    <div className="client-cuenta-texto">
      <span className="client-cuenta-nombre">{user?.nombre || "Mi cuenta"}</span>
      {user?.email && (
        <span className="client-cuenta-email">{user.email}</span>
      )}
    </div>
  )}
</button>

          <Link to="/login" className="client-logout">
            <FaSignOutAlt />
            {!colapsado && <span>Cerrar sesión</span>}
          </Link>
        </div>
      </aside>

      {/* CONTENIDO: renderiza el módulo de la sección activa */}
      <main className="client-content">
        <ActiveSection setSection={setSection} />
      </main>
    </div>
  );
};

export default ClientDashboard;