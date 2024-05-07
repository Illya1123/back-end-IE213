"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSeeder = void 0;
const fs = __importStar(require("fs"));
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const path = __importStar(require("path"));
const brand_service_1 = require("../brand/brand.service");
let BrandSeeder = class BrandSeeder {
    brandService;
    constructor(brandService) {
        this.brandService = brandService;
    }
    async seed() {
        console.log('Seeding brands ...');
        const jsonString = fs.readFileSync(path.join(process.cwd(), 'data/brand.json'), 'utf8');
        const jsonData = JSON.parse(jsonString);
        const brands = jsonData.map(json => {
            const brand = {
                id: json.id,
                description: json.description,
                icon: json.icon,
                name: json.name,
                sharedUrl: json.shared_url,
                slug: json.slug,
                parentId: json.parent_id ?? null,
            };
            return this.brandService.createBrand(brand);
        });
        console.log('Seeding brands successfully!!');
        return Promise.all(brands);
    }
    async drop() {
        console.log('Dropping brands ...');
        await this.brandService.deleteAll();
        console.log('Dropping brands successfully!!');
    }
};
__decorate([
    (0, nestjs_command_1.Command)({ command: 'seed:brands', describe: 'create brands' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandSeeder.prototype, "seed", null);
__decorate([
    (0, nestjs_command_1.Command)({ command: 'drop:brands', describe: 'drop brands' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandSeeder.prototype, "drop", null);
BrandSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandSeeder);
exports.BrandSeeder = BrandSeeder;
//# sourceMappingURL=brand.seed.js.map