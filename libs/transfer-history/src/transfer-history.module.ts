import { Module } from '@nestjs/common';
import { TransferHistoryService } from './transfer-history.service';
import { TransferHistoryController } from './transfer-history.controller';

@Module({
  controllers: [TransferHistoryController],
  providers: [TransferHistoryService]
})
export class TransferHistoryModule {}
