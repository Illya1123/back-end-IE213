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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cart_service_1 = require("./cart.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
let CartController = class CartController {
    cartService;
    constructor(cartService) {
        this.cartService = cartService;
    }
    create(createCartDto) {
        return this.cartService.create(createCartDto);
    }
    async getCartByUserId(userId) {
        return this.cartService.findByUserId(userId);
    }
    async getCartByUserIdAndProductId(userId, productId) {
        return this.cartService.findByUserIdAndProductId(userId, productId);
    }
    async getAllCarts() {
        return this.cartService.getAllCarts();
    }
    async deleteCartByUserIdAndProductId(userId, productId) {
        const result = await this.cartService.deleteByUserIdAndProductId(userId, productId);
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Cart with userId ${userId} and productId ${productId} not found.`);
        }
        return { message: 'Cart item deleted successfully.' };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCartByUserId", null);
__decorate([
    (0, common_1.Get)(':userId/:productId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCartByUserIdAndProductId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getAllCarts", null);
__decorate([
    (0, common_1.Delete)(':userId/:productId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCartByUserIdAndProductId", null);
CartController = __decorate([
    (0, swagger_1.ApiTags)('carts'),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map