# Dockerfile.api para el Backend de Node.js (con Prisma)
FROM node:22-alpine

WORKDIR /app

# Instalar dependencias necesarias para Prisma y Postgres en Alpine
RUN apk add --no-cache openssl

# Copiar archivos de dependencias
COPY package*.json ./
COPY prisma.config.ts ./
COPY prisma ./prisma/

# Instalar dependencias
RUN npm install

# Generar cliente de Prisma para Linux
RUN npx prisma generate

# Copiar el resto del código
COPY . .

# Exponer puerto de la API (ajustar si es distinto)
EXPOSE 17000

# Comando para iniciar la API. 
# Asumiendo que se puede iniciar con node o algún script start en package.json
# Ajustar "npm start" por el comando real, ej: "node src/server.js"
CMD ["npm", "start"]
