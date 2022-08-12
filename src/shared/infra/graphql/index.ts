import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import {
  RootQuery as query,
  mutation,
} from '@modules/products/infra/graphql/schemas';

const schema = new GraphQLSchema({ query, mutation });

const graphqlConfig = graphqlHTTP({
  schema,
  graphiql: true,
});

export default graphqlConfig;
