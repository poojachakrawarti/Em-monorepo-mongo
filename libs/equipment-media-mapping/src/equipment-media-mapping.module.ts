import { Module } from '@nestjs/common';
import { EquipmentMediaMappingService } from './equipment-media-mapping.service';
import { EquipmentMediaMappingController } from './equipment-media-mapping.controller';

@Module({
  controllers: [EquipmentMediaMappingController],
  providers: [EquipmentMediaMappingService]
})
export class EquipmentMediaMappingModule {}
