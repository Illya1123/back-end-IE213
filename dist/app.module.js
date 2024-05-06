"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const exceptions_1 = require("./common/exceptions");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const mongoose_config_1 = require("./config/mongoose.config");
const category_module_1 = require("./modules/category/category.module");
const order_module_1 = require("./modules/order/order.module");
const config_2 = __importDefault(require("./config"));
const seed_module_1 = require("./modules/seeder/seed.module");
const brand_module_1 = require("./modules/brand/brand.module");
const file_module_1 = require("./modules/file/file.module");
const cloudinary_module_1 = require("./modules/cloudinary/cloudinary.module");
const product_module_1 = require("./modules/product/product.module");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.NODE_ENV ? `${process.cwd()}/.env.${process.env.NODE_ENV}` : '.env',
                isGlobal: true,
                load: config_2.default,
            }),
            mongoose_1.MongooseModule.forRootAsync(mongoose_config_1.mongooseConfig),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
            seed_module_1.SeedModule,
            brand_module_1.BrandModule,
            file_module_1.FileModule,
            cloudinary_module_1.CloudinaryModule,
            product_module_1.ProductModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: exceptions_1.AllExceptionFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map