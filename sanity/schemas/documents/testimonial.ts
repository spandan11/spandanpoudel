// sanity/schemas/documents/testimonial.ts
import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "author", subtitle: "company", media: "avatar" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ?? "No company", media };
    },
  },
});
