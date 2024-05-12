import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.module';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> { 
    return this.orderService.create(createOrderDto);
  }

  @Get(':orderId') 
  async getOrderDetails(@Param('orderId') orderId: string): Promise<Order> {
    return this.orderService.getOrderDetails(orderId);
  }

  // @Get('user/:userId')
  // async getOrderByUserId(@Param('userId') userId: string): Promise<Order[]> {
  //   return this.orderService.findByUserId(userId);
  // }
}