// import { ApolloServer } from '@apollo/server';
// import {
//   Types as AuthorTypes,
//   Queries as AuthorQueries,
// } from './schema/author';
// import { authorQueries } from './resolvers/queries/author';

// export const authorApolloServer = new ApolloServer({
//   typeDefs: [
//     AuthorTypes,
//     AuthorQueries && AuthorQueries.trim()
//       ? `type Query { ${AuthorQueries} }`
//       : '',
//     `type Mutation {}`,
//   ]
//     .filter(Boolean)
//     .join('\n\n'),

//   resolvers: {
//     Query: { ...authorQueries },

//     Mutation: {},
//   },
// });
