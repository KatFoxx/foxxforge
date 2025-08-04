"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1 className="text-4xl">{t('Contact')}</h1>
      <p>{t('Contact me via my socials or my email to get a quote for your project!')}</p>
    </main>
  );
};

export default Contact;