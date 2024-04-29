"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSeeder = void 0;
const fs = __importStar(require("fs"));
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const path = __importStar(require("path"));
const process_1 = __importDefault(require("process"));
const product_service_1 = require("../product/product.service");
const brand_service_1 = require("../brand/brand.service");
const product_detail_service_1 = require("../product/product-detail.service");
let ProductSeeder = class ProductSeeder {
    constructor(productService, productDetailService, brandService) {
        this.productService = productService;
        this.productDetailService = productDetailService;
        this.brandService = brandService;
    }
    async seed() {
        console.log('Seeding products ...');
        const jsonString = fs.readFileSync(path.join(process_1.default.cwd(), 'data/product.json'), 'utf8');
        const jsonData = JSON.parse(jsonString);
        const productPromises = jsonData.map(async (json) => {
            const product = {
                skuId: json.sku_id,
                productId: json.product_id,
                categoryId: json.category_id,
                sharedUrl: json.shared_url,
                slug: json.slug,
                image: json.image,
                name: json.name,
                brandId: json.brand.id,
                colors: json.colors.map((color) => {
                    const colorDto = {
                        name: color.name,
                        code: color.code,
                    };
                    return colorDto;
                }),
                price: json.price,
                modelValues: json.model_value,
            };
            try {
                return await this.productService.createProduct(product);
            }
            catch (e) {
                console.log(e);
            }
        });
        await Promise.all(productPromises);
        console.log('Seeding products successfully!!');
        console.log('Seeding product details ...');
        const productDetailJson = fs.readFileSync(path.join(process_1.default.cwd(), 'data/product_details.json'), 'utf8');
        const productDetailData = JSON.parse(productDetailJson);
        const productDetailPromises = productDetailData.map(async (data) => {
            if (!data.SKU)
                return;
            const productDetail = {
                SKU: data.SKU,
                assets: data.assets.map((asset) => {
                    return {
                        src: asset.src,
                        type: asset.type,
                    };
                }),
                variations: data.variations,
                attributes: data.attributes.map((attribute) => {
                    return Object.assign(Object.assign({}, attribute), { groupName: attribute.group_name });
                }),
                article: data.article,
                productId: data.product_id,
            };
            try {
                return await this.productDetailService.createProductDetail(productDetail);
            }
            catch (e) {
                console.log(e);
            }
        });
        await Promise.all(productDetailPromises);
        console.log('Seeding product details successfully!!');
    }
    async drop() {
        console.log('Dropping products ...');
        await this.productService.deleteAll();
        console.log('Dropping products successfully!!');
    }
};
__decorate([
    (0, nestjs_command_1.Command)({ command: 'seed:products', describe: 'create products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductSeeder.prototype, "seed", null);
__decorate([
    (0, nestjs_command_1.Command)({ command: 'drop:products', describe: 'drop products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductSeeder.prototype, "drop", null);
ProductSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        product_detail_service_1.ProductDetailService,
        brand_service_1.BrandService])
], ProductSeeder);
exports.ProductSeeder = ProductSeeder;
//# sourceMappingURL=product.seed.js.map