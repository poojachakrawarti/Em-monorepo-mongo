import { ConfigModuleOptions } from '@nestjs/config';
import { configValidationSchema } from './config.schema';

export const envConfig: ConfigModuleOptions = {
  envFilePath: '.env',
  validationSchema: configValidationSchema,
  isGlobal: true
};
