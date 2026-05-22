import cors from "cors";
import { Server } from "socket.io";
import chat from "./chat.js";
import admin from "./admin.js";

const socketSetup = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173", "https://admin.socket.io"],
      credentials: true,
    },
    connectionStateRecovery: {},
  });

  io.on("connection", (socket) => {
    console.log(`User ${socket.id} connected`);
    chat(io, socket);
    admin(io);
  });

  return io;
};

export default socketSetup;
