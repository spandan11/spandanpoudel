import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-4">
        <h1 className="font-heading text-8xl font-black tracking-tighter text-foreground/10 sm:text-9xl">
          404
        </h1>
        <h2 className="font-mono text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Page not found
        </h2>
        <p className="max-w-[400px] text-sm text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
      </div>
      <div className="mt-8">
        <Button asChild className="rounded-full font-mono text-xs font-semibold">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
