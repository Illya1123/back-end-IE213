import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './schemas/cart.schema';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    getCartByUserId(userId: string): Promise<Cart[]>;
    getCartByUserIdAndProductId(userId: string, productId: string): Promise<Cart | null>;
    getAllCarts(): Promise<Cart[]>;
    deleteCartByUserIdAndProductId(userId: string, productId: string): Promise<{
        message: string;
    }>;
}
