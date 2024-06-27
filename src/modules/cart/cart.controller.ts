import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './schemas/cart.schema';

@ApiTags('carts')
@Controller('carts')
export class CartController {
    constructor(private readonly cartService: CartService) {}
  
    @Post()
    create(@Body() createCartDto: CreateCartDto) {
      return this.cartService.create(createCartDto);
    }
  
    @Get('user/:userId')
    async getCartByUserId(@Param('userId') userId: string): Promise<Cart[]> {
      return this.cartService.findByUserId(userId);
    }

    @Get(':userId/:productId')
    async getCartByUserIdAndProductId(@Param('userId') userId: string, @Param('productId') productId: string): Promise<Cart | null> {
      return this.cartService.findByUserIdAndProductId(userId, productId);
    }
  
    @Get()
    async getAllCarts(): Promise<Cart[]> {
      return this.cartService.getAllCarts();
    }
  }
  