#!/bin/bash
# Despliegue y Limpieza para SoloParaEntendidos.cl (Zero Downtime)
# Para ejecutar: bash deploy.sh

echo "=== Iniciando Despliegue de SoloParaEntendidos ==="

# 1. Navegar al directorio base (Ajustar según servidor real, ej: /var/www/soloparaentendidos)
BASE_DIR="/var/www/SoloParaEntendidos.cl"
cd $BASE_DIR || { echo "Directorio base no encontrado"; exit 1; }

# 2. Obtener últimos cambios
echo "-> Actualizando código desde Git..."
git pull origin main

# 3. Paquetes y Backend: Instalación y Generación de Prisma
echo "-> Instalando dependencias globales y generando Prisma..."
npm run install:all
cd backend/api-spe
npx prisma generate
# npx prisma migrate deploy # Descomentar si usas migraciones de PostgreSQL
cd ../..

# 4. Frontend: Construir nueva versión en el HOST (Ahorra RAM en Docker)
echo "-> Construyendo Frontend en el Host..."
cd frontend/web-spe
npm run build
cd ../..

# 5. Despliegue Docker (Levanta Nginx ligero, DB, Redis y API)
echo "-> Levantando servicios con Docker Compose..."
docker-compose up -d --build

# 6. LIMPIEZA DE ESPACIO (Disk Cleanup)
echo "-> Limpiando recursos antiguos..."
docker system prune -f
find /var/log/nginx -name "*.gz" -type f -mtime +15 -delete 2>/dev/null

echo "=== Despliegue Completado con Éxito ==="
