import express from 'express';
import * as path from 'path';
// import { prisma } from './lib/prisma';
// import axios from 'axios';
import { router } from './user/routes';
// import { authorApolloServer } from './author/apollo';
// import { expressMiddleware } from '@as-integrations/express4';

const app = express();

// await authorApolloServer.start();
// app.use('/api/graphql', express.json(), expressMiddleware(authorApolloServer));

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
