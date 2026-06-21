// sanity/schemas/documents/skill.ts
import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const skillSchema = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon (SVG or emoji)",
      type: "string",
      description: "Paste an SVG string or a single emoji like ⚛️",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Language",
          "Framework",
          "Library",
          "Database",
          "Tool",
          "Platform",
          "Other",
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "displayCategory",
      title: "Display Category",
      type: "string",
      options: {
        list: ["Frontend", "Backend", "Auth & Dev", "Deploy"],
      },
      description:
        "Used for the Stack grid on the portfolio landing page. A skill can belong to both a technical category and a display group.",
    }),
    defineField({
      name: "proficiency",
      title: "Proficiency",
      type: "number",
      description: "0–100. Used for skill bars.",
      validation: (r) => r.min(0).max(100),
    }),
    defineField({
      name: "featured",
      title: "Show on Resume",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Category A–Z",
      name: "categoryAsc",
      by: [
        { field: "category", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
