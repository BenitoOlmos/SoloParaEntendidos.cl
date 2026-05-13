import { UserDao } from '../daos/user.dao.js';

export class UserService {
  static async createUser(userData: any) {
    // Validar si el correo ya existe
    const existing = await UserDao.findByEmail(userData.email);
    if (existing) {
      const error = new Error('El correo electrónico ya está registrado') as any;
      error.statusCode = 409;
      throw error;
    }

    // Aquí iría el hash de contraseñas u otra lógica pesada antes de guardar
    return UserDao.create(userData);
  }

  static async getAllUsers() {
    return UserDao.findAll();
  }
}
