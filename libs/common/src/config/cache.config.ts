import { CacheModuleAsyncOptions, CacheModuleOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts as RedisClientOpts } from 'redis';

export const cacheAsyncConfig: CacheModuleAsyncOptions<RedisClientOpts> = {
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<CacheModuleOptions<RedisClientOpts>> => {
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
    return { ...redisConfig };
  }
};
