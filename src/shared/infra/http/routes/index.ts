import productRoutes from '@modules/products/infra/http/routes/product.routes';
import { Router } from 'express';

const routes = Router();

// routes.use('/v1');

// Root endpoint
routes.get('/health-check', (request, response) =>
  response.json({ message: 'Ok' }),
);

routes.use('/products', productRoutes);

export default routes;
