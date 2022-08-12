import IListProductsDTO from '@modules/products/dtos/IListProductsDTO';
import IProductRepository from '@modules/products/repositories/IProductRepository';
import { getRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async listAll({ category }: IListProductsDTO): Promise<Product[]> {
    const productQuery = this.ormRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category');

    if (category) {
      productQuery.where({ categoryId: category });
    }

    const products = await productQuery.getMany();

    return products;
  }
}

export default ProductRepository;
