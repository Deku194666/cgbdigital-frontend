



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Solo admin: lista de clientes con quienes hay conversación
export const getConversationsRequest = async () => {
  const response = await fetch(`${API_URL}/messages`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener las conversaciones");
  return data;
};

// Trae todos los mensajes de una conversación con un cliente
export const getConversationRequest = async (clientId) => {
  const response = await fetch(`${API_URL}/messages/${clientId}`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener la conversación");
  return data;
};

// Envía un mensaje. "client" solo es necesario si quien envía es el admin
// (indica a qué cliente le está escribiendo). Si es el cliente, se ignora.
export const sendMessageRequest = async ({ text, client }) => {
  const response = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ text, client }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al enviar el mensaje");
  return data;
};

export const markAsReadRequest = async (clientId) => {
  const response = await fetch(`${API_URL}/messages/${clientId}/read`, {
    method: "PUT",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al marcar como leído");
  return data;
};