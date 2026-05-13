import { prisma } from '../config/prisma.js';

export class UserDao {
  static async findById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  static async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  static async create(data: any) {
    return prisma.user.create({ data });
  }

  static async findAll() {
    return prisma.user.findMany();
  }
}
