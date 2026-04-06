import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import { getSecret } from '../utils/utils';
import jwt from 'jsonwebtoken';
import axios from 'axios';

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

export const logoutService = async () => {};

export const booksearchService = async (query: string) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
      query
    )}&maxResults=10`
  );

  const items = response.data.items || [];

  return items.map((item: any) => ({
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors?.[0],
    cover: item.volumeInfo.imageLinks?.thumbnail,
    genre: item.volumeInfo.categories || [],
    about: item.volumeInfo.description,
    published: item.volumeInfo.publishedDate
      ? parseInt(item.volumeInfo.publishedDate.substring(0, 4))
      : 0,
    publisher: item.volumeInfo.publisher,
    ISBN: item.volumeInfo.industryIdentifiers?.[0]?.identifier,
  }));
};
