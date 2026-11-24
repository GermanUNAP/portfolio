import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  headingLevel?: 2 | 3;
  revealDelay?: number;
};

export function ProjectCard({
  project,
  featured = false,
  headingLevel = 3,
  revealDelay = 0,
}: ProjectCardProps) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article
      className={`project-card accent-${project.accent}${featured ? " is-featured" : ""}`}
      data-reveal={featured ? "scale" : "up"}
      style={{ "--reveal-delay": `${revealDelay}ms` } as CSSProperties}
    >
      <Link href={`/proyectos/${project.slug}`} className="project-card-link">
        <ProjectVisual project={project} large={featured} />
        <div className="project-card-body">
          <div className="project-meta">
            <span>{project.period}</span>
            <span>{project.categories[0]}</span>
          </div>
          <Heading>{project.name}</Heading>
          <p>{project.summary}</p>
          <ul className="tag-list" aria-label="Tecnologías y categorías">
            {project.stack.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className="project-cta">
            Ver proyecto
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
