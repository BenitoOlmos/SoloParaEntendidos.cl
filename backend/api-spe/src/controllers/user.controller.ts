import { Request, Response } from 'express';
import { UserService } from '../services/user.service.js';

export class UserController {
  static async create(req: Request, res: Response) {
    // Los datos ya están validados por Zod gracias al validateMiddleware
    const user = await UserService.createUser(req.body);
    res.status(201).json({ status: 'success', data: user });
  }

  static async getAll(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.status(200).json({ status: 'success', data: users });
  }
}
