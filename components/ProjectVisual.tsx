import type { Project } from "@/lib/data";
import { projectIcons } from "./icons";

type ProjectVisualProps = {
  project: Project;
  large?: boolean;
};

export function ProjectVisual({ project, large = false }: ProjectVisualProps) {
  const Icon = projectIcons[project.icon];

  return (
    <div
      className={`project-visual accent-${project.accent}${large ? " is-large" : ""}`}
      aria-hidden="true"
    >
      <div className="pv-orb pv-orb-one" />
      <div className="pv-orb pv-orb-two" />
      <div className="pv-window">
        <div className="pv-bar">
          <span />
          <span />
          <span />
          <span className="pv-url">{project.slug}.app</span>
        </div>
        <div className="pv-body">
          <div className="pv-topline">
            <span className="pv-icon">
              <Icon />
            </span>
            <div className="pv-lines">
              <span />
              <span />
            </div>
          </div>
          <div className="pv-hero-block">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-cards">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <span className="pv-badge">{project.status}</span>
    </div>
  );
}
