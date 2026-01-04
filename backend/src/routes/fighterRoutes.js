import { Router } from "express";
import { getAllFighters, getDailyFighter } from "../controllers/fighterController.js";

const router = Router();

router.get("/", getAllFighters);

router.get("/daily", getDailyFighter);

export default router;