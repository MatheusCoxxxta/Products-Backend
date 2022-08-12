import FakeProductRepository from '../repositories/fakes/FakeProductRepository';
import ListProductsUseCase from './ListProductsUseCase';

let listProductsUseCase: ListProductsUseCase;
let fakeProductRepository: FakeProductRepository;

describe('ListProductsUseCase', () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductRepository();
    listProductsUseCase = new ListProductsUseCase(fakeProductRepository);
  });

  it('should return a list passing params', async () => {
    const products = await listProductsUseCase.execute('Geral');

    expect(products[0].category.name).toBe('Geral');
  });

  it('should return a list not passing params', async () => {
    const products = await listProductsUseCase.execute();

    expect(products).toHaveLength(7);
  });
});
