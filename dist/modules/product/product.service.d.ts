import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { BrandService } from '../brand/brand.service';
import { ProductFilter } from './dto/product-filter.dto';
import { CategoryService } from '../category/category.service';
import { ProductsWithMeta } from './types/product.type';
export declare class ProductService {
    private readonly productModel;
    private readonly brandService;
    private readonly categoryService;
    constructor(productModel: Model<ProductDocument>, brandService: BrandService, categoryService: CategoryService);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    searchProductsByName(name: string): Promise<Product[]>;
    deleteAll(): Promise<any>;
    getProductsByFilter(filter: ProductFilter): Promise<ProductsWithMeta>;
}
