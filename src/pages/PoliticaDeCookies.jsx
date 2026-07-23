



import "./LegalPages.css";

const PoliticaDeCookies = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Cookies</h1>
        <p className="legal-updated">Última actualización: [Fecha]</p>

        <p>
          Este sitio web utiliza cookies para mejorar su experiencia de
          navegación y, en caso de contar con portal de clientes, para
          mantener su sesión iniciada de forma segura.
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo cuando visita un sitio web, y que permiten recordar
          información sobre su visita.
        </p>

        <h2>2. Tipos de cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> necesarias para el
            funcionamiento del sitio, como mantener su sesión activa en el
            portal de clientes.
          </li>
          <li>
            <strong>Cookies de análisis:</strong> nos ayudan a entender cómo
            los visitantes usan el sitio (por ejemplo, Google Analytics).
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> recuerdan
            configuraciones como el idioma o el tema visual.
          </li>
        </ul>

        <h2>3. Cómo gestionar las cookies</h2>
        <p>
          Usted puede configurar su navegador para rechazar cookies o
          eliminar las ya almacenadas. Tenga en cuenta que deshabilitar
          cookies esenciales puede afectar el funcionamiento del portal de
          clientes.
        </p>

        <h2>4. Contacto</h2>
        <p>
          Ante cualquier duda sobre el uso de cookies, escríbanos a{" "}
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDeCookies;