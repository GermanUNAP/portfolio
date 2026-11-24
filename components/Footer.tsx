import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand" data-reveal>
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              GC
            </span>
            <span className="brand-copy">
              <strong>German Chura</strong>
              <span>Full Stack Developer</span>
            </span>
          </Link>
          <p>
            Desarrollador full stack en Puno, Perú. Construyo productos web y móviles
            con foco en impacto social y experiencia de usuario.
          </p>
          <div className="footer-social" aria-label="Redes y contacto">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de German Chura"
            >
              <Linkedin aria-hidden="true" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de German Chura"
            >
              <Github aria-hidden="true" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Enviar correo a German Chura">
              <Mail aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="footer-column"
          data-reveal
          style={{ "--reveal-delay": "80ms" } as CSSProperties}
        >
          <h2>Navegación</h2>
          {siteConfig.nav.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/proyectos">Todos los proyectos</Link>
        </div>

        <div
          className="footer-column"
          data-reveal
          style={{ "--reveal-delay": "160ms" } as CSSProperties}
        >
          <h2>Proyectos</h2>
          {projects.slice(0, 4).map((project) => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`}>
              {project.name}
            </Link>
          ))}
        </div>

        <div
          className="footer-column footer-contact"
          data-reveal
          style={{ "--reveal-delay": "240ms" } as CSSProperties}
        >
          <h2>Contacto</h2>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail aria-hidden="true" />
            {siteConfig.email}
          </a>
          <span>
            <MapPin aria-hidden="true" />
            {siteConfig.location}
          </span>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-link-arrow"
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {siteConfig.fullName}. Todos los derechos reservados.
        </p>
        <p>
          Diseñado y construido con <span>Next.js</span> en Puno, Perú.
        </p>
      </div>
    </footer>
  );
}
