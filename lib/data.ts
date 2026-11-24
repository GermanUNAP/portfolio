import { siteConfig } from "./site";

export type Accent = "teal" | "amber" | "violet" | "sky" | "rose" | "lime";

export type ProjectIcon =
  | "store"
  | "paw"
  | "language"
  | "building"
  | "megaphone"
  | "game";

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  period: string;
  role: string;
  status: string;
  categories: string[];
  stack: string[];
  highlights: string[];
  accent: Accent;
  icon: ProjectIcon;
  featured: boolean;
  links: ProjectLink[];
};

export const stats = [
  { value: "2+", label: "años de experiencia" },
  { value: "60+", label: "repositorios públicos" },
  { value: "Top 30", label: "Huawei LatAm 2024" },
  { value: "2.º", label: "lugar Hack Aru 2025" },
] as const;

export const values = [
  {
    title: "Impacto primero",
    description:
      "Me interesa construir productos con una razón de ser y una comunidad que realmente los use.",
  },
  {
    title: "Full stack de verdad",
    description:
      "Del diseño de la interfaz a las APIs, la base de datos y el despliegue. Me gusta entender el producto completo.",
  },
  {
    title: "Aprendizaje constante",
    description:
      "Hackathones, certificaciones y nuevos stacks. Aprender y compartir lo aprendido es parte del trabajo.",
  },
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
  href?: string;
};

export const experience: Experience[] = [
  {
    role: "Desarrollador Full Stack",
    company: "En Camino",
    period: "Actualidad",
    location: "Puno, Perú · Remoto",
    description:
      "Desarrollo de una plataforma de comercio local que reúne emprendedores, tiendas y productos de Perú. Catálogo, mapa de tiendas, carrito y flujos de registro para deliverys y bodegas.",
    tags: ["Marketplace", "E-commerce", "Mapas", "Producto"],
    current: true,
    href: siteConfig.links.encamino,
  },
  {
    role: "Desarrollador de Software",
    company: "Netsolutions Peru SAC",
    period: "Feb 2025 — Actualidad",
    location: "Remoto",
    description:
      "Desarrollo de sitios web para clientes con React, Laravel, Angular y CodeIgniter. Trabajo por tareas, metodologías MVC y coordinación remota con el equipo.",
    tags: ["React", "Laravel", "Angular", "CodeIgniter"],
    current: true,
    href: siteConfig.links.netsolutions,
  },
  {
    role: "Líder de Proyecto",
    company: "Perdido Tech",
    period: "Ene 2024 — Dic 2024",
    location: "Puno, Perú",
    description:
      "Lideré el desarrollo de Perdido, una app Android para reportar mascotas, objetos y personas perdidas. Comunidad, notificaciones geolocalizadas, chat y filtros avanzados. Top 30 en Huawei Developer Competition LatAm.",
    tags: ["Android", "Firebase", "Geolocalización", "Liderazgo"],
    href: siteConfig.links.perdido,
  },
  {
    role: "Practicante de Desarrollo de Software",
    company: "Gobierno Regional de Puno",
    period: "Sep 2024 — Dic 2024",
    location: "Puno, Perú",
    description:
      "Creación de nuevos sistemas web para el gobierno regional y mantenimiento de plataformas que ya se encontraban en funcionamiento.",
    tags: ["Sistemas web", "Sector público", "Mantenimiento"],
  },
  {
    role: "Practicante de Desarrollo de Software",
    company: "Universidad Nacional del Altiplano",
    period: "Feb 2024 — May 2024",
    location: "Puno, Perú",
    description:
      "Desarrollo de anuncios y comunicados segmentados por grupos dentro de la universidad, usando React en el frontend y Node.js con Express en el backend.",
    tags: ["React", "Node.js", "Express"],
  },
];

