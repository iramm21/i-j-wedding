// src/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Our Wedding. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/admin"
              className="text-secondary hover:text-gray-300 text-sm md:text-base"
            >
              Admin
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="text-secondary hover:text-gray-300 text-sm md:text-base"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="text-secondary hover:text-gray-300 text-sm md:text-base"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
