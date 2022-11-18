// import { Feedback } from './../../feedback/models/feedback.models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({ type: 'string' })
  name: string;

  @Prop({ type: 'string' })
  slug: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
