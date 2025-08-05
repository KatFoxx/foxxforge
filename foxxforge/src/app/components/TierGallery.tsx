"use client";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

const TierGallery = ({ images }: { images: string[] }) => {
  return (
    <PhotoProvider>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {images.map((src, index) => (
          <PhotoView key={index} src={src}>
            <Image
              src={src}
              alt={`Example ${index + 1}`}
              width={200}
              height={200}
              className="rounded shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default TierGallery;
