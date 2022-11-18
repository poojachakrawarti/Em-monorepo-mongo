import { Module } from '@nestjs/common';
import { PartnerDocumentsService } from './partner-documents.service';
import { PartnerDocumentsController } from './partner-documents.controller';

@Module({
  controllers: [PartnerDocumentsController],
  providers: [PartnerDocumentsService]
})
export class PartnerDocumentsModule {}
