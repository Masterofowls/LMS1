import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enabling React strict mode
  reactStrictMode: true,

  // Setting custom build directory
  distDir: 'build',

  // Configuring environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },

  // Adding webpack configuration
  webpack: (config, { isServer }) => {
    // Perform customizations to webpack config here
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  
  // Internationalized routing
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