export const projects: Project[] = [
  {
    slug: "en-camino",
    name: "En Camino",
    tagline: "Marketplace de emprendedores locales",
    summary:
      "Plataforma de comercio local que conecta emprendedores y tiendas de Perú con nuevos clientes.",
    description: [
      "En Camino es un marketplace peruano que conecta emprendedores locales con clientes. Reúne productos de tiendas de Puno y otras regiones en un solo catálogo, con el objetivo de dar visibilidad a negocios que normalmente compiten en redes sociales.",
      "La plataforma incluye catálogo por categorías, mapa de tiendas, carrito, cuentas de usuario y herramientas para que los negocios publiquen su oferta. También suma espacios para deliverys, bodegas y anuncios dentro del ecosistema.",
      "Actualmente trabajo en el desarrollo del producto y en la evolución de sus flujos de compra, registro y descubrimiento local.",
    ],
    period: "Actualidad",
    role: "Desarrollo full stack",
    status: "Producto activo",
    categories: ["Marketplace", "E-commerce", "Impacto local"],
    stack: ["Marketplace", "E-commerce", "Mapas", "Puno"],
    highlights: [
      "Catálogo de productos y tiendas",
      "Mapa de negocios locales",
      "Carrito y cuentas de usuario",
      "Registro de deliverys y bodegas",
    ],
    accent: "teal",
    icon: "store",
    featured: true,
    links: [
      { label: "Visitar En Camino", href: siteConfig.links.encamino, primary: true },
    ],
  },
  {
    slug: "perdido",
    name: "Perdido",
    tagline: "App para reunir mascotas, objetos y personas perdidas",
    summary:
      "Aplicación Android con comunidad, notificaciones geolocalizadas y chat para ayudar a recuperar lo que más importa.",
    description: [
      "Perdido es una aplicación Android que ayuda a recuperar mascotas, objetos y personas perdidas. Los usuarios publican reportes con fotos, descripción y ubicación aproximada, y la comunidad puede buscar por tipo, zona y fecha.",
      "La app integra chat directo para coordinar la recuperación, filtros avanzados y notificaciones geolocalizadas para avisar a personas que podrían ayudar. La idea nació en Puno con una comunidad solidaria como centro.",
      "Lideré el proyecto durante 2024 y lo presentamos en la Huawei Developer Competition, donde alcanzamos el Top 30 a nivel de Latinoamérica.",
    ],
    period: "2024",
    role: "Líder de proyecto",
    status: "Publicada en Google Play",
    categories: ["App móvil", "Comunidad", "Impacto social"],
    stack: ["Android", "Firebase", "Geolocalización", "Chat"],
    highlights: [
      "Reportes con fotos y ubicación",
      "Notificaciones geolocalizadas",
      "Chat integrado con la comunidad",
      "Top 30 · Huawei Developer Competition LatAm",
    ],
    accent: "amber",
    icon: "paw",
    featured: true,
    links: [
      {
        label: "Descargar en Google Play",
        href: siteConfig.links.perdido,
        primary: true,
      },
      {
        label: "Ver tienda en En Camino",
        href: "https://encamino.lat/tienda/perdido",
      },
    ],
  },
  {
    slug: "wawa-aru",
    name: "Wawa Aru",
    tagline: "Minijuegos para aprender aimara",
    summary:
      "Web con minijuegos para que niños aprendan aimara y se acerquen a su cultura. Segundo lugar en Hack Aru 2025.",
    description: [
      "Wawa Aru es una web con una serie de minijuegos diseñados para que niños aprendan aimara. El proyecto fue creado durante Hack Aru, la primera hackathon realizada en Puno, con la misión de revitalizar una lengua originaria que se usa cada vez menos.",
      "Con mi equipo trabajamos durante 48 horas después de varios días de bootcamps sobre diseño de producto, contexto cultural y educación en aimara. El resultado combina juego y aprendizaje para que el idioma también se entienda como una forma de ver el mundo.",
      "El proyecto obtuvo el segundo lugar entre las soluciones presentadas. La experiencia reforzó mi interés por la tecnología, la cultura y el impacto social.",
    ],
    period: "2025",
    role: "Desarrollador · Equipo Wawa Aru",
    status: "2.º lugar · Hack Aru 2025",
    categories: ["Educación", "Cultura", "Hackathon"],
    stack: ["Aimara", "Minijuegos", "Educación", "48 horas"],
    highlights: [
      "2.º lugar en Hack Aru 2025",
      "Minijuegos para aprender aimara",
      "Diseño centrado en niños y cultura",
      "Producto construido en 48 horas",
    ],
    accent: "violet",
    icon: "language",
    featured: true,
    links: [
      {
        label: "Leer sobre Hack Aru",
        href: siteConfig.links.wawaAru,
        primary: true,
      },
    ],
  },
  {
    slug: "gobierno-regional-puno",
    name: "Sistemas para el Gobierno Regional de Puno",
    tagline: "Plataformas web para la gestión pública",
    summary:
      "Desarrollo de nuevos sistemas web y mantenimiento de plataformas para el Gobierno Regional de Puno.",
    description: [
      "Durante mi práctica en el área de desarrollo de software del Gobierno Regional de Puno creé nuevos sistemas web para la institución y realicé mantenimiento y mejoras a plataformas que ya estaban en funcionamiento.",
      "El trabajo me permitió conocer de cerca las necesidades de una entidad pública, la importancia de la estabilidad de los sistemas y el valor de documentar y cuidar el software que ya está en producción.",
    ],
    period: "Sep — Dic 2024",
    role: "Practicante de desarrollo",
    status: "Sector público",
    categories: ["Sistemas web", "Sector público"],
    stack: ["Sistemas web", "Mantenimiento", "Gestión pública"],
    highlights: [
      "Nuevos sistemas web a medida",
      "Mantenimiento de plataformas existentes",
      "Trabajo dentro de una entidad pública",
    ],
    accent: "sky",
    icon: "building",
    featured: false,
    links: [],
  },
  {
    slug: "anuncios-unap",
    name: "Anuncios segmentados UNAP",
    tagline: "Comunicación interna para la universidad",
    summary:
      "Sistema para publicar anuncios y comunicados segmentados por grupos dentro de la Universidad Nacional del Altiplano.",
    description: [
      "Proyecto desarrollado durante mi práctica en la Universidad Nacional del Altiplano para gestionar anuncios y comunicados dirigidos a grupos específicos dentro de la universidad.",
      "Usamos React en el frontend y Node.js con Express en el backend. El objetivo era que la información llegara a las personas correctas sin depender de canales dispersos.",
    ],
    period: "Feb — May 2024",
    role: "Practicante de desarrollo",
    status: "Proyecto institucional",
    categories: ["Aplicación web", "Comunicación"],
    stack: ["React", "Node.js", "Express", "Comunicación"],
    highlights: [
      "Anuncios segmentados por grupos",
      "Frontend con React",
      "Backend con Node.js y Express",
    ],
    accent: "rose",
    icon: "megaphone",
    featured: false,
    links: [],
  },
  {
    slug: "psm",
    name: "PSM",
    tagline: "Juego educativo de operaciones matemáticas",
    summary:
      "Juego open source que ayuda a niños de primaria a practicar tres operaciones aritméticas.",
    description: [
      "PSM es un juego educativo publicado en GitHub que ayuda a niños de primaria a mejorar sus habilidades con tres operaciones aritméticas. Fue uno de mis primeros proyectos y sigue disponible como parte de mi trabajo open source.",
      "El repositorio forma parte de los más de 60 proyectos públicos que mantengo en GitHub, donde también comparto experimentos con TypeScript, PHP y herramientas para consultar información pública.",
    ],
    period: "Open source",
    role: "Desarrollador",
    status: "Proyecto open source",
    categories: ["Open source", "Educación", "Juego"],
    stack: ["JavaScript", "Educación", "Open source"],
    highlights: [
      "Juego para practicar operaciones",
      "Pensado para niños de primaria",
      "Código abierto en GitHub",
    ],
    accent: "lime",
    icon: "game",
    featured: false,
    links: [
      {
        label: "Ver repositorio en GitHub",
        href: "https://github.com/GermanUNAP/---PSM---",
        primary: true,
      },
    ],
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "server" | "phone" | "tools";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces rápidas, accesibles y cuidadas al detalle.",
    icon: "code",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description: "APIs, lógica de negocio y arquitecturas MVC.",
    icon: "server",
    items: ["Laravel", "NestJS", "Node.js", "Express", "PHP", "CodeIgniter"],
  },
  {
    title: "Mobile & datos",
    description: "Productos móviles y datos listos para crecer.",
    icon: "phone",
    items: ["React Native", "Firebase", "SQL", "MySQL", "APIs REST"],
  },
  {
    title: "Herramientas",
    description: "Lo necesario para construir, colaborar y desplegar.",
    icon: "tools",
    items: ["Git", "GitHub", "MVC", "Metodologías ágiles", "Producto"],
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
};

export const education: Education[] = [
  {
    institution: "Universidad Nacional del Altiplano",
    degree: "Ingeniería de Sistemas",
    period: "2020 — 2025",
    location: "Puno, Perú",
    description:
      "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos.",
  },
  {
    institution: "COAR Puno",
    degree: "Bachillerato Internacional · Ciencias (Física y Química)",
    period: "2017 — 2019",
    location: "Puno, Perú",
    description:
      "Colegio de Alto Rendimiento de Puno. Formación académica exigente con enfoque internacional, investigación y trabajo multidisciplinario.",
  },
  {
    institution: "Huawei Latinoamérica",
    degree: "Seeds for the Future 2024",
    period: "2024",
    location: "Programa regional",
    description:
      "Seleccionado como parte de la generación 2024 del programa Seeds for the Future de Huawei.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "English Academy",
    issuer: "Platzi",
    year: "2023",
  },
  {
    name: "Intermediate English Course B1",
    issuer: "Platzi",
    year: "2022",
  },
  {
    name: "Programación lógica para niños con Code.org",
    issuer: "Colegio de Ingenieros del Perú · Organizador y ponente",
    year: "2022",
    href: "https://cippuno-certificados.web.app/verificar/codeorg/CO3604-PON",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Quechua", level: "Básico" },
  { name: "Inglés", level: "B1" },
] as const;

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
