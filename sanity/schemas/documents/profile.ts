// sanity/schemas/documents/profile.ts
import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: UserIcon,
  // Singleton — only one profile document
  // __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      description: "Text shown in the top-left header navigation (e.g. sp_dev)",
      initialValue: "sp_dev",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "e.g. Full Stack Engineer",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      description: "e.g. building production web & mobile",
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 2,
      description:
        "Brief bio for the hero section. e.g. 'React Native, Next.js, TypeScript. Based in Jhapa, Nepal. I build things that work — fast, clean, and shipped.'",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 6,
      description: "Longer bio shown in the About section.",
    }),
    defineField({
      name: "aboutHeadline",
      title: "About Headline",
      type: "string",
      description: "e.g. 'Code that ships, not just concepts.'",
    }),
    defineField({
      name: "aboutHighlight",
      title: "About Highlight Text",
      type: "string",
      description:
        "Part of the About Headline to highlight in accent color. e.g. 'not just'",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Jhapa, Nepal",
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "github",
          title: "GitHub Username",
          type: "string",
        }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({
          name: "twitter",
          title: "Twitter / X Handle",
          type: "string",
        }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
        defineField({ name: "discord", title: "Discord Username/Link", type: "string" }),
        defineField({ name: "website", title: "Website URL", type: "url" }),
      ],
    }),
    defineField({
      name: "heroSkills",
      title: "Hero Tech Badges",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
      description: "Skills shown as badge pills in the hero section.",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      description:
        "Stats row below the hero. e.g. Value: '3+', Label: 'Years Experience'",
    }),
    defineField({
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "openToWork",
      title: "Open to Work",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    select: { title: "fullName", subtitle: "headline", media: "avatar" },
  },
});
