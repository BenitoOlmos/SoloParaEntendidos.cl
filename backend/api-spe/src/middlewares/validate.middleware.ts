import { Request, Response, NextFunction } from 'express';

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validamos el cuerpo de la petición contra el schema
      const parsedData = schema.parse(req.body);
      req.body = parsedData; // Sobrescribimos el body con los datos tipados y parseados
      next();
    } catch (error: any) {
      res.status(400).json({
        status: 'error',
        message: 'Error de validación',
        errors: error.errors,
      });
    }
  };
};
