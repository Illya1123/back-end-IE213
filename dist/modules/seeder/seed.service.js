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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const category_seed_1 = require("./category.seed");
const brand_seed_1 = require("./brand.seed");
const product_seed_1 = require("./product.seed");
const user_service_1 = require("../user/user.service");
let SeedService = class SeedService {
    constructor(brandSeeder, categorySeeder, productSeeder, userService) {
        this.brandSeeder = brandSeeder;
        this.categorySeeder = categorySeeder;
        this.productSeeder = productSeeder;
        this.userService = userService;
    }
    async seed() {
        const shoudSeed = await this.shouldSeed();
        if (!shoudSeed)
            return;
        await this.brandSeeder.seed();
        await this.categorySeeder.seed();
        await this.productSeeder.seed();
        await this.userService.create({
            username: 'admin',
            password: 'admin',
        });
    }
    async shouldSeed() {
        const exists = await this.userService.existByUsername('admin');
        return !exists;
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_seed_1.BrandSeeder,
        category_seed_1.CategorySeeder,
        product_seed_1.ProductSeeder,
        user_service_1.UserService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map