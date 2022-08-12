/* eslint-disable no-debugger, no-console */
import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log(`Database connected!\n Host: ${process.env.DB_HOST}`);
  })
  .catch((error) => console.log(error));
