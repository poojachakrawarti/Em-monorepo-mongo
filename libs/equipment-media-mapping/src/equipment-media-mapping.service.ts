import { Injectable } from '@nestjs/common';
import { CreateEquipmentMediaMappingDto } from './dto/create-equipment-media-mapping.dto';
import { UpdateEquipmentMediaMappingDto } from './dto/update-equipment-media-mapping.dto';

@Injectable()
export class EquipmentMediaMappingService {
  create(createEquipmentMediaMappingDto: CreateEquipmentMediaMappingDto) {
    return 'This action adds a new equipmentMediaMapping';
  }

  findAll() {
    return `This action returns all equipmentMediaMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipmentMediaMapping`;
  }

  update(id: number, updateEquipmentMediaMappingDto: UpdateEquipmentMediaMappingDto) {
    return `This action updates a #${id} equipmentMediaMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipmentMediaMapping`;
  }
}
