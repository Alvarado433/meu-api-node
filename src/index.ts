import express, {Request, Response} from 'express';
import { MySQLDataSource } from './data-source';

const app = express();
const port = 3000;

MySQLDataSource.initialize()
.then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
}
).catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
}
);
app.get('/', (req: Request, res: Response) => {
  res.send('ola mundo!');
});
app.listen(port, () => {
    console.log(`Servidor iniciado em : http://localhost:${port}`);
})