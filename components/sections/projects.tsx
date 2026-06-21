// components/sections/projects.tsx
// RSC

import Link from "next/link";
import type { Project } from "@/sanity/queries/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects?.length) return null;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Selected Work
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const linkUrl =
            project.liveUrl ||
            (project.githubUrl ? project.githubUrl : null);
          const displayUrl = project.liveUrl
            ? project.liveUrl
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "")
            : null;

          return (
            <article
              key={project.slug || i}
              className={`group flex flex-col justify-between rounded-xl border border-border bg-card/30 p-6 transition-all hover:border-primary/20 hover:bg-card/50 ${
                i === 0 && project.featured
                  ? "border-t-2 border-t-primary"
                  : ""
              }`}
            >
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.featured && i === 0 && (
                    <span className="font-mono text-[10px] text-muted-foreground/60">
                      — Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>

                {project.tagline && (
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {displayUrl || "Visit site"} ↗
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub ↗
                  </Link>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <span className="font-mono text-xs font-medium text-muted-foreground/50">
                    Internal / Private
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
