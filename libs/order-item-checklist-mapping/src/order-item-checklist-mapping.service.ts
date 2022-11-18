import { Injectable } from '@nestjs/common';
import { CreateOrderItemChecklistMappingDto } from './dto/create-order-item-checklist-mapping.dto';
import { UpdateOrderItemChecklistMappingDto } from './dto/update-order-item-checklist-mapping.dto';

@Injectable()
export class OrderItemChecklistMappingService {
  create(createOrderItemChecklistMappingDto: CreateOrderItemChecklistMappingDto) {
    return 'This action adds a new orderItemChecklistMapping';
  }

  findAll() {
    return `This action returns all orderItemChecklistMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItemChecklistMapping`;
  }

  update(id: number, updateOrderItemChecklistMappingDto: UpdateOrderItemChecklistMappingDto) {
    return `This action updates a #${id} orderItemChecklistMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItemChecklistMapping`;
  }
}
