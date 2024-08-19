// src/components/InteractiveMap.js
import React from "react";

export default function InteractiveMap() {
  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-8">
          Find Us Here
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1p8Jrc7vr_d_cZUZu7RrA6_vqBJkD4Zk&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Wedding Venue Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
