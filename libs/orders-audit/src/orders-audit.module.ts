import { Module } from '@nestjs/common';
import { OrdersAuditService } from './orders-audit.service';
import { OrdersAuditController } from './orders-audit.controller';

@Module({
  controllers: [OrdersAuditController],
  providers: [OrdersAuditService]
})
export class OrdersAuditModule {}
