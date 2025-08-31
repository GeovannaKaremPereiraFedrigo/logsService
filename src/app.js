import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import createServer from './config/serverConfig.js';
import { setupSwagger } from './config/swaggerConfig.js';

import logRoutes from './routes/logRoutes.js';
import systemRoutes from './routes/systemRoutes.js';
import authenticateToken from './middlewares/authMiddleware.js';

dotenv.config();

const startApp = async () => {
  const app = await createServer();

  app.use(cors());
  app.use(express.json()); // ⬅️ aqui

  // Aplica rotas
  app.use('/api/logs', authenticateToken, logRoutes);
  app.use('/api/systems', authenticateToken, systemRoutes);

  // Configuração do Swagger
  setupSwagger(app);

  const PORT = process.env.PORT || 4001;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor de logs rodando na porta ${PORT}`);
  });
};

startApp();
