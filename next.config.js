/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  /**
   * Enable static HTML export so the site can be hosted on GitHub Pages.
   * Images must be unoptimized because Pages is a static host.
   */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/jrm-website" : undefined,
  assetPrefix: isProd ? "/jrm-website" : undefined,
  trailingSlash: true,
};

export default nextConfig;
