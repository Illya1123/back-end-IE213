import { Provider } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

export class Product {
  productId: string;
  quantity: number;
}

// export class ShippingAddress {
//   phoneNumber: string;
//   addresss: string;
// }

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: 'ObjectId', ref: 'users', required: true })
  userId: string;

  @Prop({
    type: [{ productId: { type: 'ObjectId', ref: 'products', required: true }, quantity: { type: Number, required: true } }],required: true, _id: false
  })
  products: Product;

  // @Prop([
  //   {
  //     productId: { type: 'ObjectId', ref: 'products', required: true },
  //     quantity: { type: Number, required: true },
  //   },
  // ])
  // products: {
  //   productId: string;
  //   quantity: number;
  // }[];
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  totalPrice: number;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

//   @Prop({ type:[{
//     phoneNumber: String,
//     addresss: String,
// }], required: true, _id: false})
//   shippingAddress: ShippingAddress[];

  // @Prop({
  //   phoneNumber: { type: String, required: true },
  //   ward: { type: String, required: true },
  //   district: { type: String, required: true },
  //   province: { type: String, required: true },
  // })
  // shippingAddress: {
  //   phoneNumber: string;
  //   ward: string;
  //   district: string;
  //   province: string;
  // };

  @Prop({ type: String, required: true })
  paymentMethod: string;

  @Prop({ type: String, default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
