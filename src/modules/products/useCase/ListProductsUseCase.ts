import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';

@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(category?: string): Promise<Product[]> {
    const products = await this.productRepository.listAll({ category });

    return products;
  }
}

export default ListProductsUseCase;
