import { PartialType } from '@nestjs/swagger';
import { CreatePartnerBankDetailDto } from './create-partner-bank-detail.dto';

export class UpdatePartnerBankDetailDto extends PartialType(
  CreatePartnerBankDetailDto
) {}
