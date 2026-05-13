#!/bin/bash
# Despliegue y Limpieza para SoloParaEntendidos.cl (Docker Total)
# Para ejecutar: bash deploy/deploy.sh

echo "=== Iniciando Despliegue de SoloParaEntendidos ==="

# 1. Navegar al directorio base
BASE_DIR="/var/www/SoloParaEntendidos.cl"
cd $BASE_DIR || { echo "Directorio base no encontrado"; exit 1; }

# 2. Obtener últimos cambios
echo "-> Actualizando código desde Git..."
git pull origin main

# 3. Despliegue Docker (Todo ocurre dentro de los contenedores)
echo "-> Compilando y levantando servicios con Docker Compose..."
# Forzamos la reconstrucción de imágenes para aplicar cambios nuevos
docker-compose -f deploy/docker-compose.yml up -d --build --remove-orphans

# 4. LIMPIEZA DE ESPACIO (Disk Cleanup)
echo "-> Limpiando recursos antiguos e imágenes colgantes..."
docker system prune -f
find /var/log/nginx -name "*.gz" -type f -mtime +15 -delete 2>/dev/null

echo "=== Despliegue Completado con Éxito ==="
