import * as dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import { logger } from './src/config/logger.js';
import { prisma } from './src/config/prisma.js';

const PORT = process.env.PORT || 17000;

async function startServer() {
  try {
    // Verificar conexión a la base de datos
    await prisma.$connect();
    logger.info('Database connected successfully via Prisma Pg Adapter');

    app.listen(PORT, () => {
      logger.info(
        `Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`
      );
    });
  } catch (error) {
    logger.error({ err: error }, 'Failed to start server');
    process.exit(1);
  }
}

startServer();
