import express from 'express';
import sequelize from './config/config.js'; 

const app = express();

app.use(express.json());

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Definição de rotas
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});


export default app;
