"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";

const ObfuscatedMail = () => {
  const user = "kat";
  const domain = "foxxforge.de";
  const subject = "Miniature Project Inquiry";

  const email = `${user}@${domain}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <a
      href={mailto}
      className="underline text-red-500 hover:text-red-400"
    >
      {email}
    </a>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="p-6 text-center flex flex-col min-h-screen">
      <h1 className="text-6xl md:text-8xl py-6">{t('Contact')}</h1>
      <p className="text-lg mb-4">
        {t('Contact me via my socials or my email to get a quote for your project!')}
      </p>
      <p className="text-lg">
        {t('Send me an email at')} <ObfuscatedMail />
      </p>
      <p className="mt-4 text-lg">
        <a
          href="https://instagram.com/foxxforge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-pink-500 underline hover:text-pink-400"
        >
          <FaInstagram size={20} />
          Instagram
        </a>
      </p>
    </main>
  );
};

export default Contact;
