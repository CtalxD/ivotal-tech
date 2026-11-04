// app/i18n/landing.ts
import type { Locale } from "./dictionaries";

const en = {
  facts: {
    label: "How we work",
    items: [
      "Fixed starting prices",
      "You approve designs before we build",
      "Remote, across Mexico and Latin America",
      "Care after launch if you want it",
    ],
  },
  why: {
    title: "How we keep projects simple",
    intro: "Four habits that decide how a project feels from the first message to launch day.",
    items: [
      {
        title: "A price before the work",
        text: "Every project starts from a fixed base price. Anything beyond it is scoped with you and quoted before work begins.",
      },
      {
        title: "Edit it yourself, if you want",
        text: "Add a content management system to a website as an extra, and your team changes text and images without calling a developer.",
      },
      {
        title: "Custom code where you need it",
        text: "When a template cannot do the job, we write the feature, from booking flows to links with the tools you already use.",
      },
      {
        title: "No surprises in the build",
        text: "You approve the screens before we write code, and we check in before each stage begins.",
      },
    ],
  },
  faq: {
    title: "Questions before you start",
    intro: "The things people ask first.",
    items: [
      {
        q: "What does the starting price include?",
        a: "The core of each type of project. For a website that is a mobile responsive layout, basic SEO setup and a contact form. A content management system and monthly maintenance are extra. We confirm the exact scope in the brief.",
      },
      {
        q: "What if I need more than the base?",
        a: "We scope the extra features with you and give you a price before any work begins. Nothing is added without your agreement.",
      },
      {
        q: "Can my team edit the website ourselves?",
        a: "Yes, with a content management system. It is not part of the starting price, so we quote it as an extra.",
      },
      {
        q: "Do you look after the project after launch?",
        a: "If you want us to. Monthly maintenance keeps it updated, secure and backed up, and is charged separately. It is available for websites and web applications and recommended for custom software.",
      },
      {
        q: "Where do you work?",
        a: "We are a remote studio working with businesses across Mexico and Latin America. All prices are in USD.",
      },
      {
        q: "How do I start?",
        a: "Send a short description of what you need to build. We reply with questions and a starting price.",
      },
    ],
  },
};

export type Landing = typeof en;

const es: Landing = {
  facts: {
    label: "Cómo trabajamos",
    items: [
      "Precios iniciales fijos",
      "Apruebas el diseño antes de construir",
      "Remoto, en México y Latinoamérica",
      "Soporte después del lanzamiento si lo quieres",
    ],
  },
  why: {
    title: "Cómo mantenemos los proyectos simples",
    intro: "Cuatro hábitos que definen cómo se siente un proyecto, desde el primer mensaje hasta el día del lanzamiento.",
    items: [
      {
        title: "Un precio antes del trabajo",
        text: "Cada proyecto parte de un precio base fijo. Todo lo que vaya más allá se define contigo y se cotiza antes de empezar.",
      },
      {
        title: "Edítalo tú, si quieres",
        text: "Agrega un sistema de gestión de contenido a tu sitio web como extra, y tu equipo cambia textos e imágenes sin llamar a un desarrollador.",
      },
      {
        title: "Código a la medida donde lo necesites",
        text: "Cuando una plantilla no alcanza, escribimos la función, desde flujos de reservas hasta conexiones con las herramientas que ya usas.",
      },
      {
        title: "Sin sorpresas durante el desarrollo",
        text: "Apruebas las pantallas antes de que escribamos código y hacemos una revisión antes de cada etapa.",
      },
    ],
  },
  faq: {
    title: "Preguntas antes de empezar",
    intro: "Lo que más nos preguntan.",
    items: [
      {
        q: "¿Qué incluye el precio inicial?",
        a: "Lo esencial de cada tipo de proyecto. En un sitio web: diseño adaptable a móviles, SEO básico y formulario de contacto. El sistema de gestión de contenido y el mantenimiento mensual son extras. El alcance exacto lo confirmamos en el brief.",
      },
      {
        q: "¿Y si necesito más que lo básico?",
        a: "Definimos contigo las funciones adicionales y te damos un precio antes de empezar. No se agrega nada sin tu acuerdo.",
      },
      {
        q: "¿Mi equipo puede editar el sitio por su cuenta?",
        a: "Sí, con un sistema de gestión de contenido. No forma parte del precio inicial, así que lo cotizamos como extra.",
      },
      {
        q: "¿Se encargan del proyecto después del lanzamiento?",
        a: "Si tú quieres. El mantenimiento mensual lo mantiene actualizado, seguro y respaldado, y se cobra aparte. Está disponible para sitios web y aplicaciones web, y es recomendado para software a la medida.",
      },
      {
        q: "¿Dónde trabajan?",
        a: "Somos un estudio remoto que trabaja con empresas en México y Latinoamérica. Todos los precios son en USD.",
      },
      {
        q: "¿Cómo empiezo?",
        a: "Envía una breve descripción de lo que necesitas construir. Te respondemos con preguntas y un precio inicial.",
      },
    ],
  },
};

export const landing: Record<Locale, Landing> = { en, es };