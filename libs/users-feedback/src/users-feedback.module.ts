import { Module } from '@nestjs/common';
import { UsersFeedbackService } from './users-feedback.service';
import { UsersFeedbackController } from './users-feedback.controller';

@Module({
  controllers: [UsersFeedbackController],
  providers: [UsersFeedbackService]
})
export class UsersFeedbackModule {}
