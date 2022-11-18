// import { Feedback } from './../../feedback/models/feedback.models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: 'Number', nullable: false })
  totalAmount: number;

  @Prop({ type: 'Number', nullable: false, default: 0 })
  totalTax: number;

  @Prop({ type: 'string', nullable: true })
  paymentStatus: string;

  @Prop({ type: 'object' })
  deliveryAddress: {
    type: string;
    addressLine1: string;
    addressLine2: string;
  };

  @Prop({ type: 'object' })
  pickupAddress: {
    type: string;
    addressLine1: string;
    addressLine2: string;
  };

  @Prop({ type: 'object' })
  contactDetails: {
    phone: number;
    name: string;
    alt: number;
  };

  @Prop({ type: 'string', nullable: false })
  preferredTimeSlot: string;

  @Prop({ type: 'string', nullable: true })
  customerInvoiceUrl: string;

  @Prop({ type: 'string', nullable: false })
  orderNumber: string;

  @Prop({ type: 'string', nullable: true })
  paymentRazorPayId: string;

  @Prop({ type: 'Number', nullable: true })
  refundAmount: number;

  @Prop({ type: 'string', nullable: true })
  refundRazorpayId: string;

  @Prop({ type: 'string', nullable: true })
  signatureRazorPayId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'equipment' })
  equipment: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'status' })
  status: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'user' })
  user: MongooseSchema.Types.ObjectId;

  /**
   * key: createdAt
   */
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
