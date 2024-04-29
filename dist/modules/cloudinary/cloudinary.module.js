"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CloudinaryModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryModule = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("./cloudinary.service");
const cloudinary_1 = require("cloudinary");
const cloudinary_constant_1 = require("./cloudinary.constant");
let CloudinaryModule = CloudinaryModule_1 = class CloudinaryModule {
    static register(options) {
        const providers = this.createProviders(options);
        return {
            providers,
            module: CloudinaryModule_1,
            exports: providers,
        };
    }
    static registerAsync(options) {
        return {
            module: CloudinaryModule_1,
            imports: options.imports || [],
            providers: [
                ...this.createAsyncProviders(options),
                {
                    provide: cloudinary_constant_1.CLOUDINARY,
                    useFactory: (configOptions) => {
                        cloudinary_1.v2.config(configOptions);
                        return cloudinary_1.v2;
                    },
                    inject: [cloudinary_constant_1.CLOUDINARY_MODULE_OPTIONS],
                },
                cloudinary_service_1.CloudinaryService,
            ],
            exports: [cloudinary_constant_1.CLOUDINARY_MODULE_OPTIONS, cloudinary_constant_1.CLOUDINARY, cloudinary_service_1.CloudinaryService],
        };
    }
    static createAsyncProviders(options) {
        if (options.useClass) {
            return [
                this.createAsyncOptionsProvider(options),
                {
                    provide: cloudinary_constant_1.CLOUDINARY_MODULE_OPTIONS,
                    useClass: options.useClass,
                },
            ];
        }
        return [this.createAsyncOptionsProvider(options)];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: cloudinary_constant_1.CLOUDINARY_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: cloudinary_constant_1.CLOUDINARY_MODULE_OPTIONS,
            async useFactory(optionsFactory) {
                return optionsFactory.createCloudinaryOptions();
            },
            inject: [options.useClass],
        };
    }
    static createProviders(options) {
        return [
            {
                provide: cloudinary_constant_1.CLOUDINARY,
                useValue: options,
            },
            cloudinary_service_1.CloudinaryService,
        ];
    }
};
CloudinaryModule = CloudinaryModule_1 = __decorate([
    (0, common_1.Module)({})
], CloudinaryModule);
exports.CloudinaryModule = CloudinaryModule;
//# sourceMappingURL=cloudinary.module.js.map