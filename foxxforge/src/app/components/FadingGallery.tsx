"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

const images = [
  "/gallery/wolfpriest",
  "/gallery/logan.jpg",
  "/gallery/headtaker.jpg",
  "/gallery/crashingtide.jpg",
  "/gallery/blinkblade.jpg"
];

const FadingGallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl mb-8">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Gallery Image ${index}`}
          layout="fill"
          objectFit="cover"
          className={classNames(
            "absolute transition-opacity duration-1000 ease-in-out",
            {
              "opacity-0": index !== current,
              "opacity-100": index === current,
            }
          )}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default FadingGallery;
