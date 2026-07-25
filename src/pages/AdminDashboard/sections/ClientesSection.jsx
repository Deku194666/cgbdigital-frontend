import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaEdit, FaTrash, FaVideo } from "react-icons/fa";
import { getClientsRequest, updateClientRequest, deleteClientRequest } from "../../../services/userService";
import { getProjectsRequest } from "../../../services/projectService";
import { registerRequest } from "../../../services/authService";
import VideoCall from "../../../components/VideoCall/VideoCall";
import "./ClientesSection.css";
import { createVideoCallLogRequest } from "../../../services/videoCallService";

const emptyNewClient = { name: "", email: "", phone: "", company: "", password: "" };

const ClientesSection = () => {
  const [realClients, setRealClients] = useState([]);
  const [realProjects, setRealProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Edición de un cliente existente
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", phone: "", company: "" });
  const [saving, setSaving] = useState(false);

  const [deletingId, setDeletingId] = useState(null);

  const [callingClient, setCallingClient] = useState(null);

  // Agregar cliente nuevo
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState(emptyNewClient);
  const [addError, setAddError] = useState("");
  const [addSaving, setAddSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const [clients, projects] = await Promise.all([
        getClientsRequest(),
        getProjectsRequest(),
      ]);
      setRealClients(clients);
      setRealProjects(projects);
    } catch (err) {
      setError(err.message || "No se pudieron cargar los clientes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startEdit = (client) => {
    setEditingId(client._id);
    setEditForm({ name: client.name, phone: client.phone || "", company: client.company || "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleDelete = async (client) => {
    const confirmado = window.confirm(
      `¿Seguro que quieres eliminar a ${client.name}? Esta acción no se puede deshacer.`
    );
    if (!confirmado) return;

    setDeletingId(client._id);
    try {
      await deleteClientRequest(client._id);
      await fetchData();
    } catch (err) {
      setError(err.message || "No se pudo eliminar el cliente");
    } finally {
      setDeletingId(null);
    }
  };

  const saveEdit = async (id) => {
    setSaving(true);
    try {
      await updateClientRequest(id, editForm);
      await fetchData();
      setEditingId(null);
    } catch (err) {
      setError(err.message || "No se pudo guardar el cliente");
    } finally {
      setSaving(false);
    }
  };

  const handleNewClientChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    setAddError("");

    if (!newClient.name || !newClient.email || !newClient.password) {
      setAddError("Nombre, correo y contraseña son obligatorios");
      return;
    }

    setAddSaving(true);
    try {
      await registerRequest({ ...newClient, role: "cliente" });
      setNewClient(emptyNewClient);
      setShowAddForm(false);
      await fetchData();
    } catch (err) {
      setAddError(err.message || "No se pudo crear el cliente");
    } finally {
      setAddSaving(false);
    }
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header-row">
        <div>
          <h1 className="admin-title">Clientes</h1>
          <p className="admin-subtitle">Clientes registrados en la plataforma.</p>
        </div>
        <button className="clients-btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancelar" : "+ Agregar cliente"}
        </button>
      </div>

      {showAddForm && (
        <form className="client-add-form" onSubmit={handleAddClient}>
          {addError && <p className="client-form-error">⚠️ {addError}</p>}
          <div className="client-add-form-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={newClient.name}
              onChange={handleNewClientChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={newClient.email}
              onChange={handleNewClientChange}
            />
          </div>
          <div className="client-add-form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={newClient.phone}
              onChange={handleNewClientChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Empresa (opcional)"
              value={newClient.company}
              onChange={handleNewClientChange}
            />
          </div>
          <div className="client-add-form-row">
            <input
              type="password"
              name="password"
              placeholder="Contraseña (mínimo 6 caracteres)"
              value={newClient.password}
              onChange={handleNewClientChange}
            />
          </div>
          <button type="submit" className="clients-btn-primary" disabled={addSaving}>
            {addSaving ? "Creando..." : "Crear cliente"}
          </button>
        </form>
      )}

      {loading && <p className="admin-empty">Cargando clientes...</p>}

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && realClients.length === 0 && (
        <p className="admin-empty">Todavía no hay clientes registrados.</p>
      )}

      <div className="admin-clients-grid">
        {realClients.map((c) => {
          const assignedProject = realProjects.find((p) => p.client?._id === c._id);
          const isEditing = editingId === c._id;

          return (
            <div className="admin-client-card" key={c._id} style={{ "--proj-color": "#2f6fed" }}>
              <div className="admin-client-avatar">{c.name.charAt(0)}</div>

              {isEditing ? (
                <div className="client-edit-form">
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    placeholder="Nombre"
                  />
                  <input
                    type="tel"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    placeholder="Teléfono"
                  />
                  <input
                    type="text"
                    value={editForm.company}
                    onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                    placeholder="Empresa"
                  />
                  <div className="client-edit-actions">
                    <button
                      className="clients-btn-primary"
                      onClick={() => saveEdit(c._id)}
                      disabled={saving}
                    >
                      {saving ? "Guardando..." : "Guardar"}
                    </button>
                    <button className="clients-btn-ghost" onClick={cancelEdit}>
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h4 className="admin-client-name">{c.name}</h4>
                  {c.company && <span className="admin-client-company">{c.company}</span>}
                  <span className="admin-client-project">
                    {assignedProject ? assignedProject.title : "Sin proyecto asignado todavía"}
                  </span>

                  <div className="admin-client-detail">
                    <FaEnvelope /> {c.email}
                  </div>
                  {c.phone && (
                    <div className="admin-client-detail">
                      <FaPhone /> {c.phone}
                    </div>
                  )}

                  <div className="client-actions-row">
                    <button className="client-edit-btn" onClick={() => startEdit(c)}>
                      <FaEdit /> Editar
                    </button>
                    <button
                      className="client-delete-btn"
                      onClick={() => handleDelete(c)}
                      disabled={deletingId === c._id}
                    >
                      <FaTrash /> {deletingId === c._id ? "Eliminando..." : "Eliminar"}
                    </button>
                  </div>
                  <button className="client-call-btn"
                  onClick={() => {
                    createVideoCallLogRequest(c._id).catch(() => {});
                    setCallingClient(c);
                    }}>

                    <FaVideo /> Videollamada
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {callingClient && (
        <VideoCall
          roomName={`cgbdigital-${callingClient._id}`}
          displayName="Admin CGB Digital"
          onClose={() => setCallingClient(null)}
        />
      )}
    </div>
  );
};

export default ClientesSection;