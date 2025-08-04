"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/gallery/wolfpriest.jpg",
    "/gallery/logan.jpg",
    "/gallery/headtaker.jpg",
    "/gallery/bloodclaw.jpg",
    "/gallery/bloodclawII.jpg"
];

const FadingGallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image

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