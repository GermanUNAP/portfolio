import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Check,
  Code,
  Download,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Quote,
  Sparkles,
  skillIcons,
} from "@/components/icons";
import {
  certifications,
  education,
  experience,
  languages,
  projects,
  skillGroups,
  stats,
  values,
} from "@/lib/data";
import { siteConfig } from "@/lib/site";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "NestJS",
  "Node.js",
  "React Native",
  "Firebase",
  "SQL",
  "Angular",
];

export default function HomePage() {
  return (
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid-bg" aria-hidden="true" data-parallax="0.05" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" data-parallax="0.1" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" data-parallax="-0.08" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="availability-pill">
              <span className="availability-dot" aria-hidden="true" />
              Abierto a nuevos retos
            </span>
            <p className="hero-kicker">Hola, soy</p>
            <h1 id="hero-title">
              German <span>Chura</span>
            </h1>
            <p className="hero-role">
              Desarrollador Full Stack <span aria-hidden="true">·</span> Puno, Perú
            </p>
            <p className="hero-description">
              Ingeniero de sistemas y desarrollador full stack. Construyo productos web
              y móviles con React, Next.js, Laravel y NestJS, con foco en impacto social,
              rendimiento y experiencias que la gente quiera usar.
            </p>
            <div className="hero-actions">
              <Link className="button" href="#proyectos">
                Explorar proyectos
                <ArrowRight aria-hidden="true" />
              </Link>
              <a className="button button-ghost" href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" />
                Hablemos
              </a>
            </div>
            <div className="hero-social" aria-label="Perfiles profesionales">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de German Chura"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de German Chura"
              >
                <Github aria-hidden="true" />
                GitHub
              </a>
              <a
                href={siteConfig.links.perdido}
                target="_blank"
                rel="noreferrer"
                aria-label="Perdido App, descargar en Google Play"
              >
                <Download aria-hidden="true" />
                Perdido App
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-shell">
              <div className="portrait-ring" aria-hidden="true" />
              <div className="portrait-frame">
                <Image
                  src="/german-chura.jpg"
                  alt="Retrato de German Chura, desarrollador full stack en Puno, Perú"
                  width={460}
                  height={460}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 78vw, 420px"
                  className="portrait-image"
                />
                <div className="portrait-gradient" aria-hidden="true" />
                <div className="portrait-tag">
                  <MapPin aria-hidden="true" />
                  Puno, Perú
                </div>
              </div>
              <span className="floating-chip chip-react">React</span>
              <span className="floating-chip chip-next">Next.js</span>
              <span className="floating-chip chip-laravel">Laravel</span>
              <span className="floating-chip chip-nest">NestJS</span>
            </div>
            <div className="hero-note">
              <Sparkles aria-hidden="true" />
              <div>
                <strong>Producto + código</strong>
                <span>De la idea al despliegue, sin perder el contexto.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <dl className="hero-stats" aria-label="Logros y experiencia">
            {stats.map((stat, index) => {
              const numeric = /^(\d+)(.*)$/.exec(stat.value);

              return (
                <div
                  key={stat.label}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <dt>{stat.label}</dt>
                  <dd
                    data-count={numeric ? Number(numeric[1]) : undefined}
                    data-suffix={numeric ? numeric[2] : undefined}
                  >
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <div className="tech-marquee" aria-label="Tecnologías principales">
        <div className="tech-marquee-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={`${tech}-${index}`} aria-hidden={index >= techStack.length}>
              {tech}
              <span className="tech-separator" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="sobre-mi" aria-labelledby="about-title">
        <div className="container about-grid">
          <div>
            <SectionHeading
              eyebrow="Sobre mí"
              title={
                <span id="about-title">
                  Tecnología con propósito,
                  <br />
                  producto con contexto.
                </span>
              }
              description="Me muevo entre el producto y el código: entender el problema, diseñar una solución y construirla de punta a punta."
            />
            <div className="about-copy" data-reveal style={{ "--reveal-delay": "80ms" } as CSSProperties}>
              <p className="lead">
                Soy <strong>German Oliver Chura Condori</strong>, ingeniero de sistemas
                egresado de la Universidad Nacional del Altiplano. Me apasiona construir
                software que resuelva problemas reales y acerque oportunidades a más
                personas.
              </p>
              <p>
                Actualmente desarrollo <strong>En Camino</strong>, un marketplace que
                conecta emprendedores locales de Perú con nuevos clientes. Antes trabajé
                en Netsolutions Peru, el Gobierno Regional de Puno y la UNAP, y lideré{" "}
                <strong>Perdido Tech</strong>, la app con la que llegamos al Top 30 de la
                Huawei Developer Competition en Latinoamérica.
              </p>
              <p>
                También participé en <strong>Hack Aru</strong>, la primera hackathon de
                Puno, donde construimos Wawa Aru, una web de minijuegos para aprender
                aimara que obtuvo el segundo lugar.
              </p>
            </div>
            <blockquote
              className="about-quote"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              <Quote aria-hidden="true" />
              <p>
                “Me considero una persona entusiasta por mejorar el mundo. Sé que las
                bases de estas mejoras son la educación, la disciplina y el trabajo
                multidisciplinario.”
              </p>
              <footer>Mi perfil de LinkedIn</footer>
            </blockquote>
          </div>

          <div className="values-list">
            {values.map((value, index) => (
              <article
                className="value-card"
                key={value.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <span className="value-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
            <article
              className="value-card value-card-accent"
              data-reveal
              style={{ "--reveal-delay": "270ms" } as CSSProperties}
            >
              <span className="value-icon" aria-hidden="true">
                <Briefcase />
              </span>
              <h3>Actualmente</h3>
              <p>
                Desarrollo full stack en <strong>En Camino</strong> y software para
                clientes en <strong>Netsolutions Peru</strong>.
              </p>
              <a href={siteConfig.links.encamino} target="_blank" rel="noreferrer">
                Ver En Camino
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experiencia" aria-labelledby="experience-title">
        <div className="container">
          <SectionHeading
            eyebrow="Experiencia"
            title={<span id="experience-title">Dónde he construido</span>}
            description="Más de dos años trabajando en productos web y móviles, en equipos remotos, el sector público y proyectos propios."
          />
          <div className="timeline" data-timeline>
            {experience.map((item, index) => (
              <article
                className="timeline-item"
                key={`${item.company}-${item.period}`}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="timeline-marker" aria-hidden="true">
                  <span />
                </div>
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span className="timeline-period">
                      <Calendar aria-hidden="true" />
                      {item.period}
                      {item.current ? <span className="current-badge">Actual</span> : null}
                    </span>
                    <span className="timeline-location">{item.location}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.company}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                  <p className="timeline-description">{item.description}</p>
                  <ul className="tag-list" aria-label={`Áreas de ${item.company}`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="proyectos" aria-labelledby="projects-title">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Proyectos"
              title={<span id="projects-title">Cosas que he construido</span>}
              description="Productos con impacto social, plataformas para emprendedores y sistemas que resuelven problemas concretos."
            />
            <Link
              className="text-link projects-all-link"
              href="/proyectos"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              Ver todos los proyectos
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={index === 0}
                revealDelay={index * 90}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="stack" aria-labelledby="stack-title">
        <div className="container">
          <SectionHeading
            eyebrow="Stack"
            title={<span id="stack-title">Herramientas con las que trabajo</span>}
            description="Un stack versátil para construir productos completos, desde la interfaz hasta la base de datos."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[group.icon];
              return (
                <article
                  className="skill-card"
                  key={group.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <span className="skill-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="tag-list" aria-label={`Tecnologías de ${group.title}`}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div
            className="languages-card"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            <div className="languages-copy">
              <span className="skill-icon" aria-hidden="true">
                <Globe />
              </span>
              <div>
                <h3>Idiomas</h3>
                <p>Español nativo, quechua básico e inglés B1.</p>
              </div>
            </div>
            <ul className="languages-list">
              {languages.map((language) => (
                <li key={language.name}>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="formacion" aria-labelledby="education-title">
        <div className="container">
          <SectionHeading
            eyebrow="Formación"
            title={<span id="education-title">Educación y certificaciones</span>}
            description="Una base académica exigente y aprendizaje continuo fuera del aula."
          />
          <div className="education-grid">
            <div className="education-list">
              {education.map((item, index) => (
                <article
                  className="education-card"
                  key={item.institution}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <span className="education-icon" aria-hidden="true">
                    <GraduationCap />
                  </span>
                  <div>
                    <span className="education-period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p className="education-institution">{item.institution}</p>
                    <p>{item.description}</p>
                    <span className="education-location">
                      <MapPin aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="certifications-card"
              data-reveal="right"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <div className="certifications-heading">
                <span className="skill-icon" aria-hidden="true">
                  <Code />
                </span>
                <h3>Certificaciones</h3>
              </div>
              <ul className="certifications-list">
                {certifications.map((certification) => (
                  <li key={certification.name}>
                    <span className="certification-check" aria-hidden="true">
                      <Check />
                    </span>
                    <div>
                      <strong>{certification.name}</strong>
                      <span>
                        {certification.issuer} · {certification.year}
                      </span>
                    </div>
                    {certification.href ? (
                      <a
                        href={certification.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver certificado de ${certification.name}`}
                      >
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className="certifications-note">
                <Sparkles aria-hidden="true" />
                <p>
                  También completé <strong>Seeds for the Future 2024</strong> de Huawei
                  Latinoamérica y participé como organizador y ponente en talleres de
                  programación lógica para niños con Code.org.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-panel" data-reveal>
            <div className="contact-copy">
              <SectionHeading
                eyebrow="Contacto"
                title={<span id="contact-title">¿Construimos algo juntos?</span>}
                description="Tengo experiencia construyendo productos desde cero y colaborando con equipos remotos. Si buscas un desarrollador full stack para tu equipo o proyecto, hablemos."
              />
              <a className="contact-email" href={`mailto:${siteConfig.email}`}>
                <span className="contact-email-icon" aria-hidden="true">
                  <Mail />
                </span>
                <span>
                  <small>Escríbeme</small>
                  {siteConfig.email}
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-links">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de German Chura"
                >
                  <Linkedin aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub de German Chura"
                >
                  <Github aria-hidden="true" />
                  GitHub
                </a>
                <span>
                  <MapPin aria-hidden="true" />
                  {siteConfig.location} · Remoto
                </span>
              </div>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
