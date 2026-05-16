import passport from "passport";
import { Router } from "express";

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) =>
  res.json({ user: req.user }),
);

router.get("/verify", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  }
  res.status(401).json({ user: null });
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out" });
    });
  });
});

export default router;

//error handler?
