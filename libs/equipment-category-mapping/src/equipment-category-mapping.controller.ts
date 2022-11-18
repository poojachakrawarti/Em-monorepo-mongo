import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentCategoryMappingService } from './equipment-category-mapping.service';
import { CreateEquipmentCategoryMappingDto } from './dto/create-equipment-category-mapping.dto';
import { UpdateEquipmentCategoryMappingDto } from './dto/update-equipment-category-mapping.dto';

@Controller('equipment-category-mapping')
export class EquipmentCategoryMappingController {
  constructor(private readonly equipmentCategoryMappingService: EquipmentCategoryMappingService) {}

  @Post()
  create(@Body() createEquipmentCategoryMappingDto: CreateEquipmentCategoryMappingDto) {
    return this.equipmentCategoryMappingService.create(createEquipmentCategoryMappingDto);
  }

  @Get()
  findAll() {
    return this.equipmentCategoryMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentCategoryMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentCategoryMappingDto: UpdateEquipmentCategoryMappingDto) {
    return this.equipmentCategoryMappingService.update(+id, updateEquipmentCategoryMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentCategoryMappingService.remove(+id);
  }
}
