import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/caretaker" : "",
  assetPrefix: isGithubPages ? "/caretaker/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
