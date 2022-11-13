import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    service: {
        type:[String],
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);