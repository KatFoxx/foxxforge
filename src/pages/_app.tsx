import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../pages/globals.css';
import nextI18NextConfig from '../../next-i18next.config';

import 'yet-another-react-lightbox/styles.css';
import 'react-photo-view/dist/react-photo-view.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

console.log(nextI18NextConfig)

export default appWithTranslation(MyApp, nextI18NextConfig);
