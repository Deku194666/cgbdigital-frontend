import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!email) {
      setError("Por favor ingresa tu correo electrónico");
      return false;
    }
    if (!email.includes("@")) {
      setError("Por favor ingresa un correo válido");
      return false;
    }
    if (!password) {
      setError("Por favor ingresa tu contraseña");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    // TODO: conectar con backend de autenticación real (login/register como en Hikari)
    setLoading(true);
    setTimeout(() => {
      console.log("Login (demo, sin backend todavía):", { email, password });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="login-container">

      <div className="login-wrapper">
        {/* CARD PRINCIPAL */}
        <div className="login-card">
          {/* HEADER */}
          <div className="login-header">
            <div className="login-icon">💻</div>
            <h1>Bienvenido de vuelta</h1>
            <p>Inicia sesión para acceder al portal de tus proyectos</p>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* MENSAJE DE ERROR */}
            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* INPUT EMAIL */}
            <div className="form-group">
              <label htmlFor="email">📧 Correo Electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                disabled={loading}
              />
            </div>

            {/* INPUT PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">🔐 Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* RECORDAR Y RECUPERAR */}
            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* BOTÓN SUBMIT */}
            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                <>🚀 Iniciar Sesión</>
              )}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="form-divider">
            <span>¿No tienes cuenta?</span>
          </div>

          {/* LINK A REGISTRO */}
          <Link to="/register" className="btn-register">
            📝 Crear una cuenta nueva
          </Link>

          {/* BOTONES DEMO (mientras no hay backend) */}
          <div className="demo-buttons">
            <p>Modo demo — sin backend todavía</p>
            <Link to="/dashboard-cliente" className="demo-client">
              👤 Ver Dashboard Cliente
            </Link>
            <Link to="/admin" className="demo-admin">
              🛠️ Ver Dashboard Admin
            </Link>
          </div>

          {/* FOOTER CON INFO */}
          <div className="login-footer">
            <p>🔒 Tu información está protegida y segura</p>
          </div>
        </div>

        {/* SIDE PANEL (OPCIONAL PARA DESKTOP) */}
        <div className="login-side">
          <div className="side-content">
            <div className="side-logo">TN</div>
            <h2>Portal de Clientes</h2>
            <p>Seguimiento de tus proyectos, siempre a la mano</p>

            <div className="side-benefits">
              <div className="benefit-item">
                <span>✓</span>
                <p>Seguimiento de proyectos en tiempo real</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p>Historial de entregas y versiones</p>
              </div>
              <div className="benefit-item">
                <span>✓</span>
                <p>Mensajería directa conmigo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;