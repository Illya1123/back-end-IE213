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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const product_schema_1 = require("./schemas/product.schema");
const brand_service_1 = require("../brand/brand.service");
const category_service_1 = require("../category/category.service");
let ProductService = class ProductService {
    productModel;
    brandService;
    categoryService;
    constructor(productModel, brandService, categoryService) {
        this.productModel = productModel;
        this.brandService = brandService;
        this.categoryService = categoryService;
    }
    async createProduct(createProductDto) {
        const productCreated = new this.productModel(createProductDto);
        const brand = await this.brandService.getBrandBySlugOrId(createProductDto.brandId);
        productCreated.brand = brand;
        return productCreated.save();
    }
    async searchProductsByName(name) {
        const regex = new RegExp(name, 'i');
        return this.productModel.find({ name: regex }).exec();
    }
    async deleteAll() {
        return this.productModel.deleteMany({});
    }
    async getProductsByFilter(filter) {
        const { brands, category, minPrice, maxPrice, currentPage, perPage } = filter;
        const query = {};
        if (category) {
            const { id } = await this.categoryService.getCategoryBySlugOrId(category);
            query.categoryId = id;
        }
        if (brands && brands.length > 0) {
            const regexs = brands.map((brand) => new RegExp(brand, 'i'));
            query['brand.slug'] = {
                $in: regexs,
            };
        }
        if (minPrice !== undefined) {
            query.price = { $gte: minPrice };
        }
        if (maxPrice !== undefined) {
            query.price = { ...query.price, $lte: maxPrice };
        }
        const products = await this.productModel
            .find(query)
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .exec();
        const totalItems = await this.productModel.countDocuments(query);
        const meta = {
            total: totalItems,
            currentPage,
            perPage,
            lastPage: Math.ceil(totalItems / perPage),
        };
        return {
            products,
            meta,
        };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        brand_service_1.BrandService,
        category_service_1.CategoryService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map