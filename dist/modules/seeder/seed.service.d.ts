import { CategorySeeder } from './category.seed';
import { BrandSeeder } from './brand.seed';
import { ProductSeeder } from './product.seed';
import { UserService } from '../user/user.service';
export declare class SeedService {
    private readonly brandSeeder;
    private readonly categorySeeder;
    private readonly productSeeder;
    private readonly userService;
    constructor(brandSeeder: BrandSeeder, categorySeeder: CategorySeeder, productSeeder: ProductSeeder, userService: UserService);
    seed(): Promise<any>;
    shouldSeed(): Promise<boolean>;
}
