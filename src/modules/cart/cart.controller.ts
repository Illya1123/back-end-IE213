import { Controller, Post, Body, Get, Param, Delete, NotFoundException } from '@nestjs/common';
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

    @Delete(':userId/:productId')
    async deleteCartByUserIdAndProductId(@Param('userId') userId: string, @Param('productId') productId: string): Promise<{ message: string }> {
      const result = await this.cartService.deleteByUserIdAndProductId(userId, productId);
      if (result.deletedCount === 0) {
        throw new NotFoundException(`Cart with userId ${userId} and productId ${productId} not found.`);
      }
      return { message: 'Cart item deleted successfully.' };
    }
  }
  