import { config } from 'dotenv';
import { resolve } from 'path';

function loadEnvironment() {
  config({
    path: resolve(__dirname, `${process.env.NODE_ENV}.env`),
  });

  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
  };
}

export default loadEnvironment;
