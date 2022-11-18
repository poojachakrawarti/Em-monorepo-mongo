import { PartialType } from '@nestjs/swagger';
import { CreateUsersFeedbackDto } from './create-users-feedback.dto';

export class UpdateUsersFeedbackDto extends PartialType(
  CreateUsersFeedbackDto
) {}
