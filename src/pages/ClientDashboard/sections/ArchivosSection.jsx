



import React from "react";
import { FaDownload } from "react-icons/fa";
import "./ArchivosSection.css";

const files = [
  { name: "Propuesta_Fitnex.pdf", date: "10 Mar 2026", size: "1.2 MB" },
  { name: "Prototipo_UX_v2.fig", date: "2 Abr 2026", size: "4.8 MB" },
  { name: "Manual_de_marca.pdf", date: "15 Abr 2026", size: "2.1 MB" },
  { name: "Reporte_avance_Julio.pdf", date: "20 Jul 2026", size: "890 KB" },
];

const ArchivosSection = () => {
  return (
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
            <button className="client-file-download">
              <FaDownload /> Descargar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivosSection;