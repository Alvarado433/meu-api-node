import "reflect-metadata"
import { DataSource } from "typeorm";


export const MySQLDataSource = new DataSource({
    type: 'mysql', // Banco de dados MySQL
    host: 'localhost', // Host do banco de dados
    port: 3306, // Porta padrão do MySQL
    username: 'Rhaian', // Usuário do banco de dados
    password: 'Alvarado209', // Senha do banco de dados
    database: 'Aplicacao', // Nome do seu banco de dados
    synchronize: true, // Sincronização automática (cuidado em produção)
    logging: true, // Para log de consultas no console
    entities: [], // Entidades que estão sendo utilizadas
    migrations: [], // Suas migrações, caso existam
    subscribers: [], // Eventualmente, seus subscribers
  });