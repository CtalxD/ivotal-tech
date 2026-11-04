// app/i18n/dictionaries.ts
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  meta: {
    title: "Ivotal Technology | Websites, web apps and custom software",
    description:
      "Ivotal Technology is a remote development studio building websites, web applications and custom software for businesses across Mexico and Latin America. Websites from $400 USD.",
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
  nav: { services: "Services", process: "Process", work: "Work", cta: "Start a project" },
  hero: {
    title: "Websites, web apps and software, built to your spec.",
    lede: "Ivotal Technology is a remote development studio working with businesses across Mexico and Latin America. Clear starting prices, custom code wherever you need it.",
    primary: "Start a project",
    secondary: "See what is included",
    pricesLabel: "Starting prices in USD",
    caption: "Prices in USD. Extra features are quoted by requirement.",
    tiers: ["Website", "Web application", "Custom software or app"],
  },
  services: {
    title: "What we build",
    intro:
      "Every project starts from a fixed base price. Anything beyond it, we scope with you and price before work begins.",
    items: [
      {
        name: "Websites",
        text: "Fast, mobile-ready sites your team can edit without calling a developer.",
        items: ["Mobile responsive layout", "Basic SEO setup", "Content management system", "Custom code for the features you need"],
      },
      {
        name: "Web applications",
        text: "Browser-based tools for your customers or your staff, from dashboards to booking systems.",
        items: ["Features written to your requirements", "User accounts and permissions", "Built to grow with your business", "Monthly maintenance available"],
      },
      {
        name: "Custom software and apps",
        text: "When off-the-shelf tools don't fit, we build the one that does.",
        items: ["Scoped around how you work", "Web, desktop or mobile", "Integrations with tools you already use", "Monthly maintenance recommended"],
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
  work: {
    title: "Selected work",
    intro: "Recent design projects. Full case studies are on the way.",
    projectName: "Project name",
    placeholder: "Design preview",
    kinds: ["Website design", "Web application design", "Mobile app design"],
  },
  cta: {
    title: "Tell us what you need to build.",
    text: "Send a short description. We reply with questions and a starting price.",
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
      work: "Selected work",
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
  ui: {
    skip: "Saltar al contenido",
    home: "Ivotal Technology, inicio",
    langLabel: "Idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primaryNav: "Principal",
    from: "desde",
  },
  nav: { services: "Servicios", process: "Proceso", work: "Trabajos", cta: "Iniciar un proyecto" },
  hero: {
    title: "Sitios web, aplicaciones web y software, hechos a tu medida.",
    lede: "Ivotal Technology es un estudio de desarrollo remoto que trabaja con empresas en México y Latinoamérica. Precios iniciales claros y código a la medida donde lo necesites.",
    primary: "Iniciar un proyecto",
    secondary: "Ver qué incluye",
    pricesLabel: "Precios iniciales en USD",
    caption: "Precios en USD. Las funciones adicionales se cotizan según tus requisitos.",
    tiers: ["Sitio web", "Aplicación web", "Software o app a la medida"],
  },
  services: {
    title: "Lo que construimos",
    intro:
      "Cada proyecto parte de un precio base fijo. Todo lo que vaya más allá lo definimos contigo y lo cotizamos antes de empezar.",
    items: [
      {
        name: "Sitios web",
        text: "Sitios rápidos y adaptados a móviles que tu equipo puede editar sin llamar a un desarrollador.",
        items: ["Diseño adaptable a móviles", "SEO básico", "Sistema de gestión de contenido (CMS)", "Código a la medida para las funciones que necesites"],
      },
      {
        name: "Aplicaciones web",
        text: "Herramientas en el navegador para tus clientes o tu equipo, desde paneles hasta sistemas de reservas.",
        items: ["Funciones desarrolladas según tus requisitos", "Cuentas de usuario y permisos", "Pensadas para crecer con tu negocio", "Mantenimiento mensual disponible"],
      },
      {
        name: "Software y apps a la medida",
        text: "Cuando las herramientas genéricas no encajan, construimos la que sí.",
        items: ["Planeado en torno a tu forma de trabajar", "Web, escritorio o móvil", "Integraciones con las herramientas que ya usas", "Mantenimiento mensual recomendado"],
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
  work: {
    title: "Trabajos seleccionados",
    intro: "Proyectos de diseño recientes. Los casos de estudio completos llegarán pronto.",
    projectName: "Nombre del proyecto",
    placeholder: "Vista previa del diseño",
    kinds: ["Diseño de sitio web", "Diseño de aplicación web", "Diseño de app móvil"],
  },
  cta: {
    title: "Cuéntanos qué necesitas construir.",
    text: "Envía una breve descripción. Te respondemos con preguntas y un precio inicial.",
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
      work: "Trabajos seleccionados",
      contact: "Contacto",
    },
    rights: "Todos los derechos reservados.",
    prices: "Todos los precios en USD.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, es };