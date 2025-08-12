"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (<footer className="bg-black text-ivory flex justify-center gap-4">
        <Link href={"/impressum"} className="text-white underline hover:text-red-500">Impressum</Link>
        <Link href={"/privacyPolicy"} className="text-white underline hover:text-red-500">{t('Privacy Policy')}</Link>
    </footer>
    )
}

export default Footer