import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IOrder, {}, {}, {}, any>;
export default _default;
