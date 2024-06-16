declare class ProductItemDto {
    productId: string;
    quantity: number;
}
export declare class CreateCartDto {
    userId: string;
    products: ProductItemDto[];
}
export {};
