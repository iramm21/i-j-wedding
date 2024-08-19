// src/components/FAQs.js
import React from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "What should I wear?",
      answer:
        "The dress code is semi-formal. We recommend wearing something comfortable for dancing.",
    },
    {
      question: "Can I bring a guest?",
      answer: "Please check your invitation to see if a guest is included.",
    },
    {
      question: "Where should I park?",
      answer:
        "Parking is available at the venue. Please follow the signs for guest parking.",
    },
  ];

  return (
    <section className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8 text-left max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-dark mb-2">
                {faq.question}
              </h3>
              <p className="text-lg text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
