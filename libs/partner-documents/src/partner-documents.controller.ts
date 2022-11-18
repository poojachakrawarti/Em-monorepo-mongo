import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnerDocumentsService } from './partner-documents.service';
import { CreatePartnerDocumentDto } from './dto/create-partner-document.dto';
import { UpdatePartnerDocumentDto } from './dto/update-partner-document.dto';

@Controller('partner-documents')
export class PartnerDocumentsController {
  constructor(private readonly partnerDocumentsService: PartnerDocumentsService) {}

  @Post()
  create(@Body() createPartnerDocumentDto: CreatePartnerDocumentDto) {
    return this.partnerDocumentsService.create(createPartnerDocumentDto);
  }

  @Get()
  findAll() {
    return this.partnerDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerDocumentDto: UpdatePartnerDocumentDto) {
    return this.partnerDocumentsService.update(+id, updatePartnerDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerDocumentsService.remove(+id);
  }
}
