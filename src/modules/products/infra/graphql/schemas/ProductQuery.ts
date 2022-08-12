/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { response } from 'express';
import ListProductsController from '../../http/controllers/v2/ListProductsController';
import ProductType from './TypeDefs/ProductType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    findAll: {
      type: new GraphQLList(ProductType),
      args: { category: { type: GraphQLString } },
      async resolve(_parent, { category }) {
        const listProductsController = new ListProductsController();
        const request: any = {
          headers: {
            category,
          },
        };

        return listProductsController.handle(request, response);
      },
    },
  },
});

export default RootQuery;
