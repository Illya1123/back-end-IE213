declare class ProductItemDto {
    productId: string;
    quantity: number;
}
export declare class CreateOrderDto {
    userId: string;
    products: ProductItemDto[];
    totalPrice: number;
    shippingAddress: {
        phoneNumber: string;
        ward: string;
        district: string;
        province: string;
    };
    paymentMethod: string;
    status: string;
}
export {};
