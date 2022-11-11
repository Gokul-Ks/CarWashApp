import express from "express";
import { createLocation, getLocation, getLocations, deleteLocation } from "../controllers/location.js"

const router = express.Router();

router.post("/",createLocation);

router.get("/:id",getLocation);

router.delete("/:id", deleteLocation);

router.get("/", getLocations);

export default router;