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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const is_lower_kebab_case_validation_1 = require("../../../validations/is-lower-kebab-case.validation");
const class_transformer_1 = require("class-transformer");
const create_color_dto_1 = require("./create-color.dto");
class CreateProductDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "skuId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, is_lower_kebab_case_validation_1.IsLowerCaseKebabCase)(),
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sharedUrl", void 0);
__decorate([
    (0, is_lower_kebab_case_validation_1.IsLowerCaseKebabCase)(),
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, type: Number }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "brandId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => create_color_dto_1.CreateColorDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)({ required: false, type: [create_color_dto_1.CreateColorDto] }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ required: false, type: [String] }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "modelValues", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map