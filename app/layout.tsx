import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";

import Providers from "@/components/providers";
import { TooltipProvider } from "@/components/ui/tooltip";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spandan Poudel — Full Stack Engineer",
  description:
    "Full Stack Engineer building production web & mobile apps. React Native, Next.js, TypeScript. Based in Jhapa, Nepal.",
  verification: {
    google: "DEhaxv-Y3t0600X5YnX2-yKHBAgdYG5MDqiFM5RWHzA",
  },
};

export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans h-full antialiased`}
      >
        <Providers>
          <TooltipProvider>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
