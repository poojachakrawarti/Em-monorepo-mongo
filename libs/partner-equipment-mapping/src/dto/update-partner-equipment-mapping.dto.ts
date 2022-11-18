import { PartialType } from '@nestjs/swagger';
import { CreatePartnerEquipmentMappingDto } from './create-partner-equipment-mapping.dto';

export class UpdatePartnerEquipmentMappingDto extends PartialType(
  CreatePartnerEquipmentMappingDto
) {}
