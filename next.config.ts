import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: {
    EMAIL_API: process.env.EMAIL_API,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
