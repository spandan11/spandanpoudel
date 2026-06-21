// components/sections/contact.tsx
// RSC

import Link from "next/link";
import type { Profile } from "@/sanity/queries/portfolio";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-xl border border-border border-l-2 border-l-primary bg-card/30 p-8 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to freelance, full-time, and collaboration.
            </p>
          </div>

          <div className="space-y-4 lg:text-right">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="block font-mono text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {profile.email}
              </a>
            )}
            <div className="flex items-center gap-6 lg:justify-end">
              {profile.github && (
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              )}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
