import passport from "passport";
import { Router } from "express";

const router = Router();

router.post("/", passport.authenticate("local"), (req, res) =>
  res.send({ message: "authenticated" }),
);

export default router;
