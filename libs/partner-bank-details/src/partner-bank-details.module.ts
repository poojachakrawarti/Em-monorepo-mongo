import { Module } from '@nestjs/common';
import { PartnerBankDetailsService } from './partner-bank-details.service';
import { PartnerBankDetailsController } from './partner-bank-details.controller';

@Module({
  controllers: [PartnerBankDetailsController],
  providers: [PartnerBankDetailsService]
})
export class PartnerBankDetailsModule {}
