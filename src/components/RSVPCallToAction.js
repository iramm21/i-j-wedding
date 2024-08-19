// src/components/RSVPCallToAction.js
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function RSVPCallToAction() {
  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8">
          Don&apos;t Forget to RSVP!
        </h2>
        <Link href="/rsvp">
          <Button size="lg" variant="secondary">
            RSVP Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
