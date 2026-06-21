// sanity/schemas/objects/blockContent.ts
import { defineArrayMember, defineType } from "sanity";
import { ImageIcon, CodeBlockIcon, LinkIcon } from "@sanity/icons";

export const blockContentSchema = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            icon: LinkIcon,
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (r) =>
                  r.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
              {
                name: "blank",
                type: "boolean",
                title: "Open in new tab",
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt Text" },
        { name: "caption", type: "string", title: "Caption" },
      ],
    }),
    defineArrayMember({
      name: "codeBlock",
      type: "object",
      title: "Code Block",
      icon: CodeBlockIcon,
      fields: [
        {
          name: "language",
          type: "string",
          title: "Language",
          options: {
            list: [
              "typescript",
              "javascript",
              "bash",
              "json",
              "css",
              "html",
              "sql",
              "python",
              "go",
            ],
          },
        },
        { name: "filename", type: "string", title: "Filename (optional)" },
        { name: "code", type: "text", title: "Code", rows: 10 },
      ],
      preview: {
        select: { language: "language", filename: "filename", code: "code" },
        prepare({ language, filename, code }) {
          return {
            title: filename ?? `${language ?? "code"} snippet`,
            subtitle: (code as string)?.slice(0, 60),
          };
        },
      },
    }),
  ],
});
