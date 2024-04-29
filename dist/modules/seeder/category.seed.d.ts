import { CategoryService } from '../category/category.service';
export declare class CategorySeeder {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
