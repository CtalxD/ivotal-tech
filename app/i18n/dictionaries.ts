// app/i18n/dictionaries.ts
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const serviceIds = ["websites", "web-apps", "custom-software", "interface-design"] as const;

const en = {
  meta: {
    title: "Ivotal Technology | Websites, web apps and custom software",
    description:
      "Ivotal Technology is a remote development studio building websites, web applications and custom software for businesses across Mexico and Latin America. Websites from $400 USD.",
  },
  servicesMeta: {
    title: "Services | Ivotal Technology",
    description:
      "Websites, web applications, custom software and interface design from Ivotal Technology, a remote studio working across Mexico and Latin America.",
  },
  contactMeta: {
    title: "Contact | Ivotal Technology",
    description:
      "Tell Ivotal Technology what you need to build. We reply with questions and a starting price.",
  },
  ui: {
    skip: "Skip to content",
    home: "Ivotal Technology, home",
    langLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primaryNav: "Primary",
    from: "from",
  },
  nav: { home: "Home", services: "Services", process: "Process", contact: "Contact", cta: "Start a project" },
  hero: {
    title: "Websites and software your customers will trust.",
    lede: "Ivotal Technology is a remote development studio working with businesses across Mexico and Latin America. Clear starting prices, custom code wherever you need it.",
    primary: "Start a project",
    secondary: "See what is included",
    pricesLabel: "Starting prices in USD",
    caption: "Prices in USD. Extra features are quoted by requirement.",
    tiers: ["Website", "Web application", "Custom software or app"],
    tierText: [
      "Fast, mobile-ready, with basic SEO set up.",
      "A browser-based tool for your customers or staff.",
      "Software shaped around the way you work.",
    ],
  },
  services: {
    title: "What we build",
    more: "See details",
    all: "All services",
    jump: "Jump to a service",
    intro:
      "Every project starts from a fixed base price. Anything beyond it, we scope with you and price before work begins.",
    items: [
      {
        name: "Websites",
        text: "Fast, mobile-ready sites with a clear layout and the SEO basics in place.",
        items: ["Mobile responsive layout", "Basic SEO setup"],
      },
      {
        name: "Web applications",
        text: "Browser-based tools for your customers or your staff, from dashboards to booking systems.",
        items: ["Features written to your requirements", "User accounts and permissions", "Built to grow with your business"],
      },
      {
        name: "Custom software and apps",
        text: "When off-the-shelf tools don't fit, we build the one that does.",
        items: ["Scoped around how you work", "Web, desktop or mobile", "Integrations with tools you already use"],
      },
      {
        name: "Interface design",
        text: "Clear, consistent screens designed before a line of code is written.",
        items: ["Wireframes and flows", "Visual design", "Reusable design system", "Hand-off ready for development"],
      },
    ],
  },
  process: {
    title: "How a project runs",
    intro: "Four stages, with a check-in before each one so nothing surprises you.",
    steps: [
      { title: "Brief", text: "You tell us what you need. We confirm scope and quote a clear starting price." },
      { title: "Design", text: "We design the screens and flows, and you approve them before we build." },
      { title: "Build", text: "We write the code, test it on real devices and share progress as we go." },
      { title: "Launch and care", text: "We go live together, then keep it updated, secure and backed up if you want us to." },
    ],
  },
  cta: {
    title: "Tell us what you need to build.",
    text: "Send a short description. We reply with questions and a starting price.",
  },
  contact: {
    title: "Start a project",
    lede: "Send a short description of what you need to build. We reply with questions and a starting price.",
    listTitle: "What to include",
    list: [
      "What you want to build",
      "Who will use it",
      "Tools it should connect to",
      "When you would like to launch",
    ],
    emailLabel: "Email us at",
    form: {
      name: "Your name",
      email: "Your email",
      service: "What do you need?",
      notSure: "Not sure yet",
      message: "Tell us about the project",
      placeholder: "What you want to build, who will use it and when you would like to launch.",
      send: "Send by email",
      hint: "This opens your email app with the message ready to send.",
      direct: "Or write to us directly",
      subject: "New project request",
    },
  },
  svcPage: {
    includedLabel: "Included in the starting price",
    extraLabel: "Extra, quoted separately",
    fit: "Good for",
    price: "Starting price",
    scoped: "Scoped with you",
    scopedNote: "Priced in the brief, once we know how many screens and flows you need.",
    priceNote: "Fixed base price. Anything extra is quoted before work begins.",
    start: "Start this project",
    pickTitle: "Which one fits you?",
    pickIntro: "Not sure where to begin? Match your situation to a service.",
    pickIf: "Choose this if",
    pick: [
      "Your business needs a clear online presence that looks right on every screen.",
      "Customers or staff need to log in, manage records or book things in a browser.",
      "Your process is unusual, no existing tool fits it, or you need it on desktop or mobile.",
      "You want to see and approve the screens before deciding what to build.",
    ],
    includedTitle: "Included in every project",
    includedIntro: "Whatever you choose, the way we work stays the same.",
    extras: [
      [
        "Content management system (CMS), so your team can edit text and images",
        "Monthly maintenance: updates, security and backups",
        "Custom features, quoted by requirement",
      ],
      [
        "Monthly maintenance: updates, security and backups",
        "Additional features, quoted by requirement",
      ],
      [
        "Monthly maintenance (recommended)",
        "Additional features, quoted by requirement",
      ],
      ["Anything beyond the agreed screens and flows, quoted before work begins"],
    ],
    fits: [
      ["Company and service sites", "Landing pages for a campaign or product", "Portfolios and catalogues"],
      ["Customer portals", "Booking and reservation systems", "Dashboards and internal tools"],
      ["Replacing spreadsheets and manual routines", "Tools for one specific industry process", "Mobile apps for staff or customers"],
      ["Planning an app before you commit to building it", "Refreshing screens that feel inconsistent", "Giving developers a clear design to follow"],
    ],
  },
  notFound: {
    title: "This page doesn't exist.",
    text: "The link may be broken, or the page may have moved. Head back to the homepage and pick up from there.",
    button: "Back to home",
  },
  footer: {
    blurb:
      "A remote development studio building websites, web applications and custom software for businesses across Mexico and Latin America.",
    services: "Services",
    company: "Company",
    language: "Language",
    links: {
      websites: "Websites",
      apps: "Web applications",
      software: "Custom software",
      design: "Interface design",
      how: "How we work",
      contact: "Contact",
    },
    rights: "All rights reserved.",
    prices: "All prices in USD.",
  },
};

