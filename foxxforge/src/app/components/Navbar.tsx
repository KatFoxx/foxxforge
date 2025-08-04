"use client";
import React from "react";
import Link from "next/link";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="sticky top-0 bg-red-900 text-ivory flex justify-between items-center p-4 shadow-lg z-10" >
            <div className="navbar-font text-xl font-bold">The Foxx Forge</div>
            <div className="flex space-x-4">
                <Link href="/" >Home</Link>
                <Link href="/gallery" >{t('Gallery')}</Link>
                <Link href="/pricing" >{t('Pricing')}</Link>
                <Link href="/contact" >{t('Contact')}</Link>
                <Link href="/aboutme" >{t('About Me')}</Link>
            </div>
            <div className="space-x-2">
                <button onClick={() => i18n.changeLanguage("en_EN")} aria-label="Switch to English">EN</button>
                <button onClick={() => i18n.changeLanguage("de_DE")} aria-label="Switch to German">DE</button>
            </div>
        </nav >
    )
}

export default Navbar;