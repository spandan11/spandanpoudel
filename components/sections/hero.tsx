// components/sections/hero.tsx
// RSC

import Link from "next/link";
import type { Profile } from "@/sanity/queries/portfolio";

type HeroProps = {
  profile: Profile;
};

export function Hero({ profile }: HeroProps) {
  const nameParts = profile.fullName?.split(" ") ?? [];
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ");
  const nameStart = firstName.slice(0, 4);
  const nameEnd = firstName.slice(4);

  return (
    <section id="hero" className="mx-auto max-w-6xl px-6 pb-20 pt-24 lg:px-8 lg:pt-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-0">
        {/* Left — Name */}
        <div className="lg:pr-16">
          {profile.openToWork && (
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Available for Work
              </span>
            </div>
          )}

          <h1 className="font-heading text-[clamp(4rem,10vw,7.5rem)] font-bold leading-[0.85] tracking-tighter text-foreground">
            {nameStart}
            <span className="text-primary">.</span>
            <br />
            {nameEnd}
            <br />
            {lastName}
          </h1>
        </div>

        {/* Right — Info */}
        <div className="flex flex-col justify-center space-y-8 lg:border-l lg:border-border/60 lg:pl-16 lg:py-8 relative">
          
          {/* Faint ambient glow effect that appears in the design on the divider */}
          <div className="absolute -left-[1px] top-1/2 h-1/2 w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {profile.headline}
            </h2>
            {profile.heroSubtitle && (
              <p className="mt-1 text-lg text-muted-foreground/80 sm:text-xl">
                {profile.heroSubtitle}
              </p>
            )}
          </div>

          {profile.shortBio && (
            <div className="max-w-md space-y-4 text-sm leading-relaxed text-muted-foreground/70">
              {profile.shortBio.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {profile.heroSkills && profile.heroSkills.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {profile.heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border/50 bg-card/20 px-3 py-1.5 font-mono text-[10px] font-medium tracking-wide text-primary/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="rounded-md bg-primary px-7 py-3 font-mono text-[11px] font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.4)]"
            >
              View Projects
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border/80 px-7 py-3 font-mono text-[11px] font-semibold tracking-wide text-foreground transition-all hover:bg-muted"
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
