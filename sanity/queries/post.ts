import { groq } from "next-sanity";
import { SanityImage } from "./portfolio";

export const postsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage {
      asset->{ _id, url },
      hotspot,
      crop
    },
    publishedAt,
    readingTime,
    tags
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage {
      asset->{ _id, url },
      hotspot,
      crop
    },
    body,
    publishedAt,
    readingTime,
    tags
  }
`;

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: SanityImage | null;
  body?: any; // PortableText body
  publishedAt?: string;
  readingTime?: number;
  tags?: string[];
};
