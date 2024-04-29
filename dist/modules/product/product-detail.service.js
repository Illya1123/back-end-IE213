"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const product_detail_schema_1 = require("./schemas/product-detail.schema");
const product_schema_1 = require("./schemas/product.schema");
let ProductDetailService = class ProductDetailService {
    constructor(productDetailModel, productModel) {
        this.productDetailModel = productDetailModel;
        this.productModel = productModel;
    }
    async createProductDetail(createProductDetailDto) {
        const createdProductDetail = new this.productDetailModel(createProductDetailDto);
        const product = await this.productModel.findOne({
            productId: createProductDetailDto.productId,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        createdProductDetail.model = product;
        return createdProductDetail.save();
    }
    async getProductDetailBySkuId(skuId) {
        if (!skuId) {
            throw new common_1.BadRequestException('Slug is required');
        }
        const product = await this.productDetailModel.findOne({ 'model.skuId': skuId }).exec();
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product.toObject();
    }
};
ProductDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(product_detail_schema_1.ProductDetail.name)),
    __param(1, (0, mongoose_2.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ProductDetailService);
exports.ProductDetailService = ProductDetailService;
//# sourceMappingURL=product-detail.service.js.map