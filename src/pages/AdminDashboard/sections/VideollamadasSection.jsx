



import React, { useState, useEffect } from "react";
import { FaVideo, FaSearch } from "react-icons/fa";
import { getVideoCallLogsRequest, createVideoCallLogRequest } from "../../../services/videoCallService";
import { getClientsRequest } from "../../../services/userService";
import VideoCall from "../../../components/VideoCall/VideoCall";
import "./VideollamadasSection.css";

const VideollamadasSection = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [callingClient, setCallingClient] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getVideoCallLogsRequest();
      setLogs(data);
    } catch (err) {
      setError(err.message || "No se pudo cargar el historial");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    getClientsRequest().then(setClients).catch(() => {});
  }, []);

  const handleStartCall = (client) => {
    createVideoCallLogRequest(client._id).catch(() => {});
    setCallingClient(client);
    setShowSearch(false);
    setSearch("");
  };

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-section">
      <div className="admin-section-header-row">
        <div>
          <h1 className="admin-title">Videollamadas</h1>
          <p className="admin-subtitle">Historial de videollamadas con tus clientes.</p>
        </div>
        <button className="clients-btn-primary" onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? "Cancelar" : "+ Nueva videollamada"}
        </button>
      </div>

      {showSearch && (
        <div className="vc-search-box">
          <div className="vc-search-input-wrap">
            <FaSearch />
            <input
              type="text"
              placeholder="Buscar cliente por nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <div className="vc-search-results">
            {filteredClients.length === 0 && (
              <p className="admin-empty">No se encontraron clientes.</p>
            )}
            {filteredClients.map((c) => (
              <div className="vc-search-result-item" key={c._id}>
                <div className="admin-client-avatar" style={{ width: 32, height: 32, fontSize: "0.85rem" }}>
                  {c.name.charAt(0)}
                </div>
                <div className="vc-search-result-info">
                  <strong>{c.name}</strong>
                  <span>{c.email}</span>
                </div>
                <button className="client-call-btn" onClick={() => handleStartCall(c)}>
                  <FaVideo /> Llamar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <p className="admin-empty">Cargando historial...</p>}

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && logs.length === 0 && (
        <p className="admin-empty">Todavía no has hecho ninguna videollamada.</p>
      )}

      <div className="vc-history-list">
        {logs.map((log) => (
          <div className="vc-history-item" key={log._id}>
            <div className="admin-client-avatar">{log.client?.name?.charAt(0) || "?"}</div>
            <div className="vc-history-info">
              <strong>{log.client?.name || "Cliente eliminado"}</strong>
              <span>{log.client?.email}</span>
            </div>
            <div className="vc-history-date">
              {new Date(log.createdAt).toLocaleString("es-CL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            {log.client && (
              <button className="client-call-btn" onClick={() => handleStartCall(log.client)}>
                <FaVideo /> Llamar de nuevo
              </button>
            )}
          </div>
        ))}
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

export default VideollamadasSection;