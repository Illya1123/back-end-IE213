import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './schemas/cart.schema';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    getCartByUserId(userId: string): Promise<Cart[]>;
    getAllCarts(): Promise<Cart[]>;
}
