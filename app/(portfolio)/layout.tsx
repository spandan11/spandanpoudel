// app/(portfolio)/layout.tsx
// RSC — single Sanity fetch shared across header, page, and footer

import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/queries/portfolio";
import type { Portfolio } from "@/sanity/queries/portfolio";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export const revalidate = process.env.NODE_ENV === "production" ? 30 : 0;

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await client.fetch<Portfolio>(
    portfolioQuery,
    {},
    { next: { revalidate: 30 } },
  );

  const logoText = data?.profile?.logoText || "sp.";

  return (
    <div className="relative flex min-h-screen flex-col selection:bg-primary/10 selection:text-primary">
      {/* Subtle grid background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Navigation logoText={logoText} />

      <div className="flex-1">{children}</div>

      {data?.profile?.fullName && <Footer profile={data.profile} />}
    </div>
  );
}
