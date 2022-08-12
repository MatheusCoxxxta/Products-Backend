import { GraphQLObjectType } from 'graphql';
import products from '../../../../../mocks/products';
import ProductType from './TypeDefs/ProductType';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: ProductType,
      resolve(_parent, _args) {
        return products;
      },
    },
  },
});

export default mutation;
