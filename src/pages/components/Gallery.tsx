import React from "react";
import { useTranslation } from 'next-i18next';
import TierGallery from "./TierGallery";
import paintedMiniatures from "../data/painted-miniatures.json"
import conversions from "../data/conversions.json"

const Gallery = () => {
  const { t } = useTranslation('translation');
  return (
    <main>
      <h1 className="text-8xl py-6">{t('Gallery')}</h1>
      <div>
        <h2 className="text-6xl py-4">{t('Painted Miniatures')}</h2>
        <TierGallery images={paintedMiniatures} />
        <h2 className="text-6xl py-4">{t('Conversions')}</h2>
        <TierGallery images={conversions} />
      </div>
    </main>
  )
};

export default Gallery;