import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcryptjs";
import db from "../db/query.js";

passport.use(
  new Strategy(async (email, password, done) => {
    try {
      const user = await db.findUserEmail(email);

      if (!user) {
        return done(null, false, {
          message: "There's no user with these credentials!",
        });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, {
          message: "There's no user with these credentials!",
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.findUserID(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
