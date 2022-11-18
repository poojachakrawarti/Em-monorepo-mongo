import { NestFactory } from '@nestjs/core';
import { AuthServiceProviderModule } from './auth-service-provider.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceProviderModule);
  await app.listen(3000);
}
bootstrap();
