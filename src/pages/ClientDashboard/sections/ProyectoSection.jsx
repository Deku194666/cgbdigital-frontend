import React, { useState, useEffect } from "react";
import { getProjectsRequest } from "../../../services/projectService";
import { formatDateUTC } from "../../../utils/formatDate";
import { FaClock } from "react-icons/fa";
import "./ProyectoSection.css";

const PHASES = [
  { key: "evaluacion", label: "Evaluación" },
  { key: "diseno", label: "Diseño" },
  { key: "desarrollo", label: "Desarrollo" },
  { key: "pruebas", label: "Pruebas" },
  { key: "entrega", label: "Entrega" },
];

const ProyectoSection = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openPhase, setOpenPhase] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getProjectsRequest();
        setProject(data.length > 0 ? data[0] : null);
      } catch (err) {
        setError(err.message || "No se pudo cargar tu proyecto");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="client-section">
        <p className="client-subtitle">Cargando tu proyecto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="client-section">
        <p className="client-subtitle" style={{ color: "#c94f4f" }}>⚠️ {error}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="client-section">
        <h1 className="client-title">Mi Proyecto</h1>
        <p className="client-subtitle">Aún no tienes un proyecto asignado.</p>
      </div>
    );
  }

  const currentPhaseIndex = project.currentPhase ?? 0;
  const isDelivered = currentPhaseIndex === PHASES.length - 1;

  return (
    <div className="client-section">
      <h1 className="client-title">Mi Proyecto</h1>
      <p className="client-subtitle">Detalle completo de {project.title}.</p>

      {project.description && <p className="client-description">{project.description}</p>}

      <div className="client-tags-row">
        <span className="client-tag">{project.serviceType}</span>
        <span className="client-tag">{isDelivered ? "Entregado" : "Pendiente"}</span>
        {project.price && (
          <span className="client-tag">${project.price.toLocaleString("es-CL")}</span>
        )}
      </div>

      <div className="client-hero-card">
        <div className="client-phase-timeline-wrap">
          <div className="client-phase-percent">
            {Math.round(((currentPhaseIndex + 1) / PHASES.length) * 100)}% completado — Fase actual: {PHASES[currentPhaseIndex].label}
          </div>
          <div className="client-phase-timeline">
            {PHASES.map((phase, i) => {
              const done = i <= currentPhaseIndex;
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
    </div>
  );
};

export default ProyectoSection;