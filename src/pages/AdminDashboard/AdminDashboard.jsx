import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getLeadsRequest } from "../../services/leadService";

import ResumenSection from "./sections/ResumenSection";
import ProyectosSection from "./sections/ProyectosSection";
import ClientesSection from "./sections/ClientesSection";
import MessagesSection from "./sections/MessagesSection";
import AgendaSection from "./sections/AgendaSection";
import FacturacionSection from "./sections/FacturacionSection";
import LeadsSection from "./sections/LeadsSection";
import ProfileSection from "./sections/ProfileSection";
import VideollamadasSection from "./sections/VideollamadasSection";

import "./AdminDashboard.css";

const navItems = [
  { key: "resumen", label: "General", icon: "📊" },
  { key: "proyectos", label: "Proyectos", icon: "📁" },
  { key: "clientes", label: "Clientes", icon: "👥" },
  { key: "mensajes", label: "Mensajes", icon: "💬" },
  { key: "agenda", label: "Agendas", icon: "🗓️" },
  { key: "videollamadas", label: "Videollamadas", icon: "🎥" },
  { key: "facturacion", label: "Pagos", icon: "💳" },
  { key: "leads", label: "Leads", icon: "📬" },
];

const sectionComponents = {
  resumen: ResumenSection,
  proyectos: ProyectosSection,
  clientes: ClientesSection,
  mensajes: MessagesSection,
  agenda: AgendaSection,
  facturacion: FacturacionSection,
  leads: LeadsSection,
  perfil: ProfileSection,
  videollamadas: VideollamadasSection,
};

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
};

const AdminDashboard = () => {
  const [section, setSection] = useState("resumen");
  const [collapsed, setCollapsed] = useState(false);
  const [leadsNuevos, setLeadsNuevos] = useState(0);
  const user = getStoredUser();
  const photo = localStorage.getItem("adminProfilePhoto");

  useEffect(() => {
    const fetchLeadsCount = async () => {
      try {
        const data = await getLeadsRequest();
        setLeadsNuevos(data.filter((l) => l.status === "Nuevo").length);
      } catch {
        // si falla, simplemente no mostramos el número, no interrumpimos nada
      }
    };
    fetchLeadsCount();
    const interval = setInterval(fetchLeadsCount, 10000);
    return () => clearInterval(interval);
  }, []);

  const ActiveSection = sectionComponents[section] || ResumenSection;

  return (
    <div className={`admin-dashboard ${collapsed ? "collapsed" : ""}`}>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo-row">
          {!collapsed && (
            <button className="admin-logo" onClick={() => setSection("resumen")}>
              <span className="admin-logo-badge">CGB</span>
              <span className="admin-logo-text">Digital</span>
            </button>
          )}
          <button
            className="admin-collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? "Expandir menú" : "Colapsar menú"}
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`admin-nav-item ${section === item.key ? "active" : ""}`}
              onClick={() => setSection(item.key)}
              title={item.label}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {!collapsed && <span className="admin-nav-label">{item.label}</span>}
              {!collapsed && item.key === "leads" && leadsNuevos > 0 && (
                <span className="admin-nav-badge">{leadsNuevos}</span>
              )}
            </button>
          ))}
        </nav>

        {/* TARJETA DE USUARIO / PERFIL */}
        <div className="admin-user-card">
          <button
            className={`admin-user-info ${section === "perfil" ? "active" : ""}`}
            onClick={() => setSection("perfil")}
          >
            <div className="admin-user-avatar">
              {photo ? (
                <img src={photo} alt="Foto de perfil" />
              ) : (
                <span>{(user.name || "A").charAt(0)}</span>
              )}
            </div>
            {!collapsed && (
              <div className="admin-user-text">
                <strong>{user.name || "Admin"}</strong>
                <span>{user.email || ""}</span>
              </div>
            )}
          </button>

          <Link to="/login" className="admin-logout-btn" title="Cerrar sesión">
            <FaSignOutAlt />
            {!collapsed && <span>Cerrar sesión</span>}
          </Link>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="admin-content">
        <ActiveSection />
      </main>
    </div>
  );
};

export default AdminDashboard;