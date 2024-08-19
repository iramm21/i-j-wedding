// src/components/Schedule.js
import React from "react";

export default function Schedule() {
  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-12">
          Schedule
        </h2>
        <ul className="list-none text-lg text-gray-700 space-y-4">
          <li>
            <strong>2:30 PM</strong> - Guests Arrive
          </li>
          <li>
            <strong>3:00 PM</strong> - Ceremony Begins
          </li>
          <li>
            <strong>4:00 PM</strong> - Cocktail Hour
          </li>
          <li>
            <strong>5:00 PM</strong> - Reception & Dinner
          </li>
          <li>
            <strong>6:00 PM</strong> - Dancing
          </li>
          <li>
            <strong>9:00 PM</strong> - Send Off
          </li>
        </ul>
      </div>
    </section>
  );
}
