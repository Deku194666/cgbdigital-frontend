



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getVideoCallLogsRequest = async () => {
  const response = await fetch(`${API_URL}/videocalls`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener el historial de videollamadas");
  return data;
};

export const createVideoCallLogRequest = async (clientId) => {
  const response = await fetch(`${API_URL}/videocalls`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ client: clientId }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al registrar la videollamada");
  return data;
};