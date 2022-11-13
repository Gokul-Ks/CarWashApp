import express from "express";
import { createBooking, getBooking, getBookings, deleteBooking } from "../controllers/booking.js"

const router = express.Router();

router.post("/",createBooking);

router.get("/:id",getBooking);

router.delete("/:id", deleteBooking);

router.get("/", getBookings);

export default router;