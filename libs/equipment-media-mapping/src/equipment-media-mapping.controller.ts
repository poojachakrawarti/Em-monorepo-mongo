import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentMediaMappingService } from './equipment-media-mapping.service';
import { CreateEquipmentMediaMappingDto } from './dto/create-equipment-media-mapping.dto';
import { UpdateEquipmentMediaMappingDto } from './dto/update-equipment-media-mapping.dto';

@Controller('equipment-media-mapping')
export class EquipmentMediaMappingController {
  constructor(private readonly equipmentMediaMappingService: EquipmentMediaMappingService) {}

  @Post()
  create(@Body() createEquipmentMediaMappingDto: CreateEquipmentMediaMappingDto) {
    return this.equipmentMediaMappingService.create(createEquipmentMediaMappingDto);
  }

  @Get()
  findAll() {
    return this.equipmentMediaMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentMediaMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentMediaMappingDto: UpdateEquipmentMediaMappingDto) {
    return this.equipmentMediaMappingService.update(+id, updateEquipmentMediaMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentMediaMappingService.remove(+id);
  }
}
