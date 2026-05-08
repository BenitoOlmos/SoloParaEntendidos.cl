import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  // Prisma configuration for SQLite with WAL in mind:
  // Using query logging in development
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

// This prevents instantiating multiple PrismaClients in development due to HMR/reloads.
globalThis.prismaGlobal = globalThis.prismaGlobal || prismaClientSingleton();

export const prisma = globalThis.prismaGlobal;
