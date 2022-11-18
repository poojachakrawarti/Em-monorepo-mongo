import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentFaqMappingService } from './equipment-faq-mapping.service';
import { CreateEquipmentFaqMappingDto } from './dto/create-equipment-faq-mapping.dto';
import { UpdateEquipmentFaqMappingDto } from './dto/update-equipment-faq-mapping.dto';

@Controller('equipment-faq-mapping')
export class EquipmentFaqMappingController {
  constructor(private readonly equipmentFaqMappingService: EquipmentFaqMappingService) {}

  @Post()
  create(@Body() createEquipmentFaqMappingDto: CreateEquipmentFaqMappingDto) {
    return this.equipmentFaqMappingService.create(createEquipmentFaqMappingDto);
  }

  @Get()
  findAll() {
    return this.equipmentFaqMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentFaqMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentFaqMappingDto: UpdateEquipmentFaqMappingDto) {
    return this.equipmentFaqMappingService.update(+id, updateEquipmentFaqMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentFaqMappingService.remove(+id);
  }
}
