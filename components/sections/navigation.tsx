"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

export function Navigation({ logoText = "sp_dev" }: { logoText?: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "WORK", href: isHome ? "#work" : "/#work" },
    { label: "ABOUT", href: isHome ? "#about" : "/#about" },
    { label: "STACK", href: isHome ? "#stack" : "/#stack" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className="rounded-md border border-primary/40 px-5 py-2 font-mono text-[11px] font-medium tracking-wider text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
          >
            Contact →
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
