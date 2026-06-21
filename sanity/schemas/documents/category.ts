// sanity/schemas/documents/category.ts
import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const categorySchema = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: FolderIcon,
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
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "Hex color for the category badge, e.g. #3b82f6",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
