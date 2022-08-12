import { SwaggerUiOptions } from 'swagger-ui-express';

export default {
  swagger: '2.0',
  info: {
    version: '1.3.0',
    title: 'API',
    description: 'API.',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: '',
      description: 'Servidor de produção',
    },
    {
      url: '',
      description: 'Servidor de staging',
    },
  ],
  basePath: '/',
  tags: [
    {
      name: 'app',
      description: 'api',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {},
} as SwaggerUiOptions;
