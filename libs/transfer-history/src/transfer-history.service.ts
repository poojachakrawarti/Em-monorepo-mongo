import { Injectable } from '@nestjs/common';
import { CreateTransferHistoryDto } from './dto/create-transfer-history.dto';
import { UpdateTransferHistoryDto } from './dto/update-transfer-history.dto';

@Injectable()
export class TransferHistoryService {
  create(createTransferHistoryDto: CreateTransferHistoryDto) {
    return 'This action adds a new transferHistory';
  }

  findAll() {
    return `This action returns all transferHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferHistory`;
  }

  update(id: number, updateTransferHistoryDto: UpdateTransferHistoryDto) {
    return `This action updates a #${id} transferHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferHistory`;
  }
}
