import { ApolloServer } from '@apollo/server';
import { Types as AuthorTypes } from './schema/author';

import { authorQueries } from '../apollo/resolvers/queries/author';

export const userApolloServer = new ApolloServer({
  typeDefs: `
    ${AuthorTypes}

    type Query {

    }
    
    type Mutation {

    }
  `,

  resolvers: {
    Query: { ...authorQueries },

    Mutation: {},
  },
});
