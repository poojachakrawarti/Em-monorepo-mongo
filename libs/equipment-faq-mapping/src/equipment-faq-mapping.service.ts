import { Injectable } from '@nestjs/common';
import { CreateEquipmentFaqMappingDto } from './dto/create-equipment-faq-mapping.dto';
import { UpdateEquipmentFaqMappingDto } from './dto/update-equipment-faq-mapping.dto';

@Injectable()
export class EquipmentFaqMappingService {
  create(createEquipmentFaqMappingDto: CreateEquipmentFaqMappingDto) {
    return 'This action adds a new equipmentFaqMapping';
  }

  findAll() {
    return `This action returns all equipmentFaqMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipmentFaqMapping`;
  }

  update(id: number, updateEquipmentFaqMappingDto: UpdateEquipmentFaqMappingDto) {
    return `This action updates a #${id} equipmentFaqMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipmentFaqMapping`;
  }
}
