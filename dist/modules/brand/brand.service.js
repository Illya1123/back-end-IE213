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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const brand_schema_1 = require("./schemas/brand.schema");
let BrandService = class BrandService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async getBrands() {
        return this.brandModel.find().exec();
    }
    async getBrandBySlugOrId(identifier) {
        if (!identifier)
            throw new common_1.BadRequestException('Identifier is required');
        const filter = typeof identifier === 'string'
            ? { $or: [{ slug: identifier }, { _id: identifier }] }
            : { id: identifier };
        const brand = await this.brandModel.findOne(filter).exec();
        if (!brand) {
            throw new common_1.NotFoundException(`Brand with identifier ${identifier} not found`);
        }
        return brand.toObject();
    }
    async createBrand(createBrandDto) {
        return this.brandModel.create(createBrandDto);
    }
    async deleteAll() {
        await this.brandModel.deleteMany({});
    }
    async getDetailBrandBySlug(slug) {
        const parentBrand = await this.brandModel
            .findOne({
            $or: [{ slug }, { sharedUrl: slug }],
        })
            .exec();
        const subBrands = await this.brandModel
            .find({
            parentId: parentBrand.id,
        })
            .exec();
        return Object.assign(Object.assign({}, parentBrand.toObject()), { subBrands });
    }
    async getBrandsInCategory(slug) {
        const brands = await this.brandModel
            .find({
            parentId: null,
            sharedUrl: {
                $regex: new RegExp(slug, 'i'),
            },
        })
            .exec();
        return brands.map((brand) => brand.toObject());
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(brand_schema_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map