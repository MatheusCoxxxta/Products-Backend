/* eslint-disable import/prefer-default-export */
import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
// import '@shared/infra/typeorm';
import '@shared/container';

import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '@config/swagger';
import uploadConfig from '@config/upload';
import routes from './routes';
import graphqlConfig from '../graphql';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use('/graphql', graphqlConfig);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      metadata: err.metadata,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
