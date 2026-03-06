import { prisma } from "../lib/prisma.js";

const createMessage = async (content) => {
  const message = await prisma.message.create({
    data: {
      content,
    },
  });
  return message;
};

export default {
  createMessage,
};
