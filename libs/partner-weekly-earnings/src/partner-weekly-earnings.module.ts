import { Module } from '@nestjs/common';
import { PartnerWeeklyEarningsService } from './partner-weekly-earnings.service';
import { PartnerWeeklyEarningsController } from './partner-weekly-earnings.controller';

@Module({
  controllers: [PartnerWeeklyEarningsController],
  providers: [PartnerWeeklyEarningsService]
})
export class PartnerWeeklyEarningsModule {}
