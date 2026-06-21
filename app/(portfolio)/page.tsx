// app/(portfolio)/page.tsx
// RSC — fetches Sanity data at the top level, passes to section components

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/queries/portfolio";
import type { Portfolio } from "@/sanity/queries/portfolio";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { MotionSection } from "@/components/sections/motion-section";

import type { Metadata } from "next";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<Portfolio>(
    portfolioQuery,
    {},
    { next: { revalidate: 30 } }
  );
  const seo = data?.profile?.seo;

  return {
    title: seo?.metaTitle || data?.profile?.fullName,
    description: seo?.metaDescription || data?.profile?.headline,
    keywords: seo?.keywords || ["Spandan Poudel", "Full Stack Engineer"],
    openGraph: seo?.ogImage
      ? {
          images: [{ url: seo.ogImage }],
        }
      : undefined,
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function PortfolioPage() {
  const data = await client.fetch<Portfolio>(
    portfolioQuery,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.profile?.fullName) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-sm text-muted-foreground">
          No portfolio data found. Add a Profile document in{" "}
          <Link href="/studio" className="text-primary underline">
            Sanity Studio
          </Link>
          .
        </p>
      </main>
    );
  }

  const { profile, skills, projects } = data;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    url: profile.website || "https://spandanpoudel.com.np",
    image: profile.avatar?.asset?.url || "",
    jobTitle: profile.headline,
    sameAs: [
      profile.linkedin,
      profile.github,
      profile.twitter,
      profile.instagram,
      profile.facebook,
      profile.youtube,
    ].filter(Boolean),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MotionSection id="hero-section" delay={0.1}>
        <Hero profile={profile} />
      </MotionSection>

      {projects && projects.length > 0 && (
        <MotionSection delay={0.3}>
          <ProjectsSection projects={projects} />
        </MotionSection>
      )}

      <MotionSection delay={0.4}>
        <AboutSection profile={profile} skills={skills} />
      </MotionSection>

      <MotionSection delay={0.5}>
        <ContactSection profile={profile} />
      </MotionSection>
    </main>
  );
}
