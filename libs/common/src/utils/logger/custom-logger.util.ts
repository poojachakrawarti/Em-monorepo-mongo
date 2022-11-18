import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities
} from 'nest-winston';
import * as winston from 'winston';

export type CreateCustomLoggerType = {
  logStreamName: string;
  logGroupName: string;
};

export const createLogger = () => {
  const transports: any[] = [
    new winston.transports.Console({
      format: winston.format.combine(
        // winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(process.env.APP_NAME, {
          colors: true,
          prettyPrint: true
        })
      ),
      level: 'debug'
    })
  ];
  return WinstonModule.createLogger({ transports });
};
