import { Injectable } from '@nestjs/common';
import { CreateOrdersAuditDto } from './dto/create-orders-audit.dto';
import { UpdateOrdersAuditDto } from './dto/update-orders-audit.dto';

@Injectable()
export class OrdersAuditService {
  create(createOrdersAuditDto: CreateOrdersAuditDto) {
    return 'This action adds a new ordersAudit';
  }

  findAll() {
    return `This action returns all ordersAudit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersAudit`;
  }

  update(id: number, updateOrdersAuditDto: UpdateOrdersAuditDto) {
    return `This action updates a #${id} ordersAudit`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersAudit`;
  }
}
