import { prisma } from "../lib/prisma.js";

const register = async (data) => {
  const user = await prisma.user.create({
    data: {
      data,
    },
  });
  return user;
};

const createMessage = async (content) => {
  const message = await prisma.message.create({
    data: {
      content,
    },
  });
  return message;
};

export default {
  register,
  createMessage,
};
