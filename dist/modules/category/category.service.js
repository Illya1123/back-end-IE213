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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("./schemas/category.schema");
const brand_service_1 = require("../brand/brand.service");
let CategoryService = class CategoryService {
    categoryModel;
    brandService;
    constructor(categoryModel, brandService) {
        this.categoryModel = categoryModel;
        this.brandService = brandService;
    }
    createCategory(createCategoryDto) {
        return this.categoryModel.create(createCategoryDto);
    }
    async getAllCategories() {
        return this.categoryModel.find();
    }
    async getCategoryBySlugOrId(identifier) {
        if (!identifier)
            throw new common_1.BadRequestException('Identifier is required');
        const filter = typeof identifier === 'string' ? { slug: identifier } : { id: identifier };
        const category = await this.categoryModel.findOne(filter).exec();
        if (!category) {
            throw new Error('Category not found');
        }
        const brands = await this.brandService.getBrandsInCategory(category.slug);
        return {
            ...category.toObject(),
            brands,
        };
    }
    async deleteAll() {
        await this.categoryModel.deleteMany({});
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        brand_service_1.BrandService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map