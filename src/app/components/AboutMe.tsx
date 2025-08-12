"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaInstagram, FaTwitch } from "react-icons/fa";

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <main className="px-4 py-10 text-center flex flex-col min-h-screen">
            <h1 className="text-8xl py-6">{t('About Me')}</h1>
            <Image
                src="/about-me.jpg"
                alt="A picture of a human in their 30s with green hair and a cat on their shoulders"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-6"
            />

            <p className="max-w-2xl mx-auto text-center">{t("Hi! I'm Kat, I am an avid hobbyist and tabletop wargamer, variety streamer and content creator and I love bringing your ideas to life. If you want to see more of what I do, check out my socials linked below.")}</p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-6">
                <a
                    href="https://instagram.com/foxxforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-500 underline hover:text-pink-400"
                >
                    <FaInstagram size={20} />
                    Instagram
                </a>
                <a
                    href="https://twitch.tv/katfoxxtv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-500 underline hover:text-purple-400"
                >
                    <FaTwitch size={20} />
                    Twitch
                </a>
            </div>
        </main>
    );
};

export default AboutMe;