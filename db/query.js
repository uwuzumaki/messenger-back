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

const findUserEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

const findUserID = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
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
  findUserEmail,
  findUserID,
  createMessage,
};
