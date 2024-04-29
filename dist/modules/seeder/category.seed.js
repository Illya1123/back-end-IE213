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
exports.CategorySeeder = void 0;
const fs = __importStar(require("fs"));
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const category_service_1 = require("../category/category.service");
const path = __importStar(require("path"));
const process = __importStar(require("process"));
let CategorySeeder = class CategorySeeder {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async seed() {
        console.log('Seeding categories ...');
        const jsonString = fs.readFileSync(path.join(process.cwd(), 'data/category.json'), 'utf8');
        const jsonData = JSON.parse(jsonString);
        const categories = jsonData.map(json => {
            const category = {
                id: json.id,
                description: json.description,
                icon: json.icon,
                name: json.name,
                sharedUrl: json.shared_url,
                slug: json.slug,
                thumbnail: json.thumbnail,
            };
            return this.categoryService.createCategory(category);
        });
        console.log('Seeding categories successfully!!');
        return Promise.all(categories);
    }
    async drop() {
        console.log('Dropping categories ...');
        await this.categoryService.deleteAll();
        console.log('Dropping categories successfully!!');
    }
};
__decorate([
    (0, nestjs_command_1.Command)({ command: 'seed:categories', describe: 'create categories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorySeeder.prototype, "seed", null);
__decorate([
    (0, nestjs_command_1.Command)({ command: 'drop:categories', describe: 'drop categories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorySeeder.prototype, "drop", null);
CategorySeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategorySeeder);
exports.CategorySeeder = CategorySeeder;
//# sourceMappingURL=category.seed.js.map