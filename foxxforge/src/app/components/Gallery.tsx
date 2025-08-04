"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1 className="text-4xl">{t('Gallery')}</h1>
    </main>
  )
};

export default Gallery;