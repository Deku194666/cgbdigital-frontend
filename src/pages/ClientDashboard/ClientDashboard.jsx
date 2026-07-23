


import React, { useState } from "react";
import {
  FaChartPie,
  FaProjectDiagram,
  FaFolderOpen,
  FaComments,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaSignOutAlt,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaVideo,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ClientDashboard.css";

// Datos del cliente (demo: Fitnex). Cuando haya backend, esto vendrá de la cuenta logueada.
const project = {
  name: "Fitnex",
  category: "Salud Digital",
  status: "En desarrollo",
  statusType: "progress",
  progress: 65,
  color: "#2f8f4e",
  deadline: "Entrega estimada: 15 Ago 2026",
  stack: ["App Móvil", "IA"],
  description:
    "App de salud integral, donde puedes integrar distintos módulos de tu salud, como Nutrición, Ejercicios, Sueño, Medicamentos, Salud Mental, Signos Vitales, entre otros. Todo esto integrado con una IA.",
  milestones: [
    { label: "Descubrimiento y propuesta", done: true },
    { label: "Diseño UX/UI", done: true },
    { label: "Desarrollo del núcleo de la app", done: true },
    { label: "Integración de módulo de sueño", done: false },
    { label: "Integración de IA de recomendaciones", done: false },
    { label: "Pruebas y lanzamiento", done: false },
  ],
};

const files = [
  { name: "Propuesta_Fitnex.pdf", date: "10 Mar 2026", size: "1.2 MB" },
  { name: "Prototipo_UX_v2.fig", date: "2 Abr 2026", size: "4.8 MB" },
  { name: "Manual_de_marca.pdf", date: "15 Abr 2026", size: "2.1 MB" },
  { name: "Reporte_avance_Julio.pdf", date: "20 Jul 2026", size: "890 KB" },
];

const messages = [
  { from: "dev", text: "¡Hola! Ya avanzamos con el módulo de sueño, debería estar listo esta semana.", time: "Ayer, 18:40" },
  { from: "client", text: "Genial, ¿pudiste revisar lo de las notificaciones que te comenté?", time: "Ayer, 19:05" },
  { from: "dev", text: "Sí, lo dejo integrado junto con el módulo de sueño. Te aviso apenas esté.", time: "Ayer, 19:12" },
];

const meetings = [
  { date: "28 Jul 2026", time: "10:30", type: "Videollamada" },
  { date: "12 Ago 2026", time: "15:00", type: "Videollamada" },
];

const invoices = [
  { amount: "$300.000", status: "Pagado", date: "15 Jun 2026" },
  { amount: "$300.000", status: "Pendiente", date: "Vence 5 Ago 2026" },
];

const navItems = [
  { key: "resumen", label: "Resumen", icon: <FaChartPie /> },
  { key: "proyecto", label: "Mi Proyecto", icon: <FaProjectDiagram /> },
  { key: "archivos", label: "Archivos", icon: <FaFolderOpen /> },
  { key: "mensajes", label: "Mensajes", icon: <FaComments /> },
  { key: "agenda", label: "Agenda", icon: <FaCalendarAlt /> },
  { key: "facturacion", label: "Facturación", icon: <FaFileInvoiceDollar /> },
];

const ClientDashboard = () => {
  const [section, setSection] = useState("resumen");
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(messages);

  const completedMilestones = project.milestones.filter((m) => m.done).length;
  const pendingInvoices = invoices.filter((i) => i.status === "Pendiente");

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChat([...chat, { from: "client", text: newMessage, time: "Ahora" }]);
    setNewMessage("");
  };

  return (
    <div className="client-dashboard" style={{ "--proj-color": project.color }}>
      {/* SIDEBAR */}
      <aside className="client-sidebar">
        <div className="client-logo">
          <span className="client-logo-badge">{project.name.charAt(0)}</span>
          <div>
            <span className="client-logo-text">{project.name}</span>
            <span className="client-logo-sub">Portal de Cliente</span>
          </div>
        </div>

        <nav className="client-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`client-nav-item ${section === item.key ? "active" : ""}`}
              onClick={() => setSection(item.key)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <Link to="/login" className="client-logout">
          <FaSignOutAlt /> Cerrar sesión
        </Link>
      </aside>

      {/* CONTENIDO */}
      <main className="client-content">
        {/* ===== RESUMEN ===== */}
        {section === "resumen" && (
          <div className="client-section">
            <h1 className="client-title">Hola 👋</h1>
            <p className="client-subtitle">Aquí tienes el estado actual de tu proyecto.</p>

            <div className="client-hero-card">
              <div className="client-hero-top">
                <div>
                  <span className="client-hero-category">{project.category}</span>
                  <h2>{project.name}</h2>
                </div>
                <span className={`client-status status-${project.statusType}`}>{project.status}</span>
              </div>

              <div className="client-progress-row">
                <div className="client-progress-bar-bg">
                  <div className="client-progress-bar-fill" style={{ width: `${project.progress}%` }} />
                </div>
                <span className="client-progress-text">{project.progress}%</span>
              </div>

              <p className="client-hero-deadline"><FaClock /> {project.deadline}</p>
            </div>

            <div className="client-kpis">
              <div className="client-kpi">
                <span className="kpi-value">{completedMilestones}/{project.milestones.length}</span>
                <span className="kpi-label">Hitos completados</span>
              </div>
              <div className="client-kpi">
                <span className="kpi-value">{files.length}</span>
                <span className="kpi-label">Archivos disponibles</span>
              </div>
              <div className="client-kpi">
                <span className="kpi-value">{meetings.length}</span>
                <span className="kpi-label">Reuniones agendadas</span>
              </div>
              <div className="client-kpi">
                <span className="kpi-value" style={{ color: pendingInvoices.length ? "#e07a2e" : "#2f8f4e" }}>
                  {pendingInvoices.length}
                </span>
                <span className="kpi-label">Pagos pendientes</span>
              </div>
            </div>

            <h3 className="client-subsection-title">Último mensaje</h3>
            <div className="client-last-message" onClick={() => setSection("mensajes")}>
              <p>"{chat[chat.length - 1].text}"</p>
              <span>{chat[chat.length - 1].time} — ver conversación completa →</span>
            </div>
          </div>
        )}

        {/* ===== MI PROYECTO ===== */}
        {section === "proyecto" && (
          <div className="client-section">
            <h1 className="client-title">Mi Proyecto</h1>
            <p className="client-subtitle">Detalle completo de {project.name}.</p>

            <p className="client-description">{project.description}</p>

            <div className="client-tags-row">
              {project.stack.map((s, i) => (
                <span className="client-tag" key={i}>{s}</span>
              ))}
            </div>

            <h3 className="client-subsection-title">Hitos del proyecto</h3>
            <div className="client-milestones">
              {project.milestones.map((m, i) => (
                <div className={`client-milestone ${m.done ? "done" : ""}`} key={i}>
                  <FaCheckCircle className="milestone-icon" />
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== ARCHIVOS ===== */}
        {section === "archivos" && (
          <div className="client-section">
            <h1 className="client-title">Archivos</h1>
            <p className="client-subtitle">Documentos y entregables de tu proyecto.</p>

            <div className="client-files-list">
              {files.map((f, i) => (
                <div className="client-file-card" key={i}>
                  <div className="client-file-info">
                    <strong>{f.name}</strong>
                    <span>{f.date} · {f.size}</span>
                  </div>
                  <button className="client-file-download"><FaDownload /> Descargar</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== MENSAJES ===== */}
        {section === "mensajes" && (
          <div className="client-section client-section-chat">
            <h1 className="client-title">Mensajes</h1>
            <p className="client-subtitle">Conversación directa sobre tu proyecto.</p>

            <div className="client-chat-box">
              <div className="client-chat-messages">
                {chat.map((m, i) => (
                  <div key={i} className={`chat-bubble ${m.from === "client" ? "chat-client" : "chat-dev"}`}>
                    <p>{m.text}</p>
                    <span>{m.time}</span>
                  </div>
                ))}
              </div>

              <form className="client-chat-input" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit"><FaPaperPlane /></button>
              </form>
            </div>
          </div>
        )}

        {/* ===== AGENDA ===== */}
        {section === "agenda" && (
          <div className="client-section">
            <h1 className="client-title">Agenda</h1>
            <p className="client-subtitle">Tus próximas reuniones.</p>

            <div className="client-meetings-list">
              {meetings.map((m, i) => (
                <div className="client-meeting-card" key={i}>
                  <div className="meeting-date-box">
                    <span className="meeting-day">{m.date.split(" ")[0]}</span>
                    <span className="meeting-month">{m.date.split(" ")[1]}</span>
                  </div>
                  <div className="meeting-info">
                    <h4>Reunión de seguimiento</h4>
                    <p>{project.name}</p>
                  </div>
                  <div className="meeting-type">
                    {m.type === "Videollamada" ? <FaVideo /> : <FaMapMarkerAlt />}
                    <span>{m.type}</span>
                    <span className="meeting-time">{m.time} hrs</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="client-btn-primary client-agenda-btn">
              <FaCalendarAlt /> Agendar nueva reunión
            </button>
          </div>
        )}

        {/* ===== FACTURACIÓN ===== */}
        {section === "facturacion" && (
          <div className="client-section">
            <h1 className="client-title">Facturación</h1>
            <p className="client-subtitle">Historial de pagos de tu proyecto.</p>

            <div className="client-invoice-table">
              <div className="invoice-row invoice-header">
                <span>Monto</span>
                <span>Fecha</span>
                <span>Estado</span>
              </div>
              {invoices.map((inv, i) => (
                <div className="invoice-row" key={i}>
                  <span>{inv.amount}</span>
                  <span>{inv.date}</span>
                  <span className={`client-status ${inv.status === "Pagado" ? "status-done" : "status-progress"}`}>
                    {inv.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClientDashboard;