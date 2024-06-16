import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createdCart = new this.cartModel(createCartDto);
    return createdCart.save();
  }

  async findByUserId(userId: string): Promise<Cart[]> {
    return this.cartModel.find({ userId }).exec();
  }

  async getAllCarts(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }
}