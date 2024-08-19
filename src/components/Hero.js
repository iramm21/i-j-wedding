// src/components/Hero.js
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero({ title, subtitle, backgroundImage, buttons }) {
  return (
    <div
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#2C3E50", // Fallback background color
      }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-secondary px-6">
        <h1
          className="font-serif text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {title}
        </h1>
        <p
          className="font-sans text-lg md:text-xl mb-8 md:mb-10 max-w-xl leading-relaxed drop-shadow-md"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
        >
          {subtitle}
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {buttons.map((button, index) => (
            <Link href={button.href} key={index}>
              <Button
                size={button.size}
                variant={button.variant}
                className="transition-transform transform hover:scale-105"
              >
                {button.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
