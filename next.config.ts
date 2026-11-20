import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/feed/indeed.xml",
        destination: "/api/feed/indeed",
      },
      {
        source: "/api/feed/indeed.xml",
        destination: "/api/feed/indeed",
      },
    ];
  },
};

export default nextConfig;
