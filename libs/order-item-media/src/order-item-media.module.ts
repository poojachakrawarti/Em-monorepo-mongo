import { Module } from '@nestjs/common';
import { OrderItemMediaService } from './order-item-media.service';
import { OrderItemMediaController } from './order-item-media.controller';

@Module({
  controllers: [OrderItemMediaController],
  providers: [OrderItemMediaService]
})
export class OrderItemMediaModule {}
