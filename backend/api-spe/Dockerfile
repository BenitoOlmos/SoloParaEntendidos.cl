# Dockerfile.api para el Backend de Node.js (con Prisma y Monorepo)
FROM node:22-alpine

WORKDIR /app

# Instalar openssl para Prisma
RUN apk add --no-cache openssl

# Copiar definiciones
COPY package*.json ./
COPY packages/schemas/package.json ./packages/schemas/
COPY backend/api-spe/package.json ./backend/api-spe/

# Instalar dependencias del monorepo
RUN npm ci

# Copiar schemas y backend
COPY packages/schemas ./packages/schemas
COPY backend/api-spe ./backend/api-spe

# Compilar schemas
WORKDIR /app/packages/schemas
RUN npm run build

# Generar Prisma en backend
WORKDIR /app/backend/api-spe
RUN npx prisma generate

# Exponer puerto
EXPOSE 17000

# Usar tsx para correr index.ts en producción
CMD ["npm", "start"]
