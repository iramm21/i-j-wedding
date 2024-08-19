// src/components/About.js
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-12">
          About the Couple
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
          <div className="flex-shrink-0">
            <Image
              src="/couple-image.jpg"
              alt="The couple"
              width={320}
              height={320}
              className="object-cover rounded-full shadow-2xl border-4 border-primary"
            />
          </div>
          <div className="text-left md:max-w-2xl">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-sans">
              Our story began many years ago, and ever since that day,
              we&apos;ve been inseparable. From our first date to this very
              moment, our journey has been filled with love, laughter, and
              countless memories that we cherish.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-sans">
              We can&apos;t wait to start this new chapter of our lives
              together, and we&apos;re thrilled to have you join us on this
              special day. Your presence means the world to us!
            </p>
            <p className="text-lg md:text-xl italic text-primaryDark font-serif">
              &quot;Love isn&apos;t something you find. Love is something that
              finds you.&quot; - Loretta Young
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
