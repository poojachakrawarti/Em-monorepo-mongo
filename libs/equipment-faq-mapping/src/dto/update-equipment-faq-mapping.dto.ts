import { PartialType } from '@nestjs/swagger';
import { CreateEquipmentFaqMappingDto } from './create-equipment-faq-mapping.dto';

export class UpdateEquipmentFaqMappingDto extends PartialType(
  CreateEquipmentFaqMappingDto
) {}
