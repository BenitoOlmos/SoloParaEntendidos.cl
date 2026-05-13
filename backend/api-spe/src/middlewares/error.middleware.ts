import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger.js';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(
    { err, req: { method: req.method, url: req.url } },
    err.message || 'Internal Server Error'
  );

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Algo salió mal en el servidor';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
