import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <h1>{t('Gallery')}</h1>
    </main>
  )
};

export default Gallery;