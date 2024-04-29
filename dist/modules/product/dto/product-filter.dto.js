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
exports.ProductFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const is_lower_kebab_case_validation_1 = require("../../../validations/is-lower-kebab-case.validation");
class ProductFilter {
}
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 1, minimum: 1 }),
    __metadata("design:type", Number)
], ProductFilter.prototype, "currentPage", void 0);
__decorate([
    (0, class_validator_1.Max)(20),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ type: Number, default: 20, maximum: 20 }),
    __metadata("design:type", Number)
], ProductFilter.prototype, "perPage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.split(',') : value)),
    (0, is_lower_kebab_case_validation_1.IsLowerCaseKebabCase)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    __metadata("design:type", Array)
], ProductFilter.prototype, "brands", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, is_lower_kebab_case_validation_1.IsLowerCaseKebabCase)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    __metadata("design:type", String)
], ProductFilter.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ type: Number, minimum: 0 }),
    __metadata("design:type", Number)
], ProductFilter.prototype, "minPrice", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiPropertyOptional)({ type: Number, minimum: 0 }),
    __metadata("design:type", Number)
], ProductFilter.prototype, "maxPrice", void 0);
exports.ProductFilter = ProductFilter;
//# sourceMappingURL=product-filter.dto.js.map