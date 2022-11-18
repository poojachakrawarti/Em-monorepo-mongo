import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemMediaDto } from './create-order-item-media.dto';

export class UpdateOrderItemMediaDto extends PartialType(
  CreateOrderItemMediaDto
) {}
