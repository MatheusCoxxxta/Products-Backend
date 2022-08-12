import IListProductsDTO from '../dtos/IListProductsDTO';
import Product from '../infra/typeorm/entities/Product';

interface IProductRepository {
  listAll({ filter, category }: IListProductsDTO): Promise<Product[]>;
}

export default IProductRepository;
