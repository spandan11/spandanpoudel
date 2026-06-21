import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/studio/", // Protects your embedded Sanity admin panel from indexing
        "/studio/[[...tool]]/",
      ],
    },
    sitemap: "https://spandanpoudel.com.np/sitemap.xml",
  };
}
