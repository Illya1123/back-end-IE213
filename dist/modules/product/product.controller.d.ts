import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductFilter } from './dto/product-filter.dto';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { ProductDetailService } from './product-detail.service';
import { Product } from './schemas/product.schema';
import { ProductDetail } from './schemas/product-detail.schema';
import { ProductsWithMeta } from './types/product.type';
export declare class ProductController {
    private readonly productService;
    private readonly productDetailService;
    constructor(productService: ProductService, productDetailService: ProductDetailService);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    createProductDetail(createProductDto: CreateProductDetailDto): Promise<ProductDetail>;
    getProductDetailBySlug(skuId: number): Promise<ProductDetail>;
    getAllProducts(): Promise<Product[]>;
    searchProductsByName(name: string): Promise<Product[]>;
    getProductsByFilter(query: ProductFilter): Promise<ProductsWithMeta>;
}
