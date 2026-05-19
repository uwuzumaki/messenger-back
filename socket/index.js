import cors from "cors";
import { Server } from "socket.io";
import chat from "./chat.js";

const socketSetup = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`User ${socket.id} connected`);
    chat(io, socket);
  });

  return io;
};

export default socketSetup;
