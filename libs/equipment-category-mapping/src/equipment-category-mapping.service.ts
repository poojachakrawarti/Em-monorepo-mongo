import { Injectable } from '@nestjs/common';
import { CreateEquipmentCategoryMappingDto } from './dto/create-equipment-category-mapping.dto';
import { UpdateEquipmentCategoryMappingDto } from './dto/update-equipment-category-mapping.dto';

@Injectable()
export class EquipmentCategoryMappingService {
  create(createEquipmentCategoryMappingDto: CreateEquipmentCategoryMappingDto) {
    return 'This action adds a new equipmentCategoryMapping';
  }

  findAll() {
    return `This action returns all equipmentCategoryMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipmentCategoryMapping`;
  }

  update(id: number, updateEquipmentCategoryMappingDto: UpdateEquipmentCategoryMappingDto) {
    return `This action updates a #${id} equipmentCategoryMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipmentCategoryMapping`;
  }
}
