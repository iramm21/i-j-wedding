// src/app/api/admin/route.js
import dbConnect from "@/utils/mongodb";
import RSVP from "@/models/RSVP";

export async function GET(req, res) {
  await dbConnect();

  try {
    const rsvps = await RSVP.find({});
    return res.status(200).json(rsvps);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching RSVPs", error });
  }
}
