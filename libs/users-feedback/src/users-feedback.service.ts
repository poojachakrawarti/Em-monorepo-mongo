import { Injectable } from '@nestjs/common';
import { CreateUsersFeedbackDto } from './dto/create-users-feedback.dto';
import { UpdateUsersFeedbackDto } from './dto/update-users-feedback.dto';

@Injectable()
export class UsersFeedbackService {
  create(createUsersFeedbackDto: CreateUsersFeedbackDto) {
    return 'This action adds a new usersFeedback';
  }

  findAll() {
    return `This action returns all usersFeedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersFeedback`;
  }

  update(id: number, updateUsersFeedbackDto: UpdateUsersFeedbackDto) {
    return `This action updates a #${id} usersFeedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersFeedback`;
  }
}
