import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  // Only enable static export for GitHub Pages.
  // On Vercel, allow standard serverless output so API routes and dynamic features run.
  ...(isGithubPages ? { output: "export" } : {}),
  basePath: isGithubPages ? "/caretaker" : "",
  assetPrefix: isGithubPages ? "/caretaker/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/caretaker" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
