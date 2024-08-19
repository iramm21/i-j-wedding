// src/components/Header.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-secondary hover:text-gray-300 font-serif font-bold text-3xl"
            >
              <span className="tracking-wider">
                I&J&apos;s Wedding
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/rsvp"
              className="text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              RSVP
            </Link>
            <Link
              href="/admin"
              className="text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary px-4 pt-4 pb-6 space-y-2">
          <div className="bg-primaryDark py-3 px-4 rounded-md shadow-md">
            <Link
              href="/"
              className="block text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              Home
            </Link>
          </div>
          <div className="bg-primaryDark py-3 px-4 rounded-md shadow-md">
            <Link
              href="/rsvp"
              className="block text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              RSVP
            </Link>
          </div>
          <div className="bg-primaryDark py-3 px-4 rounded-md shadow-md">
            <Link
              href="/admin"
              className="block text-secondary hover:text-gray-300 text-lg font-medium transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
