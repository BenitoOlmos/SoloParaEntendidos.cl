import express from 'express';
import cors from 'cors';
import 'express-async-errors'; // Permite capturar errores en async sin try/catch en cada controlador
import { securityMiddlewares, apiLimiter } from './middlewares/security.middleware.js';
import { httpLogger } from './config/logger.js';
import { errorHandler } from './middlewares/error.middleware.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// Middlewares globales de seguridad, logs y parseo
app.use(cors());
app.use(securityMiddlewares);
app.use('/api', apiLimiter); // Rate limiting aplicado solo a endpoints API
app.use(express.json());
app.use(httpLogger); // Logs HTTP con Pino

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

// Endpoint de Healthcheck
app.get('/', (req, res) => {
  res.send({ status: 'ok', service: 'api-spe', version: '2.0.0' });
});

// Documentación de Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api/users', userRoutes);

// Middleware global de manejo de errores (siempre al final)
app.use(errorHandler);

export default app;
