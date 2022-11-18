import { Module } from '@nestjs/common';
import { EquipmentFaqMappingService } from './equipment-faq-mapping.service';
import { EquipmentFaqMappingController } from './equipment-faq-mapping.controller';

@Module({
  controllers: [EquipmentFaqMappingController],
  providers: [EquipmentFaqMappingService]
})
export class EquipmentFaqMappingModule {}
