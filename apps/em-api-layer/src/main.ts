import { NestFactory } from '@nestjs/core';
import { EmApiLayerModule } from './em-api-layer.module';

async function bootstrap() {
  const app = await NestFactory.create(EmApiLayerModule);
  await app.listen(3000);
}
bootstrap();
