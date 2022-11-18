import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemMediaService } from './order-item-media.service';
import { CreateOrderItemMediaDto } from './dto/create-order-item-media.dto';
import { UpdateOrderItemMediaDto } from './dto/update-order-item-media.dto';

@Controller('order-item-media')
export class OrderItemMediaController {
  constructor(private readonly orderItemMediaService: OrderItemMediaService) {}

  @Post()
  create(@Body() createOrderItemMediaDto: CreateOrderItemMediaDto) {
    return this.orderItemMediaService.create(createOrderItemMediaDto);
  }

  @Get()
  findAll() {
    return this.orderItemMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderItemMediaDto: UpdateOrderItemMediaDto) {
    return this.orderItemMediaService.update(+id, updateOrderItemMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemMediaService.remove(+id);
  }
}
