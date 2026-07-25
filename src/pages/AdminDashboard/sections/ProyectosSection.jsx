import React, { useState, useEffect } from "react";
import { getProjectsRequest, updateProjectRequest, createProjectRequest } from "../../../services/projectService";
import { getClientsRequest } from "../../../services/userService";
import "./ProyectosSection.css";

const PHASES = [
  { key: "evaluacion", label: "Evaluación", description: "Analizamos los requisitos del proyecto y definimos el alcance junto al cliente." },
  { key: "diseno", label: "Diseño", description: "Diseñamos la interfaz y experiencia de usuario antes de empezar a programar." },
  { key: "desarrollo", label: "Desarrollo", description: "Construcción del proyecto, con avances visibles a medida que se completa." },
  { key: "pruebas", label: "Pruebas", description: "Verificamos que todo funcione correctamente antes de la entrega final." },
  { key: "entrega", label: "Entrega", description: "Publicación final del proyecto y cierre con el cliente." },
];

const SERVICE_TYPES = [
  { value: "web", label: "Desarrollo Web" },
  { value: "app", label: "Aplicación / App" },
  { value: "reparacion", label: "Reparación de Equipos" },
  { value: "automatizacion", label: "Automatización" },
  { value: "ia", label: "Soluciones con IA" },
  { value: "otro", label: "Otro" },
];

const emptyNewProject = {
  title: "",
  client: "",
  serviceType: "web",
  description: "",
  price: "",
  deliveryDate: "",
};

