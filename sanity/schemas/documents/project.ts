// sanity/schemas/documents/project.ts
import { defineField, defineType } from "sanity";
import { CodeIcon } from "@sanity/icons";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One-line summary shown in cards.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      description: "Bullet-point achievements for this project.",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["In Progress", "Completed", "Archived"],
        layout: "radio",
      },
      initialValue: "Completed",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Show in the featured projects section.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
    {
      title: "Newest First",
      name: "newestFirst",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
      media: "thumbnail",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return { title: `${featured ? "★ " : ""}${title}`, subtitle, media };
    },
  },
});
