import { Injectable } from '@nestjs/common';
import { CreatePartnerBankDetailDto } from './dto/create-partner-bank-detail.dto';
import { UpdatePartnerBankDetailDto } from './dto/update-partner-bank-detail.dto';

@Injectable()
export class PartnerBankDetailsService {
  create(createPartnerBankDetailDto: CreatePartnerBankDetailDto) {
    return 'This action adds a new partnerBankDetail';
  }

  findAll() {
    return `This action returns all partnerBankDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partnerBankDetail`;
  }

  update(id: number, updatePartnerBankDetailDto: UpdatePartnerBankDetailDto) {
    return `This action updates a #${id} partnerBankDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} partnerBankDetail`;
  }
}