const ProyectosSection = () => {
  const [realProjects, setRealProjects] = useState([]);
  const [realClients, setRealClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [assigningId, setAssigningId] = useState(null);
  const [assignSuccessId, setAssignSuccessId] = useState(null);
  const [openPhase, setOpenPhase] = useState({}); // { [projectId]: phaseIndex }
  const [noteDraft, setNoteDraft] = useState({}); // { [`${projectId}-${phaseIndex}`]: texto }
  const [savingPhase, setSavingPhase] = useState(null); // projectId que está guardando
  const [saveOkKey, setSaveOkKey] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState(emptyNewProject);
  const [addError, setAddError] = useState("");
  const [addSaving, setAddSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const [projects, clients] = await Promise.all([
        getProjectsRequest(),
        getClientsRequest(),
      ]);
      setRealProjects(projects);
      setRealClients(clients);
    } catch (err) {
      setError(err.message || "No se pudieron cargar los proyectos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAssignClient = async (projectId, clientId) => {
    if (!clientId) return;
    setAssigningId(projectId);
    setAssignSuccessId(null);
    try {
      await updateProjectRequest(projectId, { client: clientId });
      await fetchData();
      setAssignSuccessId(projectId);
      setTimeout(() => setAssignSuccessId(null), 2000);
    } catch (err) {
      setError(err.message || "No se pudo asignar el cliente");
    } finally {
      setAssigningId(null);
    }
  };

  const togglePhase = (project, phaseIndex) => {
    const key = `${project._id}`;
    setOpenPhase((prev) => ({
      ...prev,
      [key]: prev[key] === phaseIndex ? null : phaseIndex,
    }));
    // Precargamos el texto de la nota existente al abrir
    const draftKey = `${project._id}-${phaseIndex}`;
    setNoteDraft((prev) => ({
      ...prev,
      [draftKey]: prev[draftKey] ?? (project.phaseNotes?.[phaseIndex] || ""),
    }));
  };

  // Mueve el proyecto a esta fase específica — libre, hacia adelante o hacia atrás
  const handleSetCurrentPhase = async (projectId, phaseIndex) => {
    setSavingPhase(projectId);
    try {
      const updated = await updateProjectRequest(projectId, { currentPhase: phaseIndex });
      setRealProjects((prev) =>
        prev.map((p) => (p._id === projectId ? { ...p, currentPhase: updated.currentPhase } : p))
      );
    } catch (err) {
      setError(err.message || "No se pudo actualizar la fase");
    } finally {
      setSavingPhase(null);
    }
  };

  const handleSaveNote = async (projectId, phaseIndex, project) => {
    const draftKey = `${projectId}-${phaseIndex}`;
    const newText = noteDraft[draftKey] ?? "";
    const currentNotes = project.phaseNotes && project.phaseNotes.length === 5
      ? [...project.phaseNotes]
      : ["", "", "", "", ""];
    currentNotes[phaseIndex] = newText;

    setSavingPhase(projectId);
    try {
      const updated = await updateProjectRequest(projectId, { phaseNotes: currentNotes });
      setRealProjects((prev) =>
        prev.map((p) => (p._id === projectId ? { ...p, phaseNotes: updated.phaseNotes } : p))
      );
      setSaveOkKey(draftKey);
      setTimeout(() => setSaveOkKey(null), 2000);
    } catch (err) {
      setError(err.message || "No se pudo guardar la nota");
    } finally {
      setSavingPhase(null);
    }
  };

  const handleNewProjectChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    setAddError("");

    if (!newProject.title || !newProject.client) {
      setAddError("Nombre del proyecto y cliente son obligatorios");
      return;
    }

    setAddSaving(true);
    try {
      await createProjectRequest({
        title: newProject.title,
        client: newProject.client,
        serviceType: newProject.serviceType,
        description: newProject.description || undefined,
        price: newProject.price ? Number(newProject.price) : undefined,
        deliveryDate: newProject.deliveryDate || undefined,
      });
      setNewProject(emptyNewProject);
      setShowAddForm(false);
      await fetchData();
    } catch (err) {
      setAddError(err.message || "No se pudo crear el proyecto");
    } finally {
      setAddSaving(false);
    }
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header-row">
        <div>
          <h1 className="admin-title">Proyectos</h1>
          <p className="admin-subtitle">Estado y línea de tiempo de cada proyecto real.</p>
        </div>
        <button className="proj-btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancelar" : "+ Agregar proyecto"}
        </button>
      </div>

      {showAddForm && (
        <form className="project-add-form" onSubmit={handleAddProject}>
          {addError && <p className="project-form-error">⚠️ {addError}</p>}

          <div className="project-add-form-row">
            <input
              type="text"
              name="title"
              placeholder="Nombre del proyecto"
              value={newProject.title}
              onChange={handleNewProjectChange}
            />
            <select name="client" value={newProject.client} onChange={handleNewProjectChange}>
              <option value="">Selecciona un cliente...</option>
              {realClients.map((c) => (
                <option key={c._id} value={c._id}>{c.name} ({c.email})</option>
              ))}
            </select>
          </div>

          <div className="project-add-form-row">
            <select name="serviceType" value={newProject.serviceType} onChange={handleNewProjectChange}>
              {SERVICE_TYPES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <input
              type="number"
              name="price"
              placeholder="Precio ($, opcional)"
              value={newProject.price}
              onChange={handleNewProjectChange}
            />
            <input
              type="date"
              name="deliveryDate"
              value={newProject.deliveryDate}
              onChange={handleNewProjectChange}
            />
          </div>

          <textarea
            name="description"
            placeholder="Descripción del proyecto (opcional)"
            value={newProject.description}
            onChange={handleNewProjectChange}
            rows={2}
          />

          <button type="submit" className="proj-btn-primary" disabled={addSaving}>
            {addSaving ? "Creando..." : "Crear proyecto"}
          </button>
        </form>
      )}

      {loading && <p className="admin-empty">Cargando proyectos...</p>}

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && realProjects.length === 0 && (
        <p className="admin-empty">Todavía no has creado ningún proyecto.</p>
      )}

      <div className="admin-projects-list">
        {realProjects.map((p) => {
          const currentPhaseIndex = p.currentPhase ?? 0;
          const percent = Math.round(((currentPhaseIndex + 1) / PHASES.length) * 100);
          const activeOpenPhase = openPhase[p._id];
          const draftKey = activeOpenPhase != null ? `${p._id}-${activeOpenPhase}` : null;
          const isDelivered = currentPhaseIndex === PHASES.length - 1;

          return (
            <div className="admin-project-card" key={p._id} style={{ "--proj-color": "#2f6fed" }}>
              <div className="admin-project-top">
                <div>
                  <span className="admin-project-category">{p.serviceType}</span>
                  <h3 className="admin-project-name">{p.title}</h3>
                </div>
                <span
                  className={`admin-status ${isDelivered ? "status-done" : "status-progress"}`}
                >
                  {isDelivered ? "Entregado" : "Pendiente"}
                </span>
              </div>

              {/* LÍNEA DE TIEMPO DE 5 FASES */}
              <div className="phase-timeline-wrap">
                <div className="phase-percent">
                  {percent}% completado — Fase actual: {PHASES[currentPhaseIndex].label}
                </div>
                <div className="phase-timeline">
                  {PHASES.map((phase, i) => {
                    const done = i <= currentPhaseIndex;
                    return (
                      <button
                        key={phase.key}
                        className={`phase-step ${done ? "done" : ""} ${
                          activeOpenPhase === i ? "open" : ""
                        }`}
                        onClick={() => togglePhase(p, i)}
                      >
                        <span className="phase-dot">{i + 1}</span>
                        <span className="phase-label">{phase.label}</span>
                        <span className="phase-step-percent">
                          {Math.round(((i + 1) / PHASES.length) * 100)}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DETALLE DE LA FASE SELECCIONADA */}
              {activeOpenPhase != null && (
                <div className="phase-detail-panel">
                  <h4>{PHASES[activeOpenPhase].label}</h4>
                  <p>{PHASES[activeOpenPhase].description}</p>

                  <div className="phase-detail-actions">
                    {currentPhaseIndex === activeOpenPhase ? (
                      <span className="phase-current-tag">📍 Esta es la fase actual</span>
                    ) : (
                      <button
                        className="phase-set-current-btn"
                        onClick={() => handleSetCurrentPhase(p._id, activeOpenPhase)}
                        disabled={savingPhase === p._id}
                      >
                        {savingPhase === p._id
                          ? "Guardando..."
                          : activeOpenPhase > currentPhaseIndex
                          ? "→ Marcar como fase actual"
                          : "← Volver a esta fase"}
                      </button>
                    )}
                  </div>

                  <div className="phase-notes-box">
                    <label className="phase-detail-label">Notas de esta fase</label>
                    <textarea
                      value={noteDraft[draftKey] ?? ""}
                      onChange={(e) =>
                        setNoteDraft((prev) => ({ ...prev, [draftKey]: e.target.value }))
                      }
                      placeholder="Escribe detalles, avances o pendientes de esta fase..."
                      rows={3}
                    />
                    <div className="phase-notes-actions">
                      <button
                        className="phase-save-note-btn"
                        onClick={() => handleSaveNote(p._id, activeOpenPhase, p)}
                        disabled={savingPhase === p._id}
                      >
                        Guardar nota
                      </button>
                      {saveOkKey === draftKey && <span className="admin-assign-ok">✓ Guardado</span>}
                    </div>
                  </div>
                </div>
              )}

              <div className="admin-project-contact">
                <span>{p.client?.name || "Sin cliente asignado"}</span>
                {p.client?.email && (
                  <>
                    <span className="dot-sep">·</span>
                    <span>{p.client.email}</span>
                  </>
                )}
              </div>

              <div className="admin-assign-row">
                <select
                  defaultValue=""
                  onChange={(e) => handleAssignClient(p._id, e.target.value)}
                  disabled={assigningId === p._id}
                >
                  <option value="" disabled>
                    {p.client ? "Reasignar cliente..." : "Asignar cliente..."}
                  </option>
                  {realClients.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name} ({c.email})
                    </option>
                  ))}
                </select>
                {assigningId === p._id && <span className="admin-assign-status">Guardando...</span>}
                {assignSuccessId === p._id && (
                  <span className="admin-assign-status admin-assign-ok">✓ Asignado</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProyectosSection;