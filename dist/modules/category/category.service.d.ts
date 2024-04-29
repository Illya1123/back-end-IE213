import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';
import { BrandService } from '../brand/brand.service';
import { CategoryResponseDto } from './dto/category-response.dto';
export declare class CategoryService {
    private categoryModel;
    private brandService;
    constructor(categoryModel: Model<CategoryDocument>, brandService: BrandService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
    getCategoryBySlugOrId(identifier: string | number): Promise<CategoryResponseDto>;
    deleteAll(): Promise<void>;
}
