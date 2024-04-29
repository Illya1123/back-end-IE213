import { ProductService } from '../product/product.service';
import { BrandService } from '../brand/brand.service';
import { ProductDetailService } from '../product/product-detail.service';
export declare class ProductSeeder {
    private readonly productService;
    private readonly productDetailService;
    private readonly brandService;
    constructor(productService: ProductService, productDetailService: ProductDetailService, brandService: BrandService);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
