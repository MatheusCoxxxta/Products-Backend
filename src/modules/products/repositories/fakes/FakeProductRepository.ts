/* eslint-disable @typescript-eslint/no-unused-vars */
import IListProductsDTO from '@modules/products/dtos/IListProductsDTO';
import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '@modules/products/repositories/IProductRepository';
import productMock from '../../../../mocks/products';

class FakeProductRepository implements IProductRepository {
  private repository: Product[];

  constructor() {
    this.repository = productMock;
  }

  async listAll({ category }: IListProductsDTO): Promise<Product[]> {
    if (category)
      return this.repository.filter(
        (product) => product.category.name === category,
      );

    return this.repository;
  }
}

export default FakeProductRepository;
