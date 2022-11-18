import { PartialType } from '@nestjs/swagger';
import { CreatePartnerWeeklyEarningDto } from './create-partner-weekly-earning.dto';

export class UpdatePartnerWeeklyEarningDto extends PartialType(
  CreatePartnerWeeklyEarningDto
) {}
