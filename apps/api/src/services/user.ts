import { prisma } from '../lib/prisma';

export const addUser = async (
  firstName: string,
  lastName: string,
  read: string,
  email: string
) => {
  await prisma.user.create({
    data: {
      firstName,
      lastName,
      read,
      email,
    },
  });
};
