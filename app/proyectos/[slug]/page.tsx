import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { JsonLd } from "@/components/JsonLd";
import { ProjectVisual } from "@/components/ProjectVisual";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Mail,
  Sparkles,
} from "@/components/icons";
import { getProject, projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  const description = project.summary;
  const url = `${siteConfig.url}/proyectos/${project.slug}`;

  return {
    title: project.name,
    description,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "es_PE",
      url,
      siteName: siteConfig.name,
      title: `${project.name} | ${siteConfig.name}`,
      description,
      authors: [siteConfig.fullName],
      tags: [...project.categories, ...project.stack],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.name} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${siteConfig.name}`,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${siteConfig.url}/proyectos/${project.slug}/#project`,
        name: project.name,
        description: project.summary,
        url: `${siteConfig.url}/proyectos/${project.slug}`,
        inLanguage: "es-PE",
        author: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          name: siteConfig.fullName,
          url: siteConfig.url,
        },
        about: project.categories,
        keywords: [...project.categories, ...project.stack].join(", "),
        mainEntityOfPage: `${siteConfig.url}/proyectos/${project.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Proyectos",
            item: `${siteConfig.url}/proyectos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `${siteConfig.url}/proyectos/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main id="contenido">
      <article>
        <header className="project-hero">
          <div className="project-hero-glow" aria-hidden="true" data-parallax="0.08" />
          <div className="container">
            <nav className="breadcrumbs" aria-label="Migas de pan">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/proyectos">Proyectos</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.name}</span>
            </nav>

            <div className="project-hero-grid">
              <div className="project-hero-copy">
                <div className="project-hero-meta">
                  <span className={`status-pill accent-border-${project.accent}`}>
                    <Sparkles aria-hidden="true" />
                    {project.status}
                  </span>
                  <span className="project-hero-date">
                    <Calendar aria-hidden="true" />
                    {project.period}
                  </span>
                </div>
                <h1>{project.name}</h1>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-hero-summary">{project.summary}</p>
                <ul className="tag-list" aria-label="Categorías del proyecto">
                  {project.categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className="project-hero-actions">
                    {project.links.map((link) => (
                      <a
                        className={`button${link.primary ? "" : " button-ghost"}`}
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <ProjectVisual project={project} large />
            </div>
          </div>
        </header>

        <section className="section project-content-section">
          <div className="container project-content-grid">
            <div className="project-story" data-reveal>
              <span className="section-eyebrow">
                <span aria-hidden="true" />
                El proyecto
              </span>
              <h2>Cómo nació y qué construimos</h2>
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h2>Lo que destaca</h2>
              <ul className="highlight-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true">
                      <Check />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className="project-sidebar"
              data-reveal="right"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
            >
              <div className="project-facts">
                <h2>Ficha del proyecto</h2>
                <dl>
                  <div>
                    <dt>Rol</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Periodo</dt>
                    <dd>{project.period}</dd>
                  </div>
                  <div>
                    <dt>Estado</dt>
                    <dd>{project.status}</dd>
                  </div>
                  <div>
                    <dt>Tecnologías y áreas</dt>
                    <dd>
                      <ul className="tag-list" aria-label="Tecnologías del proyecto">
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="project-sidebar-links">
                <h2>Enlaces</h2>
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))
                ) : (
                  <p>
                    Este proyecto es parte de mi experiencia profesional. Si quieres
                    saber más, escríbeme.
                  </p>
                )}
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail aria-hidden="true" />
                  Contactar sobre este proyecto
                </a>
              </div>

              <Link className="back-link" href="/proyectos">
                <ArrowLeft aria-hidden="true" />
                Todos los proyectos
              </Link>
            </aside>
          </div>
        </section>

        <nav
          className="container project-pagination"
          aria-label="Navegación entre proyectos"
          data-reveal
        >
          <Link href={`/proyectos/${previousProject.slug}`} className="project-pagination-link">
            <span>
              <ArrowLeft aria-hidden="true" />
              Proyecto anterior
            </span>
            <strong>{previousProject.name}</strong>
            <small>{previousProject.tagline}</small>
          </Link>
          <Link
            href={`/proyectos/${nextProject.slug}`}
            className="project-pagination-link is-next"
          >
            <span>
              Siguiente proyecto
              <ArrowRight aria-hidden="true" />
            </span>
            <strong>{nextProject.name}</strong>
            <small>{nextProject.tagline}</small>
          </Link>
        </nav>
      </article>

      <JsonLd data={structuredData} />
    </main>
  );
}
