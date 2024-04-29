"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const category_seed_1 = require("./category.seed");
const shared_module_1 = require("../../shared/shared.module");
const brand_seed_1 = require("./brand.seed");
const product_seed_1 = require("./product.seed");
const seed_service_1 = require("./seed.service");
let SeedModule = class SeedModule {
};
SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, nestjs_command_1.CommandModule],
        providers: [category_seed_1.CategorySeeder, brand_seed_1.BrandSeeder, product_seed_1.ProductSeeder, seed_service_1.SeedService],
        exports: [seed_service_1.SeedService],
    })
], SeedModule);
exports.SeedModule = SeedModule;
//# sourceMappingURL=seed.module.js.map