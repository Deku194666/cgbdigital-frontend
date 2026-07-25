



const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const loginRequest = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al iniciar sesión");
  }

  return data;
};

export const registerRequest = async ({ name, email, password, phone, role }) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phone, role }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear la cuenta");
  }

  return data;
};