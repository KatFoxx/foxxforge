"use client";
import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useTranslation } from "react-i18next";

type GalleryImage = {
  src: string;
  caption: string;
  alt: string;
};

const TierGallery = ({ images }: { images: GalleryImage[] }) => {
  const { t } = useTranslation();
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative w-120 h-120 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.src}
              alt={t(image.alt)}
              fill
              className="object-cover rounded shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({
          src: image.src,
          alt: t(image.alt),
          description: t(image.caption)
        }))}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "center" }}
      />
    </>
  );
};

export default TierGallery;
