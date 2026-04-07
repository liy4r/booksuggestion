import { prisma } from '../../../../lib/prisma';

export const authorQueries = {
  barberShops: async () => {
    return prisma.author.findMany({});
  },
};
