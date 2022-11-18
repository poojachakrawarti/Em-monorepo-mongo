import { Injectable } from '@nestjs/common';
import { CreatePartnerEquipmentMappingDto } from './dto/create-partner-equipment-mapping.dto';
import { UpdatePartnerEquipmentMappingDto } from './dto/update-partner-equipment-mapping.dto';

@Injectable()
export class PartnerEquipmentMappingService {
  create(createPartnerEquipmentMappingDto: CreatePartnerEquipmentMappingDto) {
    return 'This action adds a new partnerEquipmentMapping';
  }

  findAll() {
    return `This action returns all partnerEquipmentMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partnerEquipmentMapping`;
  }

  update(id: number, updatePartnerEquipmentMappingDto: UpdatePartnerEquipmentMappingDto) {
    return `This action updates a #${id} partnerEquipmentMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} partnerEquipmentMapping`;
  }
}
