import { Module } from '@nestjs/common';
import { OrderItemChecklistMappingService } from './order-item-checklist-mapping.service';
import { OrderItemChecklistMappingController } from './order-item-checklist-mapping.controller';

@Module({
  controllers: [OrderItemChecklistMappingController],
  providers: [OrderItemChecklistMappingService]
})
export class OrderItemChecklistMappingModule {}
