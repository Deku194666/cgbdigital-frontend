



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getPaymentsRequest = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/payments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al obtener los pagos");
  }

  return data;
};

export const createPaymentRequest = async (payment) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payment),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear el pago");
  }

  return data;
};