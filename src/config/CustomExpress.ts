import cors from 'cors';
import express from 'express';
import routes from '../routes';

const app = express();
app.use(cors());
/*
    app.use(cors(
        origin:'http://meu_app.com'       // Quais endereços poderão acessar a nossa aplicação?
    ))
*/
app.use(express.json());
app.use(routes);

export default app;