export type Dict = typeof en;

const es: Dict = {
  meta: {
    title: "Ivotal Technology | Sitios web, aplicaciones web y software a la medida",
    description:
      "Ivotal Technology es un estudio de desarrollo remoto que crea sitios web, aplicaciones web y software a la medida para empresas en México y Latinoamérica. Sitios web desde $400 USD.",
  },
  servicesMeta: {
    title: "Servicios | Ivotal Technology",
    description:
      "Sitios web, aplicaciones web, software a la medida y diseño de interfaces de Ivotal Technology, un estudio remoto que trabaja en México y Latinoamérica.",
  },
  contactMeta: {
    title: "Contacto | Ivotal Technology",
    description:
      "Cuéntale a Ivotal Technology qué necesitas construir. Te respondemos con preguntas y un precio inicial.",
  },
  ui: {
    skip: "Saltar al contenido",
    home: "Ivotal Technology, inicio",
    langLabel: "Idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primaryNav: "Principal",
    from: "desde",
  },
  nav: { home: "Inicio", services: "Servicios", process: "Proceso", contact: "Contacto", cta: "Iniciar un proyecto" },
  hero: {
    title: "Sitios web y software en los que tus clientes confían.",
    lede: "Ivotal Technology es un estudio de desarrollo remoto que trabaja con empresas en México y Latinoamérica. Precios iniciales claros y código a la medida donde lo necesites.",
    primary: "Iniciar un proyecto",
    secondary: "Ver qué incluye",
    pricesLabel: "Precios iniciales en USD",
    caption: "Precios en USD. Las funciones adicionales se cotizan según tus requisitos.",
    tiers: ["Sitio web", "Aplicación web", "Software o app a la medida"],
    tierText: [
      "Rápido, adaptado a móviles y con SEO básico configurado.",
      "Una herramienta en el navegador para tus clientes o tu equipo.",
      "Software pensado en torno a tu forma de trabajar.",
    ],
  },
  services: {
    title: "Lo que construimos",
    more: "Ver detalles",
    all: "Todos los servicios",
    jump: "Ir a un servicio",
    intro:
      "Cada proyecto parte de un precio base fijo. Todo lo que vaya más allá lo definimos contigo y lo cotizamos antes de empezar.",
    items: [
      {
        name: "Sitios web",
        text: "Sitios rápidos y adaptados a móviles, con una estructura clara y lo básico de SEO resuelto.",
        items: ["Diseño adaptable a móviles", "SEO básico"],
      },
      {
        name: "Aplicaciones web",
        text: "Herramientas en el navegador para tus clientes o tu equipo, desde paneles hasta sistemas de reservas.",
        items: ["Funciones desarrolladas según tus requisitos", "Cuentas de usuario y permisos", "Pensadas para crecer con tu negocio"],
      },
      {
        name: "Software y apps a la medida",
        text: "Cuando las herramientas genéricas no encajan, construimos la que sí.",
        items: ["Planeado en torno a tu forma de trabajar", "Web, escritorio o móvil", "Integraciones con las herramientas que ya usas"],
      },
      {
        name: "Diseño de interfaces",
        text: "Pantallas claras y consistentes, diseñadas antes de escribir una línea de código.",
        items: ["Wireframes y flujos", "Diseño visual", "Sistema de diseño reutilizable", "Listo para entregar a desarrollo"],
      },
    ],
  },
  process: {
    title: "Cómo funciona un proyecto",
    intro: "Cuatro etapas, con una revisión antes de cada una para que nada te sorprenda.",
    steps: [
      { title: "Brief", text: "Nos cuentas qué necesitas. Confirmamos el alcance y te damos un precio inicial claro." },
      { title: "Diseño", text: "Diseñamos las pantallas y los flujos, y tú los apruebas antes de construir." },
      { title: "Desarrollo", text: "Escribimos el código, lo probamos en dispositivos reales y te mostramos los avances." },
      { title: "Lanzamiento y soporte", text: "Publicamos juntos y, si lo quieres, lo mantenemos actualizado, seguro y respaldado." },
    ],
  },
  cta: {
    title: "Cuéntanos qué necesitas construir.",
    text: "Envía una breve descripción. Te respondemos con preguntas y un precio inicial.",
  },
  contact: {
    title: "Iniciar un proyecto",
    lede: "Envía una breve descripción de lo que necesitas construir. Te respondemos con preguntas y un precio inicial.",
    listTitle: "Qué incluir",
    list: [
      "Qué quieres construir",
      "Quién lo va a usar",
      "Con qué herramientas debe conectarse",
      "Cuándo te gustaría lanzarlo",
    ],
    emailLabel: "Escríbenos a",
    form: {
      name: "Tu nombre",
      email: "Tu correo",
      service: "¿Qué necesitas?",
      notSure: "Aún no estoy seguro",
      message: "Cuéntanos sobre el proyecto",
      placeholder: "Qué quieres construir, quién lo va a usar y cuándo te gustaría lanzarlo.",
      send: "Enviar por correo",
      hint: "Se abre tu app de correo con el mensaje listo para enviar.",
      direct: "O escríbenos directamente",
      subject: "Nueva solicitud de proyecto",
    },
  },
  svcPage: {
    includedLabel: "Incluido en el precio inicial",
    extraLabel: "Extra, se cotiza aparte",
    fit: "Ideal para",
    price: "Precio inicial",
    scoped: "Se define contigo",
    scopedNote: "Se cotiza en el brief, cuando sepamos cuántas pantallas y flujos necesitas.",
    priceNote: "Precio base fijo. Todo lo extra se cotiza antes de empezar.",
    start: "Iniciar este proyecto",
    pickTitle: "¿Cuál te conviene?",
    pickIntro: "¿No sabes por dónde empezar? Relaciona tu situación con un servicio.",
    pickIf: "Elígelo si",
    pick: [
      "Tu negocio necesita una presencia en línea clara que se vea bien en cualquier pantalla.",
      "Tus clientes o tu equipo necesitan iniciar sesión, gestionar registros o reservar desde el navegador.",
      "Tu proceso es particular, ninguna herramienta existente encaja, o lo necesitas en escritorio o móvil.",
      "Quieres ver y aprobar las pantallas antes de decidir qué construir.",
    ],
    includedTitle: "Incluido en cada proyecto",
    includedIntro: "Elijas lo que elijas, nuestra forma de trabajar es la misma.",
    extras: [
      [
        "Sistema de gestión de contenido (CMS), para que tu equipo edite textos e imágenes",
        "Mantenimiento mensual: actualizaciones, seguridad y respaldos",
        "Funciones a la medida, cotizadas según tus requisitos",
      ],
      [
        "Mantenimiento mensual: actualizaciones, seguridad y respaldos",
        "Funciones adicionales, cotizadas según tus requisitos",
      ],
      [
        "Mantenimiento mensual (recomendado)",
        "Funciones adicionales, cotizadas según tus requisitos",
      ],
      ["Todo lo que vaya más allá de las pantallas y flujos acordados, cotizado antes de empezar"],
    ],
    fits: [
      ["Sitios de empresa y de servicios", "Páginas de aterrizaje para una campaña o producto", "Portafolios y catálogos"],
      ["Portales de clientes", "Sistemas de reservas", "Paneles y herramientas internas"],
      ["Reemplazar hojas de cálculo y tareas manuales", "Herramientas para un proceso específico de tu industria", "Apps móviles para tu equipo o tus clientes"],
      ["Planear una app antes de decidir construirla", "Renovar pantallas que se sienten inconsistentes", "Dar a tus desarrolladores un diseño claro"],
    ],
  },
  notFound: {
    title: "Esta página no existe.",
    text: "Es posible que el enlace esté roto o que la página se haya movido. Vuelve al inicio y continúa desde ahí.",
    button: "Volver al inicio",
  },
  footer: {
    blurb:
      "Un estudio de desarrollo remoto que crea sitios web, aplicaciones web y software a la medida para empresas en México y Latinoamérica.",
    services: "Servicios",
    company: "Empresa",
    language: "Idioma",
    links: {
      websites: "Sitios web",
      apps: "Aplicaciones web",
      software: "Software a la medida",
      design: "Diseño de interfaces",
      how: "Cómo trabajamos",
      contact: "Contacto",
    },
    rights: "Todos los derechos reservados.",
    prices: "Todos los precios en USD.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, es };