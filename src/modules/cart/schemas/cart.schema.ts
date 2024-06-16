import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

export class Product {
    productId: string;
    quantity: number;
}

@Schema({ timestamps: true })
export class Cart {
    @Prop({ type: 'ObjectId', ref: 'users', required: true })
    userId: string;
  
    @Prop({
      type: [{ productId: { type: 'ObjectId', ref: 'products', required: true }, quantity: { type: Number, required: true } }],required: true, _id: false
    })
    products: Product;
}

export const CartSchema = SchemaFactory.createForClass(Cart);