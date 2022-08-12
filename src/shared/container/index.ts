import './providers';
import { container } from 'tsyringe';
import IProductRepository from '@modules/products/repositories/IProductRepository';
import ProductRepository from '@modules/products/repositories/fakes/FakeProductRepository';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
