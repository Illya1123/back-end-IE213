import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrderByUserId(userId: string): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;
}
