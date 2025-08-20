import Pricing from "../components/Pricing";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PricingPage() {
  return <Pricing />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});