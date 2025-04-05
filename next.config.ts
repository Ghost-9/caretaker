import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/caretaker',
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
export default nextConfig;

