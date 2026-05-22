import { prisma } from "../lib/prisma.js";

const register = async (email, username, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
    select: {
      id: true,
      username: true,
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
      content: content.msg,
      userId: content.id,
    },
  });
  return message;
};

const getMessageAfterTime = async (time) => {
  const messages = await prisma.message.findMany({
    where: {
      date: {
        gt: time,
      },
    },
    orderBy: {
      date: "asc",
    },
  });
  return messages;
};

export default {
  register,
  findUserEmail,
  findUserID,
  createMessage,
  getMessageAfterTime,
};
