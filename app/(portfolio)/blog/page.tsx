import { client } from "@/sanity/lib/client";
import { postsQuery, Post } from "@/sanity/queries/post";
import { MotionSection } from "@/components/sections/motion-section";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon } from "lucide-react";

export const revalidate = 30; // Revalidate this page every 30 seconds

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(
    postsQuery,
    {},
    { next: { revalidate: 30 } },
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thoughts, learnings, and experiences.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground font-mono text-sm">
            No posts published yet.
          </p>
        ) : (
          posts.map((post, index) => (
            <MotionSection key={post._id} delay={0.1 + index * 0.1}>
              <Link href={`/blog/${post.slug.current}`}>
                <Card className="hover:border-primary/50 transition-colors bg-card hover:bg-muted/30 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-2 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardFooter className="flex gap-4 text-xs text-muted-foreground">
                    {post.publishedAt && (
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="size-3" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {post.readingTime && (
                      <div className="flex items-center gap-1">
                        <ClockIcon className="size-3" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            </MotionSection>
          ))
        )}
      </div>
    </main>
  );
}
