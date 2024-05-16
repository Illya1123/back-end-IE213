import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

export class Product {
  productId: string;
  quantity: number;
}


@Schema({ timestamps: true })
export class Order {
  @Prop({ type: 'ObjectId', ref: 'users', required: true })
  userId: string;

  @Prop({
    type: [{ productId: { type: 'ObjectId', ref: 'products', required: true }, quantity: { type: Number, required: true } }],required: true, _id: false
  })
  products: Product;


  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  totalPrice: number;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;


  @Prop({ type: String, required: true })
  paymentMethod: string;

  @Prop({ type: String, default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
