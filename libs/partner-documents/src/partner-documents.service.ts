import { Injectable } from '@nestjs/common';
import { CreatePartnerDocumentDto } from './dto/create-partner-document.dto';
import { UpdatePartnerDocumentDto } from './dto/update-partner-document.dto';

@Injectable()
export class PartnerDocumentsService {
  create(createPartnerDocumentDto: CreatePartnerDocumentDto) {
    return 'This action adds a new partnerDocument';
  }

  findAll() {
    return `This action returns all partnerDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partnerDocument`;
  }

  update(id: number, updatePartnerDocumentDto: UpdatePartnerDocumentDto) {
    return `This action updates a #${id} partnerDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} partnerDocument`;
  }
}
