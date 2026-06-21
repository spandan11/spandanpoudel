// sanity/queries/portfolio.ts

import { groq } from "next-sanity";

export const portfolioQuery = groq`
  {
    "profile": *[_type == "profile" && _id == "profile-spandan"][0] {
      fullName,
      logoText,
      headline,
      heroSubtitle,
      shortBio,
      bio,
      email,
      phone,
      location,
      openToWork,
      aboutHeadline,
      aboutHighlight,
      "linkedin": socials.linkedin,
      "github": socials.github,
      "twitter": socials.twitter,
      "instagram": socials.instagram,
      "facebook": socials.facebook,
      "youtube": socials.youtube,
      "discord": socials.discord,
      "website": socials.website,
      "resumeUrl": resumeFile.asset->url,
      avatar {
        asset->{ _id, url },
        hotspot,
        crop
      },
      "heroSkills": heroSkills[]->name,
      stats[] {
        value,
        label
      },
      "seo": seo {
        metaTitle,
        metaDescription,
        keywords,
        "ogImage": ogImage.asset->url,
        noIndex
      }
    },
    "skills": [
      {
        "category": "Frontend",
        "items": *[_type == "skill" && displayCategory == "Frontend"] | order(order asc).name
      },
      {
        "category": "Backend",
        "items": *[_type == "skill" && displayCategory == "Backend"] | order(order asc).name
      },
      {
        "category": "Auth & Dev",
        "items": *[_type == "skill" && displayCategory == "Auth & Dev"] | order(order asc).name
      },
      {
        "category": "Deploy",
        "items": *[_type == "skill" && displayCategory == "Deploy"] | order(order asc).name
      }
    ],
    "projects": *[_type == "project" && status != "Archived"] | order(featured desc, order asc) {
      title,
      tagline,
      "slug": slug.current,
      liveUrl,
      githubUrl,
      featured,
      order,
      "tags": techStack[]->name
    }
  }
`;

// ─── TypeScript Types ──────────────────────────────────────────────────────────

export type SanityImage = {
  asset: { _id: string; url: string };
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type Stat = {
  value: string;
  label: string;
};

export type Profile = {
  fullName: string;
  logoText: string;
  headline: string;
  heroSubtitle: string;
  shortBio: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  openToWork: boolean;
  aboutHeadline: string;
  aboutHighlight: string;
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
  facebook: string;
  youtube: string;
  discord: string;
  website: string;
  resumeUrl: string | null;
  avatar: SanityImage | null;
  heroSkills: string[];
  stats: Stat[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
  };
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  tagline: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  order: number;
  tags: string[];
};

export type Portfolio = {
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
};

// ─── Backward Compat (used by experience/education pages if you add them) ────

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
};

/** @deprecated Use SkillGroup instead */
export type SkillCategory = SkillGroup;
