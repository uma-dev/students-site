import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/students',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
