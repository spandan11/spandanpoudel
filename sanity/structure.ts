// sanity/structure.ts
import type { StructureResolver } from "sanity/structure";
import {
  UserIcon,
  TerminalIcon,
  CodeIcon,
  TagIcon,
  BookIcon,
  ComposeIcon,
  FolderIcon,
  StarIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Spandan Poudel")
    .items([
      // ── Profile (singleton) ───────────────────────────────────────────────
      S.listItem()
        .title("Profile")
        .icon(UserIcon)
        .child(
          S.document()
            .schemaType("profile")
            .documentId("profile-spandan")
            .title("Profile"),
        ),

      S.divider(),

      // ── Portfolio ─────────────────────────────────────────────────────────
      S.listItem()
        .title("Portfolio")
        .icon(TerminalIcon)
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.listItem()
                .title("Experience")
                .icon(TerminalIcon)
                .child(S.documentTypeList("experience").title("Experience")),

              S.listItem()
                .title("Projects")
                .icon(CodeIcon)
                .child(S.documentTypeList("project").title("Projects")),

              S.listItem()
                .title("Education")
                .icon(BookIcon)
                .child(S.documentTypeList("education").title("Education")),

              S.listItem()
                .title("Skills")
                .icon(TagIcon)
                .child(S.documentTypeList("skill").title("Skills")),

              S.listItem()
                .title("Testimonials")
                .icon(StarIcon)
                .child(S.documentTypeList("testimonial").title("Testimonials")),
            ]),
        ),

      S.divider(),

      // ── Blog ──────────────────────────────────────────────────────────────
      S.listItem()
        .title("Blog")
        .icon(ComposeIcon)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("All Posts")
                .icon(ComposeIcon)
                .child(S.documentTypeList("post").title("All Posts")),

              S.listItem()
                .title("Published")
                .icon(ComposeIcon)
                .child(
                  S.documentTypeList("post")
                    .title("Published Posts")
                    .filter('_type == "post" && status == "published"'),
                ),

              S.listItem()
                .title("Drafts")
                .icon(ComposeIcon)
                .child(
                  S.documentTypeList("post")
                    .title("Draft Posts")
                    .filter('_type == "post" && status == "draft"'),
                ),

              S.divider(),

              S.listItem()
                .title("Categories")
                .icon(FolderIcon)
                .child(S.documentTypeList("category").title("Categories")),
            ]),
        ),
    ]);
