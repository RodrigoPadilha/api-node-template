import { config } from 'dotenv';
import { resolve } from 'path';

// path: resolve(__dirname, `${process.env.NODE_ENV}.env`),
function loadEnvironment() {
  config({
    /* path: resolve(__dirname, `.env.${process.env.NODE_ENV}`), */
    path: resolve('./', `.env.${process.env.NODE_ENV}`),
  });

  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
  };
}

export default loadEnvironment;
