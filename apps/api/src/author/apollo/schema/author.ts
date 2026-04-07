export const Types = `
    type author {
  id:        String  
  email:     String   
  firstName: String
  lastName:  String
  avatar:    String
  work:      [String]
}
`;

export const Queries = `
author(id: String): author
`;

export const Mutations = `
`;
