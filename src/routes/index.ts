import { Router, Request, Response } from 'express';
import User from '@controllers/Users';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Olá Mundo!!!' });
});

routes.get('/users', User.index);

export default routes;
