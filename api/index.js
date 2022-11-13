import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import locationRoute from "./routes/locations.js";
import bookingRoute from "./routes/booking.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});



//middlewares
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/locations",locationRoute)
app.use("/api/booking",bookingRoute)
app.get("/users",(req,res)=>{
    res.send("hello")
})



app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});