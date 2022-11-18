import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersFeedbackService } from './users-feedback.service';
import { CreateUsersFeedbackDto } from './dto/create-users-feedback.dto';
import { UpdateUsersFeedbackDto } from './dto/update-users-feedback.dto';

@Controller('users-feedback')
export class UsersFeedbackController {
  constructor(private readonly usersFeedbackService: UsersFeedbackService) {}

  @Post()
  create(@Body() createUsersFeedbackDto: CreateUsersFeedbackDto) {
    return this.usersFeedbackService.create(createUsersFeedbackDto);
  }

  @Get()
  findAll() {
    return this.usersFeedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersFeedbackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersFeedbackDto: UpdateUsersFeedbackDto) {
    return this.usersFeedbackService.update(+id, updateUsersFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersFeedbackService.remove(+id);
  }
}
