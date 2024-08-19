// src/app/rsvp/page.js
"use client";
import { useState } from "react";
import Button from "@/components/Button";

export default function RSVPPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    dietaryRestrictions: "",
    attending: true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("RSVP submitted!");
      setForm({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        dietaryRestrictions: "",
        attending: true,
      });
    } else {
      alert("Error submitting RSVP");
    }
  };

  return (
    <div className="bg-light min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-serif font-bold text-dark mb-8 text-center">
          RSVP
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="guests"
            >
              Number of Guests
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              value={form.guests}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="dietaryRestrictions"
            >
              Dietary Restrictions
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={form.dietaryRestrictions}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Please specify any dietary restrictions..."
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="attending"
            >
              Will you be attending?
            </label>
            <select
              id="attending"
              name="attending"
              value={form.attending}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
