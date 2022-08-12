import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ListProductsController from '../controllers/v1/ListProductsController';

const productRoutes = Router();

const listProductsController = new ListProductsController();

/* List Product Endpoint */
productRoutes.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      category: Joi.string(),
    },
  }),
  listProductsController.handle,
);

export default productRoutes;
