// sanity/schemas/documents/experience.ts
import { defineField, defineType } from "sanity";
import { BinaryDocumentIcon as BriefcaseIcon } from "@sanity/icons";

export const experienceSchema = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: BriefcaseIcon,
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-time", "Part-time", "Internship", "Contract", "Freelance"],
        layout: "radio",
      },
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
      description: "Leave blank if current role.",
    }),
    defineField({
      name: "current",
      title: "Current Role",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "companyUrl", title: "Company Website", type: "url" }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      description: "Each item becomes a bullet point.",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
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
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "role", subtitle: "company", media: "companyLogo" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});
