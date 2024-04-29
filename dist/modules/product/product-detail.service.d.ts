import { Model } from 'mongoose';
import { ProductDetail, ProductDetailDocument } from './schemas/product-detail.schema';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { ProductDocument } from './schemas/product.schema';
export declare class ProductDetailService {
    private readonly productDetailModel;
    private readonly productModel;
    constructor(productDetailModel: Model<ProductDetailDocument>, productModel: Model<ProductDocument>);
    createProductDetail(createProductDetailDto: CreateProductDetailDto): Promise<ProductDetail>;
    getProductDetailBySkuId(skuId: number): Promise<ProductDetail>;
}
