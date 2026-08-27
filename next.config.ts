import type { NextConfig } from "next";

const repo = "company-portal";
const useProjectPath =
  process.env.NODE_ENV === "production" && process.env.CUSTOM_DOMAIN !== "1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: useProjectPath ? `/${repo}` : "",
  assetPrefix: useProjectPath ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
