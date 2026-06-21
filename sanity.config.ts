"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";
import { TerminalIcon } from "@sanity/icons";
import { StudioLogo } from "./sanity/components/StudioLogo";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  name: "spandan-portfolio",
  title: "Spandan Poudel",
  icon: TerminalIcon,
  plugins: [
    structureTool({ structure }),
    media(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((opt) => opt.templateId !== "profile");
      }
      return prev;
    },
    // Auto-resolve cross-dataset references without a dialog for your own dataset
    unstable_comments: { enabled: true },
  },
  studio: {
    components: {
      // Custom navbar logo
      logo: StudioLogo,
    },
  },
});
