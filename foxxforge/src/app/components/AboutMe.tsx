"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import profile from '@/public/about-me.jpg';

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('About Me')}</h1>
            <Image
                src={profile}
                alt="A picture of a human in their 30s with green hair and a cat on their shoulders"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-6"
            />

            <p>{t("Hi! I'm Kat, I am an avid hobbyist and tabletop wargamer, variety streamer and content creator and I love bringing your ideas to life. If you want to see more of what I do, check out my socials linked below.")}</p>
            <div className="socials">
                <a href="https://instagram.com/FoxxForge" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </main>
    );
};

export default AboutMe;