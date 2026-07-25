import React, { useState, useEffect } from "react";
import { getPaymentsRequest, createPaymentRequest } from "../../../services/paymentService";
import { getProjectsRequest } from "../../../services/projectService";
import { formatDateUTC } from "../../../utils/formatDate";

import "./FacturacionSection.css";

const emptyForm = { project: "", concept: "", amount: "", status: "pendiente", date: "" };

const FacturacionSection = () => {
  const [payments, setPayments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const [paymentsData, projectsData] = await Promise.all([
        getPaymentsRequest(),
        getProjectsRequest(),
      ]);
      setPayments(paymentsData);
      setProjects(projectsData);
    } catch (err) {
      setError(err.message || "No se pudieron cargar los pagos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalRecibido = payments
    .filter((p) => p.status === "pagado")
    .reduce((sum, p) => sum + p.amount, 0);
  const pendientes = payments.filter((p) => p.status === "pendiente");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.concept || !form.amount) {
      setFormError("Concepto y monto son obligatorios");
      return;
    }

    setSaving(true);
    try {
      await createPaymentRequest({
        project: form.project || undefined,
        concept: form.concept,
        amount: Number(form.amount),
        status: form.status,
        date: form.date || undefined,
      });
      setForm(emptyForm);
      setShowForm(false);
      await fetchData();
    } catch (err) {
      setFormError(err.message || "No se pudo guardar el pago");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header-row">
        <div>
          <h1 className="admin-title">Facturación</h1>
          <p className="admin-subtitle">Pagos reales recibidos y pendientes.</p>
        </div>
        <button className="fact-btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancelar" : "+ Agregar pago"}
        </button>
      </div>

      {showForm && (
        <form className="payment-form" onSubmit={handleSubmit}>
          {formError && <p className="payment-form-error">⚠️ {formError}</p>}

          <div className="payment-form-row">
            <div className="payment-form-field">
              <label>Proyecto (opcional)</label>
              <select name="project" value={form.project} onChange={handleChange}>
                <option value="">Sin proyecto asociado</option>
                {projects.map((p) => (
                  <option key={p._id} value={p._id}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="payment-form-field">
              <label>Concepto</label>
              <input
                type="text"
                name="concept"
                placeholder="Ej: Primer pago, Mantención mensual..."
                value={form.concept}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="payment-form-row">
            <div className="payment-form-field">
              <label>Monto ($)</label>
              <input
                type="number"
                name="amount"
                placeholder="Ej: 300000"
                value={form.amount}
                onChange={handleChange}
              />
            </div>

            <div className="payment-form-field">
              <label>Estado</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="pagado">Pagado</option>
              </select>
            </div>

            <div className="payment-form-field">
              <label>Fecha</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="fact-btn-primary" disabled={saving}>
            {saving ? "Guardando..." : "Guardar pago"}
          </button>
        </form>
      )}

      {loading && <p className="admin-empty">Cargando pagos...</p>}

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
        <div className="admin-kpis admin-kpis-3">
          <div className="admin-kpi">
            <span className="kpi-value">${totalRecibido.toLocaleString("es-CL")}</span>
            <span className="kpi-label">Total recibido</span>
          </div>
          <div className="admin-kpi">
            <span className="kpi-value" style={{ color: "#e07a2e" }}>{pendientes.length}</span>
            <span className="kpi-label">Pagos pendientes</span>
          </div>
          <div className="admin-kpi">
            <span className="kpi-value">{payments.length}</span>
            <span className="kpi-label">Total de pagos</span>
          </div>
        </div>
      )}

      {!loading && !error && payments.length === 0 && (
        <p className="admin-empty">Todavía no has registrado ningún pago.</p>
      )}

      {!loading && !error && payments.length > 0 && (
        <div className="admin-invoice-table">
          <div className="admin-pay-row admin-pay-header">
            <span>Concepto</span>
            <span>Proyecto</span>
            <span>Monto</span>
            <span>Fecha</span>
            <span>Estado</span>
          </div>
          {payments.map((p) => (
            <div className="admin-pay-row" key={p._id}>
              <span>{p.concept}</span>
              <span>{p.project?.title || "—"}</span>
              <span>${p.amount.toLocaleString("es-CL")}</span>
              <span>{formatDateUTC(p.date)}</span>
              <span className={`admin-status ${p.status === "pagado" ? "status-done" : "status-progress"}`}>
                {p.status === "pagado" ? "Pagado" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacturacionSection;