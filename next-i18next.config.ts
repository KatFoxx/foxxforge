import type { UserConfig } from 'next-i18next';
import path from 'path';

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  localePath: path.resolve('./public/locales'),
};

export default nextI18NextConfig;
