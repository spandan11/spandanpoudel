import type { MetadataRoute } from "next";
import { createClient } from "next-sanity";

// Isolated micro-client strictly for parsing raw URLs during build
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-05-24",
  useCdn: false, // Fresh data required during compilation/revalidation
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://spandanpoudel.com.np";

  // Fetch all active blog slugs from Sanity
  const posts = await client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`,
  );

  const blogUrls = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
