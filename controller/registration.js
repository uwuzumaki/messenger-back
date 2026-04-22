import bcrypt from "bcryptjs";
import db from "../db/query.js";

const registration = async (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

export default { registration };
