import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    size: {
      type: GraphQLInt,
    },
    measure: {
      type: GraphQLString,
    },
    imageUrl: {
      type: GraphQLString,
    },
  }),
});

export default ProductType;
