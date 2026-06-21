import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set.");
  console.error(
    "    Run: npx tsx --env-file=.env.local sanity/seed/portfolio-seed.ts",
  );
  process.exit(1);
}
if (!token) {
  console.error("❌  SANITY_API_TOKEN is not set.");
  console.error(
    "    Create a token at https://sanity.io/manage → API → Tokens (Editor role).",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const documents = [
  // --- SKILLS ---
  // Frontend
  { _id: "skill-nextjs", _type: "skill", name: "Next.js", slug: { _type: "slug", current: "nextjs" }, displayCategory: "Frontend", order: 1 },
  { _id: "skill-react", _type: "skill", name: "React", slug: { _type: "slug", current: "react" }, displayCategory: "Frontend", order: 2 },
  { _id: "skill-react-native", _type: "skill", name: "React Native", slug: { _type: "slug", current: "react-native" }, displayCategory: "Frontend", order: 3 },
  { _id: "skill-expo", _type: "skill", name: "Expo", slug: { _type: "slug", current: "expo" }, displayCategory: "Frontend", order: 4 },
  { _id: "skill-nativewind", _type: "skill", name: "NativeWind", slug: { _type: "slug", current: "nativewind" }, displayCategory: "Frontend", order: 5 },
  { _id: "skill-tailwind", _type: "skill", name: "Tailwind", slug: { _type: "slug", current: "tailwind" }, displayCategory: "Frontend", order: 6 },
  { _id: "skill-shadcn", _type: "skill", name: "shadcn/ui", slug: { _type: "slug", current: "shadcn" } },

  // Backend
  { _id: "skill-convex", _type: "skill", name: "Convex", slug: { _type: "slug", current: "convex" }, displayCategory: "Backend", order: 1 },
  { _id: "skill-trpc", _type: "skill", name: "tRPC", slug: { _type: "slug", current: "trpc" }, displayCategory: "Backend", order: 2 },
  { _id: "skill-drizzle", _type: "skill", name: "Drizzle", slug: { _type: "slug", current: "drizzle" }, displayCategory: "Backend", order: 3 },
  { _id: "skill-prisma", _type: "skill", name: "Prisma", slug: { _type: "slug", current: "prisma" }, displayCategory: "Backend", order: 4 },
  { _id: "skill-postgresql", _type: "skill", name: "PostgreSQL", slug: { _type: "slug", current: "postgresql" }, displayCategory: "Backend", order: 5 },
  { _id: "skill-redis", _type: "skill", name: "Redis", slug: { _type: "slug", current: "redis" }, displayCategory: "Backend", order: 6 },
  { _id: "skill-mysql", _type: "skill", name: "MySQL", slug: { _type: "slug", current: "mysql" } },

  // Auth & Dev
  { _id: "skill-better-auth", _type: "skill", name: "Better Auth", slug: { _type: "slug", current: "better-auth" }, displayCategory: "Auth & Dev", order: 1 },
  { _id: "skill-turborepo", _type: "skill", name: "Turborepo", slug: { _type: "slug", current: "turborepo" }, displayCategory: "Auth & Dev", order: 2 },
  { _id: "skill-bun", _type: "skill", name: "Bun", slug: { _type: "slug", current: "bun" }, displayCategory: "Auth & Dev", order: 3 },
  { _id: "skill-typescript", _type: "skill", name: "TypeScript", slug: { _type: "slug", current: "typescript" }, displayCategory: "Auth & Dev", order: 4 },
  { _id: "skill-git", _type: "skill", name: "Git", slug: { _type: "slug", current: "git" }, displayCategory: "Auth & Dev", order: 5 },

  // Deploy
  { _id: "skill-vercel", _type: "skill", name: "Vercel", slug: { _type: "slug", current: "vercel" }, displayCategory: "Deploy", order: 1 },
  { _id: "skill-cloudflare", _type: "skill", name: "Cloudflare", slug: { _type: "slug", current: "cloudflare" }, displayCategory: "Deploy", order: 2 },
  { _id: "skill-expo-eas", _type: "skill", name: "Expo EAS", slug: { _type: "slug", current: "expo-eas" }, displayCategory: "Deploy", order: 3 },
  { _id: "skill-neon", _type: "skill", name: "Neon", slug: { _type: "slug", current: "neon" }, displayCategory: "Deploy", order: 4 },
  { _id: "skill-docker", _type: "skill", name: "Docker", slug: { _type: "slug", current: "docker" }, displayCategory: "Deploy", order: 5 },

  // --- PROFILE ---
  {
    _id: "profile-spandan",
    _type: "profile",
    fullName: "Spandan Poudel",
    headline: "Full Stack Engineer",
    heroSubtitle: "building production web & mobile",
    shortBio: "React Native, Next.js, TypeScript. Based in Jhapa, Nepal.\nI build things that work — fast, clean, and shipped.",
    heroSkills: [
      { _type: "reference", _ref: "skill-react-native", _key: "hs1" },
      { _type: "reference", _ref: "skill-nextjs", _key: "hs2" },
      { _type: "reference", _ref: "skill-typescript", _key: "hs3" },
      { _type: "reference", _ref: "skill-convex", _key: "hs4" },
      { _type: "reference", _ref: "skill-expo", _key: "hs5" },
    ],
    stats: [
      { _key: "stat1", value: "3+", label: "YEARS EXPERIENCE" },
      { _key: "stat2", value: "12+", label: "PROJECTS SHIPPED" },
      { _key: "stat3", value: "80%", label: "DIT SCHOLARSHIP" },
      { _key: "stat4", value: "∞", label: "PROBLEMS SOLVED" }
    ],
    aboutHeadline: "Code that ships, not just concepts.",
    aboutHighlight: "not just",
    bio: "Full Stack Engineer at Reactify Software Technologies, Jhapa, Nepal. I turn product ideas into production-grade web and mobile apps — from auth systems and real-time backends to pixel-perfect UIs.\n\nDIT graduate (80.75% via CTEVT scholarship). Applying to CS at Dongseo University, Busan. Long-term goal: build digital infrastructure for Nepal.",
    email: "spandandec21@gmail.com",
    phone: "+977-9825944663",
    location: "Jhapa, Nepal",
    socials: {
      github: "spandan11",
      linkedin: "https://linkedin.com/in/spandan-poudel",
      website: "https://spandanpoudel.com.np",
    },
    openToWork: true,
  },

  // --- PROJECTS ---
  {
    _id: "project-1",
    _type: "project",
    title: "Nepal Notes",
    slug: { _type: "slug", current: "nepal-notes" },
    tagline: "Cross-platform notes app for NEB & CTEVT students. MDX rendering, offline-first SQLite, full auth flow.",
    liveUrl: "https://spandanpoudel.com.np",
    featured: true,
    order: 1,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-react-native" },
      { _key: "t2", _type: "reference", _ref: "skill-expo" },
      { _key: "t3", _type: "reference", _ref: "skill-convex" },
      { _key: "t4", _type: "reference", _ref: "skill-better-auth" },
      { _key: "t5", _type: "reference", _ref: "skill-nativewind" }
    ]
  },
  {
    _id: "project-2",
    _type: "project",
    title: "Reactify Website",
    slug: { _type: "slug", current: "reactify-website" },
    tagline: "Corporate site with full shadcn theme tokens, custom conic-gradient components, and responsive layout.",
    featured: false,
    order: 2,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-nextjs" }, // assuming "Next.js 15" uses Next.js icon
      { _key: "t2", _type: "reference", _ref: "skill-shadcn" },
      { _key: "t3", _type: "reference", _ref: "skill-tailwind" },
      { _key: "t4", _type: "reference", _ref: "skill-typescript" }
    ]
  },
  {
    _id: "project-3",
    _type: "project",
    title: "E-Commerce Platform",
    slug: { _type: "slug", current: "e-commerce" },
    tagline: "Local business marketplace for Jhapa. Full cart, orders, and admin panel with stock management.",
    featured: false,
    order: 3,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-nextjs" },
      { _key: "t2", _type: "reference", _ref: "skill-prisma" },
      { _key: "t3", _type: "reference", _ref: "skill-mysql" },
      { _key: "t4", _type: "reference", _ref: "skill-trpc" }
    ]
  },
  {
    _id: "project-4",
    _type: "project",
    title: "Developer Portfolio",
    slug: { _type: "slug", current: "portfolio" },
    tagline: "Personal site with Convex backend, Tiptap blog editor, and auto-generated resume data pipeline.",
    liveUrl: "https://spandanpoudel.com.np",
    featured: false,
    order: 4,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-nextjs" },
      { _key: "t2", _type: "reference", _ref: "skill-convex" },
      { _key: "t3", _type: "reference", _ref: "skill-shadcn" }
    ]
  },
  {
    _id: "project-5",
    _type: "project",
    title: "Stock Management",
    slug: { _type: "slug", current: "stock-management" },
    tagline: "Inventory system with App Router, real-time mutations via tRPC, and full role-based access control.",
    featured: false,
    order: 5,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-nextjs" },
      { _key: "t2", _type: "reference", _ref: "skill-prisma" },
      { _key: "t3", _type: "reference", _ref: "skill-trpc" },
      { _key: "t4", _type: "reference", _ref: "skill-mysql" }
    ]
  },
  {
    _id: "project-6",
    _type: "project",
    title: "URL Shortener",
    slug: { _type: "slug", current: "url-shortener" },
    tagline: "Fast redirect service with analytics, custom slugs, and a clean dashboard. Edge-ready deployment.",
    featured: false,
    order: 6,
    techStack: [
      { _key: "t1", _type: "reference", _ref: "skill-nextjs" },
      { _key: "t2", _type: "reference", _ref: "skill-typescript" },
      { _key: "t3", _type: "reference", _ref: "skill-postgresql" }
    ]
  }
];

async function run() {
  console.log("Starting seed with reference data...");
  // Use any to bypass TS complaining about strict types locally if they diverge slightly
  for (const doc of documents) {
    try {
      await client.createOrReplace(doc as any);
      console.log(`✅  Created/Updated ${doc._type}: ${doc._id}`);
    } catch (err: any) {
      console.error(`❌  Failed to seed ${doc._type} (${doc._id}):`, err.message);
    }
  }

  console.log("🎉 Seeding complete!");
}

run().catch((err) => {
  console.error("❌  Seed script failed:", err.message);
  process.exit(1);
});
