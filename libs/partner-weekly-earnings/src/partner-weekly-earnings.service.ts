import { Injectable } from '@nestjs/common';
import { CreatePartnerWeeklyEarningDto } from './dto/create-partner-weekly-earning.dto';
import { UpdatePartnerWeeklyEarningDto } from './dto/update-partner-weekly-earning.dto';

@Injectable()
export class PartnerWeeklyEarningsService {
  create(createPartnerWeeklyEarningDto: CreatePartnerWeeklyEarningDto) {
    return 'This action adds a new partnerWeeklyEarning';
  }

  findAll() {
    return `This action returns all partnerWeeklyEarnings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partnerWeeklyEarning`;
  }

  update(id: number, updatePartnerWeeklyEarningDto: UpdatePartnerWeeklyEarningDto) {
    return `This action updates a #${id} partnerWeeklyEarning`;
  }

  remove(id: number) {
    return `This action removes a #${id} partnerWeeklyEarning`;
  }
}
