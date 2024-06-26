"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const file_controller_1 = require("./file.controller");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
const cloudinary_config_1 = require("../../config/cloudinary.config");
let FileModule = class FileModule {
};
FileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cloudinary_module_1.CloudinaryModule.registerAsync({
                useFactory: (cloudinaryConfig) => ({
                    cloud_name: cloudinaryConfig.cloudName,
                    api_key: cloudinaryConfig.apiKey,
                    api_secret: cloudinaryConfig.apiSecret,
                }),
                inject: [cloudinary_config_1.CloudinaryConfig.KEY],
            }),
        ],
        controllers: [file_controller_1.FileController],
        providers: [file_service_1.FileService],
    })
], FileModule);
exports.FileModule = FileModule;
//# sourceMappingURL=file.module.js.map