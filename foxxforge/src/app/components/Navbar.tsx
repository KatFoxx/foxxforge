"use client";
import React from "react";
import Link from "next/link";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="sticky top-0 bg-black text-ivory flex items-center p-4 shadow-lg z-10">
            <div className="flex items-center">
                <Image
                    src="/foxx_logo.png"
                    alt="A logo of a fox skull"
                    width={80}
                    height={80}
                    className="mr-2"
                />
                <div className="logo-font text-4xl tracking-wide drop-shadow-lg whitespace-nowrap">The Foxx Forge</div>
            </div>
            <div className="flex-1 flex justify-start ml-8">
                <div className="flex space-x-6 logo-font text-3xl tracking-wide drop-shadow-lg">
                    <Link href="/" className="hover:text-[#4b0c18] transition-colors duration-200">Home</Link>
                    <Link href="/gallery" className="hover:text-[#4b0c18] transition-colors duration-200">{t('Gallery')}</Link>
                    <Link href="/pricing" className="hover:text-[#4b0c18] transition-colors duration-200">{t('Pricing')}</Link>
                    <Link href="/contact" className="hover:text-[#4b0c18] transition-colors duration-200">{t('Contact')}</Link>
                    <Link href="/aboutme" className="hover:text-[#4b0c18] transition-colors duration-200">{t('About Me')}</Link>
                </div>
            </div>
            <div className="flex space-x-2 ml-4">
                <button onClick={() => i18n.changeLanguage("en")}
                    aria-label="Switch to English"
                    className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200">
                    EN
                </button>
                <button onClick={() => i18n.changeLanguage("de")}
                    aria-label="Switch to German"
                    className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200">
                    DE
                </button>
            </div>
        </nav>
    )
}

export default Navbar;