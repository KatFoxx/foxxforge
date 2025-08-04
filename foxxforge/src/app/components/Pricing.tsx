import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('Pricing')}</h1>
      <p>{t('My pricing model is very simple: I charge 20€ per hour. When we have figured out how extensive your project is we can figure out a quote. :)')}</p>
    </main>
  );
};

export default Pricing;