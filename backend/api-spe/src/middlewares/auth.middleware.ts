import { Request, Response, NextFunction } from 'express';

// Extendemos el Request de Express para inyectar el usuario
declare global {
  namespace Express {
    interface Request {
      user?: any; // Aquí iría el tipo User extraído del token
    }
  }
}

/**
 * Middleware para validar que el usuario esté autenticado.
 * (Placeholder para integración con JWT/Sessions)
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  // Ej: const token = req.headers.authorization?.split(' ')[1];
  // if (!token) throw new Error('No autorizado');

  // MOCK: Simulamos un usuario autenticado para la plantilla
  req.user = { id: 1, role: 'USER' };
  next();
};

/**
 * Middleware de Control de Acceso Basado en Roles (RBAC)
 */
export const requireRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ status: 'error', message: 'No autenticado' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ status: 'error', message: 'No tienes permisos para realizar esta acción' });
    }

    next();
  };
};
