import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemChecklistMappingDto } from './create-order-item-checklist-mapping.dto';

export class UpdateOrderItemChecklistMappingDto extends PartialType(CreateOrderItemChecklistMappingDto) {}
