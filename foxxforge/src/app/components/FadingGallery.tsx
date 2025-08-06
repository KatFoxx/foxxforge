"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/gallery/banner01.jpg",
    "/gallery/banner02.jpg",
    "/gallery/banner03.jpg",
    "/gallery/banner04.jpg"
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
    <div className="relative w-full h-[800px] overflow-hidden rounded-xl mb-8">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Gallery Image ${index}`}
          layout="fill"
          objectFit="cover"
          objectPosition="35%"
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default FadingGallery;