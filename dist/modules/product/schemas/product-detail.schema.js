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
exports.ProductDetailSchema = exports.ProductDetail = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./product.schema");
let ProductDetail = class ProductDetail {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductDetail.prototype, "SKU", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ src: { type: String }, type: { type: String } }], _id: false }),
    __metadata("design:type", Array)
], ProductDetail.prototype, "assets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ label: String, name: String, options: [{ name: String }] }], _id: false }),
    __metadata("design:type", Array)
], ProductDetail.prototype, "variations", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: product_schema_1.ProductSchema }),
    __metadata("design:type", product_schema_1.Product)
], ProductDetail.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                items: [{ label: String, value: String, article: String }],
                groupName: String,
            },
        ],
        _id: false,
    }),
    __metadata("design:type", Array)
], ProductDetail.prototype, "attributes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { title: String, description: String, content: String },
        _id: false,
    }),
    __metadata("design:type", Object)
], ProductDetail.prototype, "article", void 0);
ProductDetail = __decorate([
    (0, mongoose_1.Schema)({ collection: 'product_details' })
], ProductDetail);
exports.ProductDetail = ProductDetail;
exports.ProductDetailSchema = mongoose_1.SchemaFactory.createForClass(ProductDetail);
//# sourceMappingURL=product-detail.schema.js.map