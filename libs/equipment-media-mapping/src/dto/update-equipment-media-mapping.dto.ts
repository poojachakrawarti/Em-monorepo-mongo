import { PartialType } from '@nestjs/swagger';
import { CreateEquipmentMediaMappingDto } from './create-equipment-media-mapping.dto';

export class UpdateEquipmentMediaMappingDto extends PartialType(CreateEquipmentMediaMappingDto) {}
