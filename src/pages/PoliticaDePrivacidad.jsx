



import "./LegalPages.css";

const PoliticaDePrivacidad = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: [Fecha]</p>

        <p>
          En [Tu Nombre / Nombre de tu marca] respetamos su privacidad. Esta
          Política de Privacidad explica qué información recopilamos, cómo
          la usamos y qué derechos tiene usted sobre ella.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar los siguientes tipos de información:
        </p>
        <ul>
          <li>
            Datos de contacto (nombre, correo electrónico, teléfono) cuando
            usted completa un formulario de contacto o agenda una reunión.
          </li>
          <li>
            Credenciales de acceso (usuario y contraseña encriptada) si usted
            se registra en el portal de clientes.
          </li>
          <li>
            Información relacionada con sus proyectos (archivos, requisitos,
            comentarios) que usted comparte durante el desarrollo.
          </li>
          <li>
            Datos técnicos básicos de navegación (cookies, dirección IP,
            tipo de dispositivo) con fines estadísticos.
          </li>
        </ul>

        <h2>2. Uso del portal de clientes</h2>
        <p>
          Si usted cuenta con acceso al portal de clientes, la información
          que allí se muestra (avance de proyecto, archivos, mensajes) es
          visible únicamente para usted y para el Desarrollador. No
          compartimos esta información con terceros salvo que sea necesario
          para la prestación del servicio (por ejemplo, proveedores de
          hosting).
        </p>

        <h2>3. Cómo usamos su información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Gestionar y dar seguimiento a sus proyectos.</li>
          <li>Comunicarnos con usted sobre el estado de su trabajo.</li>
          <li>Agendar reuniones o llamadas cuando corresponda.</li>
          <li>Emitir cotizaciones, contratos y facturas.</li>
          <li>Mejorar nuestros servicios y sitio web.</li>
        </ul>

        <h2>4. Compartición de datos con terceros</h2>
        <p>
          No vendemos ni compartimos su información personal con fines
          comerciales de terceros. Podemos compartir datos limitados con
          proveedores de servicios necesarios para operar (hosting,
          pasarelas de pago, herramientas de videollamada), quienes están
          sujetos a sus propias políticas de privacidad.
        </p>

        <h2>5. Seguridad de la información</h2>
        <p>
          Implementamos medidas razonables para proteger su información,
          incluyendo el uso de contraseñas encriptadas y conexiones seguras
          (HTTPS). Sin embargo, ningún sistema es 100% infalible.
        </p>

        <h2>6. Sus derechos</h2>
        <p>
          Usted puede solicitar en cualquier momento acceder, corregir o
          eliminar sus datos personales escribiendo a{" "}
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>.
        </p>

        <h2>7. Retención de datos</h2>
        <p>
          Conservamos su información mientras exista una relación comercial
          activa y por un período razonable posterior, salvo que la ley
          exija un plazo distinto.
        </p>

        <h2>8. Cambios a esta política</h2>
        <p>
          Esta política puede actualizarse periódicamente. Le recomendamos
          revisarla de tanto en tanto.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Para cualquier consulta sobre privacidad, escríbanos a{" "}
          <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;