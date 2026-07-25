


import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { getConversationRequest, sendMessageRequest } from "../../../services/messageService";
import "./MensajesSection.css";

const MensajesSection = () => {
  const [chat, setChat] = useState([]);
  const [loadingChat, setLoadingChat] = useState(true);
  const [chatError, setChatError] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      setLoadingChat(true);
      setChatError("");
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (!storedUser._id) return;
        const data = await getConversationRequest(storedUser._id);
        setChat(data);
      } catch (err) {
        setChatError(err.message || "No se pudieron cargar los mensajes");
      } finally {
        setLoadingChat(false);
      }
    };

    fetchChat();
  }, []);

  // Actualiza sola la conversación cada 4 segundos, sin recargar toda la pantalla
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (!storedUser._id) return;
        const data = await getConversationRequest(storedUser._id);
        setChat(data);
      } catch {
        // si falla el refresco silencioso, no molestamos con un error en pantalla
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      const sent = await sendMessageRequest({ text: newMessage });
      setChat((prev) => [...prev, sent]);
      setNewMessage("");
    } catch (err) {
      setChatError(err.message || "No se pudo enviar el mensaje");
    }
  };

  return (
    <div className="client-section client-section-chat">
      <h1 className="client-title">Mensajes</h1>
      <p className="client-subtitle">Conversación directa sobre tu proyecto.</p>

      <div className="client-chat-box">
        <div className="client-chat-messages">
          {loadingChat && <p className="client-empty">Cargando mensajes...</p>}
          {chatError && <p className="client-empty" style={{ color: "#c94f4f" }}>⚠️ {chatError}</p>}
          {!loadingChat && !chatError && chat.length === 0 && (
            <p className="client-empty">Todavía no hay mensajes. Escribe el primero.</p>
          )}
          {!loadingChat &&
            chat.map((m) => (
              <div
                key={m._id}
                className={`chat-bubble ${m.sender.role === "cliente" ? "chat-client" : "chat-dev"}`}
              >
                <p>{m.text}</p>
                <span>
                  {new Date(m.createdAt).toLocaleString("es-CL", {
                    day: "2-digit",
                    month: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}
        </div>

        <form className="client-chat-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MensajesSection;