"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <main className="prose prose-invert mx-auto px-4">
      <section>
        <h1 className="text-8xl py-6">{t("Pricing")}</h1>

        <p>{t("My pricing model is very simple: I charge a flat rate of 20€ per hour for all custom miniature painting and building services. No complicated pricing tiers, no hidden fees.")}</p>

        <p>{t("You pay for the time and care that go into your model: whether it's a single Blood Claw, or a mighty Daemon Primarch. You tell me your budget, we will figure out what's possible.")}</p>

        <p>{t("Of course larger commissions, like whole units and entire armies, will receive appropriate pricing.")}</p>

        <p>{t("For conversions you either supply the kits I use for the conversion, if you have some in mind, or we look for kits together according to your budget.")}</p>

        <p>{t("Afterwards you get all the leftover bits I did not use in the conversion to keep for yourself. Or I keep the bits for future work and deduct an appropriate amount from your bill.")}</p>

        <p>{t("Here are some examples so you know what you can expect.")}</p>
      </section>

      <section>
        <figure className="text-center">
          <Image
            src="/gallery/basic04.webp"
            alt="A picture of an Ork Meganob painted to a basic tabletop standard."
            width={500}
            height={500}
            className="mx-auto mb-4 py-8"
          />
          <figcaption>{t("This Ork Meganob took about two hours of work, so it would cost around 40€ as a single model. A unit of three would be about 100€")}</figcaption>
        </figure>

        <figure className="text-center mt-10">
          <Image
            src="/gallery/logan.webp"
            alt="A picture of a Logan Grimnar miniature painted to a detailed parade standard."
            width={500}
            height={500}
            className="mx-auto mb-4 py-8"
          />
          <figcaption>{t("This Logan Grimnar miniature was painted in sub-assemblies and took about 12 hours to complete — so it would cost around 240€.")}</figcaption>
        </figure>

        <figure className="text-center mt-10">
          <Image
            src="/gallery/high-end04.webp"
            alt="A picture of a Daemon Prince painted with high-end techniques."
            width={500}
            height={500}
            className="mx-auto mb-4 py-8"
          />
          <figcaption>{t("This Daemon Prince was painted in sub-assemblies using advanced techniques. Without a finished base, he took about 20 hours — costing around 400€.")}</figcaption>
        </figure>

        <h2 className="text-4xl py-4">Discounts</h2>
        <h3 className="text-3xl">{t('Large Orders')}</h3>
        <p>{t('10% off all orders over 300€')}</p>
        <h3 className="text-3xl">{t('Refer a friend')}</h3>
        <p>{t('10€ off your next order if you refer a friend!')}</p>
      </section>

      <h2 className="mt-12 text-3xl">{t("Disclaimer")}</h2>
      <p className="py-6">{t("According to §19 UStG, VAT is not applicable. Shipping costs are not included.")}</p>
    </main>
  );
};

export default Pricing;
