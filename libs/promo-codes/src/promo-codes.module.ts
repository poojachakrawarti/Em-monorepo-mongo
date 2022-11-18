import { Module } from '@nestjs/common';
import { PromoCodesService } from './promo-codes.service';
import { PromoCodesController } from './promo-codes.controller';

@Module({
  controllers: [PromoCodesController],
  providers: [PromoCodesService]
})
export class PromoCodesModule {}
