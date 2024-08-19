// src/components/PhotoGallery.js
"use client";
import React from "react";
import Image from "next/image";

export default function PhotoGallery() {
  const photos = [
    {
      src: "/engagement-moment-image.jpg",
      alt: "Couple at the beach",
      width: 800,
      height: 600,
    },
    {
      src: "/engagement-moment-image2.jpg",
      alt: "Engagement moment",
      width: 800,
      height: 600,
    },
    {
      src: "/engagement-moment-image3.jpg",
      alt: "engagement moment",
      width: 800,
      height: 600,
    },
  ];

  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-12">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
