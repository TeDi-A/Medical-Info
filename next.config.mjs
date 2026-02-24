// next.config.js
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig = {
  reactStrictMode: true,
  // other Next.js config options
};

export default withBundleAnalyzer({
  enabled: isAnalyze,
})(nextConfig);
