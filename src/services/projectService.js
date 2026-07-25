const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getProjectsRequest = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al obtener los proyectos");
  }

  return data;
};

export const updateProjectRequest = async (projectId, updates) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/projects/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al actualizar el proyecto");
  }

  return data;
};

export const createProjectRequest = async (project) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(project),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear el proyecto");
  }

  return data;
};