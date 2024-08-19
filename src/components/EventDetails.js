// src/components/EventDetails.js
import React from "react";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function EventDetails() {
  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-12">
          Event Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-primary text-5xl mb-6" />
            <h3 className="text-2xl font-bold text-dark mb-4">Date</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Saturday, January 04, 2025
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-primary text-5xl mb-6" />
            <h3 className="text-2xl font-bold text-dark mb-4">Time</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Ceremony: 3:00 PM
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Reception: 5:00 PM
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-primary text-5xl mb-6" />
            <h3 className="text-2xl font-bold text-dark mb-4">Location</h3>
            <p className="text-lg md:text-xl text-gray-700">Sunset Gardens</p>
            <p className="text-lg md:text-xl text-gray-700">
              1234 Wedding Blvd, Rockhampton, QLD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
