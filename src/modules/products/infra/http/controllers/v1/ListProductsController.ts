import ListProductsUseCase from '@modules/products/useCase/ListProductsUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const { category } = request.headers;

    const products = await listProductsUseCase.execute(
      category ? String(category) : '',
    );

    return response.json(products);
  }
}

export default ListProductsController;
