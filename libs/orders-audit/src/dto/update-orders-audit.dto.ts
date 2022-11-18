import { PartialType } from '@nestjs/swagger';
import { CreateOrdersAuditDto } from './create-orders-audit.dto';

export class UpdateOrdersAuditDto extends PartialType(CreateOrdersAuditDto) {}
