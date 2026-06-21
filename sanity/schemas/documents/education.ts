// sanity/schemas/documents/education.ts
import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const educationSchema = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree / Qualification",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "field", title: "Field of Study", type: "string" }),
    defineField({ name: "grade", title: "Grade / GPA", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "logo",
      title: "Institution Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "institutionUrl",
      title: "Institution URL",
      type: "url",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
      description: "Leave blank if ongoing.",
    }),
    defineField({
      name: "activities",
      title: "Activities & Achievements",
      type: "array",
      of: [{ type: "text", rows: 2 }],
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
      title: "Most Recent",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "institution", subtitle: "degree", media: "logo" },
  },
});
