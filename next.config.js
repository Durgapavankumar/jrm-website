/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
