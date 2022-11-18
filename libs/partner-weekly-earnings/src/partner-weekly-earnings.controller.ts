import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnerWeeklyEarningsService } from './partner-weekly-earnings.service';
import { CreatePartnerWeeklyEarningDto } from './dto/create-partner-weekly-earning.dto';
import { UpdatePartnerWeeklyEarningDto } from './dto/update-partner-weekly-earning.dto';

@Controller('partner-weekly-earnings')
export class PartnerWeeklyEarningsController {
  constructor(private readonly partnerWeeklyEarningsService: PartnerWeeklyEarningsService) {}

  @Post()
  create(@Body() createPartnerWeeklyEarningDto: CreatePartnerWeeklyEarningDto) {
    return this.partnerWeeklyEarningsService.create(createPartnerWeeklyEarningDto);
  }

  @Get()
  findAll() {
    return this.partnerWeeklyEarningsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerWeeklyEarningsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerWeeklyEarningDto: UpdatePartnerWeeklyEarningDto) {
    return this.partnerWeeklyEarningsService.update(+id, updatePartnerWeeklyEarningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerWeeklyEarningsService.remove(+id);
  }
}
