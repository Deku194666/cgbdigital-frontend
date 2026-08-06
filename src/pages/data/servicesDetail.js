export const capacitacionTecnologica = {
  slug: "capacitacion-tecnologica",
  icon: "🎓",
  title: "Capacitación Tecnológica",
  tagline: "Para que tu equipo dependa menos de mí en el día a día",
  color: "#6b4f2f",
  pricingNote:
  "Precio según cantidad de sesiones, tamaño del grupo y complejidad de las herramientas a capacitar.",
pricing: [
  {
    name: "Básico",
    price: "Desde $150.000",
    description: "Una sesión puntual",
    items: [
      "1 sesión (2-3 horas)",
      "Grupo reducido",
      "Guía de referencia simple",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $420.000",
    description: "El más elegido para equipos",
    highlight: true,
    items: [
      "Paquete de 3 sesiones",
      "Manual escrito de referencia",
      "Sesiones grabadas para revisar después",
      "15 días de soporte post-capacitación",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $850.000",
    description: "Programa completo con seguimiento",
    items: [
      "Programa de varias sesiones a medida",
      "Manuales y grabaciones completas",
      "Capacitación de personal nuevo incluida",
      "30 días de soporte post-capacitación",
    ],
  },
],
  intro:
    "De nada sirve implementarte un sistema, un portal o una red si tú y tu equipo no saben usarlo bien. Armo capacitaciones a la medida de las herramientas que ya trabajamos juntos, para que puedan resolver lo básico solos y solo me necesiten para lo importante.",
  features: [
    {
      title: "Capacitación",
      description:
        "Sesiones enfocadas específicamente en las herramientas y sistemas que ya usas, no un curso genérico de tecnología.",
    },
    {
      title: "Manuales y guías",
      description:
        "Documentos simples de referencia que tu equipo puede consultar después, sin tener que preguntarme cada vez.",
    },
    {
      title: "Sesiones grabadas",
      description:
        "Grabo las capacitaciones para que las revisen cuando quieran, o para capacitar a alguien nuevo que se sume después.",
    },
    {
      title: "Soporte post-capacitación",
      description:
        "Un período de acompañamiento después de la capacitación para resolver dudas que surjan una vez que empiecen a usarlo en el día a día.",
    },
  ],
  audience: [
    "Equipos que recién recibieron un sistema o portal nuevo",
    "Negocios donde solo una persona sabe usar las herramientas",
    "Empresas que suman gente nueva y necesitan capacitarla",
    "Dueños de negocio que quieren entender su propio sistema, no solo usarlo",
  ],
  process: [
    { title: "Diagnóstico", text: "Vemos qué nivel tiene tu equipo y qué necesitan aprender." },
    { title: "Plan", text: "Armamos el temario y la modalidad (presencial o remota)." },
    { title: "Capacitación", text: "Sesiones prácticas con ejercicios reales, no solo teoría." },
    { title: "Material de apoyo", text: "Entrego manuales y grabaciones para reforzar después." },
    { title: "Seguimiento", text: "Resolución de dudas una vez que empiezan a usarlo solos." },
  ],
  stack: ["Sesiones en vivo", "Manuales escritos", "Videos grabados"],
  faqs: [
    {
      q: "¿La capacitación es presencial o por videollamada?",
      a: "Puede ser cualquiera de las dos, según lo que prefieras. Muchas veces conviene una combinación: una sesión presencial inicial y seguimiento por videollamada.",
    },
    {
      q: "¿Cuánta gente puede participar?",
      a: "No hay límite fijo, pero para que la capacitación sea realmente útil, recomiendo grupos no muy grandes para que todos puedan practicar y preguntar.",
    },
    {
      q: "¿Sirve si el sistema no lo hice yo?",
      a: "Sí, puedo capacitar sobre sistemas que no desarrollé yo, siempre que tenga acceso para conocerlo bien antes de la capacitación.",
    },
  ],
};

export const migracionDatos = {
  slug: "migracion-datos",
  icon: "🔄",
  title: "Migración de Datos y Sistemas",
  tagline: "Cambia de plataforma sin perder nada en el camino",
  color: "#2f5f8a",
  pricingNote:
  "El precio final depende del volumen de datos, la complejidad del sistema de origen y si requiere migración en caliente (sin detener la operación).",
pricing: [
  {
    name: "Básico",
    price: "Desde $180.000",
    description: "Migración simple y acotada",
    items: [
      "Un solo origen de datos (ej: Excel a sistema nuevo)",
      "Validación básica de integridad",
      "Migración en horario acordado",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $500.000",
    description: "El más elegido para cambios de plataforma",
    highlight: true,
    items: [
      "Migración entre plataformas o sistemas",
      "Validación completa origen vs. destino",
      "Plan de contingencia y respaldo",
      "Soporte durante los primeros días de uso",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $950.000",
    description: "Migraciones complejas o de gran volumen",
    items: [
      "Múltiples sistemas o fuentes de datos",
      "Migración sin detener la operación del negocio",
      "Scripts de validación automatizados",
      "Acompañamiento extendido post-migración",
    ],
  },
],
  intro:
    "Si estás dejando atrás las planillas de Excel, un sistema antiguo, o cambiando de proveedor de hosting o de base de datos, me encargo de mover toda tu información de forma segura y verificada, para que el cambio no signifique perder nada importante.",
  features: [
    {
      title: "Migración sin pérdida de datos",
      description:
        "Traslado tu información verificando que llegue completa y correcta al nuevo sistema, sin registros perdidos ni duplicados.",
    },
    {
      title: "Cambio de plataforma",
      description:
        "Ya sea de un software antiguo a uno nuevo, o de un proveedor de hosting a otro, gestiono la transición de principio a fin.",
    },
    {
      title: "Validación post-migración",
      description:
        "Reviso que todo funcione correctamente después del cambio, comparando datos de origen y destino antes de dar por cerrado el proceso.",
    },
    {
      title: "Plan de contingencia",
      description:
        "Mantengo un respaldo del sistema original durante el proceso, por si algo necesita revertirse antes de confirmar la migración.",
    },
  ],
  audience: [
    "Negocios que hoy gestionan todo en Excel y quieren pasar a un sistema real",
    "Empresas cambiando de proveedor de hosting o de base de datos",
    "Negocios que dejan un software antiguo por uno nuevo",
    "Equipos que necesitan consolidar información dispersa en un solo lugar",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos qué datos existen hoy y en qué formato están." },
    { title: "Plan de migración", text: "Definimos el orden y la forma de trasladar todo." },
    { title: "Migración", text: "Traslado de la información al nuevo sistema o plataforma." },
    { title: "Validación", text: "Comparamos origen y destino para confirmar que todo esté bien." },
    { title: "Cierre", text: "Confirmación final y apoyo en los primeros días de uso." },
  ],
  stack: ["Bases de datos", "APIs de migración", "Scripts de validación"],
  faqs: [
    {
      q: "¿Qué pasa si algo sale mal durante la migración?",
      a: "Por eso mantengo un respaldo del sistema original durante todo el proceso. Si algo no cuadra, podemos revertir sin haber perdido información.",
    },
    {
      q: "¿Cuánto tiempo toma una migración?",
      a: "Depende de la cantidad de datos y la complejidad del sistema de origen. Una migración simple puede tomar días; una más compleja, algunas semanas. Se define en el diagnóstico inicial.",
    },
    {
      q: "¿Necesito detener mi negocio mientras se hace la migración?",
      a: "En la mayoría de los casos no, ya que trabajo sobre una copia y solo hacemos el cambio final cuando todo está validado y listo.",
    },
  ],
};

export const disenoUxUi = {
  slug: "diseno-ux-ui",
  icon: "🎨",
  title: "Diseño UX/UI",
  tagline: "Mejora cómo se ve y se usa tu sitio o sistema actual",
  color: "#a0527a",
  pricingNote:
  "Aplica a sitios o sistemas ya existentes. El precio depende de cuántas pantallas o flujos se rediseñan y si se incluye validación con usuarios.",
pricing: [
  {
    name: "Básico",
    price: "Desde $150.000",
    description: "Rediseño puntual de una sección",
    items: [
      "Auditoría de usabilidad de 1 flujo o sección",
      "Propuesta de rediseño visual",
      "Prototipo navegable simple",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $380.000",
    description: "El más elegido para sitios completos",
    highlight: true,
    items: [
      "Auditoría completa del sitio o sistema",
      "Rediseño de interfaz completo",
      "Prototipo interactivo navegable",
      "Implementación de los cambios aprobados",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $700.000",
    description: "Rediseño con validación de usuarios",
    items: [
      "Auditoría y rediseño de sistemas complejos",
      "Pruebas con usuarios reales",
      "Implementación completa de cambios",
      "Ronda de ajustes post-lanzamiento",
    ],
  },
],
  intro:
    "Si ya tienes un sitio o sistema funcionando pero sientes que se ve anticuado o que a la gente le cuesta usarlo, puedo rediseñar la experiencia sin necesidad de reconstruir todo el código de fondo. El objetivo es que sea más fácil de usar y se vea más profesional.",
  features: [
    {
      title: "Auditoría de usabilidad",
      description:
        "Reviso tu sitio o sistema actual para identificar en qué partes los usuarios se confunden o abandonan lo que estaban haciendo.",
    },
    {
      title: "Rediseño de interfaz",
      description:
        "Propongo una nueva apariencia visual, más moderna y coherente con tu marca, manteniendo la funcionalidad que ya tienes.",
    },
    {
      title: "Prototipos interactivos",
      description:
        "Antes de programar cualquier cambio, te muestro un prototipo navegable para que veas y apruebes cómo quedaría.",
    },
    {
      title: "Pruebas con usuarios",
      description:
        "Cuando es posible, probamos el diseño con usuarios reales antes de implementarlo, para confirmar que efectivamente mejora la experiencia.",
    },
  ],
  audience: [
    "Negocios con un sitio o sistema que se ve anticuado",
    "Empresas donde los usuarios se quejan de que algo es difícil de usar",
    "Negocios que quieren renovar su imagen sin rehacer todo el sistema",
    "Equipos que están agregando funciones nuevas y quieren que se vean coherentes con el resto",
  ],
  process: [
    { title: "Auditoría", text: "Revisamos el sitio o sistema actual y detectamos problemas de uso." },
    { title: "Propuesta", text: "Diseño de la nueva interfaz antes de tocar el código." },
    { title: "Prototipo", text: "Versión navegable para que la revises y ajustemos juntos." },
    { title: "Implementación", text: "Aplicamos los cambios aprobados al sitio o sistema real." },
    { title: "Validación", text: "Revisamos que la experiencia mejoró con datos o feedback real." },
  ],
  stack: ["Figma", "Prototipado", "React", "CSS"],
  faqs: [
    {
      q: "¿Tienen que rehacer todo el sistema para mejorar el diseño?",
      a: "No necesariamente. Muchas veces se puede mejorar bastante la experiencia ajustando la interfaz visual y algunos flujos, sin tocar la lógica interna del sistema.",
    },
    {
      q: "¿Puedo pedir esto si el sistema lo hizo otra persona?",
      a: "Sí, trabajo sobre sistemas hechos por otros desarrolladores, siempre que tenga acceso al código para poder implementar los cambios de diseño.",
    },
    {
      q: "¿Cómo sé si mi sitio realmente tiene un problema de usabilidad?",
      a: "En la auditoría inicial te muestro puntos concretos —no solo opinión personal— basados en cómo se comporta típicamente un usuario en ese tipo de flujo.",
    },
  ],
};

export const administracionRedes = {
  slug: "administracion-redes",
  icon: "📡",
  title: "Administración de Redes",
  tagline: "Configuramos y mantenemos tu red para que todo tu equipo funcione sin interrupciones",
  color: "#2f7d6b",
  pricingNote:
  "Precio mensual según cantidad de equipos y servidores a administrar. Incluye soporte remoto; visitas presenciales se coordinan según urgencia.",
pricing: [
  {
    name: "Básico",
    price: "Desde $150.000/mes",
    description: "Redes pequeñas, hasta 10 equipos",
    items: [
      "Configuración de Wi-Fi y router empresarial",
      "Soporte remoto ante caídas de red",
      "Revisión mensual preventiva",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $350.000/mes",
    description: "El más elegido para pymes con servidor",
    highlight: true,
    items: [
      "Administración de Active Directory",
      "Mantención de 1 servidor (Windows o Linux)",
      "Configuración de VPN",
      "Soporte remoto y presencial según urgencia",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $650.000/mes",
    description: "Redes grandes con múltiples servidores",
    items: [
      "Administración de varios servidores",
      "Políticas de grupo y permisos avanzados",
      "Monitoreo proactivo de la red",
      "Soporte prioritario con tiempos de respuesta definidos",
    ],
  },
],
  intro:
    "Como ingeniero informático, administro y mantengo la infraestructura de red de tu negocio: servidores, equipos conectados por Active Directory o Linux, y la red en general. El objetivo es que tu equipo trabaje sin caídas ni cuellos de botella, y que tengas a alguien a quien recurrir cuando algo falla.",
  features: [
    {
      title: "Administración de Active Directory",
      description:
        "Gestión de usuarios, permisos y políticas de grupo, para que el acceso a los recursos de tu empresa esté ordenado y sea seguro.",
    },
    {
      title: "Mantención de servidores",
      description:
        "Revisión y mantención de servidores Windows o Linux: actualizaciones, rendimiento y disponibilidad.",
    },
    {
      title: "Configuración de redes",
      description:
        "Configuración de routers, switches, VPN y Wi-Fi empresarial, para una red estable y con el acceso correcto para cada equipo.",
    },
    {
      title: "Soporte remoto y presencial",
      description:
        "Atención cuando surge un problema de red o servidor, ya sea resolviéndolo a distancia o presencial según la urgencia.",
    },
  ],
  audience: [
    "Empresas con varios equipos conectados a una misma red",
    "Negocios que usan Active Directory o dominios Linux",
    "Empresas que no cuentan con un administrador de redes interno",
    "Negocios que han tenido caídas de red o problemas de acceso recurrentes",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos el estado actual de tu red y servidores." },
    { title: "Plan", text: "Definimos qué configurar, mejorar o dejar en mantención." },
    { title: "Implementación", text: "Configuración de la red, servidores y políticas de acceso." },
    { title: "Pruebas", text: "Verificamos estabilidad y accesos antes de dar por cerrado." },
    { title: "Soporte continuo", text: "Mantención y atención ante incidentes según el plan acordado." },
  ],
  stack: ["Active Directory", "Windows Server", "Linux", "VPN", "Redes empresariales"],
  faqs: [
    {
      q: "¿Necesito tener servidores propios para contratar este servicio?",
      a: "No necesariamente. También administro redes más simples, con pocos equipos conectados, y te oriento si en algún momento conviene sumar un servidor.",
    },
    {
      q: "¿El soporte es solo remoto o también presencial?",
      a: "Ambos. Muchas tareas se resuelven de forma remota, pero para configuraciones iniciales o problemas de hardware de red, coordinamos una visita presencial.",
    },
    {
      q: "¿Qué pasa si mi red la configuró otra persona antes?",
      a: "No hay problema, puedo tomar redes ya configuradas por otra persona, siempre que tenga acceso a los equipos y a la documentación existente (si la hay).",
    },
  ],
};

export const ciberseguridadBasica = {
  slug: "ciberseguridad-basica",
  icon: "🛡️",
  title: "Ciberseguridad Básica",
  tagline: "Protegemos tus equipos y tu red contra amenazas comunes",
  color: "#3b4a6b",
  pricingNote:
  "Precio mensual según cantidad de equipos a proteger. Incluye configuración inicial y mantención continua de las medidas de seguridad.",
pricing: [
  {
    name: "Básico",
    price: "Desde $180.000/mes",
    description: "Protección esencial, hasta 10 equipos",
    items: [
      "Firewall y antivirus empresarial",
      "Políticas de contraseñas seguras",
      "Respaldo de seguridad mensual",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $400.000/mes",
    description: "El más elegido para negocios con datos sensibles",
    highlight: true,
    items: [
      "Firewall, antivirus y control de accesos por rol",
      "Respaldo automático semanal",
      "Protección contra phishing y ransomware",
      "Revisión periódica de nuevas amenazas",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $750.000/mes",
    description: "Para equipos grandes o datos críticos",
    items: [
      "Protección de múltiples equipos y servidores",
      "Respaldo automático diario",
      "Políticas de acceso avanzadas por área",
      "Soporte prioritario ante incidentes de seguridad",
    ],
  },
],
  intro:
    "Configuro medidas de seguridad esenciales para proteger tus equipos y tu red de las amenazas más comunes: virus, accesos no autorizados y pérdida de información. No se trata de un servicio de seguridad avanzada de nivel corporativo, sino de las buenas prácticas que todo negocio debería tener y muchas veces no tiene.",
  features: [
    {
      title: "Firewalls y antivirus empresarial",
      description:
        "Configuración de firewall y antivirus a nivel de red y equipo, para bloquear amenazas antes de que lleguen a causar daño.",
    },
    {
      title: "Políticas de acceso y contraseñas",
      description:
        "Definimos quién puede acceder a qué, con contraseñas seguras y permisos acordes al rol de cada persona en tu equipo.",
    },
    {
      title: "Respaldo de seguridad",
      description:
        "Copias de seguridad periódicas de la información crítica, para poder recuperarla si algo sale mal.",
    },
    {
      title: "Protección ante amenazas comunes",
      description:
        "Medidas contra phishing, ransomware y otras amenazas frecuentes, junto con recomendaciones para que tu equipo no caiga en ellas.",
    },
  ],
  audience: [
    "Negocios que nunca han revisado su seguridad informática",
    "Empresas que manejan información sensible de clientes",
    "Negocios que han sufrido o temen un incidente de seguridad",
    "Equipos que necesitan políticas claras de acceso y contraseñas",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos el estado actual de seguridad de tus equipos y red." },
    { title: "Plan", text: "Priorizamos qué proteger primero según el riesgo real." },
    { title: "Implementación", text: "Configuración de firewall, antivirus, accesos y respaldos." },
    { title: "Pruebas", text: "Verificamos que las protecciones funcionen como corresponde." },
    { title: "Seguimiento", text: "Revisión periódica y ajustes según nuevas amenazas." },
  ],
  stack: ["Firewalls", "Antivirus empresarial", "Backups", "Políticas de acceso"],
  faqs: [
    {
      q: "¿Esto reemplaza a un equipo de ciberseguridad corporativo?",
      a: "No. Este servicio cubre las buenas prácticas esenciales para pymes y negocios medianos. Si necesitas seguridad de nivel corporativo avanzado, te puedo orientar hacia ese tipo de especialista.",
    },
    {
      q: "¿Qué tan rápido se puede implementar?",
      a: "Las medidas básicas (firewall, antivirus, contraseñas) se pueden dejar funcionando en pocos días. Cosas como políticas de acceso más detalladas toman un poco más, según el tamaño de tu equipo.",
    },
    {
      q: "¿Qué hago si creo que ya tuve un incidente de seguridad?",
      a: "Avísame apenas lo notes. Revisamos qué pasó, contenemos el problema y después dejamos las protecciones necesarias para que no se repita.",
    },
  ],
};

export const reparacionEquipos = {
  slug: "reparacion-equipos",
  icon: "🖥️",
  title: "Reparación de Equipos de PC",
  tagline: "Diagnóstico y reparación de computadores, hardware y software",
  color: "#c94f4f",
  pricingNote:
  "Diagnóstico gratuito. Los precios corresponden solo a mano de obra — el valor de los repuestos (discos, RAM, fuentes de poder, etc.) se cotiza aparte según el componente y disponibilidad.",
pricing: [
  {
    name: "Básico",
    price: "Desde $35.000",
    description: "Formateo e instalación",
    items: [
      "Diagnóstico gratuito",
      "Formateo completo del equipo",
      "Instalación de sistema operativo y programas esenciales",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $60.000",
    description: "El más elegido para fallas de hardware",
    highlight: true,
    items: [
      "Diagnóstico gratuito",
      "Mano de obra por cambio de pieza (repuesto no incluido)",
      "Limpieza interna y pasta térmica",
      "Garantía sobre el trabajo realizado",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $150.000",
    description: "Mantención de varios equipos",
    items: [
      "Diagnóstico y mantención de flota de equipos",
      "Formateo y limpieza programada",
      "Prioridad de atención ante fallas",
      "Reporte de estado por equipo (repuestos no incluidos)",
    ],
  },
],
  intro:
    "Reviso y reparo computadores que presentan fallas, ya sea por un problema de hardware (piezas dañadas, sobrecalentamiento) o de software (lentitud, virus, errores del sistema). Empiezo siempre con un diagnóstico para saber exactamente qué está pasando antes de cobrarte por una solución.",
  features: [
    {
      title: "Diagnóstico gratuito",
      description:
        "Reviso tu equipo sin costo para identificar la causa real del problema antes de proponerte una solución o cotización.",
    },
    {
      title: "Formateo e instalación",
      description:
        "Formateo completo, instalación de sistema operativo y programas esenciales, dejando el equipo funcionando como nuevo.",
    },
    {
      title: "Cambio de piezas",
      description:
        "Reemplazo de componentes dañados (discos, memorias RAM, fuentes de poder, ventiladores) por repuestos compatibles y de calidad.",
    },
    {
      title: "Limpieza y mantención",
      description:
        "Limpieza interna de polvo y pasta térmica, para mejorar el rendimiento y evitar que el equipo se sobrecaliente o se dañe con el tiempo.",
    },
  ],
  audience: [
    "Personas con un notebook o PC que anda lento o con errores",
    "Equipos que no encienden o presentan fallas intermitentes",
    "Quienes necesitan formatear su computador de forma segura",
    "Negocios que necesitan mantener varios equipos funcionando bien",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos el equipo sin costo para identificar la falla." },
    { title: "Cotización", text: "Te explico el problema y el costo antes de hacer cualquier cambio." },
    { title: "Reparación", text: "Ejecución del arreglo, cambio de piezas o formateo acordado." },
    { title: "Pruebas", text: "Verificamos que el equipo funcione bien antes de entregarlo." },
    { title: "Garantía", text: "Periodo de garantía sobre el trabajo realizado." },
  ],
  stack: ["Notebooks", "PC de Escritorio", "Windows", "Componentes de Hardware"],
  faqs: [
    {
      q: "¿El diagnóstico realmente no tiene costo?",
      a: "Así es. Reviso el equipo primero y te explico qué tiene antes de cobrarte por cualquier reparación. Solo pagas si decides seguir adelante con el arreglo.",
    },
    {
      q: "¿Puedo perder mis archivos si formatean mi equipo?",
      a: "Antes de formatear, te aviso para que respaldemos juntos tu información importante, o me encargo yo del respaldo si me lo pides explícitamente.",
    },
    {
      q: "¿Cuánto se demora una reparación?",
      a: "Depende del tipo de falla. Un formateo puede estar listo el mismo día; un cambio de piezas depende de la disponibilidad del repuesto, y te aviso el plazo estimado apenas lo confirmo.",
    },
  ],
};

export const solucionesIA = {
  slug: "soluciones-ia",
  icon: "🤖",
  title: "Soluciones con IA",
  tagline: "Aplicamos inteligencia artificial para impulsar la toma de decisiones",
  color: "#546272",
  pricingNote:
  "El precio depende de la complejidad de la integración y si se requiere entrenar o ajustar un modelo a tu caso específico.",
pricing: [
  {
    name: "Básico",
    price: "Desde $350.000",
    description: "Chatbot o automatización simple",
    items: [
      "Chatbot para preguntas frecuentes",
      "Integración con WhatsApp o sitio web",
      "Configuración inicial de respuestas",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $800.000",
    description: "El más elegido para automatizar decisiones",
    highlight: true,
    items: [
      "Chatbot con calificación de leads",
      "Automatización con reglas de decisión",
      "Integración con tus sistemas actuales",
      "Ajustes durante el primer mes de uso",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $1.500.000",
    description: "Análisis de datos e integraciones avanzadas",
    items: [
      "Análisis de datos con IA (ventas, clientes, inventario)",
      "Automatización inteligente a medida",
      "Integraciones múltiples con sistemas existentes",
      "Soporte y mejora continua post-lanzamiento",
    ],
  },
],
  intro:
    "Incorporo inteligencia artificial donde realmente aporta valor a tu negocio: respondiendo consultas de tus clientes, analizando datos que hoy no estás aprovechando, o automatizando decisiones repetitivas. No se trata de sumar IA porque sí, sino de resolver un problema concreto con ella.",
  features: [
    {
      title: "Chatbots",
      description:
        "Asistentes conversacionales para responder preguntas frecuentes de tus clientes, calificar leads o dar soporte básico las 24 horas.",
    },
    {
      title: "Análisis de datos",
      description:
        "Uso de IA para encontrar patrones en tu información —ventas, comportamiento de clientes, inventario— y convertirlos en decisiones concretas.",
    },
    {
      title: "Automatización inteligente",
      description:
        "Procesos que no solo se ejecutan automáticamente, sino que además toman pequeñas decisiones según reglas o modelos entrenados para tu caso.",
    },
    {
      title: "Integraciones IA",
      description:
        "Conexión de herramientas de IA (como modelos de lenguaje) a tus sistemas actuales, sin tener que reconstruir todo desde cero.",
    },
  ],
  audience: [
    "Negocios que reciben muchas consultas repetitivas de clientes",
    "Empresas que acumulan datos pero no los están aprovechando",
    "Equipos que quieren automatizar decisiones simples y repetitivas",
    "Negocios que buscan diferenciarse incorporando IA de forma práctica",
  ],
  process: [
    { title: "Diagnóstico", text: "Identificamos dónde la IA realmente aporta valor a tu caso." },
    { title: "Diseño de solución", text: "Definimos el enfoque técnico y el alcance del proyecto." },
    { title: "Desarrollo", text: "Implementación y entrenamiento/configuración según el caso." },
    { title: "Pruebas", text: "Validamos resultados con datos y casos reales antes de lanzar." },
    { title: "Soporte", text: "Ajustes y mejora continua según el uso real." },
  ],
  stack: ["APIs de IA", "Node.js", "Python", "Análisis de datos"],
  faqs: [
    {
      q: "¿Necesito tener muchos datos para usar IA en mi negocio?",
      a: "No siempre. Algunas soluciones, como un chatbot de atención, no requieren datos históricos propios. Otras, como el análisis de patrones, sí se benefician de tener más información disponible.",
    },
    {
      q: "¿Un chatbot puede reemplazar completamente la atención al cliente?",
      a: "Puede resolver consultas frecuentes y filtrar casos simples, pero lo recomendable es que derive a una persona real cuando el caso lo amerite, no reemplazar la atención humana por completo.",
    },
    {
      q: "¿Cómo sé si mi negocio realmente necesita IA?",
      a: "Lo evaluamos juntos en la etapa de diagnóstico. Si el problema se puede resolver con automatización simple, te lo digo directamente — la IA no siempre es la solución más eficiente.",
    },
  ],
};

export const automatizacionSoporte = {
  slug: "automatizacion-soporte",
  icon: "🔧",
  title: "Automatización y Soporte",
  tagline: "Optimizamos procesos y damos soporte técnico experto a tu equipo",
  color: "#e08a1e",
  pricingNote:
  "Planes mensuales con horas de soporte incluidas. También disponible por hora suelta para necesidades puntuales — consulta la tarifa vigente.",
pricing: [
  {
    name: "Básico",
    price: "Desde $120.000/mes",
    description: "Soporte puntual, pocas horas al mes",
    items: [
      "4 horas de soporte incluidas al mes",
      "Atención remota",
      "Tiempo de respuesta estándar",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $280.000/mes",
    description: "El más elegido para mantención continua",
    highlight: true,
    items: [
      "10 horas de soporte incluidas al mes",
      "1 automatización de tarea repetitiva incluida",
      "Mantenimiento preventivo mensual",
      "Tiempo de respuesta prioritario",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $550.000/mes",
    description: "Soporte y automatización a medida",
    items: [
      "20 horas de soporte incluidas al mes",
      "Automatizaciones múltiples según necesidad",
      "Asesoría técnica continua",
      "Tiempo de respuesta prioritario garantizado",
    ],
  },
],
  intro:
    "No todo proyecto empieza de cero: muchas veces lo que hace falta es optimizar lo que ya tienes y contar con alguien a quien recurrir cuando algo falla. Ayudo a automatizar tareas repetitivas y doy soporte técnico continuo para que tu sistema siga funcionando sin sobresaltos.",
  features: [
    {
      title: "Soporte técnico",
      description:
        "Atención cuando algo falla en tu sitio o sistema, con tiempos de respuesta claros y sin depender de que aprendas a resolverlo tú mismo.",
    },
    {
      title: "Automatización de tareas",
      description:
        "Identificamos tareas manuales y repetitivas (reportes, envíos, cálculos) y las convertimos en procesos automáticos que corren solos.",
    },
    {
      title: "Mantenimiento",
      description:
        "Actualizaciones de seguridad, revisión de rendimiento y correcciones preventivas, para que tu sistema no se quede obsoleto ni vulnerable.",
    },
    {
      title: "Asesoría técnica",
      description:
        "Orientación cuando necesitas tomar una decisión técnica —qué herramienta usar, cómo escalar, qué priorizar— sin tener que resolverlo solo.",
    },
  ],
  audience: [
    "Negocios que ya tienen un sitio o sistema, pero nadie que les dé soporte",
    "Equipos con tareas manuales repetitivas que quitan tiempo cada semana",
    "Empresas que quieren un plan de mantención en vez de arreglos de urgencia",
    "Negocios que necesitan una opinión técnica antes de decidir un cambio grande",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos el estado actual de tu sitio o sistema." },
    { title: "Plan", text: "Definimos qué automatizar primero y el tipo de soporte que necesitas." },
    { title: "Implementación", text: "Configuración de automatizaciones y mejoras de mantenimiento." },
    { title: "Acompañamiento", text: "Soporte continuo según el plan acordado." },
    { title: "Revisión periódica", text: "Ajustes y mejoras a medida que cambian tus necesidades." },
  ],
  stack: ["Node.js", "APIs REST", "Automatización de tareas", "Monitoreo"],
  faqs: [
    {
      q: "¿El soporte es por hora o por plan mensual?",
      a: "Ofrezco ambas modalidades: por horas para necesidades puntuales, o un plan mensual con horas incluidas si necesitas atención más frecuente.",
    },
    {
      q: "¿Qué tipo de tareas se pueden automatizar?",
      a: "Reportes periódicos, envío de correos o notificaciones, cálculos repetitivos, sincronización de datos entre sistemas, entre otras. Lo evaluamos juntos según tu caso.",
    },
    {
      q: "¿Puedo contratar soporte aunque el sitio no lo hayas hecho tú?",
      a: "Sí, puedo tomar sistemas ya existentes hechos por otro desarrollador, siempre que tenga acceso al código y a la infraestructura para trabajar sobre ellos.",
    },
  ],
};

export const desarrolloWeb = {
  slug: "desarrollo-web",
  icon: "🌐",
  title: "Desarrollo Web",
  tagline: "Sitios y plataformas rápidas, responsivas y efectivas",
  color: "#1656b0",
  pricingNote:
  "Precios referenciales. El valor final depende del alcance real, funciones personalizadas y métodos de pago que necesite tu proyecto — se ajusta en la cotización.",
pricing: [
  {
    name: "Básico",
    price: "Desde $200.000",
    description: "Landing page o sitio simple",
    items: [
      "Landing page o sitio de 1-3 secciones",
      "Diseño responsivo (celular, tablet, PC)",
      "Formulario de contacto",
      "SEO básico incluido",
    ],
  },
  {
    name: "Estándar",
    price: "Desde $500.000",
    description: "Sitio con servicios y catálogo",
    items: [
      "Sitio web con varias secciones",
      "Página de servicios y catálogo",
      "SEO técnico + estructura optimizada",
      "Panel simple para editar contenido (opcional)",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $850.000",
    description: "El más elegido por pymes en crecimiento",
    highlight: true,
    items: [
      "Tienda online con carrito de compras",
      "Métodos de pago integrados",
      "Perfiles de usuario y cuentas",
      "Funciones personalizadas según el proyecto",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $1.200.000",
    description: "Para pymes grandes con necesidades avanzadas",
    items: [
      "Arquitectura escalable para alto tráfico",
      "Integraciones avanzadas (múltiples pasarelas de pago, ERPs, etc.)",
      "Roles y permisos de usuario",
      "Soporte prioritario post-lanzamiento",
    ],
  },
],
  intro:
    "Construyo sitios web pensados para convertir visitas en clientes: rápidos, que se vean bien en cualquier dispositivo, y con una base técnica sólida para que Google los encuentre. Desde una página corporativa simple hasta una tienda online completa.",
  features: [
    {
      title: "Sitios corporativos",
      description:
        "Páginas de presentación profesionales que comunican quién eres, qué ofreces y cómo contactarte, con un diseño acorde a tu marca.",
    },
    {
      title: "E-commerce",
      description:
        "Tiendas online con catálogo, carrito de compras y pagos integrados, listas para que empieces a vender sin fricción.",
    },
    {
      title: "Diseño responsivo",
      description:
        "El sitio se adapta perfectamente a celular, tablet y computador, porque hoy la mayoría de las visitas llegan desde el celular.",
    },
    {
      title: "SEO básico",
      description:
        "Estructura técnica pensada para que buscadores como Google puedan indexar y posicionar tu sitio correctamente desde el lanzamiento.",
    },
  ],
  audience: [
    "Negocios que todavía no tienen presencia web o quieren renovarla",
    "Emprendedores que quieren vender productos online",
    "Profesionales independientes que necesitan un sitio para captar clientes",
    "Empresas que buscan mejorar su posicionamiento en buscadores",
  ],
  process: [
    { title: "Descubrimiento", text: "Entendemos tu negocio, marca y a quién le hablas." },
    { title: "Diseño", text: "Propuesta visual antes de empezar a programar." },
    { title: "Desarrollo", text: "Construcción del sitio con avances visibles en el camino." },
    { title: "Pruebas", text: "Revisión en distintos dispositivos y navegadores." },
    { title: "Lanzamiento", text: "Publicación en producción y soporte inicial." },
  ],
  stack: ["React", "Node.js", "WordPress", "SEO técnico", "Hosting"],
  faqs: [
    {
      q: "¿Cuánto se demora un sitio web?",
      a: "Un sitio corporativo simple puede estar listo en 1-2 semanas. Una tienda online o un sitio con más secciones suele tomar entre 3 y 5 semanas, dependiendo del alcance.",
    },
    {
      q: "¿El SEO básico asegura que aparezca primero en Google?",
      a: "No garantiza el primer lugar, pero sí deja la base técnica correcta (velocidad, estructura, metadatos) para que el sitio pueda posicionarse. El SEO avanzado y de contenido es un servicio aparte.",
    },
    {
      q: "¿Puedo administrar el contenido yo mismo después?",
      a: "Sí, si lo necesitas puedo integrar un sistema simple para que edites textos e imágenes sin tocar código, o te dejo un mini manual de cómo hacer cambios básicos.",
    },
  ],
};

export const desarrolloSoftware = {
  slug: "desarrollo-software",
  icon: "⚙️",
  title: "Desarrollo de Software",
  tagline: "Soluciones a medida para automatizar y potenciar tu negocio",
  color: "#2f8f4e",
  intro:
    "Construyo software pensado específicamente para cómo funciona tu negocio, no una plantilla genérica. Si hoy gestionas procesos en planillas, correos sueltos o herramientas que no se hablan entre sí, un sistema a medida ordena eso en un solo lugar y te ahorra horas de trabajo manual cada semana.",
  pricingNote:
    "Este servicio es para sistemas internos que usa tu propio equipo (paneles de gestión, control de procesos, herramientas a medida). No incluye sitios web ni tiendas online — para eso revisa Desarrollo Web.",
  pricing: [
    {
      name: "Básico",
      price: "Desde $450.000",
      description: "Para una necesidad puntual y acotada",
      items: [
        "1 módulo funcional",
        "Diseño funcional simple",
        "30 días de soporte post-entrega",
      ],
    },
    {
      name: "Profesional",
      price: "Desde $900.000",
      description: "El más elegido por pymes",
      highlight: true,
      items: [
        "Varios módulos conectados",
        "Integración con sistemas existentes",
        "60 días de soporte post-entrega",
      ],
    },
    {
      name: "Empresarial",
      price: "Desde $1.800.000",
      description: "Sistemas complejos y escalables",
      items: [
        "Arquitectura escalable",
        "Roles y permisos de usuario",
        "Integraciones avanzadas (APIs, pagos, etc.)",
        "90 días de soporte post-entrega",
      ],
    },
  ],  
  features: [
    {
      title: "Software a medida",
      description:
        "Sistemas internos, paneles de gestión o pequeñas herramientas diseñadas específicamente para tu flujo de trabajo, no adaptaciones forzadas de un software genérico.",
    },
    {
      title: "Integraciones",
      description:
        "Conecto tus sistemas actuales entre sí (facturación, CRM, planillas, pagos) para que no tengas que ingresar la misma información dos veces.",
    },
    {
      title: "Optimización de procesos",
      description:
        "Identificamos tareas repetitivas —reportes, cálculos, notificaciones— y las automatizamos para liberar tiempo de tu equipo.",
    },
    {
      title: "Soporte continuo",
      description:
        "El acompañamiento no termina en la entrega: ajusto y mejoro el sistema a medida que cambian las necesidades de tu negocio.",
    },
  ],
  audience: [
    "Pymes que hoy gestionan todo en planillas de Excel o Google Sheets",
    "Negocios con procesos manuales que se repiten semana a semana",
    "Empresas que usan varias herramientas que no están conectadas entre sí",
    "Equipos que necesitan un sistema interno hecho a su medida, no un software genérico",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos cómo trabajas hoy y dónde se pierde más tiempo." },
    { title: "Propuesta", text: "Definimos alcance, plazos y cotización antes de empezar." },
    { title: "Desarrollo", text: "Construcción del sistema con avances visibles en el camino." },
    { title: "Pruebas", text: "Validamos que todo funcione bien contigo antes de lanzar." },
    { title: "Soporte", text: "Garantía inicial y ajustes según seguimos usando el sistema." },
  ],
  stack: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "APIs REST"],
  faqs: [
    {
      q: "¿Qué diferencia hay entre un software a medida y uno genérico?",
      a: "Un software genérico está hecho para cualquier negocio, así que tienes que adaptar tu forma de trabajar a la herramienta. Uno a medida se construye alrededor de tu proceso real, sin funciones de más que no vas a usar.",
    },
    {
      q: "¿Cuánto se demora un proyecto de este tipo?",
      a: "Depende del alcance. Una herramienta simple puede estar lista en 2-3 semanas; un sistema más completo con varios módulos puede tomar 6-10 semanas. Esto se define en la etapa de propuesta.",
    },
    {
      q: "¿Puedo pedir cambios después de la entrega?",
      a: "Sí. Incluyo un período de garantía para ajustes menores, y después puedes contratar soporte por horas o un plan de mantención mensual para seguir mejorando el sistema.",
    },
  ],
};

export const sistemasNube = {
  slug: "sistemas-nube",
  icon: "☁️",
  title: "Sistemas en la Nube",
  tagline: "Infraestructura segura, escalable y disponible cuando la necesites",
  color: "#1d6fd6",
  pricingNote:
  "Precio mensual de administración de infraestructura. No incluye el costo del proveedor cloud (AWS, Render, Vercel), que se factura aparte según el consumo real.",
pricing: [
  {
    name: "Básico",
    price: "Desde $80.000/mes",
    description: "Sitios o sistemas pequeños",
    items: [
      "Hosting en la nube configurado",
      "Backups automáticos semanales",
      "Monitoreo básico de disponibilidad",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $180.000/mes",
    description: "El más elegido para negocios en crecimiento",
    highlight: true,
    items: [
      "Arquitectura con escalabilidad automática",
      "Backups automáticos diarios",
      "Monitoreo 24/7 con alertas",
      "Soporte ante caídas o incidentes",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $350.000/mes",
    description: "Infraestructura de alta disponibilidad",
    items: [
      "Múltiples entornos (producción, pruebas)",
      "Backups diarios con retención extendida",
      "Monitoreo 24/7 con respuesta prioritaria",
      "Revisión y optimización mensual de costos cloud",
    ],
  },
],
  intro:
    "Alojo tu sitio o sistema en infraestructura cloud moderna, para que no dependa de un solo servidor físico ni se caiga cuando más lo necesitas. Configuro backups automáticos, monitoreo y una arquitectura que crece junto con tu negocio.",
  features: [
    {
      title: "Hosting en la nube",
      description:
        "Alojamiento en plataformas cloud (AWS, Render, Vercel) con alta disponibilidad, en vez de depender de un único servidor físico que puede fallar.",
    },
    {
      title: "Copias de seguridad",
      description:
        "Backups automáticos y periódicos de tu información, para que nunca pierdas datos ante un error humano o una falla técnica.",
    },
    {
      title: "Escalabilidad",
      description:
        "La infraestructura crece junto con tu negocio: si tienes más usuarios o tráfico, el sistema se adapta sin necesidad de reconstruirlo desde cero.",
    },
    {
      title: "Monitoreo 24/7",
      description:
        "Alertas automáticas ante caídas o problemas de rendimiento, para reaccionar rápido antes de que tus clientes lo noten.",
    },
  ],
  audience: [
    "Negocios que dependen de que su sitio o sistema esté siempre disponible",
    "Empresas que quieren migrar de un hosting tradicional a la nube",
    "Negocios en crecimiento que necesitan más capacidad sin rehacer todo",
    "Equipos que prefieren dejar de preocuparse por mantener servidores propios",
  ],
  process: [
    { title: "Diagnóstico", text: "Revisamos tu infraestructura actual y sus puntos débiles." },
    { title: "Arquitectura", text: "Diseñamos la solución cloud adecuada a tu escala real." },
    { title: "Migración", text: "Despliegue del sistema en la nube sin interrumpir tu operación." },
    { title: "Configuración", text: "Backups automáticos y monitoreo activo desde el día uno." },
    { title: "Soporte", text: "Seguimiento continuo y ajustes según crece tu negocio." },
  ],
  stack: ["AWS", "Render", "Vercel", "Docker", "Node.js"],
  faqs: [
    {
      q: "¿Qué diferencia hay entre hosting tradicional y la nube?",
      a: "El hosting tradicional depende de un servidor físico específico; si falla, tu sitio cae. La nube distribuye la carga entre varios servidores, por lo que es más estable y se adapta mejor a picos de tráfico.",
    },
    {
      q: "¿Qué pasa si mi sitio recibe mucho tráfico de golpe?",
      a: "La infraestructura cloud está pensada para escalar automáticamente ante aumentos de tráfico, evitando caídas por sobrecarga, algo que un hosting básico no siempre soporta bien.",
    },
    {
      q: "¿Con qué frecuencia se hacen los backups?",
      a: "Se configuran de forma automática y periódica (normalmente diaria), según la criticidad de la información. Esto se define juntos según las necesidades de tu proyecto.",
    },
  ],
};

export const appsMoviles = {
  slug: "apps-moviles",
  icon: "📱",
  title: "Apps Móviles",
  tagline: "Aplicaciones modernas, rápidas y fáciles de usar",
  color: "#7b3fa0",
  pricingNote:
  "Aplica a apps multiplataforma (iOS + Android) con React Native. Publicación en tiendas no incluye el costo de cuenta de desarrollador (Google/Apple), que paga el cliente directamente.",
pricing: [
  {
    name: "Básico",
    price: "Desde $1.500.000",
    description: "MVP para validar una idea",
    items: [
      "App multiplataforma (iOS + Android)",
      "Funciones esenciales, 1 flujo principal",
      "Diseño UX/UI simple",
      "Publicación en ambas tiendas",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $3.200.000",
    description: "La más elegida para negocios con servicio",
    highlight: true,
    items: [
      "App con varios módulos y pantallas",
      "Notificaciones push",
      "Integración con backend propio",
      "Publicación y soporte inicial post-lanzamiento",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $5.800.000",
    description: "Apps complejas con integraciones",
    items: [
      "Múltiples módulos e integraciones avanzadas",
      "Backend a medida con roles de usuario",
      "Diseño UX/UI completo con prototipado",
      "Soporte extendido post-lanzamiento",
    ],
  },
],
  intro:
    "Diseño y desarrollo aplicaciones móviles para que tu negocio esté directo en el celular de tus clientes o tu equipo. Ya sea una app orientada a usuarios finales o una herramienta interna, el foco está en que sea simple de usar desde el primer momento.",
  features: [
    {
      title: "iOS y Android",
      description:
        "Apps multiplataforma con React Native que funcionan bien en ambos sistemas operativos desde una sola base de código, ahorrando tiempo y costo de desarrollo.",
    },
    {
      title: "Diseño UX/UI",
      description:
        "Interfaces pensadas en cómo navega realmente el usuario, no solo en que se vean bonitas. Menos fricción, más gente completando lo que vino a hacer.",
    },
    {
      title: "Notificaciones push",
      description:
        "Alertas y recordatorios directos al celular del usuario, para avisos de citas, novedades o cualquier evento importante de tu negocio.",
    },
    {
      title: "Publicación en tiendas",
      description:
        "Me encargo de todo el proceso de subida a App Store y Google Play: cuentas de desarrollador, cumplimiento de políticas y revisión.",
    },
  ],
  audience: [
    "Negocios que quieren estar directo en el celular de sus clientes",
    "Servicios con reservas o seguimiento, como delivery, fitness o salud",
    "Startups que necesitan un MVP rápido para validar una idea",
    "Empresas que quieren digitalizar procesos internos en una app para su equipo",
  ],
  process: [
    { title: "Descubrimiento", text: "Definimos el objetivo de la app y quién la va a usar." },
    { title: "Diseño UX/UI", text: "Prototipo navegable antes de escribir una sola línea de código." },
    { title: "Desarrollo", text: "Construcción con pruebas en dispositivos reales en el camino." },
    { title: "Pruebas", text: "Verificamos rendimiento y usabilidad en distintos celulares." },
    { title: "Publicación", text: "Subida a las tiendas y soporte post-lanzamiento." },
  ],
  stack: ["React Native", "Expo", "Firebase", "Node.js", "APIs REST"],
  faqs: [
    {
      q: "¿Necesito una app para iOS y Android, o puedo empezar con una sola?",
      a: "Puedes empezar por la que use más tu público objetivo. Con React Native, cuando decidas sumar la otra plataforma, reutilizamos casi todo el código ya hecho.",
    },
    {
      q: "¿Cuánto cuesta publicar en las tiendas?",
      a: "Google Play tiene un pago único de cuenta de desarrollador; Apple cobra una membresía anual. Estos costos son del propietario de la app, no están incluidos en el desarrollo, y te los explico antes de publicar.",
    },
    {
      q: "¿Qué es un MVP y por qué me conviene empezar así?",
      a: "Un MVP es una primera versión con las funciones esenciales, para validar la idea con usuarios reales antes de invertir en todo el alcance completo. Permite corregir el rumbo temprano y con menor costo.",
    },
  ],
};