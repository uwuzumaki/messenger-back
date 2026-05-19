import express from "express";
import cors from "cors";

import router from "./routers/index.js";
import prismaSession from "./authentication/session.js";
import passport from "passport";
import "./authentication/passport.js";

import { createServer } from "http";
import socketSetup from "./socket/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(prismaSession);
app.use(passport.session());

app.use("/register", router.registration);
app.use("/authentication", router.authentication);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const server = createServer(app);
const io = socketSetup(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
