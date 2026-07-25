import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { getProjectsRequest } from "../../../services/projectService";
import { getAppointmentsRequest } from "../../../services/appointmentService";
import { getConversationRequest } from "../../../services/messageService";
import { formatDateUTC } from "../../../utils/formatDate";
import "./ResumenSection.css";

const PHASES = [
  { key: "evaluacion", label: "Evaluación" },
  { key: "diseno", label: "Diseño" },
  { key: "desarrollo", label: "Desarrollo" },
  { key: "pruebas", label: "Pruebas" },
  { key: "entrega", label: "Entrega" },
];

// Mismos mock de siempre, todavía no conectado a un backend de archivos/pagos reales
const files = [
  { name: "Propuesta_Fitnex.pdf" },
  { name: "Prototipo_UX_v2.fig" },
  { name: "Manual_de_marca.pdf" },
  { name: "Reporte_avance_Julio.pdf" },
];

const invoices = [
  { status: "Pendiente" },
];

const ResumenSection = ({ setSection }) => {
  const [project, setProject] = useState(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectError, setProjectError] = useState("");

  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [lastMessage, setLastMessage] = useState(null);
  const [openPhase, setOpenPhase] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoadingProject(true);
      setProjectError("");
      try {
        const data = await getProjectsRequest();
        setProject(data.length > 0 ? data[0] : null);
      } catch (err) {
        setProjectError(err.message || "No se pudo cargar tu proyecto");
      } finally {
        setLoadingProject(false);
      }
    };
    fetchProject();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointmentsRequest();
        setAppointmentsCount(data.length);
      } catch {
        // no bloqueamos el resumen si falla esto
      }
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    const fetchLastMessage = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (!storedUser._id) return;
        const data = await getConversationRequest(storedUser._id);
        setLastMessage(data.length > 0 ? data[data.length - 1] : null);
      } catch {
        // no bloqueamos el resumen si falla esto
      }
    };
    fetchLastMessage();
  }, []);

  const pendingInvoices = invoices.filter((i) => i.status === "Pendiente");

  if (loadingProject) {
    return (
      <div className="client-section">
        <p className="client-subtitle">Cargando tu información...</p>
      </div>
    );
  }

  if (projectError) {
    return (
      <div className="client-section">
        <p className="client-subtitle" style={{ color: "#c94f4f" }}>⚠️ {projectError}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="client-section">
        <h1 className="client-title">Hola 👋</h1>
        <p className="client-subtitle">
          Aún no tienes un proyecto asignado. Cuando tu desarrollador te asigne uno, va a aparecer aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="client-section">
      <h1 className="client-title">Hola 👋</h1>
      <p className="client-subtitle">Aquí tienes el estado actual de tu proyecto.</p>

      <div className="client-hero-card">
        <div className="client-hero-top">
          <div>
            <span className="client-hero-category">{project.serviceType}</span>
            <h2>{project.title}</h2>
          </div>
          <span
            className={`client-status ${
              (project.currentPhase ?? 0) === PHASES.length - 1 ? "status-done" : "status-progress"
            }`}
          >
            {(project.currentPhase ?? 0) === PHASES.length - 1 ? "Entregado" : "Pendiente"}
          </span>
        </div>

        <div className="client-phase-timeline-wrap">
          <div className="client-phase-percent">
            {Math.round((((project.currentPhase ?? 0) + 1) / PHASES.length) * 100)}% completado — Fase actual: {PHASES[project.currentPhase ?? 0].label}
          </div>
          <div className="client-phase-timeline">
            {PHASES.map((phase, i) => {
              const done = i <= (project.currentPhase ?? 0);
              return (
                <button
                  key={phase.key}
                  className={`client-phase-step ${done ? "done" : ""} ${openPhase === i ? "open" : ""}`}
                  onClick={() => setOpenPhase(openPhase === i ? null : i)}
                >
                  <span className="client-phase-dot">{i + 1}</span>
                  <span className="client-phase-label">{phase.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {openPhase !== null && (
          <div className="client-phase-detail-panel">
            <h4>{PHASES[openPhase].label}</h4>
            <p>
              {project.phaseNotes?.[openPhase]
                ? project.phaseNotes[openPhase]
                : "Sin notas para esta fase por ahora."}
            </p>
          </div>
        )}

        {project.deliveryDate && (
          <p className="client-hero-deadline">
            <FaClock /> Entrega: {formatDateUTC(project.deliveryDate)}
          </p>
        )}
      </div>

      <div className="client-kpis">
        <div className="client-kpi">
          <span className="kpi-value">{files.length}</span>
          <span className="kpi-label">Archivos disponibles</span>
        </div>
        <div className="client-kpi">
          <span className="kpi-value">{appointmentsCount}</span>
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
      {lastMessage ? (
        <div className="client-last-message" onClick={() => setSection("mensajes")}>
          <p>"{lastMessage.text}"</p>
          <span>ver conversación completa →</span>
        </div>
      ) : (
        <p className="client-empty">Todavía no hay mensajes.</p>
      )}
    </div>
  );
};

export default ResumenSection;