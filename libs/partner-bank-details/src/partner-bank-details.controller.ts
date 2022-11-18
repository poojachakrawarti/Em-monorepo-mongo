import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnerBankDetailsService } from './partner-bank-details.service';
import { CreatePartnerBankDetailDto } from './dto/create-partner-bank-detail.dto';
import { UpdatePartnerBankDetailDto } from './dto/update-partner-bank-detail.dto';

@Controller('partner-bank-details')
export class PartnerBankDetailsController {
  constructor(private readonly partnerBankDetailsService: PartnerBankDetailsService) {}

  @Post()
  create(@Body() createPartnerBankDetailDto: CreatePartnerBankDetailDto) {
    return this.partnerBankDetailsService.create(createPartnerBankDetailDto);
  }

  @Get()
  findAll() {
    return this.partnerBankDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerBankDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerBankDetailDto: UpdatePartnerBankDetailDto) {
    return this.partnerBankDetailsService.update(+id, updatePartnerBankDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerBankDetailsService.remove(+id);
  }
}
