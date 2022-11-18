import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersAuditService } from './orders-audit.service';
import { CreateOrdersAuditDto } from './dto/create-orders-audit.dto';
import { UpdateOrdersAuditDto } from './dto/update-orders-audit.dto';

@Controller('orders-audit')
export class OrdersAuditController {
  constructor(private readonly ordersAuditService: OrdersAuditService) {}

  @Post()
  create(@Body() createOrdersAuditDto: CreateOrdersAuditDto) {
    return this.ordersAuditService.create(createOrdersAuditDto);
  }

  @Get()
  findAll() {
    return this.ordersAuditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersAuditService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersAuditDto: UpdateOrdersAuditDto) {
    return this.ordersAuditService.update(+id, updateOrdersAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersAuditService.remove(+id);
  }
}
