"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('Welcome to the Foxx Forge!')}</h1>
            <p>{t('We are a company for commission building and painting of miniatures based in Germany. Nice to have you here!')}</p>
            <h2>{t('What we offer')}</h2>
            <p>
                <ul>
                    <li>{t('Painting of Miniatures')}</li>
                    <li>{t('Building of Miniatures')}</li>
                    <li>{t('Conversions')}</li>
                    <li>{t('Army Commissions')}</li>
                </ul>
            </p>
            <h2>{t('Our Painting Tiers')}</h2>
            <h3>{t('Basic Tabletop Tier')}</h3>
            <p>{t('Basecoats, Shading, functional base design')}</p>
            <h3>{t('Parade Ready Tier')}</h3>
            <p>{t('Basecoats, Highlights, Shading, detailed base design')}</p>
            <h3>{t('High-End Tier')}</h3>
            <p>{t('Volumetric Highlights, Non-metallic metal, intricate base design')}</p>
        </main>
    );
};

export default Home;