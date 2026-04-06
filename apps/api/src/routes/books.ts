import { Router } from 'express';
import { prisma } from '../lib/prisma';

export const router = Router();

router.get('/', async (req, res) => {
  const a = await prisma.books.findMany();
  res.send({ message: 'Welcome to api!', a });
});
