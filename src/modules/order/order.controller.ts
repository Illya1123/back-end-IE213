import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
@ApiTags('orders')
// @Controller('orders')
// export class OrderController {
//   constructor(private readonly orderService: OrderService) {}

//   @Post()
//   create(@Body() createOrderDto: CreateOrderDto) {
//     return this.orderService.create(createOrderDto);
//   }
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
   return this.orderService.create(createOrderDto);
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Order> {
  //   return this.orderService.findOne(id);
  // }

  // @Get('user/:userId')
  // async getOrderByUserId(@Param('userId') userId: string): Promise<Order[]> {
  //   return this.orderService.findByUserId(userId);
  // }
}
