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

# 3. Frontend: Construir nueva versión
echo "-> Construyendo Frontend..."
cd frontend/web-spe
npm ci # Instalación limpia
npm run build
cd ../..

# 4. Backend (Node): Actualizar y migrar DB
echo "-> Actualizando Backend Node.js..."
# Asumiendo que el backend productivo se manejará en web-spe o api-SPE.
# Como Prisma está en web-spe:
cd frontend/web-spe
npx prisma migrate deploy # Aplica migraciones a SQLite
# PM2 asume que tu app se llama 'backend-api' en PM2
pm2 reload backend-api || echo "PM2 backend-api no estaba corriendo, recuerda iniciarlo la primera vez."
cd ../..

# 5. Motor (Python): Actualizar entorno
echo "-> Actualizando Python Engine..."
cd backend/python-engine
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt
# PM2 asume que el motor se llama 'python-engine' (ej. pm2 start "uvicorn main:app --port 8000" --name python-engine)
pm2 reload python-engine || echo "PM2 python-engine no estaba corriendo, iniciar manualmente la primera vez."
deactivate
cd ../..

# 6. LIMPIEZA DE ESPACIO (Disk Cleanup)
echo "-> Limpiando recursos antiguos..."
# Limpiar dependencias en Node
npm prune --prefix frontend/web-spe
# Limpiar caché global de npm
npm cache clean --force
# Limpiar caché global de pip en Python
pip cache purge
# Eliminar logs rotados antiguos de Nginx y PM2 (archivos de más de 15 días)
find /var/log/nginx -name "*.gz" -type f -mtime +15 -delete 2>/dev/null
pm2 flush

echo "=== Despliegue Completado con Éxito ==="
