declare class ProductItemDto {
    productId: string;
    skuId: string;
    img: string;
    name: string;
    quantity: number;
}
export declare class CreateCartDto {
    userId: string;
    products: ProductItemDto[];
}
export {};
