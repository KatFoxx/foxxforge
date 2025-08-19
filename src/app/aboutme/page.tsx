import AboutMe from "../components/AboutMe";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function AboutMePage() {
  return <AboutMe />;
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});