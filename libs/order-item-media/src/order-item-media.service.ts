import { Injectable } from '@nestjs/common';
import { CreateOrderItemMediaDto } from './dto/create-order-item-media.dto';
import { UpdateOrderItemMediaDto } from './dto/update-order-item-media.dto';

@Injectable()
export class OrderItemMediaService {
  create(createOrderItemMediaDto: CreateOrderItemMediaDto) {
    return 'This action adds a new orderItemMedia';
  }

  findAll() {
    return `This action returns all orderItemMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItemMedia`;
  }

  update(id: number, updateOrderItemMediaDto: UpdateOrderItemMediaDto) {
    return `This action updates a #${id} orderItemMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItemMedia`;
  }
}
