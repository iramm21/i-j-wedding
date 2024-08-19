// src/app/api/rsvp/route.js
import dbConnect from "@/utils/mongodb";
import RSVP from "@/models/RSVP";

export async function POST(req, res) {
  await dbConnect();

  const { name, email, phone, guests, dietaryRestrictions, attending } =
    await req.json();

  const newRSVP = new RSVP({
    name,
    email,
    phone,
    guests,
    dietaryRestrictions,
    attending,
  });

  try {
    await newRSVP.save();
    return res.status(201).json({ message: "RSVP submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error submitting RSVP", error });
  }
}
