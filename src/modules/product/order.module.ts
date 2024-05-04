import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  buyerName: string;
  phoneNumber: string;
  address: string;
  paymentMethod: string;
  paymentResult: string;
}

const OrderSchema: Schema = new Schema({
  id: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  buyerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  paymentResult: { type: String, required: true },
});

export default mongoose.model<IOrder>('Order', OrderSchema);