import { PartialType } from '@nestjs/swagger';
import { CreateEquipmentCategoryMappingDto } from './create-equipment-category-mapping.dto';

export class UpdateEquipmentCategoryMappingDto extends PartialType(
  CreateEquipmentCategoryMappingDto
) {}
