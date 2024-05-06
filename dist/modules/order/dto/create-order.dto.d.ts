declare class ProductItemDto {
    productId: string;
    quantity: number;
}
export declare class CreateOrderDto {
    userId: string;
    products: ProductItemDto[];
    name: string;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    paymentMethod: string;
    status: string;
}
export {};
