import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 👈 this tells Vercel to use your app/page.tsx
  },
};

export default nextConfig;