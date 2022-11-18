import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnerEquipmentMappingService } from './partner-equipment-mapping.service';
import { CreatePartnerEquipmentMappingDto } from './dto/create-partner-equipment-mapping.dto';
import { UpdatePartnerEquipmentMappingDto } from './dto/update-partner-equipment-mapping.dto';

@Controller('partner-equipment-mapping')
export class PartnerEquipmentMappingController {
  constructor(private readonly partnerEquipmentMappingService: PartnerEquipmentMappingService) {}

  @Post()
  create(@Body() createPartnerEquipmentMappingDto: CreatePartnerEquipmentMappingDto) {
    return this.partnerEquipmentMappingService.create(createPartnerEquipmentMappingDto);
  }

  @Get()
  findAll() {
    return this.partnerEquipmentMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerEquipmentMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerEquipmentMappingDto: UpdatePartnerEquipmentMappingDto) {
    return this.partnerEquipmentMappingService.update(+id, updatePartnerEquipmentMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerEquipmentMappingService.remove(+id);
  }
}
