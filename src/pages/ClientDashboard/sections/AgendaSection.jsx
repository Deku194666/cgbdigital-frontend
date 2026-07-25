import React, { useMemo, useState } from "react";
import "./AgendaSection.css";

/**
 * AgendaSection (versión simple)
 * Muestra una semana de horarios. El usuario puede moverse entre semanas
 * con los botones "‹ Anterior" / "Siguiente ›", así las fechas no cambian
 * solas: solo cambian cuando el usuario navega.
 *
 * Esto es SOLO frontend, con datos de ejemplo (mock).
 * Después conectamos las reservas reales a tu backend.
 */

const DIAS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const HORAS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00",
];

// Mock: horas ya tomadas por día (índice 0 = Lun ... 6 = Dom)
// En un futuro esto vendría de tu base de datos, filtrado por semana.
const RESERVAS_MOCK = {
  0: ["10:00", "15:00"],
  1: ["09:00", "11:00", "16:00"],
  2: ["13:00"],
  3: ["09:00", "10:00", "17:00"],
  4: ["12:00", "14:00", "15:00"],
  5: [],
  6: [],
};

function getLunesDeSemana(offsetSemanas) {
  const hoy = new Date();
  const diaSemana = (hoy.getDay() + 6) % 7; // 0 = Lunes
  const lunes = new Date(hoy);
  lunes.setDate(hoy.getDate() - diaSemana + offsetSemanas * 7);
  return lunes;
}

function getSemana(offsetSemanas) {
  const lunes = getLunesDeSemana(offsetSemanas);
  return DIAS.map((_, i) => {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    return d;
  });
}

export default function AgendaSection() {
  const [offsetSemana, setOffsetSemana] = useState(0);
  const semana = useMemo(() => getSemana(offsetSemana), [offsetSemana]);

  const hoy = new Date();
  const esSemanaActual = offsetSemana === 0;
  const hoyIndex = (hoy.getDay() + 6) % 7;

  const [diaSeleccionado, setDiaSeleccionado] = useState(0);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  const reservas = RESERVAS_MOCK[diaSeleccionado] || [];
  const estaReservada = (hora) => reservas.includes(hora);

  const cambiarSemana = (delta) => {
    setOffsetSemana(offsetSemana + delta);
    setHoraSeleccionada(null);
  };

  const seleccionarDia = (i) => {
    setDiaSeleccionado(i);
    setHoraSeleccionada(null);
  };

  const seleccionarHora = (hora) => {
    if (estaReservada(hora)) return;
    setHoraSeleccionada(hora === horaSeleccionada ? null : hora);
  };

  const formatFecha = (d) =>
    d.toLocaleDateString("es-CL", { day: "2-digit", month: "short" }).replace(".", "");

  const rangoSemana = `${formatFecha(semana[0])} – ${formatFecha(semana[6])}`;

  return (
    <section className="agenda">
      <header className="agenda__header">
        <h2 className="agenda__title">Agenda</h2>
        <p className="agenda__subtitle">Elige un día y una hora disponible.</p>
      </header>

      <div className="agenda__nav">
        <button
          className="agenda__nav-btn"
          onClick={() => cambiarSemana(-1)}
          aria-label="Semana anterior"
        >
          ‹ Anterior
        </button>

        <span className="agenda__semana">
          {rangoSemana}
          {esSemanaActual && <span className="agenda__semana-tag">Esta semana</span>}
        </span>

        <button
          className="agenda__nav-btn"
          onClick={() => cambiarSemana(1)}
          aria-label="Semana siguiente"
        >
          Siguiente ›
        </button>
      </div>

      <div className="agenda__dias">
        {semana.map((fecha, i) => (
          <button
            key={i}
            className={
              "agenda__dia" +
              (i === diaSeleccionado ? " agenda__dia--activo" : "") +
              (esSemanaActual && i === hoyIndex ? " agenda__dia--hoy" : "")
            }
            onClick={() => seleccionarDia(i)}
          >
            <span className="agenda__dia-nombre">{DIAS[i]}</span>
            <span className="agenda__dia-fecha">{formatFecha(fecha)}</span>
          </button>
        ))}
      </div>

      <ul className="agenda__horas">
        {HORAS.map((hora) => {
          const reservada = estaReservada(hora);
          const seleccionada = horaSeleccionada === hora;
          return (
            <li key={hora}>
              <button
                className={
                  "agenda__hora-btn" +
                  (reservada ? " agenda__hora-btn--ocupada" : "") +
                  (seleccionada ? " agenda__hora-btn--elegida" : "")
                }
                onClick={() => seleccionarHora(hora)}
                disabled={reservada}
                aria-pressed={seleccionada}
              >
                <span className="agenda__hora-texto">{hora}</span>
                <span className="agenda__hora-estado">
                  {reservada ? "Ocupado" : seleccionada ? "Elegido" : "Disponible"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <footer className="agenda__footer">
        <div className="agenda__leyenda">
          <span className="agenda__leyenda-item">
            <i className="agenda__punto agenda__punto--libre" /> Disponible
          </span>
          <span className="agenda__leyenda-item">
            <i className="agenda__punto agenda__punto--ocupado" /> Ocupado
          </span>
        </div>

        <button className="agenda__confirmar" disabled={!horaSeleccionada}>
          {horaSeleccionada
            ? `Confirmar ${DIAS[diaSeleccionado]} ${formatFecha(semana[diaSeleccionado])} · ${horaSeleccionada}`
            : "Selecciona una hora"}
        </button>
      </footer>
    </section>
  );
}