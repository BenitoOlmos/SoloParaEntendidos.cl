import pino from 'pino';
import * as pinoHttpModule from 'pino-http';
const pinoHttp = (pinoHttpModule as any).default || pinoHttpModule;

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
});

export const httpLogger = pinoHttp({
  logger,
  customLogLevel: function (req: any, res: any, err: any) {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn';
    } else if (res.statusCode >= 500 || err) {
      return 'error';
    }
    return 'info';
  },
});
