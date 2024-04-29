import { CreateColorDto } from './create-color.dto';
export declare class CreateProductDto {
    skuId: number;
    productId: number;
    categoryId: number;
    sharedUrl: string;
    slug: string;
    image: string;
    name: string;
    brandId: number;
    colors: CreateColorDto[];
    price: number;
    modelValues: string[];
}
