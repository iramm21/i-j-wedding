// src/app/info/page.js
import React from "react";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import FAQs from "@/components/FAQs";

export default function InfoPage() {
  return (
    <div>
      <header className="bg-primary text-secondary py-16 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
          Wedding Information
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto">
          Everything you need to know about our wedding day, from the schedule
          to seating plan
        </p>
      </header>

      <main className="bg-light">
        <EventDetails />
        <Schedule />
        <FAQs />
      </main>
    </div>
  );
}
