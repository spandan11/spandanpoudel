// sanity/schemas/objects/seoFields.ts
import { defineField, defineType } from "sanity";
import { SearchIcon } from "@sanity/icons";

export const seoFieldsSchema = defineType({
  name: "seoFields",
  title: "SEO",
  type: "object",
  icon: SearchIcon,
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Overrides the page title in search results. ~60 chars.",
      validation: (r) => r.max(60).warning("Keep under 60 characters."),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "List of SEO keywords (e.g. Next.js Developer, Nepal)",
      options: { layout: "tags" },
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "~155 characters.",
      validation: (r) => r.max(155).warning("Keep under 155 characters."),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "1200×630px recommended. Used for social sharing previews.",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description: "Prevent this page from being indexed by search engines.",
    }),
  ],
});
