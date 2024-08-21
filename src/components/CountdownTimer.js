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

  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section className="bg-primary text-secondary py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8">
          Countdown to Our Big Day!
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-2xl sm:text-4xl md:text-6xl font-bold">
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-3 px-5 sm:py-4 sm:px-6 rounded-lg shadow-lg">
              {timeLeft.days}
            </span>
            <span className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
              Days
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-3 px-5 sm:py-4 sm:px-6 rounded-lg shadow-lg">
              {timeLeft.hours}
            </span>
            <span className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-3 px-5 sm:py-4 sm:px-6 rounded-lg shadow-lg">
              {timeLeft.minutes}
            </span>
            <span className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
              Minutes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-primaryDark text-secondary py-3 px-5 sm:py-4 sm:px-6 rounded-lg shadow-lg">
              {timeLeft.seconds}
            </span>
            <span className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
