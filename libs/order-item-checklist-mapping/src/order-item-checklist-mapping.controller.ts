import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemChecklistMappingService } from './order-item-checklist-mapping.service';
import { CreateOrderItemChecklistMappingDto } from './dto/create-order-item-checklist-mapping.dto';
import { UpdateOrderItemChecklistMappingDto } from './dto/update-order-item-checklist-mapping.dto';

@Controller('order-item-checklist-mapping')
export class OrderItemChecklistMappingController {
  constructor(private readonly orderItemChecklistMappingService: OrderItemChecklistMappingService) {}

  @Post()
  create(@Body() createOrderItemChecklistMappingDto: CreateOrderItemChecklistMappingDto) {
    return this.orderItemChecklistMappingService.create(createOrderItemChecklistMappingDto);
  }

  @Get()
  findAll() {
    return this.orderItemChecklistMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemChecklistMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderItemChecklistMappingDto: UpdateOrderItemChecklistMappingDto) {
    return this.orderItemChecklistMappingService.update(+id, updateOrderItemChecklistMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemChecklistMappingService.remove(+id);
  }
}
