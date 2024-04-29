import { BrandService } from '../brand/brand.service';
export declare class BrandSeeder {
    private readonly brandService;
    constructor(brandService: BrandService);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
