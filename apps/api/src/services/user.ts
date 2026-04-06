import { prisma } from '../lib/prisma';

export const registerService = async (
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
