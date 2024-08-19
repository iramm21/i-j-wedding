// src/components/CountdownTimer.js
"use client";
import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2025-01-04T16:00:00");
    const now = new Date();
    const difference = weddingDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="bg-primary text-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          Countdown to Our Big Day!
        </h2>
        <div className="flex justify-center space-x-8 md:space-x-16 text-4xl md:text-6xl font-bold">
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-4 px-6 rounded-lg shadow-lg">
              {timeLeft.days}
            </span>
            <span className="text-lg md:text-xl mt-4">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-4 px-6 rounded-lg shadow-lg">
              {timeLeft.hours}
            </span>
            <span className="text-lg md:text-xl mt-4">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-4 px-6 rounded-lg shadow-lg">
              {timeLeft.minutes}
            </span>
            <span className="text-lg md:text-xl mt-4">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-4 px-6 rounded-lg shadow-lg">
              {timeLeft.seconds}
            </span>
            <span className="text-lg md:text-xl mt-4">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
