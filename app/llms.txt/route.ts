import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

export const dynamic = "force-static"; // Compiles to a static text node for hyper-fast response times

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-05-24",
  useCdn: true,
});

export async function GET() {
  // Pull minimal summary fields for indexing structures
  const projects = await client.fetch<{ title: string; description: string }[]>(
    `*[_type == "project"]{title, description}`,
  );

  const projectList = projects
    .map((p) => `- **${p.title}**: ${p.description}`)
    .join("\n");

  const content = `# Spandan Poudel - Portfolio Context
> Full Stack Engineer based in Kathmandu, Nepal. Focused on TypeScript, Next.js, and high-performance system architectures.

## Technical Specialties
- Languages: TypeScript, JavaScript
- Frameworks: Next.js, React Native (Expo), Node.js
- Infrastructure & Data: PostgreSQL, Convex, Docker, AWS

## Active Production Showcases
${projectList || "- Detailed project specifications are being populated via Sanity Studio."}

## Primary Interfaces
- Portfolio Mainframe: https://spandanpoudel.com.np
- Developer Logs & Blog: https://spandanpoudel.com.np/blog
- System Architecture Contact: contact@spandanpoudel.com.np`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
