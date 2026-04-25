import bcrypt from "bcryptjs";
import db from "../db/query.js";

const registration = async (req, res, next) => {
  const body = req.body;
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await db.register(body.email, body.username, hashedPassword);
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(201).json({ message: "works", user: user });
    });
  } catch (err) {
    return next(err);
  }
};

export default { registration };
