import mongoose from "mongoose";
const LocationSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    location:{
        type: String,
        required: true
    },
    dates:[{count: Number, bookedDate: Date}],
},
  { timestamps: true }

);

export default mongoose.model("Location", LocationSchema);