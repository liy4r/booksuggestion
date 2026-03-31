import express from 'express';
import * as path from 'path';
import { prisma } from './lib/prisma';
import axios from 'axios';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  await prisma.books.findMany();
  res.send({ message: 'Welcome to api!' });
});

app.get('/books', async (req, res) => {
  try {
    const q = req.query.q || 'fiction';

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}`
    );

    const books = response.data.items.map((item: any) => ({
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0],
      cover: item.volumeInfo.imageLinks?.thumbnail,
      genre: item.volumeInfo.categories || [],
      about: item.volumeInfo.description,
      published: parseInt(item.volumeInfo.publishedDate) || 0,
      publisher: item.volumeInfo.publisher,
      ISBN: item.volumeInfo.industryIdentifiers?.[0]?.identifier,
    }));

    res.send(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching books');
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
