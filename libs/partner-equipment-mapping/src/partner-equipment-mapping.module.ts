import { Module } from '@nestjs/common';
import { PartnerEquipmentMappingService } from './partner-equipment-mapping.service';
import { PartnerEquipmentMappingController } from './partner-equipment-mapping.controller';

@Module({
  controllers: [PartnerEquipmentMappingController],
  providers: [PartnerEquipmentMappingService]
})
export class PartnerEquipmentMappingModule {}
