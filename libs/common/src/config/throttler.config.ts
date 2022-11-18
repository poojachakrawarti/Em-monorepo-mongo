import { ConfigService } from '@nestjs/config';
import {
  ThrottlerAsyncOptions,
  ThrottlerModuleOptions
} from '@nestjs/throttler';
import * as redisStore from 'cache-manager-redis-store';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';

export const throttleAsyncConfig: ThrottlerAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<ThrottlerModuleOptions> => {
    const redisConfig = {
      store: redisStore,
      host: configService.get<string>('REDIS_HOST'),
      port: configService.get<number>('REDIS_PORT'),
      ttl: 0,
      isGlobal: true
    };
    if (configService.get<string>('NODE_ENV') == 'production') {
      Object.assign(redisConfig, {
        tls: { rejectUnauthorized: false },
        password: configService.get<string>('REDIS_PASSWORD')
      });
    }
    return {
      ttl: configService.get<number>('THROTTLE_TTL'), // Block time period
      limit: configService.get<number>('THROTTLE_LIMIT'), // Number of attempts within ttl
      storage: new ThrottlerStorageRedisService(redisConfig)
    };
  }
};
