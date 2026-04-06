import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import { getSecret } from '../utils/utils';
import jwt from 'jsonwebtoken';

export const registerService = async (password: string, email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    throw new Error('User already exists');
  }
  const generatedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      email,
      password: generatedPassword,
    },
  });
  return 'Success';
};

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Email or password is wrong');
  }
  const valid = bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Email or password wrong');
  }
  const JWT_SECRET = getSecret();
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
};
