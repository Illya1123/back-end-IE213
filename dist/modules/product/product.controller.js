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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_service_1 = require("./product.service");
const constants_1 = require("../../common/constants");
const create_product_dto_1 = require("./dto/create-product.dto");
const product_filter_dto_1 = require("./dto/product-filter.dto");
const create_product_detail_dto_1 = require("./dto/create-product-detail.dto");
const product_detail_service_1 = require("./product-detail.service");
const guards_1 = require("../auth/guards");
let ProductController = class ProductController {
    constructor(productService, productDetailService) {
        this.productService = productService;
        this.productDetailService = productDetailService;
    }
    createProduct(createProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    createProductDetail(createProductDto) {
        return this.productDetailService.createProductDetail(createProductDto);
    }
    getProductDetailBySlug(skuId) {
        return this.productDetailService.getProductDetailBySkuId(skuId);
    }
    async getAllProducts() {
        return this.productService.getProducts();
    }
    searchProductsByName(name) {
        return this.productService.searchProductsByName(name);
    }
    getProductsByFilter(query) {
        return this.productService.getProductsByFilter(query);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Post)('/details'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_detail_dto_1.CreateProductDetailDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProductDetail", null);
__decorate([
    (0, common_1.Get)('/details'),
    __param(0, (0, common_1.Query)('skuId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductDetailBySlug", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "searchProductsByName", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_filter_dto_1.ProductFilter]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByFilter", null);
ProductController = __decorate([
    (0, swagger_1.ApiBearerAuth)(constants_1.API_BEARER_AUTH),
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        product_detail_service_1.ProductDetailService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map