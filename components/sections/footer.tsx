// components/sections/footer.tsx
// RSC

import type { Profile } from "@/sanity/queries/portfolio";

type FooterProps = {
  profile: Profile;
};

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/50">
          © {new Date().getFullYear()} {profile.fullName} — All rights reserved
        </p>
        {profile.location && (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-primary">●</span>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground/50">
              {profile.location}
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}
