import { prisma } from "../lib/prisma.js";

const register = async (email, username, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
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
