import React, { useState, useEffect } from "react";
import { getProjectsRequest } from "../../../services/projectService";
import { getPaymentsRequest } from "../../../services/paymentService";
import { getAppointmentsRequest } from "../../../services/appointmentService";
import { getLeadsRequest } from "../../../services/leadService";
import { formatDateUTC } from "../../../utils/formatDate";
import "./ResumenSection.css";

const ResumenSection = () => {
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const [projectsData, paymentsData, appointmentsData, leadsData] = await Promise.all([
          getProjectsRequest(),
          getPaymentsRequest(),
          getAppointmentsRequest(),
          getLeadsRequest(),
        ]);
        setProjects(projectsData);
        setPayments(paymentsData);
        setAppointments(appointmentsData);
        setLeads(leadsData);
      } catch (err) {
        setError(err.message || "No se pudieron cargar los datos del resumen");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const total = projects.length;
  const entregados = projects.filter((p) => (p.currentPhase ?? 0) === 4).length;
  const enDesarrollo = total - entregados;
  const clientesUnicos = new Set(projects.filter((p) => p.client).map((p) => p.client._id)).size;

  const ingresosTotales = payments
    .filter((p) => p.status === "pagado")
    .reduce((sum, p) => sum + p.amount, 0);
  const pagosPendientes = payments.filter((p) => p.status === "pendiente");

  const leadsNuevos = leads.filter((l) => l.status === "Nuevo");

  // Comparamos como texto "AAAA-MM-DD" en vez de objetos Date,
  // para evitar el desfase de zona horaria (Chile vs UTC)
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const proximasReuniones = appointments
    .filter((a) => a.status === "reservado" && new Date(a.date).toISOString().split("T")[0] >= todayStr)
    .slice(0, 3);

  return (
    <div className="admin-section">
      <h1 className="admin-title">Resumen</h1>
      <p className="admin-subtitle">Vista general de tu negocio, todo en un vistazo.</p>

      {loading && <p className="admin-empty">Cargando resumen...</p>}

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
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
            <span className="kpi-label">En proceso</span>
          </div>
          <div className="admin-kpi">
            <span className="kpi-value">{clientesUnicos}</span>
            <span className="kpi-label">Clientes activos</span>
          </div>
          <div className="admin-kpi">
            <span className="kpi-value">${ingresosTotales.toLocaleString("es-CL")}</span>
            <span className="kpi-label">Ingresos registrados</span>
          </div>
          <div className="admin-kpi">
            <span className="kpi-value" style={{ color: "#e07a2e" }}>{pagosPendientes.length}</span>
            <span className="kpi-label">Pagos pendientes</span>
          </div>
        </div>
      )}

      <div className="admin-two-col">
        <div>
          <h3 className="admin-subsection-title">Próximas reuniones</h3>
          <div className="admin-mini-list">
            {proximasReuniones.map((a) => (
              <div className="admin-mini-item" key={a._id}>
                <span className="mini-dot" style={{ background: "#2f6fed" }} />
                <div>
                  <strong>{a.client?.name}</strong>
                  {a.project && <> · {a.project.title}</>}
                  <div className="mini-sub">
                    {formatDateUTC(a.date)} · {a.hour}:00 hrs
                  </div>
                </div>
              </div>
            ))}
            {proximasReuniones.length === 0 && (
              <p className="admin-empty">Sin reuniones agendadas por ahora.</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="admin-subsection-title">Leads nuevos</h3>
          <div className="admin-mini-list">
            {leadsNuevos.map((l) => (
              <div className="admin-mini-item" key={l._id}>
                <span className="mini-dot" style={{ background: "#e07a2e" }} />
                <div>
                  <strong>{l.name}</strong>
                  <div className="mini-sub">{l.message.slice(0, 42)}…</div>
                </div>
              </div>
            ))}
            {leadsNuevos.length === 0 && <p className="admin-empty">Sin leads nuevos por ahora.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenSection;