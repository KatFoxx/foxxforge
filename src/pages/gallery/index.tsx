import Gallery from "../components/Gallery";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function GalleryPage() {
  return <Gallery />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});