// src/models/RSVP.js
import mongoose from "mongoose";

const RSVPSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    default: 1,
  },
  dietaryRestrictions: {
    type: String,
    default: "",
  },
  attending: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.RSVP || mongoose.model("RSVP", RSVPSchema);
