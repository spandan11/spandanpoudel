import { client } from "@/sanity/lib/client";
import { postBySlugQuery, Post } from "@/sanity/queries/post";
import { MotionSection } from "@/components/sections/motion-section";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortableText } from "next-sanity";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";

export const revalidate = 60;

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await client.fetch<Post>(
    postBySlugQuery,
    { slug: resolvedParams.slug },
    { next: { revalidate: 60 } }
  );

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <MotionSection delay={0.1}>
        <Button variant="ghost" size="sm" asChild className="-ml-4 mb-8 text-muted-foreground">
          <Link href="/blog">
            <IconArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="size-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            )}
            {post.readingTime && (
              <div className="flex items-center gap-1.5">
                <ClockIcon className="size-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>
        </header>

        {coverImageUrl && (
          <div className="relative mb-12 aspect-[2/1] w-full overflow-hidden rounded-2xl ring-1 ring-border/50">
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.body && (
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading">
            <PortableText value={post.body} />
          </div>
        )}
      </MotionSection>
    </main>
  );
}
