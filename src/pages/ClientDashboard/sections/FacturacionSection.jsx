


import React, { useMemo, useState } from "react";
import "./FacturacionSection.css";



const FACTURAS_MOCK = [
  {
    id: "F-0001",
    cliente: "Hikari SpA",
    concepto: "Desarrollo Pagina Web Hikari",
    fecha: "2026-06-02",
    vencimiento: "2026-06-16",
    monto: 850000,
    estado: "pagada",
  },
  {
    id: "F-0002",
    cliente: "Hikari SpA",
    concepto: "Mantención mensual · Junio",
    fecha: "2026-07-01",
    vencimiento: "2026-07-15",
    monto: 320000,
    estado: "pendiente",
  },

];

const FILTROS = [
  { key: "todas", label: "Todas" },
  { key: "pendiente", label: "Pendientes" },
  { key: "pagada", label: "Pagadas" },
  { key: "vencida", label: "Vencidas" },
];

const ESTADO_TEXTO = {
  pagada: "Pagada",
  pendiente: "Pendiente",
  vencida: "Vencida",
};

const formatMonto = (valor) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(valor);

const formatFecha = (iso) => {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric" }).replace(".", "");
};

export default function FacturacionSection() {
  const [filtro, setFiltro] = useState("todas");

  const facturas = useMemo(() => {
    if (filtro === "todas") return FACTURAS_MOCK;
    return FACTURAS_MOCK.filter((f) => f.estado === filtro);
  }, [filtro]);

  const resumen = useMemo(() => {
    const totalFacturado = FACTURAS_MOCK.reduce((acc, f) => acc + f.monto, 0);
    const totalPendiente = FACTURAS_MOCK.filter((f) => f.estado === "pendiente")
      .reduce((acc, f) => acc + f.monto, 0);
    const totalVencido = FACTURAS_MOCK.filter((f) => f.estado === "vencida")
      .reduce((acc, f) => acc + f.monto, 0);
    return { totalFacturado, totalPendiente, totalVencido };
  }, []);

  return (
    <section className="facturacion">
      <header className="facturacion__header">
        <h2 className="facturacion__title">Facturación</h2>
        <p className="facturacion__subtitle">
          Resumen de tus facturas y su estado de pago.
        </p>
      </header>

      <div className="facturacion__resumen">
        <div className="facturacion__card">
          <span className="facturacion__card-label">Total facturado</span>
          <span className="facturacion__card-monto">
            {formatMonto(resumen.totalFacturado)}
          </span>
        </div>

        <div className="facturacion__card facturacion__card--pendiente">
          <span className="facturacion__card-label">Pendiente</span>
          <span className="facturacion__card-monto">
            {formatMonto(resumen.totalPendiente)}
          </span>
        </div>

        <div className="facturacion__card facturacion__card--vencida">
          <span className="facturacion__card-label">Vencido</span>
          <span className="facturacion__card-monto">
            {formatMonto(resumen.totalVencido)}
          </span>
        </div>
      </div>

      <div className="facturacion__filtros">
        {FILTROS.map((f) => (
          <button
            key={f.key}
            className={
              "facturacion__filtro" +
              (filtro === f.key ? " facturacion__filtro--activo" : "")
            }
            onClick={() => setFiltro(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="facturacion__lista">
        {facturas.length === 0 && (
          <li className="facturacion__vacio">
            No hay facturas en esta categoría.
          </li>
        )}

        {facturas.map((f) => (
          <li key={f.id} className="facturacion__fila">
            <div className="facturacion__fila-info">
              <span className="facturacion__fila-id">{f.id}</span>
              <span className="facturacion__fila-concepto">{f.concepto}</span>
              <span className="facturacion__fila-cliente">{f.cliente}</span>
            </div>

            <div className="facturacion__fila-fechas">
              <span className="facturacion__fila-fecha">
                Emitida {formatFecha(f.fecha)}
              </span>
              <span className="facturacion__fila-fecha">
                Vence {formatFecha(f.vencimiento)}
              </span>
            </div>

            <div className="facturacion__fila-monto">
              {formatMonto(f.monto)}
            </div>

            <span
              className={
                "facturacion__estado facturacion__estado--" + f.estado
              }
            >
              {ESTADO_TEXTO[f.estado]}
            </span>

            <button className="facturacion__ver">Ver factura</button>
          </li>
        ))}
      </ul>
    </section>
  );
}