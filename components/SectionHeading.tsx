import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  reveal?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  reveal = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${align === "center" ? " is-centered" : ""}`}
      data-reveal={reveal ? "" : undefined}
    >
      <span className="section-eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </span>
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
