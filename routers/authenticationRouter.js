import passport from "passport";
import { Router } from "express";

const router = Router();

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
  (req, res) => res.status(200),
);

export default router;
