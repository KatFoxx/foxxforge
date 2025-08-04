import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('About Me')}</h1>
      <p>{t("Hi! I'm Kat, I am an avid hobbyist and tabletop wargamer, variety streamer and content creator and I love bringing your ideas to life. If you want to see more of what I do, check out my socials linked below.")}</p>
      <div className="socials">
        <a href="instagram.com/KatFoxx"></a>
      </div>
    </main>
  );
};

export default AboutMe;