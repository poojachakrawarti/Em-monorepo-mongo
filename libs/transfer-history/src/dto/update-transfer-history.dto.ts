import { PartialType } from '@nestjs/swagger';
import { CreateTransferHistoryDto } from './create-transfer-history.dto';

export class UpdateTransferHistoryDto extends PartialType(CreateTransferHistoryDto) {}
