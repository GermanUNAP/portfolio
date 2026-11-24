export const siteConfig = {
  name: "German Chura",
  fullName: "German Oliver Chura Condori",
  role: "Desarrollador Full Stack",
  location: "Puno, Perú",
  email: "gechurac@est.unap.edu.pe",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://germanchura.dev").replace(/\/$/, ""),
  description:
    "Portafolio de German Chura (German Oliver Chura Condori), desarrollador full stack en Puno, Perú. Experiencia en React, Next.js, Laravel, NestJS y React Native. Creador de la app Perdido y desarrollador en En Camino.",
  shortDescription:
    "Ingeniero de sistemas y desarrollador full stack en Puno, Perú. Construyo productos web y móviles con impacto social.",
  links: {
    linkedin: "https://pe.linkedin.com/in/german-chura",
    github: "https://github.com/GermanUNAP",
    encamino: "https://encamino.lat",
    perdido:
      "https://play.google.com/store/apps/details?id=com.perdidotech.perdido&hl=es_PE",
    netsolutions:
      "https://www.linkedin.com/company/netsolutions-peru-sac",
    wawaAru:
      "https://www.linkedin.com/posts/german-chura_happy-to-share-my-first-hackathon-experience-activity-7417728938120105984-SPTH",
  },
  nav: [
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Experiencia", href: "/#experiencia" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Stack", href: "/#stack" },
    { label: "Formación", href: "/#formacion" },
    { label: "Contacto", href: "/#contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
