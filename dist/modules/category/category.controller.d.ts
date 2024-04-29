import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './schemas/category.schema';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<Category[]>;
    getCategoryBySlugOrId(identifier: string): Promise<Category>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
