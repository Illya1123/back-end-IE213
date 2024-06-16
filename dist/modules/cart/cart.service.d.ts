import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { CreateCartDto } from './dto/create-cart.dto';
export declare class CartService {
    private cartModel;
    constructor(cartModel: Model<CartDocument>);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    findByUserId(userId: string): Promise<Cart[]>;
    getAllCarts(): Promise<Cart[]>;
}
