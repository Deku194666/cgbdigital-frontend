const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getAvailabilityRequest = async (dateStr) => {
  const response = await fetch(`${API_URL}/appointments/availability?date=${dateStr}`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al consultar disponibilidad");
  return data.occupiedHours;
};

export const getAppointmentsRequest = async () => {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "GET",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al obtener las reservas");
  return data;
};

export const createAppointmentRequest = async (appointment) => {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(appointment),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al crear la reserva");
  return data;
};

export const deleteAppointmentRequest = async (id) => {
  const response = await fetch(`${API_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al cancelar la reserva");
  return data;
};

export const completeAppointmentRequest = async (id) => {
  const response = await fetch(`${API_URL}/appointments/${id}/complete`, {
    method: "PUT",
    headers: authHeaders(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Error al marcar como completada");
  return data;
};