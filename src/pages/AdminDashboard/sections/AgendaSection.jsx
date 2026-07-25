import React, { useState, useEffect } from "react";
import { FaClock, FaUser, FaTimes } from "react-icons/fa";
import {
  getAppointmentsRequest,
  createAppointmentRequest,
  completeAppointmentRequest,
  deleteAppointmentRequest,
} from "../../../services/appointmentService";
import { getClientsRequest } from "../../../services/userService";
import { getProjectsRequest } from "../../../services/projectService";
import "./AgendaSection.css";

const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // 9am a 6pm (bloques de 1h)

const todayStr = () => new Date().toISOString().split("T")[0];

const AgendaSection = () => {
  const [selectedDate, setSelectedDate] = useState(todayStr());
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Reservar manualmente un bloque para un cliente
  const [bookingHour, setBookingHour] = useState(null);
  const [bookForm, setBookForm] = useState({ client: "", project: "", reason: "" });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const [appts, clientsData, projectsData] = await Promise.all([
        getAppointmentsRequest(),
        getClientsRequest(),
        getProjectsRequest(),
      ]);
      setAppointments(appts);
      setClients(clientsData);
      setProjects(projectsData);
    } catch (err) {
      setError(err.message || "No se pudieron cargar las reservas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const appointmentsForDay = appointments.filter(
    (a) => new Date(a.date).toISOString().split("T")[0] === selectedDate
  );

  const getAppointmentAt = (hour) =>
    appointmentsForDay.find((a) => a.hour === hour);

  const openBookingForm = (hour) => {
    setBookingHour(hour);
    setBookForm({ client: "", project: "", reason: "" });
    setSaveError("");
  };

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    if (!bookForm.client) {
      setSaveError("Selecciona un cliente");
      return;
    }
    setSaving(true);
    setSaveError("");
    try {
      await createAppointmentRequest({
        date: selectedDate,
        hour: bookingHour,
        client: bookForm.client,
        project: bookForm.project || undefined,
        reason: bookForm.reason || undefined,
      });
      setBookingHour(null);
      await fetchData();
    } catch (err) {
      setSaveError(err.message || "No se pudo reservar ese horario");
    } finally {
      setSaving(false);
    }
  };

  const handleComplete = async (id) => {
    try {
      await completeAppointmentRequest(id);
      await fetchData();
    } catch (err) {
      setError(err.message || "No se pudo marcar como completada");
    }
  };

  const handleCancel = async (id) => {
    try {
      await deleteAppointmentRequest(id);
      await fetchData();
    } catch (err) {
      setError(err.message || "No se pudo cancelar la reserva");
    }
  };

  return (
    <div className="admin-section">
      <h1 className="admin-title">Agenda</h1>
      <p className="admin-subtitle">Tu calendario de 9am a 6pm, día por día.</p>

      <div className="agenda-date-picker">
        <label>Ver día:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {loading && <p className="admin-empty">Cargando agenda...</p>}
      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
        <div className="agenda-slots">
          {HOURS.map((hour) => {
            const appt = getAppointmentAt(hour);
            const isBookingThis = bookingHour === hour;

            return (
              <div key={hour} className={`agenda-slot ${appt ? (appt.status === "completado" ? "done" : "occupied") : "free"}`}>
                <div className="agenda-slot-hour">
                  <FaClock /> {hour}:00 – {hour + 1}:00
                </div>

                {appt ? (
                  <div className="agenda-slot-info">
                    <div>
                      <strong><FaUser /> {appt.client?.name}</strong>
                      {appt.project && <span className="agenda-slot-project"> · {appt.project.title}</span>}
                      {appt.reason && <p className="agenda-slot-reason">{appt.reason}</p>}
                    </div>
                    {appt.status === "completado" ? (
                      <span className="agenda-done-badge">✓ Completado</span>
                    ) : (
                      <div className="agenda-slot-actions">
                        <button className="agenda-complete-btn" onClick={() => handleComplete(appt._id)}>
                          ✓ Completado
                        </button>
                        <button className="agenda-cancel-btn" onClick={() => handleCancel(appt._id)}>
                          <FaTimes /> Cancelar
                        </button>
                      </div>
                    )}
                  </div>
                ) : isBookingThis ? (
                  <form className="agenda-book-form" onSubmit={handleBookSubmit}>
                    {saveError && <p className="agenda-form-error">⚠️ {saveError}</p>}
                    <select
                      value={bookForm.client}
                      onChange={(e) => setBookForm({ ...bookForm, client: e.target.value })}
                    >
                      <option value="">Selecciona cliente...</option>
                      {clients.map((c) => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                    <select
                      value={bookForm.project}
                      onChange={(e) => setBookForm({ ...bookForm, project: e.target.value })}
                    >
                      <option value="">Sin proyecto asociado</option>
                      {projects.map((p) => (
                        <option key={p._id} value={p._id}>{p.title}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Motivo (opcional)"
                      value={bookForm.reason}
                      onChange={(e) => setBookForm({ ...bookForm, reason: e.target.value })}
                    />
                    <div className="agenda-form-actions">
                      <button type="submit" className="agenda-btn-primary" disabled={saving}>
                        {saving ? "Guardando..." : "Reservar"}
                      </button>
                      <button type="button" className="agenda-btn-ghost" onClick={() => setBookingHour(null)}>
                        Cancelar
                      </button>
                    </div>
                  </form>
                ) : (
                  <button className="agenda-free-btn" onClick={() => openBookingForm(hour)}>
                    Disponible — click para reservar
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AgendaSection;