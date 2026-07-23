import React, { useState } from "react";
import {
  FaChartPie,
  FaFolderOpen,
  FaUsers,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaInbox,
  FaVideo,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const projects = [
  {
    name: "Hikari",
    category: "Veterinaria",
    status: "Entregado",
    statusType: "done",
    progress: 100,
    color: "#2f6fed",
    deadline: "Entregado el 12 May 2026",
    stack: ["React", "Node.js", "MongoDB"],
    tasks: [],
    contact: {
      name: "Dr. Javier Muñoz",
      email: "jmunoz@hikarivet.cl",
      phone: "+56 9 1234 5678",
    },
  },
  {
    name: "Fitnex",
    category: "Salud Digital",
    status: "En desarrollo",
    statusType: "progress",
    progress: 65,
    color: "#2f8f4e",
    deadline: "Entrega estimada: 15 Ago 2026",
    stack: ["App Móvil", "IA"],
    tasks: [
      "Integrar módulo de sueño",
      "Conectar IA de recomendaciones",
      "Pruebas de usuario",
    ],
    contact: {
      name: "Camila Rojas",
      email: "camila@fitnex.app",
      phone: "+56 9 8765 4321",
    },
  },
  {
    name: "Sr Robot Sushi",
    category: "Comida / E-commerce",
    status: "Entregado",
    statusType: "done",
    progress: 100,
    color: "#c94f4f",
    deadline: "Entregado el 3 Mar 2026",
    stack: ["React", "Node.js", "E-commerce"],
    tasks: [],
    contact: {
      name: "Roberto Díaz",
      email: "contacto@srrobotsushi.cl",
      phone: "+56 9 5555 1212",
    },
  },
];

const meetings = [
  {
    project: "Fitnex",
    client: "Camila Rojas",
    date: "28 Jul 2026",
    time: "10:30",
    type: "Videollamada",
    color: "#2f8f4e",
  },
  {
    project: "Sr Robot Sushi",
    client: "Roberto Díaz",
    date: "30 Jul 2026",
    time: "16:00",
    type: "Presencial",
    color: "#c94f4f",
  },
  {
    project: "Hikari",
    client: "Dr. Javier Muñoz",
    date: "2 Ago 2026",
    time: "09:00",
    type: "Videollamada",
    color: "#2f6fed",
  },
];

const invoices = [
  { project: "Hikari", amount: "$850.000", status: "Pagado", date: "10 May 2026" },
  { project: "Sr Robot Sushi", amount: "$420.000", status: "Pagado", date: "1 Mar 2026" },
  { project: "Fitnex", amount: "$300.000", status: "Pendiente", date: "Vence 5 Ago 2026" },
  { project: "Fitnex", amount: "$300.000", status: "Pagado", date: "15 Jun 2026" },
];

const leads = [
  {
    name: "Constanza Reyes",
    email: "constanza.reyes@gmail.com",
    message: "Hola, necesito una tienda online para mi marca de ropa...",
    date: "Hace 2 días",
    status: "Nuevo",
  },
  {
    name: "Pedro Salinas",
    email: "p.salinas@empresa.cl",
    message: "Quiero cotizar un sistema de agendamiento para mi consulta...",
    date: "Hace 5 días",
    status: "Contactado",
  },
  {
    name: "Fernanda Ibáñez",
    email: "fer.ibanez@outlook.com",
    message: "¿Hacen mantención de sitios hechos por otro desarrollador?",
    date: "Hace 1 semana",
    status: "Cerrado",
  },
];

const navItems = [
  { key: "resumen", label: "Resumen", icon: <FaChartPie /> },
  { key: "proyectos", label: "Proyectos", icon: <FaFolderOpen /> },
  { key: "clientes", label: "Clientes", icon: <FaUsers /> },
  { key: "agenda", label: "Agenda", icon: <FaCalendarAlt /> },
  { key: "facturacion", label: "Facturación", icon: <FaFileInvoiceDollar /> },
  { key: "leads", label: "Leads", icon: <FaInbox /> },
];

const leadStatusClass = {
  Nuevo: "lead-nuevo",
  Contactado: "lead-contactado",
  Cerrado: "lead-cerrado",
};

const AdminDashboard = () => {
  const [section, setSection] = useState("resumen");

  const total = projects.length;
  const entregados = projects.filter((p) => p.statusType === "done").length;
  const enDesarrollo = projects.filter((p) => p.statusType === "progress").length;
  const clientesUnicos = new Set(projects.map((p) => p.contact.name)).size;

  const ingresosMes = invoices
    .filter((i) => i.status === "Pagado")
    .reduce((sum, i) => sum + parseInt(i.amount.replace(/\D/g, "")), 0);
  const pendientes = invoices.filter((i) => i.status === "Pendiente");
  const leadsNuevos = leads.filter((l) => l.status === "Nuevo").length;

  return (
    <div className="admin-dashboard">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="admin-logo-badge">CGB</span>
          <span className="admin-logo-text">Digital · Admin</span>
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`admin-nav-item ${section === item.key ? "active" : ""}`}
              onClick={() => setSection(item.key)}
            >
              {item.icon} {item.label}
              {item.key === "leads" && leadsNuevos > 0 && (
                <span className="admin-nav-badge">{leadsNuevos}</span>
              )}
            </button>
          ))}
        </nav>

        <Link to="/login" className="admin-logout">
          <FaSignOutAlt /> Cerrar sesión
        </Link>
      </aside>

      {/* CONTENIDO */}
      <main className="admin-content">
        {/* ===== RESUMEN ===== */}
        {section === "resumen" && (
          <div className="admin-section">
            <h1 className="admin-title">Resumen</h1>
            <p className="admin-subtitle">Vista general de tu negocio, todo en un vistazo.</p>

            <div className="admin-kpis">
              <div className="admin-kpi">
                <span className="kpi-value">{total}</span>
                <span className="kpi-label">Proyectos totales</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value" style={{ color: "#2f8f4e" }}>{entregados}</span>
                <span className="kpi-label">Entregados</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value" style={{ color: "#e07a2e" }}>{enDesarrollo}</span>
                <span className="kpi-label">En desarrollo</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value">{clientesUnicos}</span>
                <span className="kpi-label">Clientes activos</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value">${ingresosMes.toLocaleString("es-CL")}</span>
                <span className="kpi-label">Ingresos registrados</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value" style={{ color: "#e07a2e" }}>{pendientes.length}</span>
                <span className="kpi-label">Pagos pendientes</span>
              </div>
            </div>

            <div className="admin-two-col">
              <div>
                <h3 className="admin-subsection-title">Próximas reuniones</h3>
                <div className="admin-mini-list">
                  {meetings.slice(0, 3).map((m, i) => (
                    <div className="admin-mini-item" key={i}>
                      <span className="mini-dot" style={{ background: m.color }} />
                      <div>
                        <strong>{m.project}</strong> · {m.client}
                        <div className="mini-sub">{m.date} · {m.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="admin-subsection-title">Leads nuevos</h3>
                <div className="admin-mini-list">
                  {leads.filter((l) => l.status === "Nuevo").map((l, i) => (
                    <div className="admin-mini-item" key={i}>
                      <span className="mini-dot" style={{ background: "#e07a2e" }} />
                      <div>
                        <strong>{l.name}</strong>
                        <div className="mini-sub">{l.message.slice(0, 42)}…</div>
                      </div>
                    </div>
                  ))}
                  {leadsNuevos === 0 && <p className="admin-empty">Sin leads nuevos por ahora.</p>}
                </div>
              </div>
            </div>

            <h3 className="admin-subsection-title">Actividad reciente</h3>
            <div className="admin-activity-list">
              <div className="admin-activity-item">
                <span className="activity-dot" style={{ background: "#2f8f4e" }} />
                <span>Hikari fue marcado como <strong>Entregado</strong></span>
              </div>
              <div className="admin-activity-item">
                <span className="activity-dot" style={{ background: "#e07a2e" }} />
                <span>Fitnex avanzó a <strong>65% de progreso</strong></span>
              </div>
              <div className="admin-activity-item">
                <span className="activity-dot" style={{ background: "#2f6fed" }} />
                <span>Nuevo lead recibido: <strong>Constanza Reyes</strong></span>
              </div>
              <div className="admin-activity-item">
                <span className="activity-dot" style={{ background: "#2f8f4e" }} />
                <span>Pago recibido de <strong>Fitnex</strong> ($300.000)</span>
              </div>
            </div>
          </div>
        )}

        {/* ===== PROYECTOS ===== */}
        {section === "proyectos" && (
          <div className="admin-section">
            <h1 className="admin-title">Proyectos</h1>
            <p className="admin-subtitle">Estado, avance y tareas pendientes de cada proyecto.</p>

            <div className="admin-projects-list">
              {projects.map((p, i) => (
                <div className="admin-project-card" key={i} style={{ "--proj-color": p.color }}>
                  <div className="admin-project-top">
                    <div>
                      <span className="admin-project-category">{p.category}</span>
                      <h3 className="admin-project-name">{p.name}</h3>
                    </div>
                    <span className={`admin-status status-${p.statusType}`}>{p.status}</span>
                  </div>

                  <div className="admin-progress-row">
                    <div className="admin-progress-bar-bg">
                      <div
                        className="admin-progress-bar-fill"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <span className="admin-progress-text">{p.progress}%</span>
                  </div>

                  <div className="admin-project-meta-row">
                    <span className="admin-project-deadline">
                      <FaClock /> {p.deadline}
                    </span>
                    <div className="admin-project-stack">
                      {p.stack.map((s, j) => (
                        <span className="admin-stack-tag" key={j}>{s}</span>
                      ))}
                    </div>
                  </div>

                  {p.tasks.length > 0 && (
                    <div className="admin-project-tasks">
                      <span className="admin-tasks-label">Tareas pendientes</span>
                      <ul>
                        {p.tasks.map((t, j) => (
                          <li key={j}><FaCheckCircle className="task-icon" /> {t}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="admin-project-contact">
                    <span>{p.contact.name}</span>
                    <span className="dot-sep">·</span>
                    <span>{p.contact.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CLIENTES ===== */}
        {section === "clientes" && (
          <div className="admin-section">
            <h1 className="admin-title">Clientes</h1>
            <p className="admin-subtitle">Contactos asociados a cada proyecto.</p>

            <div className="admin-clients-grid">
              {projects.map((p, i) => (
                <div className="admin-client-card" key={i} style={{ "--proj-color": p.color }}>
                  <div className="admin-client-avatar">{p.contact.name.charAt(0)}</div>
                  <h4 className="admin-client-name">{p.contact.name}</h4>
                  <span className="admin-client-project">{p.name}</span>

                  <div className="admin-client-detail">
                    <FaEnvelope /> {p.contact.email}
                  </div>
                  <div className="admin-client-detail">
                    <FaPhone /> {p.contact.phone}
                  </div>

                  <span className={`admin-status status-${p.statusType}`}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== AGENDA ===== */}
        {section === "agenda" && (
          <div className="admin-section">
            <h1 className="admin-title">Agenda</h1>
            <p className="admin-subtitle">Próximas reuniones con tus clientes.</p>

            <div className="admin-meetings-list">
              {meetings.map((m, i) => (
                <div className="admin-meeting-card" key={i} style={{ "--proj-color": m.color }}>
                  <div className="meeting-date-box">
                    <span className="meeting-day">{m.date.split(" ")[0]}</span>
                    <span className="meeting-month">{m.date.split(" ")[1]}</span>
                  </div>
                  <div className="meeting-info">
                    <h4>{m.project}</h4>
                    <p>{m.client}</p>
                  </div>
                  <div className="meeting-type">
                    {m.type === "Videollamada" ? <FaVideo /> : <FaMapMarkerAlt />}
                    <span>{m.type}</span>
                    <span className="meeting-time">{m.time} hrs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== FACTURACIÓN ===== */}
        {section === "facturacion" && (
          <div className="admin-section">
            <h1 className="admin-title">Facturación</h1>
            <p className="admin-subtitle">Pagos recibidos y pendientes por proyecto.</p>

            <div className="admin-kpis admin-kpis-3">
              <div className="admin-kpi">
                <span className="kpi-value">${ingresosMes.toLocaleString("es-CL")}</span>
                <span className="kpi-label">Total recibido</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value" style={{ color: "#e07a2e" }}>{pendientes.length}</span>
                <span className="kpi-label">Pagos pendientes</span>
              </div>
              <div className="admin-kpi">
                <span className="kpi-value">{invoices.length}</span>
                <span className="kpi-label">Total de pagos</span>
              </div>
            </div>

            <div className="admin-invoice-table">
              <div className="invoice-row invoice-header">
                <span>Proyecto</span>
                <span>Monto</span>
                <span>Fecha</span>
                <span>Estado</span>
              </div>
              {invoices.map((inv, i) => (
                <div className="invoice-row" key={i}>
                  <span>{inv.project}</span>
                  <span>{inv.amount}</span>
                  <span>{inv.date}</span>
                  <span className={`admin-status ${inv.status === "Pagado" ? "status-done" : "status-progress"}`}>
                    {inv.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== LEADS ===== */}
        {section === "leads" && (
          <div className="admin-section">
            <h1 className="admin-title">Leads</h1>
            <p className="admin-subtitle">Mensajes recibidos desde el formulario de contacto.</p>

            <div className="admin-leads-list">
              {leads.map((l, i) => (
                <div className="admin-lead-card" key={i}>
                  <div className="lead-avatar">{l.name.charAt(0)}</div>
                  <div className="lead-body">
                    <div className="lead-top">
                      <h4>{l.name}</h4>
                      <span className={`lead-badge ${leadStatusClass[l.status]}`}>{l.status}</span>
                    </div>
                    <p className="lead-email">{l.email}</p>
                    <p className="lead-message">{l.message}</p>
                    <span className="lead-date">{l.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;