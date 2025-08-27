import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../pages/globals.css';
import nextI18NextConfig from '../../next-i18next.config';

import 'yet-another-react-lightbox/styles.css';
import 'react-photo-view/dist/react-photo-view.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cinzel.variable}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
