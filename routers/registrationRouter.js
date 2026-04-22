import { Router } from "express";
import registrationRouter from "../controller/registration.js";

const router = Router();

router.post("/", registrationRouter.registration);

export default router;
