import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["web.spandan.info.np", "https://web.spandan.info.np"],
    },
  },
  allowedDevOrigins: ["web.spandan.info.np", "https://web.spandan.info.np"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
