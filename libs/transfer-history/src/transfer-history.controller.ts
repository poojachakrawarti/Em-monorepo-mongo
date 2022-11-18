import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferHistoryService } from './transfer-history.service';
import { CreateTransferHistoryDto } from './dto/create-transfer-history.dto';
import { UpdateTransferHistoryDto } from './dto/update-transfer-history.dto';

@Controller('transfer-history')
export class TransferHistoryController {
  constructor(private readonly transferHistoryService: TransferHistoryService) {}

  @Post()
  create(@Body() createTransferHistoryDto: CreateTransferHistoryDto) {
    return this.transferHistoryService.create(createTransferHistoryDto);
  }

  @Get()
  findAll() {
    return this.transferHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferHistoryDto: UpdateTransferHistoryDto) {
    return this.transferHistoryService.update(+id, updateTransferHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferHistoryService.remove(+id);
  }
}
