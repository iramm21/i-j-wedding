// src/app/page.js
import About from "@/components/About";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import Hero from "@/components/Hero";
import InteractiveMap from "@/components/InteractiveMap";
import PhotoGallery from "@/components/PhotoGallery";
import RSVPCallToAction from "@/components/RSVPCallToAction";

export default function HomePage() {
  const heroButtons = [
    { href: "/rsvp", text: "RSVP Now", size: "lg", variant: "primary" },
    { href: "/info", text: "Learn More", size: "lg", variant: "secondary" },
  ];

  return (
    <div>
      <Hero
        title="Isabel & Josiah's Wedding"
        subtitle="We are so excited to share our special day with you! Please join us in celebrating this wonderful occasion."
        backgroundImage="hero-image2.jpg"
        buttons={heroButtons}
      />
      <About />
      <EventDetails />
      <CountdownTimer />
      <InteractiveMap />
      <PhotoGallery />
      <RSVPCallToAction />
    </div>
  );
}
