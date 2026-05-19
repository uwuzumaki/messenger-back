import db from "../db/query.js";

const chat = (io, socket) => {
  socket.on("chat message", async (msg) => {
    try {
      const result = await db.createMessage(msg);
      io.emit("chat message", msg);
      console.log(msg);
    } catch (error) {
      socket.emit("error", { message: "Failed to send message" });
    }
  });
};

export default chat;
