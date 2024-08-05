import express from 'express';
import sequelize from './config/config.js'; 
import orderRoutes from './routes/orderRoute.js';
import cors from 'cors';

const app = express();

// Configurar o middleware CORS
app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(express.json());
app.use('/api', orderRoutes);

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

export default app;
