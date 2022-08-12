/* eslint-disable @typescript-eslint/no-unused-vars */
import ListProductsUseCase from '@modules/products/useCase/ListProductsUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  measure: 'g' | 'cm';
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
}
class ListProductsController {
  public async handle(
    request: Request,
    response: Response,
  ): Promise<IProduct[]> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    const { category } = request.headers;
    const products = await listProductsUseCase.execute(
      category ? String(category) : '',
    );

    return products;
  }
}

export default ListProductsController;
