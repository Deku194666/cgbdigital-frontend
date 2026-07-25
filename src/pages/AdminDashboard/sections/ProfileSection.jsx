


import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { updateClientRequest } from "../../../services/userService";
import "./ProfileSection.css";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
};

const ProfileSection = () => {
  const storedUser = getStoredUser();
  const [photo, setPhoto] = useState(localStorage.getItem("adminProfilePhoto") || null);
  const [form, setForm] = useState({
    name: storedUser.name || "",
    phone: storedUser.phone || "",
    company: storedUser.company || "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handlePhotoClick = () => fileInputRef.current.click();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      setError("La imagen es muy pesada, usa una de menos de 1MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setPhoto(base64);
      localStorage.setItem("adminProfilePhoto", base64);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const updated = await updateClientRequest(storedUser._id, {
        name: form.name,
        phone: form.phone,
        company: form.company,
      });

      // Actualizamos también lo que está guardado en localStorage (para el sidebar)
      const newUser = { ...storedUser, ...updated };
      localStorage.setItem("user", JSON.stringify(newUser));

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setError(err.message || "No se pudo guardar el perfil");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-section">
      <h1 className="admin-title">Mi Perfil</h1>
      <p className="admin-subtitle">Tu información personal de la cuenta.</p>

      <div className="profile-card">
        <div className="profile-photo-wrap">
          <div className="profile-photo" onClick={handlePhotoClick}>
            {photo ? (
              <img src={photo} alt="Foto de perfil" />
            ) : (
              <span>{(form.name || "A").charAt(0)}</span>
            )}
            <div className="profile-photo-overlay">
              <FaCamera />
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          <p className="profile-photo-hint">
            Click en la foto para cambiarla (se guarda solo en este navegador por ahora)
          </p>
        </div>

        <form className="profile-form" onSubmit={handleSave}>
          {error && <p className="profile-form-error">⚠️ {error}</p>}
          {saved && <p className="profile-form-success">✓ Perfil actualizado</p>}

          <div className="profile-form-field">
            <label>Nombre</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="profile-form-field">
            <label>Correo electrónico</label>
            <input type="email" value={storedUser.email || ""} disabled />
            <span className="profile-field-hint">El correo no se puede editar desde aquí</span>
          </div>

          <div className="profile-form-field">
            <label>Teléfono</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="profile-form-field">
            <label>Empresa</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} />
          </div>

          <button type="submit" className="profile-save-btn" disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;