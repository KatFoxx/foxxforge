"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import FadingGallery from "./components/FadingGallery";
import TierGallery from "./components/TierGallery";
import Link from "next/link";
import basicTier from "../../public/data/basic-tier.json";
import paradeTier from "../../public/data/parade-tier.json";
import highEnd from "../../public/data/high-end-tier.json"

const Home = () => {
    const { t } = useTranslation();

    return (
        <main>

            <h1 className="logo-font text-8xl tracking-wide drop-shadow-lg pb-6" >{t('Welcome to the Foxx Forge!')}</h1>
            <p className="pb-4">{t('We are a company for commission building and painting of miniatures based in Germany. Nice to have you here!')}</p>
            <FadingGallery />
            <h2 className="logo-font text-6xl tracking-wide drop-shadow-lg pb-6">{t('Our Services')}</h2>
            <ul>
                <li className="pb-2">{t('Painting of Miniatures')}</li>
                <li className="pb-2">{t('Building of Miniatures')}</li>
                <li className="pb-2">{t('Conversions')}</li>
                <li className="pb-2">{t('Army Commissions')}</li>
            </ul>

            <h2 className="logo-font text-6xl tracking-wide drop-shadow-lg pb-6">{t('Our Painting Tiers')}</h2>
            <Link href={"/gallery"} className="text-red-400 underline hover:text-red-300 py-6">{t('For more examples check out the gallery!')}</Link>
            <h3 className="text-xl py-4 font-bold">{t('Basic Tabletop Tier')}</h3>
            <p>{t('Basecoats, Shading, functional base design')}</p>
            <TierGallery images={basicTier} />
            <h3 className="text-xl pb-4 font-bold">{t('Parade Ready Tier')}</h3>
            <p>{t('Basecoats, Highlights, Shading, detailed base design')}</p>
            <TierGallery images={paradeTier} />
            <h3 className="text-xl pb-4 font-bold">{t('High-End Tier')}</h3>
            <p>{t('Volumetric Highlights, Non-metallic metal, intricate base design')}</p>
            <TierGallery images={highEnd} />
        </main>
    );
};

export default Home;