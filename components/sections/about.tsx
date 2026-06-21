// components/sections/about.tsx
// RSC

import type { Profile, SkillGroup } from "@/sanity/queries/portfolio";

type AboutSectionProps = {
  profile: Profile;
  skills: SkillGroup[];
};

export function AboutSection({ profile, skills }: AboutSectionProps) {
  const renderHeadline = () => {
    const headline = profile.aboutHeadline;
    const highlight = profile.aboutHighlight;

    if (!headline) return <span>About Me</span>;
    if (!highlight) return <span>{headline}</span>;

    const idx = headline.indexOf(highlight);
    if (idx === -1) return <span>{headline}</span>;

    return (
      <>
        {headline.slice(0, idx)}
        <span className="text-primary">{highlight}</span>
        {headline.slice(idx + highlight.length)}
      </>
    );
  };

  const filteredSkills = skills?.filter(
    (g) => g.items && g.items.length > 0
  ) ?? [];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* About */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <h3 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            {renderHeadline()}
          </h3>

          {profile.bio && (
            <div className="mt-8 space-y-4">
              {profile.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Stack */}
        <div id="stack">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Stack
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredSkills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card/30 p-5 transition-colors hover:border-primary/20"
              >
                <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                  {group.category}
                </h4>
                <p className="text-sm leading-loose text-muted-foreground">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
