import { BrandService } from './brand.service';
import { Brand } from './schemas/brand.schema';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    getAllBrands(): Promise<Brand[]>;
    getBrandBySlugOrId(identifier: string): Promise<Brand>;
    createBrand(creatBrandDto: CreateBrandDto): Promise<Brand>;
    getDetailBrandBySlug(slug: string): Promise<any>;
}
