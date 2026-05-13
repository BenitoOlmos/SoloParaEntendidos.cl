import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export const securityMiddlewares = [
  helmet(), // Cabeceras HTTP de seguridad
];

// Limitar intentos para prevenir fuerza bruta
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita a 100 peticiones por ventana
  message: {
    status: 'error',
    message: 'Demasiadas peticiones desde esta IP, intenta más tarde.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
