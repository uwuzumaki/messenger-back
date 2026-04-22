import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import db from "./db/query.js";
import router from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use("/register", router.registration);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  return res.send(200);
});

io.on("connection", (socket) => {
  socket.on("chat message", async (msg) => {
    let result;
    try {
      result = await db.createMessage(msg);
    } catch (error) {
      return;
    }
    io.emit("chat message", msg);
    console.log(msg);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
