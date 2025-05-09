## documentação:  
 - [TypeORM](https://typeorm.io/)  
 - [TypeScript](https://www.typescriptlang.org/)

### Requisitos

1. **Node.js 22**  
   Verifique a versão do Node.js instalada:

   ```bash
   node --version
   ```

2. **Criar o arquivo `package.json`**  
   Inicialize o projeto com o comando:

   ```bash
   npm init
   ```

3. **Instalar o Express**  
   Para gerenciar rotas e outras funcionalidades:

   ```bash
   npm install express
   ```

4. **Instalar pacotes de suporte ao TypeScript**  
   Adicione os tipos necessários para o Express e Node.js:

   ```bash
   npm install --save-dev @types/express @types/node
   ```

5. **Instalar o compilador TypeScript**  
   Adicione o `ts-node` como dependência de desenvolvimento:

   ```bash
   npm install --save-dev ts-node
   ```

6. **Configurar o TypeScript**  
   Inicialize o arquivo de configuração do TypeScript com o comando:

   ```bash
   npx tsc --init
   ```

   Em seguida, edite o arquivo `tsconfig.json` para ajustar as configurações:

   - Remova os comentários para facilitar a leitura.
   - Adicione ou ajuste as seguintes opções:

     ```json
     "outDir": "./dist",
     "rootDir": "./src"
     ```

7. **Compilar o TypeScript**  
   Use o comando abaixo para compilar os arquivos TypeScript (`.ts`) do projeto para JavaScript (`.js`):

   ```bash
   npx tsc
   ```

   Certifique-se de que o TypeScript está instalado como dependência no projeto antes de executar este comando.

8. **Executar o arquivo gerado com Node.js**  
   Execute o arquivo gerado com o comando:

   ```bash
   node dist/index.js
   ```

   Caso o script `start` esteja configurado no `package.json`, você pode usar:

   ```bash
   npm start
   ```

## Como conectar a API com o banco de dados

1. **Instalar o pacote TypeORM**  
   Adicione o TypeORM ao projeto com o comando:

   ```bash
   npm install typeorm --save
   ```

2. **Instalar o pacote `reflect-metadata`**  
   Adicione o pacote necessário para o TypeORM funcionar corretamente:

   ```bash
   npm install reflect-metadata --save
   ```

3. **Instalar o driver do banco de dados**  
   Adicione o driver necessário para o banco de dados MySQL:

   ```bash
   npm install mysql2 --save
   ```

4. **Criar o arquivo `data-source.ts` na pasta `src`**  
    Adicione o seguinte código ao arquivo `data-source.ts` para configurar a conexão com o banco de dados MySQL:

    ```typescript
    import { DataSource } from 'typeorm';

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
    ```

    > **Nota:** Certifique-se de adicionar as entidades, migrações e subscribers ao respectivo array conforme necessário no seu projeto.
5. **Criar o script do banco de dados**  
        Crie o banco de dados `aplicacao` utilizando o comando SQL abaixo:

        ```bash
        CREATE DATABASE aplicacao;
        ```