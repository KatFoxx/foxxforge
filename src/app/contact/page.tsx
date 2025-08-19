import Contact from "../components/Contact";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ContactPage() {
  return <Contact />;
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])), 
  },
});