import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }
  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }
  async findByUserId(userId: string): Promise<Order[]> {
    return this.orderModel.find({ userId }).exec();
  }
  async getOrderDetails(orderId: string): Promise<Order> {
    return this.orderModel.findById(orderId).exec();
  }
}