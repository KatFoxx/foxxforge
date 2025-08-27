import nextI18NextConfig from './next-i18next.config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  i18n: nextI18NextConfig.i18n,
  expireTime: 3600,
};

export default nextConfig;
