import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type USerDocument = User & Document;

@Schema()
export class User {
  /**
   * key: slug
   */
  @Prop({ name: 'slug', unique: true, sparse: true, nullable: true })
  slug: string;

  /**
   * key: firstName
   */
  @Prop({ name: 'first_name', nullable: true })
  firstName: string;

  /**
   * key: lastName
   */
  @Prop({ name: 'last_name', nullable: true })
  lastName: string;

  /**
   * key: active
   */
  @Prop({ name: 'active', type: 'boolean', default: false })
  active: boolean;

  /**
   * key: phone
   */
  @Prop({
    name: 'phone_number',
    type: 'Number',
    trim: true,
    sparse: true,
    nullable: false
  })
  phoneNumber: number;

  /**
   * key: email
   */
  @Prop({ name: 'email', unique: true, sparse: true, nullable: true })
  email: string;

  /**
   * key: otp
   */
  @Prop({ name: 'otp', type: 'Number', nullable: true })
  otp: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'role' })
  role: MongooseSchema.Types.ObjectId;

  /**
   * key: createdAt
   */
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
