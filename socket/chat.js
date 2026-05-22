import db from "../db/query.js";

const chat = async (io, socket) => {
  socket.on("chat message", async (message) => {
    try {
      console.log(message);
      const msg = await db.createMessage(message);
      console.log(msg);
      io.emit("chat message", msg);
    } catch (error) {
      console.log(error);
      socket.emit("error", { message: "Failed to send message" });
    }
  });
};

export default chat;
