import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // next/image default loader doesn't work in static export — disable optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
