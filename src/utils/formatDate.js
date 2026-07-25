



// Formatea una fecha guardada en el backend (que viene en UTC) como "DD-MM-AAAA",
// usando los componentes UTC directamente para evitar que se corra un día
// por la diferencia de zona horaria (Chile vs UTC).
export const formatDateUTC = (dateValue) => {
  const d = new Date(dateValue);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const year = d.getUTCFullYear();
  return `${day}-${month}-${year}`;
};