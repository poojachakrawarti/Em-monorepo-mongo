import { Module } from '@nestjs/common';
import { EquipmentCategoryMappingService } from './equipment-category-mapping.service';
import { EquipmentCategoryMappingController } from './equipment-category-mapping.controller';

@Module({
  controllers: [EquipmentCategoryMappingController],
  providers: [EquipmentCategoryMappingService]
})
export class EquipmentCategoryMappingModule {}
