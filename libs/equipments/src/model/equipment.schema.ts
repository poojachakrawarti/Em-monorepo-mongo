// import { Feedback } from './../../feedback/models/feedback.models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EquipmentDocument = Equipment & Document;
@Schema({ _id: false })
class Specification {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

class Categories {
  @Prop({ type: 'string' })
  name: string;

  @Prop({ type: 'string' })
  slug: string;

  @Prop({ type: ['string'] })
  image: [string];
}

@Schema()
export class Equipment {
  @Prop({ type: 'string', nullable: true })
  name: string;

  @Prop({ type: 'string', nullable: true })
  slug: string;

  @Prop({ type: 'Number', nullable: true })
  rentDaily: number;

  @Prop({ type: 'Number', nullable: true, default: 0 })
  deposit: number;

  @Prop({ type: 'Number', nullable: true, default: 0 })
  deliveryCharge: number;

  @Prop({ type: 'Number', nullable: true, default: 0 })
  dailyDiscountedPrice: number;

  @Prop({ type: 'Number', nullable: true })
  avgRating: number;

  @Prop({ type: ['string'], nullable: true })
  description: [string];

  @Prop([{ type: Specification }])
  specification: [Specification];

  @Prop({ type: Categories })
  categories: Categories;

  /**
   * key: createdAt
   */
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
