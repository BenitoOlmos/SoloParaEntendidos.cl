import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Solo Para Entendidos API',
      version: '1.0.0',
      description: 'Documentación oficial de la API',
    },
    servers: [
      {
        url: 'http://localhost:17000',
        description: 'Servidor Local',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Documentará los comentarios JSDoc en las rutas
};

export const swaggerSpec = swaggerJSDoc(options);
