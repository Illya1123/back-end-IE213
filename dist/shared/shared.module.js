"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const category_module_1 = require("../modules/category/category.module");
const brand_module_1 = require("../modules/brand/brand.module");
const product_module_1 = require("../modules/product/product.module");
const user_module_1 = require("../modules/user/user.module");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [category_module_1.CategoryModule, brand_module_1.BrandModule, product_module_1.ProductModule, user_module_1.UserModule],
        exports: [category_module_1.CategoryModule, brand_module_1.BrandModule, product_module_1.ProductModule, user_module_1.UserModule],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map