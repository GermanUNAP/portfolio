import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight, Mail } from "@/components/icons";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const title = "Proyectos";
const description =
  "Proyectos de German Chura: En Camino, Perdido, Wawa Aru, sistemas para el Gobierno Regional de Puno, anuncios segmentados para la UNAP y proyectos open source.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${siteConfig.url}/proyectos`,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${title} | ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${title} | ${siteConfig.name}`,
  description,
  url: `${siteConfig.url}/proyectos`,
  inLanguage: "es-PE",
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${siteConfig.url}/proyectos/${project.slug}`,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <main id="contenido">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Proyectos</span>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Portafolio"
            title="Proyectos con propósito"
            description="Una selección de productos web y móviles en los que he trabajado: marketplaces, apps de impacto social, sistemas públicos y proyectos open source."
            reveal={false}
          />
          <p className="page-hero-meta">
            {projects.length} proyectos · Puno, Perú · Trabajo remoto
          </p>
        </div>
      </section>

      <section className="section page-section">
        <div className="container">
          <div className="project-grid project-grid-all">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                headingLevel={2}
                revealDelay={(index % 3) * 90}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section page-cta-section">
        <div className="container">
          <div className="page-cta" data-reveal>
            <div>
              <span className="section-eyebrow">
                <span aria-hidden="true" />
                Siguiente paso
              </span>
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>
                Cuéntame qué quieres construir. Puedo ayudarte con la parte web, móvil,
                APIs y todo lo que hay entre medio.
              </p>
            </div>
            <div className="page-cta-actions">
              <a className="button" href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" />
                Escribirme
              </a>
              <Link className="button button-ghost" href="/#contacto">
                Ver contacto
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
    </main>
  );
}
