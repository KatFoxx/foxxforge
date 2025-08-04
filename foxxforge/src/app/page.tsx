"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import FadingGallery from "./components/FadingGallery";

const Home = () => {
    const { t } = useTranslation();
    <FadingGallery />
    return (

        <main>
            <h1 className="logo-font text-4xl font-bold tracking-wide drop-shadow-lg">{t('Welcome to the Foxx Forge!')}</h1>
            <p>{t('We are a company for commission building and painting of miniatures based in Germany. Nice to have you here!')}</p>

            <h2 className="logo-font text-4xl font-bold tracking-wide drop-shadow-lg">{t('Our Services')}</h2>
            <ul>
                <li>{t('Painting of Miniatures')}</li>
                <li>{t('Building of Miniatures')}</li>
                <li>{t('Conversions')}</li>
                <li>{t('Army Commissions')}</li>
            </ul>

            <h2 className="logo-font text-4xl font-bold tracking-wide drop-shadow-lg">{t('Our Painting Tiers')}</h2>
            <h3 className="text-xl">{t('Basic Tabletop Tier')}</h3>
            <p>{t('Basecoats, Shading, functional base design')}</p>
            <h3 className="text-xl">{t('Parade Ready Tier')}</h3>
            <p>{t('Basecoats, Highlights, Shading, detailed base design')}</p>
            <h3 className="text-xl">{t('High-End Tier')}</h3>
            <p>{t('Volumetric Highlights, Non-metallic metal, intricate base design')}</p>
        </main>
    );
};

export default Home;